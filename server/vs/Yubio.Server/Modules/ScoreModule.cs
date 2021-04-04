using System;
using System.Linq;
using System.Text;
using Common.Logging;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Driver;
using Nancy;
using Nancy.ModelBinding;
using Yubio.Server.Db;

namespace Yubio.Server.Modules
{
    public class ScoreModule : MainModule
    {
        private static readonly ILog Logger = LogManager.GetLogger<ScoreModule>();

        class IdArgs
        {
            public string Id { get; set; }
            public string BookId { get; set; }
        }
        class ScoreArgs
        {
            public string Name { get; set; }
            public string School { get; set; }

            public string Class { get; set; }
            public string Time { get; set; }
            public int Grade { get; set; }
            public string BookId { get; set; }
            public string QuizId { get; set; }
        }

        class LegacyArgs
        {
            public string BookId { get; set; }
            public string Discipline { get; set; }
            public string Part { get; set; }
        }

        public ScoreModule()
        {
            Get("/set_score/{bookid}/{quizid}", delegate (dynamic o)
            {
                var args = this.Bind<ScoreArgs>();

                try
                {
                    Logger.Debug($"Setting score for {args.Name}, book id {args.BookId}. quiz id {args.QuizId}");
                    var dbDemo = this.Client.GetDatabase(args.BookId.BookToDatabase());
                    var quiz = dbDemo.QuizById(new ObjectId(args.QuizId));
                    if (quiz == null)
                    {
                        Logger.Info($"Unable to find quiz with id {args.QuizId}");
                        return "Unable to save score. Invalid quiz";
                    }
                    var score = new Score()
                    {
                        Class = args.Class,
                        Grade = args.Grade,
                        Name = args.Name,
                        School = args.School,
                        Time = args.Time,
                        QuizId = quiz.Id,
                        Date = DateTime.Now.ToString("G")
                    };
                    dbDemo.InsertScore(score);
                    Logger.Debug($"Score got id {score.Id}");
                    return score.Id.ToString();
                }
                catch (Exception exception)
                {
                    Logger.Error(exception);
                    return exception.Message;
                }
            });
            Get("/get_score/{bookid}/{id}", delegate (dynamic o)
            {
                var args = this.Bind<IdArgs>();
                Logger.Debug($"Getting scores for {args.Id}, book id {args.BookId}");
                var dbDemo = this.Client.GetDatabase(args.BookId.BookToDatabase());
                var scoreList = new ScoreList(dbDemo.ScoresByQuizId(new ObjectId(args.Id)));

                return scoreList.AsJson();
            });


            Get("/clear_score/{bookid}/{id}", delegate (dynamic o)
            {
                var args = this.Bind<IdArgs>();
                Logger.Debug($"Clearing scores for {args.Id}, book id {args.BookId}");
                var dbDemo = this.Client.GetDatabase(args.BookId.BookToDatabase());
                foreach (var score in dbDemo.ScoresByQuizId(new ObjectId(args.Id)))
                {
                    dbDemo.DeleteScore(score);
                }

                return "OK";
            });

            Get("/get_all_scores/{bookid}", delegate (dynamic o)
            {
                var args = this.Bind<IdArgs>();
                var database = Client.GetDatabase(args.BookId.BookToDatabase());
                var found = database.FindAllScores();
                var response = new StringBuilder();
                foreach (var quiz in found)
                {
                    response.AppendLine(quiz.Id.ToString());
                }
                return response.ToString();
            });

            Get("/get_all_legacy_scores/{bookid}/{discipline}/{part}", delegate (dynamic o)
            {
                try
                {
                    var args = this.Bind<LegacyArgs>();
                    var database = Client.GetDatabase(args.BookId.BookToDatabase());
                    if (args.Discipline == "figgame")
                    {
                        var found = database.FindAllLegacyScores().Where(d => d.Discipline == args.Discipline
                                                                            && d.Part == args.Part + ".svg");
                        var response = new StringBuilder();
                        foreach (var quiz in found)
                        {
                            response.AppendLine(string.Format($"{quiz.User}, {quiz.School}. {quiz.Id.ToString()}"));
                        }
                        return response.ToString();
                    }
                    else
                    {
                        var found = database.FindAllLegacyScores().Where(d => d.Discipline == args.Discipline
                                                                              && d.Part == args.Part);
                        var response = new StringBuilder();
                        foreach (var quiz in found)
                        {
                            response.AppendLine(string.Format($"{quiz.User}, {quiz.School}. {quiz.Id.ToString()}"));
                        }
                        return response.ToString();
                    }



                }
                catch (Exception exception)
                {
                    Logger.Error(exception);
                    return exception.Message;
                }
            });

            Get("/delete_all_legacy_scores/{bookid}/{discipline}/{part}", delegate (dynamic o)
            {
                try
                {
                    var args = this.Bind<LegacyArgs>();
                    var database = Client.GetDatabase(args.BookId.BookToDatabase());
                    if (args.Discipline == "figgame")
                    {
                        var found = database.FindAllLegacyScores().Where(d => d.Discipline == args.Discipline
                                                                              && d.Part == args.Part + ".svg");
                        var response = new StringBuilder();
                        foreach (var quiz in found)
                        {
                            var deleted = database.DeleteLegacyScore(quiz);
                            if (!deleted)
                            {
                                Logger.Error($"Unable to delete {quiz.User}");
                            }
                        }
                        return response.ToString();
                    }
                    else
                    {
                        var found = database.FindAllLegacyScores().Where(d => d.Discipline == args.Discipline
                                                                              && d.Part == args.Part);
                        var response = new StringBuilder();
                        foreach (var quiz in found)
                        {
                            var deleted = database.DeleteLegacyScore(quiz);
                            if (!deleted)
                            {
                                Logger.Error($"Unable to delete {quiz.User}");
                            }
                        }
                        return response.ToString();
                    }



                }
                catch (Exception exception)
                {
                    Logger.Error(exception);
                    return exception.Message;
                }
            });

        }
    }
}