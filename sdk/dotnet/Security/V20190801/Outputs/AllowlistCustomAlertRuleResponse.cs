// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Security.V20190801.Outputs
{

    [OutputType]
    public sealed class AllowlistCustomAlertRuleResponse
    {
        /// <summary>
        /// The values to allow. The format of the values depends on the rule type.
        /// </summary>
        public readonly ImmutableArray<string> AllowlistValues;
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
        private AllowlistCustomAlertRuleResponse(
            ImmutableArray<string> allowlistValues,

            string description,

            string displayName,

            bool isEnabled,

            string ruleType,

            string valueType)
        {
            AllowlistValues = allowlistValues;
            Description = description;
            DisplayName = displayName;
            IsEnabled = isEnabled;
            RuleType = ruleType;
            ValueType = valueType;
        }
    }
}
