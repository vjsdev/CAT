using System;
using System.Collections.Generic;
using System.Text;

namespace HRB.CAT.Dto.Models
{
    public class AuditListRequest
    {
        public int ProjectId { get; set; }
        public int AuditCount { get; set; }
    }
}
