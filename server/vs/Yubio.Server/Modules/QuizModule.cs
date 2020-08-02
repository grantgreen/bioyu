using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Common.Logging;
using MongoDB.Bson;
using MongoDB.Driver;
using Nancy;
using Nancy.ModelBinding;
using Yubio.Server.Db;

namespace Yubio.Server.Modules
{
    public class QuizModule : MainModule
    {
        private static readonly ILog Logger = LogManager.GetLogger<QuizModule>();

        class IdArgs
        {
            public string Id { get; set; }
            public string BookId { get; set; }
        }


        class CreateRandomArgs
        {
            public string Name { get; set; }
            public string Description { get; set; }
            public string Chapters { get; set; }
            public string BookId { get; set; }
            public int Questions { get; set; }
            public int Timeout { get; set; }
            public bool PublicHighScore { get; set; }
        }

        public QuizModule()
        {
            Get("/create/{bookid}/{name}", delegate (dynamic o)
            {
                var args = this.Bind<CreateRandomArgs>();
                Logger.Info($"Creaating quiz named {args.Name} from book id {args.BookId}");

                var db = this.Client.GetDatabase(args.BookId.BookToDatabase());

                var chapterArg = args.Chapters.Split(new[] { "," }, StringSplitOptions.RemoveEmptyEntries);

                var allQuestions = new List<Question>();
                var filteredQuestions = new List<Question>();
                foreach (var c in chapterArg)
                {
                    Logger.Debug($"Using chapter {c}");
                    allQuestions.AddRange(db.QuestionsBySubChapter(c));
                }

                Logger.Debug($"Got {allQuestions.Count} questions, taking {args.Questions} random questions");
                foreach (var random in Randomizer.Randomize(allQuestions.Count))
                {
                    filteredQuestions.Add(allQuestions[random]);
                }

                var dbDemo = this.Client.GetDatabase(args.BookId.BookToDatabase());
                var quiz = new Quiz
                {
                    Name = args.Name,
                    Questions = filteredQuestions.Take(args.Questions).ToList(),
                    Description = args.Description,
                    CreationTime = DateTime.Now,
                    Timeout = args.Timeout,
                    PublicHighScore = args.PublicHighScore,
                };
                dbDemo.InsertQuiz(quiz);
                var found = dbDemo.QuizById(quiz.Id);
                return quiz.Id.ToString();

            });
            Get("/create_by_ids/{bookid}/{name}", delegate (dynamic o)
            {
                var args = this.Bind<CreateRandomArgs>();
                Logger.Info($"Creaating quiz named {args.Name} from book id {args.BookId}");

                var db = this.Client.GetDatabase(args.BookId.BookToDatabase());

                var chapterArg = args.Chapters.Split(new[] { "," }, StringSplitOptions.RemoveEmptyEntries);

                var allQuestions = new List<Question>();
                foreach (var c in chapterArg)
                {
                    allQuestions.Add(db.FindById(new ObjectId(c)));
                }

                var dbDemo = this.Client.GetDatabase(args.BookId.BookToDatabase());
                var quiz = new Quiz
                {
                    Name = args.Name,
                    Questions = allQuestions.ToList(),
                    Description = args.Description,
                    CreationTime = DateTime.Now,
                    Timeout = args.Timeout,
                    PublicHighScore = args.PublicHighScore,
                };
                dbDemo.InsertQuiz(quiz);
                var found = dbDemo.QuizById(quiz.Id);
                return quiz.Id.ToString();

            });
            Get("/list/{bookid}/{id}", delegate (dynamic o)
            {
                var args = this.Bind<IdArgs>();

                Logger.Debug($"Listing quiz with id {args.Id}");
                var dbDemo = Client.GetDatabase(args.BookId.BookToDatabase());
                var found = dbDemo.QuizById(new ObjectId(args.Id));
                return found == null ? "NOT FOUND" : found.AsJson();
            });
            Get("/listall/{bookid}", delegate (dynamic o)
            {
                var args = this.Bind<IdArgs>();

                var dbDemo = Client.GetDatabase(args.BookId.BookToDatabase());
                var found = dbDemo.FindAllQuizes();
                var response = new StringBuilder();
                foreach (var quiz in found)
                {
                    response.AppendLine(quiz.Id.ToString());
                }
                return found == null ? "NOT FOUND" : response.ToString();
            });
        }
    }
}

