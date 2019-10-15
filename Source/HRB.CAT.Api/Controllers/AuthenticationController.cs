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
    public class AuthenticationController : ControllerBase
    {
        #region Private Members
        private IDataStore _dataStore;
        #endregion
        public AuthenticationController(IDataStore datastore)
        {
            _dataStore = datastore;
        }

        [HttpGet]
        public ActionResult<LoginResponse> Get([FromQuery]LoginRequest loginRequest)
        {
            if (_dataStore.Select<UserInfo>(CollectionMeta.UserCollection).Any(x => x.Email == loginRequest.Username))
            {
                Random randomNumberGenerator = new Random();
                var otp = randomNumberGenerator.Next(1000, 9999);
                var hash = Hashing.ComputeSha256Hash(otp.ToString());
                //var tempOTPPath = System.IO.Path.GetTempPath() + "\\OTP.txt";
                //System.IO.File.AppendAllText(tempOTPPath, Environment.NewLine + DateTime.Now.ToString() + "\t" + otp + "\t" + hash + "\t" + loginRequest.Username);
                EmailHelper.SendEmail("C.A.T OTP", "Your OTP: " + otp.ToString(), loginRequest.Username);
                var result = new LoginResponse
                {
                    Otp = hash,
                    StatusCode = 200,
                    Status = "OTP Generated Successfully"
                };
                return Ok(result);
            }
            else
            {
                return NotFound();
            }
             
        }
    }
}
