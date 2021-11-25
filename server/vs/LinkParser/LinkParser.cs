using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text.RegularExpressions;
using Common.Logging;
using Google.Apis.Services;
using Google.Apis.YouTube.v3;
using Nancy.Json.Simple;

namespace LinkParser
{
    internal class VideoLinksParser
    {
        public static IEnumerable<VideoLink> Parse(string fileName)
        {
            var lines = File.ReadAllLines(fileName);
            foreach (var line in lines)
            {
                var split = line.Split(new string[] { "," }, StringSplitOptions.None);
                if (split.Length != 3) { continue; }

                yield return new VideoLink(split[0], split[1], split[2]);
            }
        }
        public class VideoLink
        {
            public string Name { get; }
            public string YubioLink { get; }
            public string Url { get; }

            public VideoLink(string name, string yubioLink, string url)
            {
                Name = name;
                YubioLink = yubioLink;
                Url = url;
            }
        }
    }
    internal class LinkParser
    {
        private static ILog Logger = LogManager.GetLogger<LinkParser>();

        internal class Link
        {
            public string Book { get; set; }
            public string Url { get; set; }
            public string Caption { get; set; }
            public int Chapter { get; set; }
        }

        internal class JsonLink
        {
            public string caption { get; set; }
            public string link { get; set; }

        }
        private static readonly Regex UrlRegex = new Regex(@"(ht|f)tp(s?)\:\/\/[0-9a-åA-Å]([-.\w]*[0-9a-åA-Å])*(:(0-9)*)*(\/?)([a-åA-Å0-9\-\.\?\,\'\/\\\+&%\$#_]*)?", RegexOptions.Compiled | RegexOptions.IgnoreCase);


        public static IEnumerable<Link> ResolveDeadLinks(string url,string book, int chapter, bool onlyYoutube = false)
        {
            int NumberOfChapters = 30;

            //var url = string.Format($"http://yubio.dk/js/links_data/newlinks_{i}.js");
            var response = GetResponse(url);
            if (!string.IsNullOrEmpty(response))
            {
                var regeex = Regex.Matches(response, "{.*}");
                foreach (Match match in regeex)
                {
                    var f = SimpleJson.DeserializeObject<JsonLink>(match.Value);
                    if (string.IsNullOrEmpty(f.caption)) { continue; }

                    Logger.Debug($"Checking  {f.link}");
                    if (f.link.Contains("youtube"))
                    {
                        var valid = IsYouTubeValid(f.link);
                        if (!valid)
                        {
                            Logger.Debug($"Checking {f.link} FAILED");
                            yield return new Link()
                            {
                                Book = book,
                                Url = f.link,
                                Caption = f.caption,
                                Chapter = chapter
                            };
                        }
                        else
                        {
                            Logger.Debug($"Checking {f.link} OK");
                        }
                    }
                    else if (!onlyYoutube)
                    {
                        var valid = IsValidURL(f.link);
                        if (!valid)
                        {
                            Logger.Debug($"Checking {f.link} FAILED");
                            yield return new Link()
                            {
                                Book = book,
                                Url = f.link,
                                Caption = f.caption,
                                Chapter = chapter
                            };

                        }
                        else
                        {
                            Logger.Debug($"Checking {f.link} OK");
                        }
                    }

                }
            }
        }

        private static YoutubeVideoProxy youtubeVideoProxy;
        private static bool IsYouTubeValid(string url)
        {
            if (youtubeVideoProxy == null)
            { youtubeVideoProxy = new YoutubeVideoProxy(); }

            return youtubeVideoProxy.VideoOk(url);
        }
        private static bool IsValidURL(string url)
        {
            try
            {
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                HttpWebRequest request = WebRequest.Create(url) as HttpWebRequest;
                request.Method = "HEAD";
                request.Timeout = 5000;
                HttpWebResponse response = request.GetResponse() as HttpWebResponse;
                return (response?.StatusCode == System.Net.HttpStatusCode.OK);
            }
            catch (Exception exception)
            {
                Logger.Error($"Error checking {url}", exception);
                return false;
            }
        }
        public static string GetResponse(string url)
        {
            try
            {
                var request = WebRequest.Create(url) as HttpWebRequest;
                request.UserAgent =
                    "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.0.6) Gecko/20060728 Firefox/1.5";
                request.CookieContainer = new CookieContainer();
                request.Credentials = CredentialCache.DefaultCredentials;
                request.Accept = "*/*";

                var webReponse = request.GetResponse();
                var dataStream = webReponse.GetResponseStream();
                var reader = new StreamReader(dataStream);
                return reader.ReadToEnd();
            }
            catch (Exception exception)
            {
                Logger.Error($"Error getting response for {url}", exception);
                return null;
            }
        }
    }

    class YoutubeVideoProxy
    {
        private static readonly ILog Logger = LogManager.GetLogger<YoutubeVideoProxy>();
        private YouTubeService service;
        private static Regex regex = new Regex(@"(.+?)v=(?<id>([a-zA-Z0-9_-]{11})+)");
        public YoutubeVideoProxy()
        {

        }

        public bool VideoOk(string url)
        {
            GuardServiceIsCreated();
            try
            {
                var match = regex.Match(url);
                var list = service.Videos.List("status");
                list.Id = match.Groups["id"].Value;
                var found = list.Execute();
                return found.Items[0].Status.UploadStatus == "processed"; ;
            }
            catch (Exception exception)
            {
                Logger.Error($"Error checking {url}", exception);
                return false;
            }
        }

        private void GuardServiceIsCreated()
        {
            if (this.service == null)
            {
                this.service = new YouTubeService(new BaseClientService.Initializer
                {
                    ApplicationName = "Discovery Sample",
                    ApiKey = "AIzaSyD0P4Jb6LJlollTTfJFHApb6w944i9vm1Y",
                });
            }

            //var test = new SheetsService(new BaseClientService.Initializer
            //{
            //    ApplicationName = "Discovery Sample",
            //    ApiKey = "AIzaSyD0P4Jb6LJlollTTfJFHApb6w944i9vm1Y",
            //});
            //var sh = test.Spreadsheets.Get("1q4LzVqGjCxtSTQ1Ts9vRaoKPG43PGedW0O3xA_lJyBo").Execute();
        }
    }
}