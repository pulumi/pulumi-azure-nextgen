// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20190801.Inputs
{

    /// <summary>
    /// Defines contents of a web application rule.
    /// </summary>
    public sealed class WebApplicationFirewallCustomRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Type of Actions.
        /// </summary>
        [Input("action", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20190801.WebApplicationFirewallAction> Action { get; set; } = null!;

        [Input("matchConditions", required: true)]
        private InputList<Inputs.MatchConditionArgs>? _matchConditions;

        /// <summary>
        /// List of match conditions.
        /// </summary>
        public InputList<Inputs.MatchConditionArgs> MatchConditions
        {
            get => _matchConditions ?? (_matchConditions = new InputList<Inputs.MatchConditionArgs>());
            set => _matchConditions = value;
        }

        /// <summary>
        /// The name of the resource that is unique within a policy. This name can be used to access the resource.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
        /// </summary>
        [Input("priority", required: true)]
        public Input<int> Priority { get; set; } = null!;

        /// <summary>
        /// Describes type of rule.
        /// </summary>
        [Input("ruleType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20190801.WebApplicationFirewallRuleType> RuleType { get; set; } = null!;

        public WebApplicationFirewallCustomRuleArgs()
        {
        }
    }
}
