using System;
using System.Collections.Generic;
using System.Threading;
using Common.Logging;
using log4net.Layout;
using MongoDB.Driver;
using Yubio.Server.Db;

namespace Yubio.Server
{
    class QuizMaster : IDisposable
    {
        private static readonly ILog Logger = LogManager.GetLogger<QuizMaster>();
        private readonly Timer timer;
        private MongoClient client;
        public QuizMaster()
        {
            this.client = new MongoClient("mongodb://localhost:27017/yubio");
            this.timer = new Timer(CheckOutdatedTests, null, TimeSpan.FromMinutes(1), TimeSpan.FromDays(5));
        }

        private void CheckOutdatedTests(object state)
        {
            Logger.Debug("Checking for outdated tests");
            CheckDatabase("idc");
            CheckDatabase("a");
            CheckDatabase("b");
            CheckDatabase("c");
            Logger.Debug("Checking for outdated tests done");
        }

        private void CheckDatabase(string databaseName)
        {
            try
            {
                var database = this.client.GetDatabase(databaseName.BookToDatabase());
                var toDelete = new List<Quiz>();
                foreach (var quiz in database.FindAllQuizes())
                {
                    var age = (DateTime.Now - quiz.CreationTime).TotalDays;
                    if (age > 30)
                    {
                        Logger.Debug($"Test from {databaseName} was too old {quiz.Name}. {age} days old");
                        toDelete.Add(quiz);
                    }
                }

                foreach (var quiz in toDelete)
                {
                    Logger.Debug($"Deleting quiz {quiz.Name}");
                    if (!database.DeleteQuiz(quiz))
                    {
                        Logger.Debug($"Unable to delete {quiz.Name}");
                    }
                }
            }
            catch (Exception exception)
            {
                Logger.Warn($"Error checking database {databaseName}", exception);
            }
        }

        public void Dispose()
        {
            timer?.Dispose();
        }
    }
}