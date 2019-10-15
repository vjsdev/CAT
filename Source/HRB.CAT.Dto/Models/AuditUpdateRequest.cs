using System.Collections.Generic;

namespace HRB.CAT.Dto.Models
{
    public class AuditUpdateRequest
    {
        public AuditInfo Audit { get; set; }
        public List<string> Actions { get; set; }
        public string UserEmail { get; set; }
    }
}
