using HRB.CAT.Core.Configuration;
using HRB.CAT.Core.Contracts;
using HRB.CAT.Dto.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HRB.CAT.Api
{
    internal class DataInitializer
    {
        public static void Start(IDataStore dataStore) {

            if (!dataStore.Select<ProjectInfo>(CollectionMeta.ProjectCollection).Any())
            {
                GetDefaultDataset<ProjectCollection>("Projects.json").Projects.ForEach((p) =>
                {
                    dataStore.Upsert(CollectionMeta.ProjectCollection, p);
                });
            }

            if (!dataStore.Select<ProjectInfo>(CollectionMeta.UserCollection).Any())
            {
                GetDefaultDataset<UserCollection>("Users.json").Users.ForEach((u) =>
                {
                    dataStore.Upsert(CollectionMeta.UserCollection, u);
                });
            }

            if (!dataStore.Select<ProjectUserInfo>(CollectionMeta.ProjectUserCollection).Any())
            {
                GetDefaultDataset<ProjectUserInfoCollection>("UserRoles.json").UserRoles.ForEach((u) =>
                {
                    dataStore.Upsert(CollectionMeta.ProjectUserCollection, u);
                });
            }
        }

        private static string GetTemplateLocation(string fileName) {
            return AppDomain.CurrentDomain.BaseDirectory + @"DataCache\" + fileName;
        }

        private static T GetDefaultDataset<T>(string sourceFileName)
        {
            var userSource = GetTemplateLocation(sourceFileName);
            var serializedData = System.IO.File.ReadAllText(userSource);
            var data = Newtonsoft.Json.JsonConvert.DeserializeObject<T>(serializedData);
            return data;
        }
    }
}
