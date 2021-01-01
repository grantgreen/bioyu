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
    internal static class QuestionRepo
    {
        private const string CollectionName = "questions";
        public static IEnumerable<Question> QuestionsBySubChapter(this IMongoDatabase database, string subChapter)
        {
            var collection = database.GetCollection<BsonDocument>(CollectionName);
            var filter = Builders<BsonDocument>.Filter.Eq("chapters", subChapter);
            foreach (var n in collection.Find(filter).ToList())
            {
                yield return BsonSerializer.Deserialize<Question>(n);
            }
        }

        public static Question FindById(this IMongoDatabase database, ObjectId id)
        {
            var collection = database.GetCollection<BsonDocument>(CollectionName);
            var filter = Builders<BsonDocument>.Filter.Eq("_id", id);
            var found = collection.Find(filter).FirstOrDefault();
            if (found == null)
            {
                throw new InvalidOperationException($"Unable to fins question with id {id.ToString()}");
            }
            return BsonSerializer.Deserialize<Question>(found);
        }

        public static IEnumerable<Question> QuestionsByChapter(this IMongoDatabase database, string chapter)
        {
            var collection = database.GetCollection<BsonDocument>(CollectionName);
            var filter = Builders<BsonDocument>.Filter.Regex("chapters", BsonRegularExpression.Create($@"^{int.Parse(chapter)}.[0-9]+"));

            foreach (var n in collection.Find(filter).ToList())
            {
                yield return BsonSerializer.Deserialize<Question>(n);
            }
        }

        public static string AsJson(this IEnumerable<Question> questions)
        {
            var sb = new StringBuilder();
            foreach (var question in questions)
            {
                sb.Append(question.ToJson());
            }

            return sb.ToString();
        }

        public static string AsJson(this QuestionList questionList)
        {
            var jsonWriterSettings = new JsonWriterSettings { OutputMode = JsonOutputMode.Strict };
            return questionList.ToJson(jsonWriterSettings);
        }
    }

    public class QuestionList
    {
        [BsonElement("questions")]
        public IEnumerable<Question> Questions { get; set; }

        public QuestionList(IEnumerable<Question> questions)
        {
            this.Questions = questions;
        }
    }

    public class Question
    {
        [BsonId]
        public ObjectId Id { get; set; }
        [BsonElement("chapters")]
        public List<string> Chapters { get; set; }
        [BsonElement("answers")]
        public List<string> Answers { get; set; }
        [BsonElement("text")]
        public string Text { get; set; }
        [BsonElement("type")]
        public string Type { get; set; }
        [BsonElement("correct_answer")]
        public int Correct { get; set; }
        public Question()
        {
            this.Answers = new List<string>();
            this.Chapters = new List<string>();
        }


    }
}
