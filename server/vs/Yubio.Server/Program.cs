using System;
using System.Net;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using Mono.Unix;
using Mono.Unix.Native;
using Nancy;
using Nancy.Hosting.Self;
using Nancy.Json;
using Newtonsoft.Json;

namespace Yubio.Server
{
    class Program
    {
        static void Main(string[] args)
        {
            foreach (var l in VideoLinksParser.Parse(@"assets/Videoer og URL.csv"))
            {
                Console.WriteLine($"{l.Name}, {l.YubioLink}, {l.Url}");
            }
            //var uri = "http://localhost:10001";

            //ServicePointManager.ServerCertificateValidationCallback += (o, certificate, chain, errors) => true;
            //var scheduler = new LectioScheduler();

            //if (Type.GetType("Mono.Runtime") != null)
            //{
            //    // on mono, processes will usually run as daemons - this allows you to listen
            //    // for termination signals (ctrl+c, shutdown, etc) and finalize correctly
            //    UnixSignal.WaitAny(new[]
            //    {
            //        new UnixSignal(Signum.SIGINT),
            //        new UnixSignal(Signum.SIGTERM),
            //        new UnixSignal(Signum.SIGQUIT),
            //        new UnixSignal(Signum.SIGHUP)
            //    });
            //}
            //else
            //{
            //    Console.ReadLine();
            //}

            //Console.WriteLine("Stopping Nancy");
            //// host.Stop(); // stop hosting
            //scheduler.Dispose();
        }


    }

    //public class LectioModule : NancyModule
    //{
    //    public LectioModule()
    //    {
    //        this.EnableCors();
    //        Get("/", args => { return "LECTIO"; });

    //        Get("/classes", args =>
    //        {
    //            return "SCHOOLS";
    //        });
    //    }
    //}


    //public static class NancyExtensions
    //{
    //    public static void EnableCors(this NancyModule module)
    //    {
    //        module.After.AddItemToEndOfPipeline(x =>
    //        {
    //            x.Response.WithHeader("Access-Control-Allow-Origin", "*");
    //        });
    //    }
    //}
}