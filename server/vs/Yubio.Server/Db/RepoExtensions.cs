using System;

namespace Yubio.Server.Db
{
    internal static class RepoExtensions
    {
        public static string BookToDatabase(this string bookId)
        {
            if( string.IsNullOrEmpty(bookId))
            {
                throw new ArgumentException("BookId is null");
            }
            switch (bookId)
            {
                case "idc":
                    return "yubio_idc";
                case "a":
                    return "yubio";
                case "b":
                    return "yubio_b";
                case "c":
                    return "yubio_c";
            }

            throw new InvalidOperationException($"No matching database for {bookId}");
        }
    }
}