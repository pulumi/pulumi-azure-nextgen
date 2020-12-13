// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20180801
{
    public static class GetSecurityRule
    {
        public static Task<GetSecurityRuleResult> InvokeAsync(GetSecurityRuleArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSecurityRuleResult>("azure-nextgen:network/v20180801:getSecurityRule", args ?? new GetSecurityRuleArgs(), options.WithVersion());
    }


    public sealed class GetSecurityRuleArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the network security group.
        /// </summary>
        [Input("networkSecurityGroupName", required: true)]
        public string NetworkSecurityGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the security rule.
        /// </summary>
        [Input("securityRuleName", required: true)]
        public string SecurityRuleName { get; set; } = null!;

        public GetSecurityRuleArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetSecurityRuleResult
    {
        /// <summary>
        /// The network traffic is allowed or denied. Possible values are: 'Allow' and 'Deny'.
        /// </summary>
        public readonly string Access;
        /// <summary>
        /// A description for this rule. Restricted to 140 chars.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
        /// </summary>
        public readonly string? DestinationAddressPrefix;
        /// <summary>
        /// The destination address prefixes. CIDR or destination IP ranges.
        /// </summary>
        public readonly ImmutableArray<string> DestinationAddressPrefixes;
        /// <summary>
        /// The application security group specified as destination.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationSecurityGroupResponse> DestinationApplicationSecurityGroups;
        /// <summary>
        /// The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        /// </summary>
        public readonly string? DestinationPortRange;
        /// <summary>
        /// The destination port ranges.
        /// </summary>
        public readonly ImmutableArray<string> DestinationPortRanges;
        /// <summary>
        /// The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. Possible values are: 'Inbound' and 'Outbound'.
        /// </summary>
        public readonly string Direction;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
        /// </summary>
        public readonly int? Priority;
        /// <summary>
        /// Network protocol this rule applies to. Possible values are 'Tcp', 'Udp', and '*'.
        /// </summary>
        public readonly string Protocol;
        /// <summary>
        /// The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. 
        /// </summary>
        public readonly string? SourceAddressPrefix;
        /// <summary>
        /// The CIDR or source IP ranges.
        /// </summary>
        public readonly ImmutableArray<string> SourceAddressPrefixes;
        /// <summary>
        /// The application security group specified as source.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationSecurityGroupResponse> SourceApplicationSecurityGroups;
        /// <summary>
        /// The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
        /// </summary>
        public readonly string? SourcePortRange;
        /// <summary>
        /// The source port ranges.
        /// </summary>
        public readonly ImmutableArray<string> SourcePortRanges;

        [OutputConstructor]
        private GetSecurityRuleResult(
            string access,

            string? description,

            string? destinationAddressPrefix,

            ImmutableArray<string> destinationAddressPrefixes,

            ImmutableArray<Outputs.ApplicationSecurityGroupResponse> destinationApplicationSecurityGroups,

            string? destinationPortRange,

            ImmutableArray<string> destinationPortRanges,

            string direction,

            string? etag,

            string? id,

            string? name,

            int? priority,

            string protocol,

            string? provisioningState,

            string? sourceAddressPrefix,

            ImmutableArray<string> sourceAddressPrefixes,

            ImmutableArray<Outputs.ApplicationSecurityGroupResponse> sourceApplicationSecurityGroups,

            string? sourcePortRange,

            ImmutableArray<string> sourcePortRanges)
        {
            Access = access;
            Description = description;
            DestinationAddressPrefix = destinationAddressPrefix;
            DestinationAddressPrefixes = destinationAddressPrefixes;
            DestinationApplicationSecurityGroups = destinationApplicationSecurityGroups;
            DestinationPortRange = destinationPortRange;
            DestinationPortRanges = destinationPortRanges;
            Direction = direction;
            Etag = etag;
            Id = id;
            Name = name;
            Priority = priority;
            Protocol = protocol;
            ProvisioningState = provisioningState;
            SourceAddressPrefix = sourceAddressPrefix;
            SourceAddressPrefixes = sourceAddressPrefixes;
            SourceApplicationSecurityGroups = sourceApplicationSecurityGroups;
            SourcePortRange = sourcePortRange;
            SourcePortRanges = sourcePortRanges;
        }
    }
}
