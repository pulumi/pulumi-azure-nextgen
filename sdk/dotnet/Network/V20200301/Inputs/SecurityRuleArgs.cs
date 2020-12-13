// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200301.Inputs
{

    /// <summary>
    /// Network security rule.
    /// </summary>
    public sealed class SecurityRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The network traffic is allowed or denied.
        /// </summary>
        [Input("access", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20200301.SecurityRuleAccess> Access { get; set; } = null!;

        /// <summary>
        /// A description for this rule. Restricted to 140 chars.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
        /// </summary>
        [Input("destinationAddressPrefix")]
        public Input<string>? DestinationAddressPrefix { get; set; }

        [Input("destinationAddressPrefixes")]
        private InputList<string>? _destinationAddressPrefixes;

        /// <summary>
        /// The destination address prefixes. CIDR or destination IP ranges.
        /// </summary>
        public InputList<string> DestinationAddressPrefixes
        {
            get => _destinationAddressPrefixes ?? (_destinationAddressPrefixes = new InputList<string>());
            set => _destinationAddressPrefixes = value;
        }

        [Input("destinationApplicationSecurityGroups")]
        private InputList<Inputs.ApplicationSecurityGroupArgs>? _destinationApplicationSecurityGroups;

        /// <summary>
        /// The application security group specified as destination.
        /// </summary>
        public InputList<Inputs.ApplicationSecurityGroupArgs> DestinationApplicationSecurityGroups
        {
            get => _destinationApplicationSecurityGroups ?? (_destinationApplicationSecurityGroups = new InputList<Inputs.ApplicationSecurityGroupArgs>());
            set => _destinationApplicationSecurityGroups = value;
        }

        /// <summary>
        /// The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        /// </summary>
        [Input("destinationPortRange")]
        public Input<string>? DestinationPortRange { get; set; }

        [Input("destinationPortRanges")]
        private InputList<string>? _destinationPortRanges;

        /// <summary>
        /// The destination port ranges.
        /// </summary>
        public InputList<string> DestinationPortRanges
        {
            get => _destinationPortRanges ?? (_destinationPortRanges = new InputList<string>());
            set => _destinationPortRanges = value;
        }

        /// <summary>
        /// The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
        /// </summary>
        [Input("direction", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20200301.SecurityRuleDirection> Direction { get; set; } = null!;

        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
        /// </summary>
        [Input("priority")]
        public Input<int>? Priority { get; set; }

        /// <summary>
        /// Network protocol this rule applies to.
        /// </summary>
        [Input("protocol", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20200301.SecurityRuleProtocol> Protocol { get; set; } = null!;

        /// <summary>
        /// The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
        /// </summary>
        [Input("sourceAddressPrefix")]
        public Input<string>? SourceAddressPrefix { get; set; }

        [Input("sourceAddressPrefixes")]
        private InputList<string>? _sourceAddressPrefixes;

        /// <summary>
        /// The CIDR or source IP ranges.
        /// </summary>
        public InputList<string> SourceAddressPrefixes
        {
            get => _sourceAddressPrefixes ?? (_sourceAddressPrefixes = new InputList<string>());
            set => _sourceAddressPrefixes = value;
        }

        [Input("sourceApplicationSecurityGroups")]
        private InputList<Inputs.ApplicationSecurityGroupArgs>? _sourceApplicationSecurityGroups;

        /// <summary>
        /// The application security group specified as source.
        /// </summary>
        public InputList<Inputs.ApplicationSecurityGroupArgs> SourceApplicationSecurityGroups
        {
            get => _sourceApplicationSecurityGroups ?? (_sourceApplicationSecurityGroups = new InputList<Inputs.ApplicationSecurityGroupArgs>());
            set => _sourceApplicationSecurityGroups = value;
        }

        /// <summary>
        /// The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        /// </summary>
        [Input("sourcePortRange")]
        public Input<string>? SourcePortRange { get; set; }

        [Input("sourcePortRanges")]
        private InputList<string>? _sourcePortRanges;

        /// <summary>
        /// The source port ranges.
        /// </summary>
        public InputList<string> SourcePortRanges
        {
            get => _sourcePortRanges ?? (_sourcePortRanges = new InputList<string>());
            set => _sourcePortRanges = value;
        }

        public SecurityRuleArgs()
        {
        }
    }
}
