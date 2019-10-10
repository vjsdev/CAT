using System;
using System.Collections.Generic;
using System.Text;

namespace HRB.CAT.Dto.Models
{
    public class AuditHistoryInfo
    {
        public DateTime ActivityTime { get; set; }
        public string ActivityDetails { get; set; }
        public string Origin { get; set; }
    }
}
