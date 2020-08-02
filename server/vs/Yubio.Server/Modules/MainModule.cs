using System;
using MongoDB.Driver;
using Nancy;

namespace Yubio.Server.Modules
{
    public class MainModule : NancyModule
    {

        public MainModule()
        {
            Get("/", delegate (dynamic o)
            {
                Console.WriteLine("HEY");
                return "LECTIO";
            });
        }

        protected MongoClient Client => new MongoClient("mongodb://localhost:27017/yubio");
    }
}