using System.Collections.Generic;
using System.Linq;
using Common.Logging;
using Nancy.ModelBinding;
using Yubio.Server.Db;

namespace Yubio.Server.Modules
{
    public class QuestionsModule : MainModule
    {
        private static readonly ILog Logger = LogManager.GetLogger<QuestionsModule>();

        class IdArgs
        {
            public string Chapter { get; set; }
            public string BookId { get; set; }
        }

        public QuestionsModule()
        {
            Get("/getquestions/{bookid}/", delegate (dynamic o)
            {
                var args = this.Bind<IdArgs>();
                Logger.Info($"Receiving questions for chapter {args.Chapter} from book id {args.BookId}");

                var db = this.Client.GetDatabase(args.BookId.BookToDatabase());

                var allQuestions = new List<Question>();
                var filteredQuestions = db.QuestionsByChapter(args.Chapter.ToString()).ToList();
                Logger.Debug($"Found {filteredQuestions.Count()} questions");
                allQuestions.AddRange(filteredQuestions);
                var list = new QuestionList(allQuestions);
                return list.AsJson();

            });
        }
    }
}