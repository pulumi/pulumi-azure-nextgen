// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20190601.Outputs
{

    [OutputType]
    public sealed class FirewallPolicyFilterRuleResponse
    {
        /// <summary>
        /// The action type of a Filter rule
        /// </summary>
        public readonly Outputs.FirewallPolicyFilterRuleActionResponse? Action;
        /// <summary>
        /// Name of the Rule
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// Priority of the Firewall Policy Rule resource.
        /// </summary>
        public readonly int? Priority;
        /// <summary>
        /// Collection of rule conditions used by a rule.
        /// </summary>
        public readonly ImmutableArray<Union<Outputs.ApplicationRuleConditionResponse, Outputs.NetworkRuleConditionResponse>> RuleConditions;
        /// <summary>
        ///  The type of the rule
        /// Expected value is 'FirewallPolicyFilterRule'.
        /// </summary>
        public readonly string RuleType;

        [OutputConstructor]
        private FirewallPolicyFilterRuleResponse(
            Outputs.FirewallPolicyFilterRuleActionResponse? action,

            string? name,

            int? priority,

            ImmutableArray<Union<Outputs.ApplicationRuleConditionResponse, Outputs.NetworkRuleConditionResponse>> ruleConditions,

            string ruleType)
        {
            Action = action;
            Name = name;
            Priority = priority;
            RuleConditions = ruleConditions;
            RuleType = ruleType;
        }
    }
}
