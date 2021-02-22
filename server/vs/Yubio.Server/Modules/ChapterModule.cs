using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text.RegularExpressions;
using Common.Logging;
using MongoDB.Bson.Serialization.IdGenerators;
using Nancy.ModelBinding;
using Yubio.Server.Db;

namespace Yubio.Server.Modules
{
    public class ChapterModule : MainModule
    {
        private static readonly ILog Logger = LogManager.GetLogger<ChapterModule>();

        class IdArgs
        {
            public string BookId { get; set; }
            public bool Populate { get; set; }
        }

        public ChapterModule()
        {

            Get("/getchapter/{bookid}/", delegate (dynamic o)
            {
                try
                {
                    var args = this.Bind<IdArgs>();
                    Logger.Info($"Receiving chapters from book id {args.BookId}. Populating {args.Populate}");

                    var db = this.Client.GetDatabase(args.BookId.BookToDatabase());

                    var chapters = new List<Chapter>();
                    var filteredQuestions = db.GetSubChapters().ToList();

                    foreach (var chapter in filteredQuestions)
                    {
                        var chapterMatch = Regex.Match(chapter.Name, @"Kapitel (?<chapter>\d*):\s*(?<header>[\w\s-&]*)");
                        chapter.ChapterNumber = int.Parse(chapterMatch.Groups["chapter"].Value);
                        chapter.Header = chapterMatch.Groups["header"].Value;

                        chapter.Tiles = db.TileListByChapter(chapter.ChapterNumber.ToString());
                        foreach (var subChapter in chapter.Chapters)
                        {
                            var subChapterMatch = Regex.Match(subChapter.Name,
                                @"(?<chapter>\d+([,\.]\d+)?)\s*(?<header>[\w\s-&]*)");
                            subChapter.Header = subChapterMatch.Groups["header"].Value;
                            subChapter.ChapterNumber = chapter.ChapterNumber;
                            subChapter.SubChapterNumber = subChapterMatch.Groups["chapter"].Value;

                            var questions = db.QuestionsBySubChapter(subChapter.SubChapterNumber).ToList();
                            subChapter.HasQuestions = questions.Any();
                            if (args.Populate)
                            {
                                subChapter.Questions = new QuestionList(questions);
                            }
                        }

                        chapter.HasQuestions = chapter.Chapters.FirstOrDefault(s => s.HasQuestions) != null;
                    }
                    chapters.AddRange(filteredQuestions);
                    var list = new ChapterList(chapters);
                    return list.AsJson();
                }
                catch (System.Exception exception)
                {
                    Logger.Error("Unable to get chapters", exception);
                    throw;
                }

            });
        }
    }
}