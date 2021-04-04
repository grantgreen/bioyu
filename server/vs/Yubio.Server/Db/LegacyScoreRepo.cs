using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;

namespace Yubio.Server.Db
{
    internal static class LegacyScoreRepo
    {
        public static string CollectionName = "scores";
        public static IEnumerable<LegacyScore> FindAllLegacyScores(this IMongoDatabase database)
        {
            var collection = database.GetCollection<BsonDocument>(CollectionName);
            var filter = Builders<BsonDocument>.Filter.Empty;
            foreach (var f in collection.Find(filter).ToList())
            {
                yield return BsonSerializer.Deserialize<LegacyScore>(f);
            }
        }

        public static bool DeleteLegacyScore(this IMongoDatabase database, LegacyScore score)
        {
            var collection = database.GetCollection<BsonDocument>(CollectionName);
            var filter = Builders<BsonDocument>.Filter.Eq("_id", score.Id);
            var found = collection.Find(filter).FirstOrDefault();
            if (found == null) { return false; }
            var result = collection.DeleteOne(found);
            return result.IsAcknowledged;
        }

    }

    public class LegacyScore
    {
        [BsonId]
        [BsonElement(elementName: "_id")]
        public ObjectId Id { get; set; }

        [BsonElement("discipline")]
        public string Discipline { get; set; }

        [BsonElement("part")]
        public string Part { get; set; }

        [BsonElement("user")]
        public string User { get; set; }

        [BsonElement("school")]
        public string School { get; set; }

        [BsonElement("value")]
        public string Value { get; set; }

        [BsonElement("duration")]
        public string Duration { get; set; }

        [BsonElement("date")]
        public string Date { get; set; }
    }
}