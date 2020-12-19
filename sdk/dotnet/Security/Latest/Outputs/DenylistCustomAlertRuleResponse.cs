// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Security.Latest.Outputs
{

    [OutputType]
    public sealed class DenylistCustomAlertRuleResponse
    {
        /// <summary>
        /// The values to deny. The format of the values depends on the rule type.
        /// </summary>
        public readonly ImmutableArray<string> DenylistValues;
        /// <summary>
        /// The description of the custom alert.
        /// </summary>
        public readonly string Description;
        /// <summary>
        /// The display name of the custom alert.
        /// </summary>
        public readonly string DisplayName;
        /// <summary>
        /// Status of the custom alert.
        /// </summary>
        public readonly bool IsEnabled;
        /// <summary>
        /// The type of the custom alert rule.
        /// Expected value is 'ListCustomAlertRule'.
        /// </summary>
        public readonly string RuleType;
        /// <summary>
        /// The value type of the items in the list.
        /// </summary>
        public readonly string ValueType;

        [OutputConstructor]
        private DenylistCustomAlertRuleResponse(
            ImmutableArray<string> denylistValues,

            string description,

            string displayName,

            bool isEnabled,

            string ruleType,

            string valueType)
        {
            DenylistValues = denylistValues;
            Description = description;
            DisplayName = displayName;
            IsEnabled = isEnabled;
            RuleType = ruleType;
            ValueType = valueType;
        }
    }
}
