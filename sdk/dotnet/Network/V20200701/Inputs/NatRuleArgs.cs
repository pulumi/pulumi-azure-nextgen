// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200701.Inputs
{

    /// <summary>
    /// Rule of type nat.
    /// </summary>
    public sealed class NatRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Description of the rule.
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
        private InputList<string>? _ipProtocols;

        /// <summary>
        /// Array of FirewallPolicyRuleNetworkProtocols.
        /// </summary>
        public InputList<string> IpProtocols
        {
            get => _ipProtocols ?? (_ipProtocols = new InputList<string>());
            set => _ipProtocols = value;
        }

        /// <summary>
        /// Name of the rule.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Rule Type.
        /// </summary>
        [Input("ruleType", required: true)]
        public Input<string> RuleType { get; set; } = null!;

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

        [Input("sourceIpGroups")]
        private InputList<string>? _sourceIpGroups;

        /// <summary>
        /// List of source IpGroups for this rule.
        /// </summary>
        public InputList<string> SourceIpGroups
        {
            get => _sourceIpGroups ?? (_sourceIpGroups = new InputList<string>());
            set => _sourceIpGroups = value;
        }

        /// <summary>
        /// The translated address for this NAT rule.
        /// </summary>
        [Input("translatedAddress")]
        public Input<string>? TranslatedAddress { get; set; }

        /// <summary>
        /// The translated FQDN for this NAT rule.
        /// </summary>
        [Input("translatedFqdn")]
        public Input<string>? TranslatedFqdn { get; set; }

        /// <summary>
        /// The translated port for this NAT rule.
        /// </summary>
        [Input("translatedPort")]
        public Input<string>? TranslatedPort { get; set; }

        public NatRuleArgs()
        {
        }
    }
}