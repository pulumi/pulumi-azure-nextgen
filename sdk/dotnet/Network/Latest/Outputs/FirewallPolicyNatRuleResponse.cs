// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.Latest.Outputs
{

    [OutputType]
    public sealed class FirewallPolicyNatRuleResponse
    {
        /// <summary>
        /// The action type of a Nat rule.
        /// </summary>
        public readonly Outputs.FirewallPolicyNatRuleActionResponse? Action;
        /// <summary>
        /// The name of the rule.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// Priority of the Firewall Policy Rule resource.
        /// </summary>
        public readonly int? Priority;
        /// <summary>
        /// The match conditions for incoming traffic.
        /// </summary>
        public readonly Union<Outputs.ApplicationRuleConditionResponse, Union<Outputs.NatRuleConditionResponse, Outputs.NetworkRuleConditionResponse>>? RuleCondition;
        /// <summary>
        /// The type of the rule.
        /// Expected value is 'FirewallPolicyNatRule'.
        /// </summary>
        public readonly string RuleType;
        /// <summary>
        /// The translated address for this NAT rule.
        /// </summary>
        public readonly string? TranslatedAddress;
        /// <summary>
        /// The translated port for this NAT rule.
        /// </summary>
        public readonly string? TranslatedPort;

        [OutputConstructor]
        private FirewallPolicyNatRuleResponse(
            Outputs.FirewallPolicyNatRuleActionResponse? action,

            string? name,

            int? priority,

            Union<Outputs.ApplicationRuleConditionResponse, Union<Outputs.NatRuleConditionResponse, Outputs.NetworkRuleConditionResponse>>? ruleCondition,

            string ruleType,

            string? translatedAddress,

            string? translatedPort)
        {
            Action = action;
            Name = name;
            Priority = priority;
            RuleCondition = ruleCondition;
            RuleType = ruleType;
            TranslatedAddress = translatedAddress;
            TranslatedPort = translatedPort;
        }
    }
}
