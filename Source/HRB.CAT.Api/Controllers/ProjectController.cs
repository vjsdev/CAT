using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRB.CAT.Common.Utilities;
using HRB.CAT.Dto.Models;
using Microsoft.AspNetCore.Mvc;

namespace HRB.CAT.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    { 

        [HttpPost()]
        public ActionResult<ProjectListResponse> Get([FromQuery]ProjectListRequest projectListRequest)
        {
            // Get the data from database and process
            
            // send the response
            return new ProjectListResponse
            {
                Projects = new List<ProjectRoleDetails> {
                    new ProjectRoleDetails{
                        ProjectCode = "101",
                        ProjectId = 101,
                        ProjectName = "GUA",
                        UserIdentifier = projectListRequest.UserIdentifier,
                        UserRole = "Guest"
                    }
                }
            };
        }
    }
}
