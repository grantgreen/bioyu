using System;
using System.Collections.Generic;
using System.Text;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;

namespace Yubio.Server.Db
{
    internal static class QuizRepo
    {
        private const string CollectionName = "quiz_Store";
        public static Quiz QuizById(this IMongoDatabase database, ObjectId id)
        {
            var collection = database.GetCollection<BsonDocument>(CollectionName);
            var filter = Builders<BsonDocument>.Filter.Eq("_id", id);
            var found = collection.Find(filter).FirstOrDefault();
            if (found == null)
            {
                throw new InvalidOperationException($"Unable to fin¨d quiz with id {id.ToString()}");
            }
            return BsonSerializer.Deserialize<Quiz>(found);
        }

        public static Quiz QuizByName(this IMongoDatabase database, string name)
        {
            var collection = database.GetCollection<BsonDocument>(CollectionName);
            var filter = Builders<BsonDocument>.Filter.Eq("name", name);
            var found = collection.Find(filter).FirstOrDefault();
            return BsonSerializer.Deserialize<Quiz>(found);
        }

        public static void InsertQuiz(this IMongoDatabase database, Quiz quiz)
        {
            var collection = database.GetCollection<BsonDocument>(CollectionName);
            var bson = quiz.ToBsonDocument();
            collection.InsertOne(bson);
            quiz.Id = new ObjectId(bson["_id"].ToString());
        }
        public static IEnumerable<Quiz> FindAllQuizes(this IMongoDatabase database)
        {
            var collection = database.GetCollection<BsonDocument>(CollectionName);
            var filter = Builders<BsonDocument>.Filter.Empty;
            foreach (var f in collection.Find(filter).ToList())
            {
                yield return BsonSerializer.Deserialize<Quiz>(f);
            }
        }

        public static string AsJson(this Quiz quiz)
        {
            var jsonWriterSettings = new JsonWriterSettings { OutputMode = JsonOutputMode.Strict };
            return quiz.ToJson(jsonWriterSettings);
        }
    }

    public class Quiz
    {
        [BsonId]
        [BsonElement(elementName: "_id")]
        public ObjectId Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("description")]
        public string Description { get; set; }

        [BsonElement("questions")]
        public List<Question> Questions { get; set; }

        [BsonElement("creation_time")]
        public DateTime CreationTime { get; set; }

        [BsonElement("timeout")]
        public int Timeout{ get; set; }

        [BsonElement("public_score")]
        public bool PublicHighScore { get; set; }
    }


}