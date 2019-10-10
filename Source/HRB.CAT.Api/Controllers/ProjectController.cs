using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRB.CAT.Common.Utilities;
using HRB.CAT.Core.Configuration;
using HRB.CAT.Core.Contracts;
using HRB.CAT.Dto.Models;
using Microsoft.AspNetCore.Mvc;

namespace HRB.CAT.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private IDataStore _dataStore;

        public ProjectController(IDataStore dataStore)
        {
            _dataStore = dataStore;
        }

        [HttpGet]
        public ActionResult<ProjectListResponse> Get([FromQuery]ProjectListRequest projectListRequest)
        {
            // Get the data from database and process
            var projects = _dataStore
                .Select<ProjectResponseDetails>(CollectionMeta.ProjectCollection)
                .OrderBy(x => x.ProjectName)
                .ToList();

            projects.ForEach((x) =>
            {
                x.UserIdentifier = projectListRequest.UserIdentifier;
                x.UserRole = "Guest";
            });

            // send the response
            return new ProjectListResponse
            {
                Projects = projects
            };
        }
    }
}
