using System.Collections.Generic;
using Common.Logging;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;

namespace Yubio.Server.Db
{
    internal static class ChapterRepo
    {
        private static readonly ILog Logger = LogManager.GetLogger("ChapterRepo");

        private const string CollectionName = "contents";

        public static IEnumerable<Chapter> GetSubChapters(this IMongoDatabase database)
        {
            var collection = database.GetCollection<BsonDocument>(CollectionName);
            var filter = Builders<BsonDocument>.Filter.Empty;
            foreach (var f in collection.Find(filter).ToList())
            {
                yield return BsonSerializer.Deserialize<Chapter>(f);
            }
        }

        public static string AsJson(this ChapterList chapterList)
        {
            var jsonWriterSettings = new JsonWriterSettings { OutputMode = JsonOutputMode.Strict };
            return chapterList.ToJson(jsonWriterSettings);
        }
    }

    public class ChapterList
    {
        [BsonElement("chapters")]
        public IEnumerable<Chapter> Chapters { get; set; }

        public ChapterList(IEnumerable<Chapter> chapters)
        {
            this.Chapters = chapters;
        }
    }


    public class Chapter
    {
        [BsonId]
        public ObjectId Id { get; set; }
        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("sub")]
        public List<SubChapter> Chapters { get; set; }

        public int ChapterNumber { get; set; }
        public string Header { get; set; }
        public bool HasQuestions { get; set; }
        public Chapter()
        {
            this.Chapters = new List<SubChapter>();
        }

        public TileList Tiles { get; set; }
    }

    public class SubChapter
    {
        [BsonElement("name")]
        public string Name { get; set; }
        [BsonElement("sub")]
        public List<string> SubChapters { get; set; }
        [BsonElement("color")]
        public string Color { get; set; }
        [BsonElement("hasFF")]
        public bool HasFF { get; set; }
        [BsonElement("hasMC")]
        public bool HasMC { get; set; }
        [BsonElement("hasQuestions")]
        public bool HasQuestions { get; set; }

        public string Header { get; set; }
        public int ChapterNumber { get; set; }
        public string SubChapterNumber { get; set; }

        public QuestionList Questions { get; set; }
    
    }
}