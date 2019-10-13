using HRB.CAT.Dto.Types;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRB.CAT.Dto.Models
{
    public class ProjectUserInfo
    {
        private Guid _id;
        public Guid Id
        {
            get
            {
                if (_id == null)
                    _id = Guid.NewGuid();
                return _id;
            }
            set
            {
                _id = value;
            }
        }

        public int ProjectId { get; set; }
        public RoleType RoleTypeMeta { get; set; }
        public string RoleType { get { return RoleTypeMeta.GetDescription(); } }
        public string UserEmail { get; set; }
    }
}
