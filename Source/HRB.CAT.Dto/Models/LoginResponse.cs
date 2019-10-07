using System;
using System.Collections.Generic;
using System.Text;

namespace HRB.CAT.Dto.Models
{
    public class LoginResponse
    {
        public string Status { get; set; }
        public short StatusCode { get; set; }
        public string Otp { get; set; }
    }
}
