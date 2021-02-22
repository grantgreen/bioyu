using System.Collections.Generic;
using System.Linq;
using Common.Logging;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;

namespace Yubio.Server.Db
{
    internal static class TilesRepo
    {
        private static readonly ILog Logger = LogManager.GetLogger("QuestionRepo");
        private const string CollectionName = "tiles_game";

        public static IEnumerable<Tile> TilesByChapter(this IMongoDatabase database, string chapter)
        {
            Logger.Debug($"From  chapter {chapter}");
            var collection1 = database.GetCollection<BsonDocument>(CollectionName);
            var filter = Builders<BsonDocument>.Filter.Eq("chapter",int.Parse(chapter));
            var match = collection1.Find(filter);
            if (!match.Any())
            {
                Logger.Debug($"No tiles for {chapter}");
            }
            foreach (var m in collection1.Find(filter).ToList())
            {
                var tile = BsonSerializer.Deserialize<Tile>(m);
                yield return tile;
            }
        }

        public static TileList TileListByChapter(this IMongoDatabase database, string chapter)
        {
            var tiles = database.TilesByChapter(chapter).ToList();
            return !tiles.Any() ? new TileList(new List<Tile>()) : new TileList(tiles);
        }

        public static string AsJson(this Tile tile)
        {
            var jsonWriterSettings = new JsonWriterSettings { OutputMode = JsonOutputMode.Strict };
            return tile.ToJson(jsonWriterSettings);
        }

        public static string AsJson(this TileList tileList)
        {
            var jsonWriterSettings = new JsonWriterSettings { OutputMode = JsonOutputMode.Strict };
            return tileList.ToJson(jsonWriterSettings);
        }
    }

    public class TileList
    {
        [BsonElement("tiles")]
        public IEnumerable<Tile> Tile { get; set; }

        public TileList(IEnumerable<Tile> tiles)
        {
            this.Tile = tiles;
        }
    }
    public class Tile
    {
        [BsonId]
        public ObjectId Id { get; set; }

        [BsonElement("chapter")]
        public int Chapter { get; set; }

        [BsonElement("category")]
        public string Category { get; set; }

        [BsonElement("matches")]
        public List<string> Matches { get; set; }
    }
}