using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Threading;

namespace Yubio.Server
{
    class LectioScheduler : IDisposable
    {
        private readonly Timer timer;

        public LectioScheduler()
        {
            this.timer = new Timer(delegate (object state)
            {
                Console.WriteLine("Starting parsing");
                try
                {
                    var schools = LectioParser.GetSchools();
                    Console.WriteLine($"Detected {schools.Count} schools using yubio");
                    if (File.Exists("out.html")) { File.Delete("out.html"); }
                    HtmlSerializer.Serialize(schools, File.CreateText("out.html"));
                    File.Copy("out.html","../client/views/lectio.html",true);
                    Console.WriteLine("Parsing done");
                }
                catch (Exception e)
                {
                    Console.WriteLine($"Error parsing lectio. Error was {e.Message}. Stack trace {e.StackTrace}");
                }
            }, null, TimeSpan.FromMinutes(1), TimeSpan.FromDays(30));
        }

        public void Dispose()
        {
            this.timer.Dispose();
        }
    }

    class HtmlSerializer
    {
        public static void Serialize(List<LectioParser.School> schools, TextWriter writer)
        {
            writer.WriteLine(@"<!DOCTYPE html>");
            writer.WriteLine(@"<html lang=""en"">");
            writer.WriteLine(@"<head>");
            writer.WriteLine("<title>Lectio classes</title>");
            writer.WriteLine(@"<meta charset=""UTF-8"">");
            writer.WriteLine(@"<meta name=""viewport"" content=""width=device-width, initial-scale=1"">");
            writer.WriteLine(@"<link rel=""icon"" type=""image/png"" href=""/images/icons/favicon.ico""/>");
            writer.WriteLine(@"<link rel=""stylesheet"" type=""text/css"" href = ""../lectio/vendor/bootstrap/css/bootstrap.min.css"" > ");
            writer.WriteLine(@"<link rel=""stylesheet"" type=""text/css"" href=""../lectio/fonts/font-awesome-4.7.0/css/font-awesome.min.css"">");
            writer.WriteLine(@"<link rel=""stylesheet"" type=""text/css"" href=""../lectio/vendor/animate/animate.css"">");
            writer.WriteLine(@"<link rel=""stylesheet"" type=""text/css"" href=""../lectio/vendor/select2/select2.min.css"">");
            writer.WriteLine(@"<link rel=""stylesheet"" type=""text/css"" href=""../lectio/vendor/perfect-scrollbar/perfect-scrollbar.css"">");
            writer.WriteLine(@"<link rel=""stylesheet"" type=""text/css"" href=""../lectio/css/util.css"">");
            writer.WriteLine(@"<link rel=""stylesheet"" type=""text/css"" href=""../lectio/css/main.css"">");
            writer.WriteLine(@"</head>");

            writer.WriteLine($"<p>Created {DateTime.Now}</p>");
            writer.WriteLine(@"<div class=""limiter"">");
            writer.WriteLine(@"<div class=""container-table100"">");
            writer.WriteLine(@"<div class=""wrap-table100"">");
            writer.WriteLine(@"<div class=""table100 ver1 m-b-110"">");
            writer.WriteLine(@"<div class=""table100-head"">");
            writer.WriteLine(@"<table>");
            writer.WriteLine(@"<thead>");
            writer.WriteLine(@"<tr class=""row100 head"">");
            writer.WriteLine(@"<th class=""cell100 column1"">School</th>");
            writer.WriteLine(@"<th class=""cell100 column2"">Classes using Yubio</th>");
            writer.WriteLine(@"</tr>");
            writer.WriteLine(@"</thead>");
            writer.WriteLine(@"</table>");
            writer.WriteLine(@"</div>");

            writer.WriteLine(@"<div class=""table100-body js-pscroll"">");
            writer.WriteLine("<table>");
            writer.WriteLine("<tbody>");

            foreach (var school in schools)
            {
                writer.WriteLine(@"<tr class=""row100 body"">");
                writer.WriteLine($@"<td class=""cell100 column1"">{school.Name}</td>");
                writer.WriteLine($@"<td class=""cell100 column2"">{school.YubioClasses}</td>");
                writer.WriteLine(@"</tr>");
            }

            writer.WriteLine("</tbody>");
            writer.WriteLine("</table>");
            writer.WriteLine(@"</div>");
            writer.WriteLine(@"</div>");
            writer.WriteLine(@"</div>");
            writer.WriteLine(@"</div>");
            writer.WriteLine(@"</div>");

            writer.WriteLine(@"<script src=""../lectio/vendor/jquery/jquery-3.2.1.min.js""></script>");
            writer.WriteLine(@"<script src=""../lectio/vendor/bootstrap/js/popper.js""></script>");
            writer.WriteLine(@"<script src=""../lectio/vendor/bootstrap/js/bootstrap.min.js""></script>");
            writer.WriteLine(@"<script src=""../lectio/vendor/select2/select2.min.js""></script>");
            writer.WriteLine(@"<script src=""../lectio/vendor/perfect-scrollbar/perfect-scrollbar.min.js""></script>");
            writer.WriteLine("<script>");
            writer.WriteLine(@"$('.js-pscroll').each(function(){");
            writer.WriteLine("var ps = new PerfectScrollbar(this);");
            writer.WriteLine("			$(window).on('resize', function(){");
            writer.WriteLine("ps.update();");
            writer.WriteLine("})");
            writer.WriteLine();
            writer.WriteLine("});");
            writer.WriteLine("</script>");
            writer.WriteLine(@"<script src=""../lectio/js/main.js""></script>");
            writer.WriteLine("</body>");
            writer.WriteLine("</html");

            writer.Close();
            writer.Dispose();
        }
    }
}