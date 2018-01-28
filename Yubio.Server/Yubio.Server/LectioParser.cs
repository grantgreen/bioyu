using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
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
            var reponse = GetResponse("https://www.lectio.dk/lectio/login_list.aspx");
            var split = reponse.Split(new string[] { @"<div class=""buttonHeader textLeft "">" },
                StringSplitOptions.RemoveEmptyEntries);
            var regex = new Regex(@"s*/lectio/(\d+)/default.aspx'>");


            var schools = new List<School>();
            for (int i = 1; i < split.Length; i++)
            {
                var m = regex.Match(split[i]);
                var rest = split[i].Replace(m.Groups[0].Value, "");
                var school = rest.Replace("<a href=", "").Replace("</a></div>", "").TrimEnd(new char[] { '\r', '\n' }).Trim(new char[] { '\'' });
                schools.Add(new School(int.Parse(m.Groups[1].Value), school));
            }
            foreach (var school in schools)
            {
                Console.Write($"Parsing {school.Name}...");
                var teams = GetTeam(school);

                foreach (var team in teams)
                {
                    var response = GetResponse($"https://www.lectio.dk{team.Url}");
                    var teamSplit = response.Split(new string[] { "m_Content_listecontainer" }, StringSplitOptions.RemoveEmptyEntries).Last();

                    var subHold = teamSplit.Split(new string[] { "<li>" }, StringSplitOptions.RemoveEmptyEntries);
                    var r = new Regex(@"holdelementid=([0-9]+)'>(.*)</a>");
                    for (int i = 1; i < subHold.Length; i++)
                    {
                        var id = long.Parse(r.Match(subHold[i]).Groups[1].Value);
                        var name = r.Match(subHold[i]).Groups[2].Value;
                        response = GetResponse($"https://www.lectio.dk/lectio/{school.Id}/studieplan/hold_undervisningsbeskrivelse.aspx?holdelementid={id}");
                        var hasYubio = HasYubio(response);
                        school.Classes.Add(new Class(name, hasYubio, $"https://www.lectio.dk/lectio/{school.Id}/studieplan/hold_undervisningsbeskrivelse.aspx?holdelementid={id}"));
                    }

                    school.FetchYubioClasses();
                }
                var hadYubio = school.Classes.Any(c => c.HasYubio);
                Console.Write($"{hadYubio}\n");
                Thread.Sleep(1000);
            }
            return (List<School>)schools.Where(s => s.Classes.Any(c => c.HasYubio)).ToList();
        }

        private static bool HasYubio(string response)
        {
            return response.IndexOf("yubio", StringComparison.InvariantCultureIgnoreCase) > -1 || response.IndexOf("youbio", StringComparison.InvariantCultureIgnoreCase) > -1;
        }

        private static List<Team> GetTeam(School school)
        {

            var teams = new List<Team>();
            var reponse = GetResponse($"https://www.lectio.dk/lectio/{school.Id}/FindSkema.aspx?type=hold");
            var h = reponse.Split(new[] { @"m_Content_listecontainer" }, StringSplitOptions.RemoveEmptyEntries).Last();
            var hold = h.Split(new string[] { "<li>" }, StringSplitOptions.RemoveEmptyEntries);

            var regex = new Regex(@"<span class='findskema-symbol'>(\w+)</span>");
            for (int i = 1; i < hold.Length; i++)
            {
                var fag = regex.Match(hold[i]).Groups[1].Value;
                if (fag != "BI" && fag != "ID") continue;
                var r = new Regex(@"<a\s+(?:[^>]*?\s+)?href=([""'])(.*?)\1>");
                var m = r.Match(hold[i]);
                var url = m.Value.Replace("<a  href='", "").Replace("'>", "");
                teams.Add(new Team(url, fag));
            }

            return teams;
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