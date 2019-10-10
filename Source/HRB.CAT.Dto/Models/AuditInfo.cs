using System;
using System.Collections.Generic;
using System.Text;

namespace HRB.CAT.Dto.Models
{
    public class AuditInfo
    {
        public int AuditId { get; set; }
        public int ProjectId { get; set; }
        public string AuditName { get; set; }
        public string AuditStatus { get; set; }
        public string AuditStatusMessage { get; set; }
        public int AuditScore { get; set; }
        public bool IsLocked { get; set; }
        public string RequestorComment { get; set; }
        public string AuditorComment { get; set; }
        public List<RatingInfo> GeneralRatings { get; set; }
        public List<RatingInfo> Observations { get; set; }
        public List<AuditHistoryInfo> History { get; set; }
    }
}
