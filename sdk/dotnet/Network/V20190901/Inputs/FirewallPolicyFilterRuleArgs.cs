// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20190901.Inputs
{

    /// <summary>
    /// Firewall Policy Filter Rule.
    /// </summary>
    public sealed class FirewallPolicyFilterRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The action type of a Filter rule.
        /// </summary>
        [Input("action")]
        public Input<Inputs.FirewallPolicyFilterRuleActionArgs>? Action { get; set; }

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

        [Input("ruleConditions")]
        private InputList<Union<Inputs.ApplicationRuleConditionArgs, Inputs.NetworkRuleConditionArgs>>? _ruleConditions;

        /// <summary>
        /// Collection of rule conditions used by a rule.
        /// </summary>
        public InputList<Union<Inputs.ApplicationRuleConditionArgs, Inputs.NetworkRuleConditionArgs>> RuleConditions
        {
            get => _ruleConditions ?? (_ruleConditions = new InputList<Union<Inputs.ApplicationRuleConditionArgs, Inputs.NetworkRuleConditionArgs>>());
            set => _ruleConditions = value;
        }

        /// <summary>
        /// The type of the rule.
        /// Expected value is 'FirewallPolicyFilterRule'.
        /// </summary>
        [Input("ruleType", required: true)]
        public Input<string> RuleType { get; set; } = null!;

        public FirewallPolicyFilterRuleArgs()
        {
        }
    }
}
