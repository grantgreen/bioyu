using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkParser
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = ParseA();
            var b = ParseB();
            var c = ParseC();
            using (var fs = File.CreateText("out.txt"))
            {
                foreach (var s in a)
                {
                    fs.WriteLine(s);
                    fs.Flush();
                }

                foreach (var s in b)
                {
                    fs.WriteLine(s);
                    fs.Flush();
                }

                foreach (var s in c)
                {
                    fs.WriteLine(s);
                    fs.Flush();
                }
            }
        }

        private static IEnumerable<string> ParseB()
        {
            for (int i = 0; i < 15; i++)
            {
                var bUrl = string.Format($"http://yubio.dk/js/b/links_data/links_{i}.js");
                foreach (var link in LinkParser.ResolveDeadLinks(bUrl, "b", i))
                {
                    yield return ($"{link.Book} {link.Chapter} {link.Caption} {link.Url}");
                }
            }
        }
        private static IEnumerable<string> ParseC()
        {
            for (int i = 0; i < 10; i++)
            {
                var bUrl = string.Format($"http://yubio.dk/js/c/links_data/links_{i}.js");
                foreach (var link in LinkParser.ResolveDeadLinks(bUrl, "c", i))
                {
                    yield return ($"{link.Book} {link.Chapter} {link.Caption} {link.Url}");
                }
            }
        }
        private static IEnumerable<string> ParseA()
        {
            for (int i = 0; i < 30; i++)
            {
                var bUrl = string.Format($"http://yubio.dk/js/links_data/newlinks_{i}.js");
                foreach (var link in LinkParser.ResolveDeadLinks(bUrl, "a", i))
                {
                    yield return ($"{link.Book} {link.Chapter} {link.Caption} {link.Url}");
                }
            }
        }
    }
}
