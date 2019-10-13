using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRB.CAT.Common.Utilities;
using HRB.CAT.Dto.Models;
using Microsoft.AspNetCore.Mvc;
using System.Web.Http;
using HRB.CAT.Core.Contracts;
using HRB.CAT.Core.Configuration;

namespace HRB.CAT.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        #region Private Members
        private IDataStore _dataStore;
        #endregion
        public UserController(IDataStore datastore)
        {
            _dataStore = datastore;
        }

        [HttpGet]
        public ActionResult<LoginMetaResponse> Get([FromQuery]LoginRequest loginRequest)
        {
            var projectUserInfo = _dataStore
                .Select<ProjectUserInfo>(CollectionMeta.ProjectUserCollection)
                .Where(x => x.UserEmail == loginRequest.Username);

            var meta = new LoginMetaResponse
            {
                IsAdmin = projectUserInfo.Any(x => x.RoleTypeMeta == Dto.Types.RoleType.Admin),
                IsManager = projectUserInfo.Any(x => x.RoleTypeMeta == Dto.Types.RoleType.Manager)
            };

            meta.AuditorProjectIds = projectUserInfo
                .Where(x => x.RoleTypeMeta == Dto.Types.RoleType.Auditor)
                .Select(p => p.ProjectId)
                .ToList();

            meta.RequestorProjectIds = projectUserInfo
                .Where(x => x.RoleTypeMeta == Dto.Types.RoleType.Requestor)
                .Select(p => p.ProjectId)
                .ToList();

            return Ok(meta);
        }
    }
}
