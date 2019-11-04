using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Text;

namespace HRB.CAT.Dto.Types
{
    public enum WorkflowStage
    {
        [Description("NONE")]
        NONE
    }

    public static partial class Extensions {
        public static string GetDescription(this WorkflowStage e)
        {
            var enumType = typeof(WorkflowStage);
            var memberInfos = enumType.GetMember(e.ToString());
            var enumValueMemberInfo = memberInfos.FirstOrDefault(m => m.DeclaringType == enumType);
            var valueAttributes = enumValueMemberInfo.GetCustomAttributes(typeof(DescriptionAttribute), false);
            var description = ((DescriptionAttribute)valueAttributes[0]).Description;
            return description;
        }
    }
}
