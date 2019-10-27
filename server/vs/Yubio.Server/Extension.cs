using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mime;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Yubio.Server
{
    public static class Extension
    {
        public static string GetResponse(this string url)
        {

            ServicePointManager.ServerCertificateValidationCallback += (sender, certificate, chain, errors) => true;
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
                catch (WebException e)
                {
                    Console.WriteLine("Exception, waiting....{0}", e.Message);
                    Thread.Sleep(TimeSpan.FromMinutes(i + 1));
                }

            }

            throw new ApplicationException("Access Forbidden");
        }
    }

    internal class LudusWeb
    {
        private HttpWebResponse webResponse;
        public string Init(string url)
        {
            var request = WebRequest.Create(url) as HttpWebRequest;
            request.UserAgent =
                "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.0.6) Gecko/20060728 Firefox/1.5";
            request.CookieContainer = new CookieContainer();
            Uri target = new Uri("https://ludusweb.vuc-vs.dk");
            request.CookieContainer.Add(new Cookie("funktion", "") { Domain = target.Host });
            request.CookieContainer.Add(new Cookie("funktion_vaadin", "Undervisningsbeskrivelse") { Domain = target.Host });
            request.CookieContainer.Add(new Cookie("visIndstillinger", "false") { Domain = target.Host });
            request.Credentials = CredentialCache.DefaultCredentials;
            request.Method = "GET";
            request.Accept = "*/*";
            this.webResponse = (HttpWebResponse)request.GetResponse();
            var dataStream = webResponse.GetResponseStream();
            var reader = new StreamReader(dataStream);
            return reader.ReadToEnd();
        }

        public string Get(string url)
        {
            var request = WebRequest.Create(url) as HttpWebRequest;
            request.UserAgent =
                "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.0.6) Gecko/20060728 Firefox/1.5";
            request.CookieContainer = new CookieContainer();
            request.CookieContainer.Add(this.webResponse.Cookies);
            request.Credentials = CredentialCache.DefaultCredentials;
            Uri target = new Uri("https://ludusweb.vuc-vs.dk");
            request.CookieContainer.Add(new Cookie("funktion", "") { Domain = target.Host });
            request.CookieContainer.Add(new Cookie("funktion_vaadin", "Undervisningsbeskrivelse") { Domain = target.Host });
            request.CookieContainer.Add(new Cookie("visIndstillinger", "false") { Domain = target.Host });
            request.Method = "GET";
            request.Accept = "*/*";
            var response = (HttpWebResponse)request.GetResponse();
            var dataStream = response.GetResponseStream();
            var reader = new StreamReader(dataStream);
            return reader.ReadToEnd();
        }
        public string Post(string url, string payload)
        {
            try
            {
                var request = WebRequest.Create(url) as HttpWebRequest;
                request.UserAgent =
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36";
                request.CookieContainer = new CookieContainer();
                //request.Credentials = CredentialCache.DefaultCredentials;
                request.ContentType = "text/xml;charset=utf-8";
                request.Method = "POST";
                request.Accept = "*/*";
                request.KeepAlive = true;
                request.Referer = "https://ludusweb.vuc-vs.dk";
                request.ServicePoint.Expect100Continue = false;
                Uri target = new Uri("https://ludusweb.vuc-vs.dk");
                request.CookieContainer.Add(new Cookie("funktion", "\"\"") { Domain = target.Host });

                request.CookieContainer.Add(this.webResponse.Cookies[0]);

                request.CookieContainer.Add(new Cookie("funktion_vaadin", "Undervisningsbeskrivelse") { Domain = target.Host });
                request.CookieContainer.Add(new Cookie("visIndstillinger", "false") { Domain = target.Host });
                var bytes = Encoding.UTF8.GetBytes(payload);
                request.ContentLength = bytes.Length;
                var stream = request.GetRequestStream();
                stream.Write(bytes, 0, bytes.Length);
                stream.Close();
                var response = request.GetResponse();
                var dataStream = response.GetResponseStream();
                var reader = new StreamReader(dataStream);
                return reader.ReadToEnd();
            }
            catch (Exception exception)
            {

                return string.Empty;
            }
        }
    }
}
