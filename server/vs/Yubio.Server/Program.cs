using System;
using System.Dynamic;
using System.Linq;
using System.Net;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Common.Logging;
using MongoDB.Bson.IO;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Attributes;
using Mono.Unix;
using Mono.Unix.Native;
using Nancy.Hosting.Self;
using Nancy.Json;
using Newtonsoft.Json;
using Newtonsoft.Json.Bson;

namespace Yubio.Server
{
    class Program
    {
        private static readonly ILog Logger = LogManager.GetLogger("Server");

        static void Main(string[] args)
        {
            try
            {
                AppDomain.CurrentDomain.UnhandledException += CurrentDomain_UnhandledException;
                Logger.Info("Starting server");
                var host = new NancyHost(new Uri("http://localhost:10001"));
                host.Start();  // start hosting

                if (Type.GetType("Mono.Runtime") != null)
                {
                    // on mono, processes will usually run as daemons - this allows you to listen
                    // for termination signals (ctrl+c, shutdown, etc) and finalize correctly
                    var waited = UnixSignal.WaitAny(new[]
                    {
                        new UnixSignal(Signum.SIGINT),
                        new UnixSignal(Signum.SIGTERM),
                        new UnixSignal(Signum.SIGQUIT),
                        new UnixSignal(Signum.SIGHUP)
                    });

                    Logger.Info($"Got signaled {waited}. Stopping server");
                }
                else
                {
                    Console.ReadLine();
                    Logger.Info("Stopping server");
                }

                host.Stop(); // stop hosting
            }
            catch (Exception exception)
            {
                Logger.Error("Error running server", exception);
            }
            //scheduler.Dispose();
        }

        private static void CurrentDomain_UnhandledException(object sender, UnhandledExceptionEventArgs e)
        {
            var exception = e.ExceptionObject as Exception;
            Logger.Error($"Got unhandled exception. Stack {exception.StackTrace}, Source {exception.Source}, sender {sender}", exception);
        }
    }

    /*
     * { "_id" : ObjectId("5eab11a39b924b3025be17f5"), "documents" : [{ "_id" : ObjectId("5d92f0e64d72ae4e8f179e4b"), "chapters" : ["3.1"], "text" : "Hvor længe skal restitutionsperioden være?", "answers" : ["Det varierer fra person til person afhængigt af ens form og træningens hårdhed", "Man skal altid holde pause i mindst 48 timer mellem to træninger", "Man behøver ikke holde pause overhovedet", "Pausen bør altid være 1 døgn mellem to træninger"], "type" : "multiple_text", "correct_answer" : "0" }, { "_id" : ObjectId("5d92f0e64d72ae4e8f179e55"), "chapters" : ["3.3"], "text" : "Hvilken effekt skyldes opvarmning?", "answers" : ["Psykisk parathed", "Konstant puls", "Nedsat præstationsevne", "Makspulsen øges"], "type" : "multiple_text", "correct_answer" : "0" }, { "_id" : ObjectId("5d92f0e64d72ae4e8f179e57"), "chapters" : ["3.4"], "text" : "Hvilken har ikke noget med kondition at gøre?", "answers" : ["Hjernen", "Åndedrætssystemet", "Blodkredsløbet", "Musklerne"], "type" : "multiple_text", "correct_answer" : "0" }, { "_id" : ObjectId("5d92f0e64d72ae4e8f179e58"), "chapters" : ["3.4"], "text" : "Hvad måles konditallet i?", "answers" : ["Milliliter ilt pr. min pr. kg", "Liter ilt pr. min", "Milliliter ilt pr. time pr. g", "Liter ilt pr. time"], "type" : "multiple_text", "correct_answer" : "0" }, { "_id" : ObjectId("5d92f0e64d72ae4e8f179e5c"), "chapters" : ["3.4"], "text" : "Kvinders maksimale iltoptagelse er?", "answers" : ["Ca. 75 % af mænds", "Ca. 50 % af mænds", "Ca. det dobbelte af mænds", "Den samme som mænds"], "type" : "multiple_text", "correct_answer" : "0" }, { "_id" : ObjectId("5d92f0e64d72ae4e8f179e60"), "chapters" : ["3.4"], "text" : "Hvilket kondital er middel for en pige på 17 år?", "answers" : ["40", "30", "50", "60"], "type" : "multiple_text", "correct_answer" : "0" }, { "_id" : ObjectId("5d92f0e64d72ae4e8f179e61"), "chapters" : ["3.4"], "text" : "Hvilket kondital er middel for en dreng på 17 år?", "answers" : ["50", "40", "30", "60"], "type" : "multiple_text", "correct_answer" : "0" }, { "_id" : ObjectId("5d92f0e64d72ae4e8f179e63"), "chapters" : ["3.4"], "text" : "Hvilket kondital er meget højt for en dreng på 17 år?", "answers" : ["65", "55", "45", "35"], "type" : "multiple_text", "correct_answer" : "0" }, { "_id" : ObjectId("5d92f0e64d72ae4e8f179e6e"), "chapters" : ["3.4"], "text" : "Hvilken effekt får man ikke af intervaltræning?", "answers" : ["Øget maksimalpuls", "Mindsket hvilepuls", "Øget slagvolumen", "Mere hæmoglobin"], "type" : "multiple_text", "correct_answer" : "0" }, { "_id" : ObjectId("5d92f0e64d72ae4e8f179e71"), "chapters" : ["3.4"], "text" : "Hvordan træner man anaerob effekt?", "answers" : ["Maksimal intensitet i kort interval og med relativt lange pauser", "Høj intensitet i længere interval og med korte pauser", "Lav intensitet i lange intervaller og med korte pauser", "Lav intensitet i korte intervaller og med lange pauser"], "type" : "multiple_text", "correct_answer" : "0" }], "chapters" : "3", "type" : null, "expires" : -1, "createdDate" : 1588269475358.0, "scores" : [] }

      */


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