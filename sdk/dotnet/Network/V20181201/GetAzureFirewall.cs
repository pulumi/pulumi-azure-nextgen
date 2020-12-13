// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20181201
{
    public static class GetAzureFirewall
    {
        public static Task<GetAzureFirewallResult> InvokeAsync(GetAzureFirewallArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetAzureFirewallResult>("azure-nextgen:network/v20181201:getAzureFirewall", args ?? new GetAzureFirewallArgs(), options.WithVersion());
    }


    public sealed class GetAzureFirewallArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Azure Firewall.
        /// </summary>
        [Input("azureFirewallName", required: true)]
        public string AzureFirewallName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetAzureFirewallArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetAzureFirewallResult
    {
        /// <summary>
        /// Collection of application rule collections used by Azure Firewall.
        /// </summary>
        public readonly ImmutableArray<Outputs.AzureFirewallApplicationRuleCollectionResponse> ApplicationRuleCollections;
        /// <summary>
        /// Gets a unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// IP configuration of the Azure Firewall resource.
        /// </summary>
        public readonly ImmutableArray<Outputs.AzureFirewallIPConfigurationResponse> IpConfigurations;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Collection of NAT rule collections used by Azure Firewall.
        /// </summary>
        public readonly ImmutableArray<Outputs.AzureFirewallNatRuleCollectionResponse> NatRuleCollections;
        /// <summary>
        /// Collection of network rule collections used by Azure Firewall.
        /// </summary>
        public readonly ImmutableArray<Outputs.AzureFirewallNetworkRuleCollectionResponse> NetworkRuleCollections;
        /// <summary>
        /// The provisioning state of the resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The operation mode for Threat Intelligence.
        /// </summary>
        public readonly string? ThreatIntelMode;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetAzureFirewallResult(
            ImmutableArray<Outputs.AzureFirewallApplicationRuleCollectionResponse> applicationRuleCollections,

            string etag,

            string? id,

            ImmutableArray<Outputs.AzureFirewallIPConfigurationResponse> ipConfigurations,

            string? location,

            string name,

            ImmutableArray<Outputs.AzureFirewallNatRuleCollectionResponse> natRuleCollections,

            ImmutableArray<Outputs.AzureFirewallNetworkRuleCollectionResponse> networkRuleCollections,

            string provisioningState,

            ImmutableDictionary<string, string>? tags,

            string? threatIntelMode,

            string type)
        {
            ApplicationRuleCollections = applicationRuleCollections;
            Etag = etag;
            Id = id;
            IpConfigurations = ipConfigurations;
            Location = location;
            Name = name;
            NatRuleCollections = natRuleCollections;
            NetworkRuleCollections = networkRuleCollections;
            ProvisioningState = provisioningState;
            Tags = tags;
            ThreatIntelMode = threatIntelMode;
            Type = type;
        }
    }
}
