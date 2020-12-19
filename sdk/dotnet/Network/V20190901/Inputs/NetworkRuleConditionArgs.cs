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
    /// Rule condition of type network.
    /// </summary>
    public sealed class NetworkRuleConditionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Description of the rule condition.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        [Input("destinationAddresses")]
        private InputList<string>? _destinationAddresses;

        /// <summary>
        /// List of destination IP addresses or Service Tags.
        /// </summary>
        public InputList<string> DestinationAddresses
        {
            get => _destinationAddresses ?? (_destinationAddresses = new InputList<string>());
            set => _destinationAddresses = value;
        }

        [Input("destinationPorts")]
        private InputList<string>? _destinationPorts;

        /// <summary>
        /// List of destination ports.
        /// </summary>
        public InputList<string> DestinationPorts
        {
            get => _destinationPorts ?? (_destinationPorts = new InputList<string>());
            set => _destinationPorts = value;
        }

        [Input("ipProtocols")]
        private InputList<Union<string, Pulumi.AzureNextGen.Network.V20190901.FirewallPolicyRuleConditionNetworkProtocol>>? _ipProtocols;

        /// <summary>
        /// Array of FirewallPolicyRuleConditionNetworkProtocols.
        /// </summary>
        public InputList<Union<string, Pulumi.AzureNextGen.Network.V20190901.FirewallPolicyRuleConditionNetworkProtocol>> IpProtocols
        {
            get => _ipProtocols ?? (_ipProtocols = new InputList<Union<string, Pulumi.AzureNextGen.Network.V20190901.FirewallPolicyRuleConditionNetworkProtocol>>());
            set => _ipProtocols = value;
        }

        /// <summary>
        /// Name of the rule condition.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Rule Condition Type.
        /// Expected value is 'NetworkRuleCondition'.
        /// </summary>
        [Input("ruleConditionType", required: true)]
        public Input<string> RuleConditionType { get; set; } = null!;

        [Input("sourceAddresses")]
        private InputList<string>? _sourceAddresses;

        /// <summary>
        /// List of source IP addresses for this rule.
        /// </summary>
        public InputList<string> SourceAddresses
        {
            get => _sourceAddresses ?? (_sourceAddresses = new InputList<string>());
            set => _sourceAddresses = value;
        }

        public NetworkRuleConditionArgs()
        {
        }
    }
}
