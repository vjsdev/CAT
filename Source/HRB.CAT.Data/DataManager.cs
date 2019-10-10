using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using HRB.CAT.Core.Contracts;
using LiteDB;

namespace HRB.CAT.Data
{
    public class DataManager: IDataStore
    {
        private LiteDatabase _db;

        public DataManager(string databaseLocation = Configuration.DatabaseLocation, string databaseName = Configuration.DatabaseName)
        {
            var dbPath = string.Empty;
            if (string.IsNullOrWhiteSpace(databaseLocation))
            {
                dbPath = AppDomain.CurrentDomain.BaseDirectory + databaseName;
            }
            else
            {
                dbPath = System.IO.Path.Combine(databaseLocation, databaseName);
            }
            
            _db = new LiteDatabase(dbPath);
        }

        public IEnumerable<T> Select<T>(string collectionName)
        {
            var collection = _db.GetCollection<T>(collectionName);
            return collection.FindAll();
        }

        public bool Upsert<T>(string collectionName, T data)
        {
            var collection = _db.GetCollection<T>(collectionName);
            return collection.Upsert(data);
        }

        public int Delete<T>(string collectionName, Expression<Func<T, bool>> predicate)
        {
            var collection = _db.GetCollection<T>(collectionName);
            return collection.Delete(predicate);
        }
    }
}