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
    public class AuthenticationController : ControllerBase
    { 

        [HttpPost()]
        public ActionResult<LoginResponse> Get([FromBody]LoginRequest loginRequest)
        {
            // Validate user
            // Send an email
            // As a hack, store the OTP to temp directory
            Random randomNumberGenerator = new Random();
            var otp = randomNumberGenerator.Next(1000, 9999);
            var hash = Hashing.ComputeSha256Hash(otp.ToString());
            var tempOTPPath = System.IO.Path.GetTempPath() + "\\OTP.txt";
            System.IO.File.AppendAllText(tempOTPPath, Environment.NewLine + DateTime.Now.ToString() + "\t" + otp + "\t" + hash + "\t" + loginRequest.Username);
            // send the response
            return new LoginResponse
            {
                Otp = hash,
                StatusCode = 200,
                Status = "OTP Generated Successfully"
            };
        }
    }
}
