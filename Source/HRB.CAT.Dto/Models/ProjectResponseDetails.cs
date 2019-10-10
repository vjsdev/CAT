using System;
using System.Collections.Generic;
using System.Text;

namespace HRB.CAT.Dto.Models
{
    public sealed class ProjectResponseDetails : ProjectInfo
    {
        public string UserIdentifier { get; set; }
        public string UserRole { get; set; }
    }
}
