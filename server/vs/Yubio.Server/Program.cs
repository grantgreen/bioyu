using System;
using System.Diagnostics;
using System.IO;
using System.Text.RegularExpressions;
using System.Threading;
using Common.Logging;
using Mono.Unix.Native;
using Nancy.Hosting.Self;

namespace Yubio.Server
{
    class Program
    {
        private static readonly ILog Logger = LogManager.GetLogger("Server");

        static void Main(string[] args)
        {
            var m = Regex.Match("Kapitel 8: Udvidet fyiologi træningslære", @"(?<chapter>\d+([,\.]\d+)?)\s*(?<header>[\w\s-]*)");
            var quizMaster = new QuizMaster();
            try
            {
                AppDomain.CurrentDomain.UnhandledException += CurrentDomain_UnhandledException;
                Logger.Info("Starting server");
                var host = new NancyHost(new Uri("http://localhost:10001"));
                host.Start(); // start hosting


                var pid = Process.GetCurrentProcess().Id;
                while (true)
                {
                    GuardLoadOk();
                    Thread.Sleep(TimeSpan.FromHours(24));
                    break;
                }
            }
            catch (Exception exception)
            {
                Logger.Error("Error running server", exception);
            }
            finally
            {
                quizMaster.Dispose();
            }

            var currentPID = Syscall.getpid();
            Syscall.kill(currentPID, Signum.SIGABRT);
        }

        private static void GuardLoadOk()
        {
            var load = ReadUserSpaceLoad();
            if (float.TryParse(load, out var l))
            {
                if (l > 97)
                {
                    Logger.Error($"Load is too high {l}%");
                    throw new InvalidOperationException("Load is too high");
                }

                if (Logger.IsTraceEnabled)
                {
                    Logger.Trace($"User load is {l}%");
                }
            }
            else
            {
                Logger.Debug($"Unable to read load [{load}]");
            }

        }

        private static string ReadUserSpaceLoad()
        {
            if (!File.Exists("/tmp/load.sh"))
            {
                File.WriteAllText("/tmp/load.sh", @"/usr/bin/top -n 1 -b | awk '/^%Cpu/{print $2}'");
            }
            var command = "/tmp/load.sh";
            var info = new ProcessStartInfo
            {
                FileName = "/bin/sh",
                Arguments = command,
                RedirectStandardError = true,
                RedirectStandardOutput = true,
                UseShellExecute = false
            };

            using (var p = Process.Start(info))
            {
                if (!p.WaitForExit(1000))
                {
                    throw new TimeoutException($"Executing command, '{command}', timed out");
                }

                if (p.ExitCode != 0)
                {
                    Logger.Debug($"Error reading. Exit code {p.ExitCode}");
                    return p.StandardError.ReadToEnd();
                }

                return p.StandardOutput.ReadToEnd();
            }
        }

        private static void CurrentDomain_UnhandledException(object sender, UnhandledExceptionEventArgs e)
        {
            var exception = e.ExceptionObject as Exception;
            Logger.Error($"Got unhandled exception. Stack {exception.StackTrace}, Source {exception.Source}, sender {sender}", exception);
        }
    }
}