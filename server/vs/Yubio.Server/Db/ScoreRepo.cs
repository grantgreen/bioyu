using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;

namespace Yubio.Server.Db
{
    internal static class ScoreRepo
    {
        public static string CollectionName = "quiz_score";

        public static void InsertScore(this IMongoDatabase database, Score score)
        {
            var collection = database.GetCollection<BsonDocument>(CollectionName);
            var bson = score.ToBsonDocument();
            collection.InsertOne(bson);
            score.Id = new ObjectId(bson["_id"].ToString());
        }

        public static bool DeleteScore(this IMongoDatabase database, Score score)
        {
            var collection = database.GetCollection<BsonDocument>(CollectionName);
            var filter = Builders<BsonDocument>.Filter.Eq("_id", score.Id);
            var found = collection.Find(filter).FirstOrDefault();
            if (found == null) { return false; }
            var result = collection.DeleteOne(found);
            return result.IsAcknowledged;
        }


        public static IEnumerable<Score> ScoresByQuizId(this IMongoDatabase database, ObjectId quizId)
        {
            var collection = database.GetCollection<BsonDocument>(CollectionName);
            var filter = Builders<BsonDocument>.Filter.Eq("quizid", quizId);
            foreach (var n in collection.Find(filter).ToList())
            {
                yield return BsonSerializer.Deserialize<Score>(n);
            }
        }
        public static IEnumerable<Score> FindAllScores(this IMongoDatabase database)
        {
            var collection = database.GetCollection<BsonDocument>(CollectionName);
            var filter = Builders<BsonDocument>.Filter.Empty;
            foreach (var f in collection.Find(filter).ToList())
            {
                yield return BsonSerializer.Deserialize<Score>(f);
            }
        }

        public static string AsJson(this Score score)
        {
            var jsonWriterSettings = new JsonWriterSettings { OutputMode = JsonOutputMode.Strict };
            return score.ToJson(jsonWriterSettings);
        }
        public static string AsJson(this ScoreList scoreList)
        {
            var jsonWriterSettings = new JsonWriterSettings { OutputMode = JsonOutputMode.Strict };
            return scoreList.ToJson(jsonWriterSettings);
        }
    }

    public class ScoreList
    {
        [BsonElement("scores")]
        public IEnumerable<Score> Scores { get; }

        public ScoreList(IEnumerable<Score> scores)
        {
            Scores = scores;
        }
    }
    public class Score
    {
        [BsonId]
        [BsonElement(elementName: "_id")]
        public ObjectId Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("school")]
        public string School { get; set; }

        [BsonElement("class")]
        public string Class { get; set; }

        [BsonElement("time")]
        public string Time { get; set; }

        [BsonElement("grade")]
        public int Grade { get; set; }

        [BsonElement("date")]
        public string Date { get; set; }

        [BsonElement(elementName: "quizid")]
        public ObjectId QuizId { get; set; }
    }

   
}