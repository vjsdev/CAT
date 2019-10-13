using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Text;

namespace HRB.CAT.Dto.Types
{
    public enum RoleType
    {
        [Description("Auditor")]
        Auditor,

        [Description("Requestor")]
        Requestor,

        [Description("Manager")]
        Manager,

        [Description("Admin")]
        Admin
    }

    public static partial class Extensions {
        public static string GetDescription(this RoleType e)
        {
            var enumType = typeof(RoleType);
            var memberInfos = enumType.GetMember(e.ToString());
            var enumValueMemberInfo = memberInfos.FirstOrDefault(m => m.DeclaringType == enumType);
            var valueAttributes =
                  enumValueMemberInfo.GetCustomAttributes(typeof(DescriptionAttribute), false);
            var description = ((DescriptionAttribute)valueAttributes[0]).Description;
            return description;
        }
    }
}
