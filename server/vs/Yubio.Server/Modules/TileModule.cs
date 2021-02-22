using Common.Logging;
using Nancy.ModelBinding;
using Yubio.Server.Db;

namespace Yubio.Server.Modules
{
    public class TileModule : MainModule
    {
        private static readonly ILog Logger = LogManager.GetLogger<TileModule>();
        class IdArgs
        {
            public string Chapter { get; set; }
            public string BookId { get; set; }
        }

        public TileModule()
        {
            Get("/gettiles/{bookid}/", delegate(dynamic o)
            {
                var args = this.Bind<IdArgs>();
                Logger.Debug($"Receiving tiles for chapter {args.Chapter} from book id {args.BookId}");

                var db = this.Client.GetDatabase(args.BookId.BookToDatabase());
                var tiles = db.TilesByChapter(args.Chapter);
                var list = new TileList(tiles);
                return list.AsJson();
            });
        }
    }
}