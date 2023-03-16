using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;

namespace BackpackServer.Inventory {
    public static class InventoryDataManager {
        public static MySqlConnection GetConn() {
            return new MySqlConnection(Environment.GetEnvironmentVariable("MyConn"));
        }

        public static void RunCommand(string command) {
            using MySqlConnection conn = GetConn();
            conn.Open();
            Console.WriteLine(command);
            MySqlCommand c = new(command, conn);
            _ = c.ExecuteNonQuery();
        }

        public static List<InventoryItem> List() {
            List<InventoryItem> result = new();

            using (MySqlConnection conn = GetConn()) {
                conn.Open();
                MySqlCommand c = new("select Id, Name, Description, InTheBag from Backpack.Inventory", conn);
                using MySqlDataReader reader = c.ExecuteReader();
                while (reader.Read()) {
                    InventoryItem moodEntry = new(reader.GetInt32(0), reader.GetString(1), reader.GetString(2), reader.GetBoolean(3));
                    result.Add(moodEntry);
                }
            }

            return result;
        }


        public static void Save(InventoryItem inventoryItem) {
            using MySqlConnection conn = GetConn();
            conn.Open();
            MySqlCommand c = new("INSERT INTO Backpack.Inventory (Name, Description, InTheBag) VALUES (@Name, @Description, @InTheBag);", conn);
            _ = c.Parameters.AddWithValue("@Name", inventoryItem.Name);
            _ = c.Parameters.AddWithValue("@Description", inventoryItem.Description);
            _ = c.Parameters.AddWithValue("@InTheBag", inventoryItem.InTheBag);
            _ = c.ExecuteNonQuery();
        }

        public static void Update(InventoryItem inventoryItem) {
            using MySqlConnection conn = GetConn();
            conn.Open();
            MySqlCommand c = new("UPDATE Backpack.Inventory SET `Name` = @Name, Description = @Description, InTheBag = @InTheBag WHERE Id = @Id;", conn);
            _ = c.Parameters.AddWithValue("@Name", inventoryItem.Name);
            _ = c.Parameters.AddWithValue("@Description", inventoryItem.Description);
            _ = c.Parameters.AddWithValue("@InTheBag", inventoryItem.InTheBag);
            _ = c.Parameters.AddWithValue("@Id", inventoryItem.Id);
            _ = c.ExecuteNonQuery();
        }

        public static void Delete(int id) {
            using MySqlConnection conn = GetConn();
            conn.Open();
            MySqlCommand c = new("DELETE FROM Backpack.Inventory WHERE Id= @Id;", conn);
            _ = c.Parameters.AddWithValue("@Id", id);
            _ = c.ExecuteNonQuery();
        }
    }
}