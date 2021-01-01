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

        private MongoClient client;
        protected MongoClient Client
        {
            get
            {
                if (this.client == null)
                {
                    this.client = new MongoClient("mongodb://localhost:27017/yubio");
                }

                return this.client;
            }
        }
    }
}