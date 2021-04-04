using System;
using Common.Logging;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using Nancy;
using Nancy.ModelBinding;
using Yubio.Server.Db;

namespace Yubio.Server.Modules
{
    public class MainModule : NancyModule
    {
        private static readonly ILog Logger = LogManager.GetLogger<MainModule>();
        class IdArgs
        {
            public string BookId { get; set; }
            public string Db { get; set; }
        }

        public MainModule()
        {
            Get("/collections/{bookid}/", delegate (dynamic o)
            {
                var args = this.Bind<IdArgs>();
                var db = this.Client.GetDatabase(args.BookId.BookToDatabase());
                var collections = db.ListCollectionNames().ToList();
                foreach (var collection in collections)
                {
                    Logger.Info(collection);
                }
                return "LECTIO";
            });

            Get("/{db}/{bookid}/", delegate (dynamic o)
            {
                var args = this.Bind<IdArgs>();
                var db = this.Client.GetDatabase(args.BookId.BookToDatabase());
                var collection = db.GetCollection<BsonDocument>(args.Db);
                var filter = Builders<BsonDocument>.Filter.Empty;
                foreach (var f in collection.Find(filter).ToList())
                {
                    Logger.Info(f.ToString());
                }
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