using System;
using System.Collections.Generic;
using System.Text;

namespace HRB.CAT.Dto.Models
{
    public class LoginMetaResponse
    {
        public List<int> RequestorProjectIds { get; set; }
        public List<int> AuditorProjectIds { get; set; }
        public bool IsManager { get; set; }
        public bool IsAdmin { get; set; }
    }
}
