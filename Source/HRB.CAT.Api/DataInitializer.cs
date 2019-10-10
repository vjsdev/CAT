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
                GetDefaultProjects().ForEach((p) =>
                {
                    dataStore.Upsert<ProjectInfo>(CollectionMeta.ProjectCollection, p);
                });
            }

            if (!dataStore.Select<ProjectInfo>(CollectionMeta.UserCollection).Any())
            {
                GetDefaultUsers().ForEach((u) =>
                {
                    dataStore.Upsert<UserInfo>(CollectionMeta.UserCollection, u);
                });
            }
        }

        private static string GetTemplateLocation(string fileName) {
            return AppDomain.CurrentDomain.BaseDirectory + @"DataCache\" + fileName;
        }

        private static List<ProjectInfo> GetDefaultProjects() {
            var projectSource = GetTemplateLocation("Projects.json");
            var serializedData = System.IO.File.ReadAllText(projectSource);
            var data = Newtonsoft.Json.JsonConvert.DeserializeObject<ProjectCollection>(serializedData);
            return data.Projects;
        }

        private static List<UserInfo> GetDefaultUsers()
        {
            var userSource = GetTemplateLocation("Users.json");
            var serializedData = System.IO.File.ReadAllText(userSource);
            var data = Newtonsoft.Json.JsonConvert.DeserializeObject<UserCollection>(serializedData);
            return data.Users;
        }
    }
}
