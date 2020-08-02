using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using Nancy.Json;
using Newtonsoft.Json;

namespace Yubio.Server
{
    internal class LectioParser
    {
        public class School
        {
            public School(int id, string name)
            {
                Id = id;
                Name = name;
                Classes = new List<Class>();
            }

            public List<Class> Classes { get; set; }
            public int Id { get; private set; }
            public string Name { get; private set; }
            public string YubioClasses { get; set; }
            public string ToJson()
            {
                return JsonConvert.SerializeObject(this);
            }

            public void FetchYubioClasses()
            {
                var sb = new StringBuilder();
                foreach (var schoolClass in this.Classes)
                {
                    if (schoolClass.HasYubio)
                    {
                        sb.Append($"{schoolClass.Name}, ");
                    }
                }

                var s = sb.ToString();
                if (s.Length > 2) { this.YubioClasses = s.Remove(s.Length - 2); }
            }
        }

        public class Class
        {
            public Class(string name, bool hasYubio, string url)
            {
                Name = name;
                HasYubio = hasYubio;
                Url = url;
            }

            public string Name { get; private set; }
            public bool HasYubio { get; private set; }
            public string Url { get; private set; }
        }

        public class Team
        {
            public Team(string url, string name)
            {
                Url = url;
                Name = name;
            }

            public bool HasYubio { get; set; }
            public string Name { get; private set; }
            public string Url { get; private set; }
        }

        public static List<School> GetSchools()
        {
            var schools = ResolveSchools().ToList();
            foreach (var school in schools)
            {
                Console.Write($"Parsing {school.Name}...");
                var teams = GetTeam(school);

                foreach (var team in teams)
                {
                    if (team.Name.ToLower().Contains("id") || team.Name.ToLower().Contains("bi"))
                    {
                        var response = GetResponse($"https://www.lectio.dk{team.Url}");
                        var hasYubio = HasYubio(response);
                        school.Classes.Add(new Class(team.Name, hasYubio, $"https://www.lectio.dk{team.Url}"));

                        school.FetchYubioClasses();
                    }
                }
                var hadYubio = school.Classes.Any(c => c.HasYubio);
                Console.Write($"{hadYubio}\n");
                Thread.Sleep(1000);
            }
            return (List<School>)schools.Where(s => s.Classes.Any(c => c.HasYubio)).ToList();
        }

        private static IEnumerable<School> ResolveSchools()
        {
            var response = GetResponse("https://www.lectio.dk/lectio/login_list.aspx");
            var split = response.Split(new string[] { @"<div class=""buttonHeader textLeft "">" },
                StringSplitOptions.RemoveEmptyEntries);
            var regex = new Regex(@"s*/lectio/(\d+)/default.aspx'>");

            for (var i = 1; i < split.Length; i++)
            {
                var m = regex.Match(split[i]);
                var rest = split[i].Replace(m.Groups[0].Value, "");
                var school = rest.Replace("<a href=", "").Replace("</a></div>", "").TrimEnd(new char[] { '\r', '\n' })
                    .Trim(new char[] { '\'' });
                yield return new School(int.Parse(m.Groups[1].Value), school);
            }
        }

        private static readonly List<string> KeyWords = new List<string>()
        {
            "yubio","youbio","skadhede","Selchau","Lytzen","Meinicke"
        };
        private static bool HasYubio(string response)
        {
            foreach (var keyWord in KeyWords)
            {
                if (response.IndexOf(keyWord, StringComparison.InvariantCultureIgnoreCase) > -1)
                {
                    return true;
                }
            }

            return false;
        }

        private static IEnumerable<Team> GetTeam(School school)
        {
            var response = GetResponse($"https://www.lectio.dk/lectio/{school.Id}/studieplan/uvb_list_off.aspx");

            var b = new Regex($@"<div class='buttonlink'><a href=""/lectio/{school.Id}/studieplan/uvb_hold_off.aspx\?holdid=(?<holdid>[0-9]+)"" data-role=""button"" tabindex='0' id=""m_Content_gvhold_ctl[0-9]+_ctl[0-9]+"">(?<class>[A-Za-z0-9\s]+)</a></div>");
            foreach (Match match in b.Matches(response))
            {
                var holdId = match.Groups["holdid"].Value;
                var @class = match.Groups["class"].Value;
                yield return new Team($@"/lectio/{school.Id}/studieplan/uvb_hold_off.aspx\?holdid={holdId}", @class);
            }
        }
        private static string GetResponse(string url)
        {
            Thread.Sleep(100);

            for (int i = 0; i < 10; i++)
            {
                try
                {
                    var request = WebRequest.Create(url) as HttpWebRequest;
                    request.UserAgent =
                        "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.0.6) Gecko/20060728 Firefox/1.5";
                    request.CookieContainer = new CookieContainer();
                    request.Credentials = CredentialCache.DefaultCredentials;
                    request.Accept = "*/*";
                    var response = request.GetResponse();
                    var dataStream = response.GetResponseStream();
                    var reader = new StreamReader(dataStream);
                    return reader.ReadToEnd();
                }
                catch (WebException)
                {
                    Thread.Sleep(TimeSpan.FromMinutes(i + 1));
                }

            }

            throw new ApplicationException("Access Forbidden");
        }
    }
}