// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.Latest.Inputs
{

    /// <summary>
    /// Firewall Policy NAT Rule.
    /// </summary>
    public sealed class FirewallPolicyNatRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The action type of a Nat rule.
        /// </summary>
        [Input("action")]
        public Input<Inputs.FirewallPolicyNatRuleActionArgs>? Action { get; set; }

        /// <summary>
        /// The name of the rule.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Priority of the Firewall Policy Rule resource.
        /// </summary>
        [Input("priority")]
        public Input<int>? Priority { get; set; }

        /// <summary>
        /// The match conditions for incoming traffic.
        /// </summary>
        [Input("ruleCondition")]
        public InputUnion<Inputs.ApplicationRuleConditionArgs, InputUnion<Inputs.NatRuleConditionArgs, Inputs.NetworkRuleConditionArgs>>? RuleCondition { get; set; }

        /// <summary>
        /// The type of the rule.
        /// Expected value is 'FirewallPolicyNatRule'.
        /// </summary>
        [Input("ruleType", required: true)]
        public Input<string> RuleType { get; set; } = null!;

        /// <summary>
        /// The translated address for this NAT rule.
        /// </summary>
        [Input("translatedAddress")]
        public Input<string>? TranslatedAddress { get; set; }

        /// <summary>
        /// The translated port for this NAT rule.
        /// </summary>
        [Input("translatedPort")]
        public Input<string>? TranslatedPort { get; set; }

        public FirewallPolicyNatRuleArgs()
        {
        }
    }
}
