﻿using MySql.Data.MySqlClient;
using System;
using System.IO;

namespace BackpackServer.Init
{
    public static class InitDataManager
    {
        public static MySqlConnection GetConn()
        {
            return new MySqlConnection(Environment.GetEnvironmentVariable("MyConn"));
        }

        public static string CheckDbConn()
        {
            try
            {
                using (MySqlConnection conn = GetConn())
                {
                    conn.Open();
                    MySqlCommand c = new("SELECT 1 FROM dual", conn);
                    _ = c.ExecuteNonQuery();
                }

                return "Connection with the database was ok.";
            }
            catch (Exception)
            {
                return "Something seems wrong with the connection string please check file : launchSettings.json";
            }
        }

        public static string InitDB()
        {
            string initDbFile = Path.Combine(Environment.CurrentDirectory, "Init", "script01.sql");
            if (File.Exists(initDbFile))
            {
                using MySqlConnection conn = GetConn();
                try
                {
                    conn.Open();
                    MySqlScript script = new(conn, File.ReadAllText(initDbFile));
                    _ = script.Execute();

                    return $"Table created.";
                }
                catch (Exception e)
                {
                    return e.Message;
                }
            }
            else
            {
                return $"Cannot find file with path :{initDbFile}";
            }
        }
    }
}