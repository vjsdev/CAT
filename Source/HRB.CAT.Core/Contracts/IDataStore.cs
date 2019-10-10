using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace HRB.CAT.Core.Contracts
{
    public interface IDataStore
    {
        IEnumerable<T> Select<T>(string collectionName);

        bool Upsert<T>(string collectionName, T data);

        int Delete<T>(string collectionName, Expression<Func<T, bool>> predicate);
    }
}
