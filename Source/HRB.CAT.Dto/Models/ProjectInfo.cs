using System;
using System.Collections.Generic;
using System.Text;

namespace HRB.CAT.Dto.Models
{
    public abstract class ProjectInfo
    {
        public string ProjectName { get; set; }
        public string ProjectCode { get; set; }
        public int ProjectId { get; set; }
    }
}
