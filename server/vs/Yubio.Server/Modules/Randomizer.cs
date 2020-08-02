using System;
using System.Collections.Generic;

namespace Yubio.Server.Modules
{
    internal static class Randomizer
    {
        private static readonly Random Random = new Random();
        public static IEnumerable<int> Randomize(int max)
        {
            var taken = new List<int>();
            while (taken.Count < max)
            {
                var next = Random.Next(max);
                if (!taken.Contains(next))
                {
                    taken.Add(next);
                    yield return next;
                }
            }
        }
    }
}