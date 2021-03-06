﻿using System;
using System.Collections.Generic;
using System.Text;

namespace HRB.CAT.Dto.Models
{
    public class ProjectInfo
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

        public string ProjectName { get; set; }
        public string ProjectCode { get; set; }
        public int ProjectId { get; set; }
    }
}
