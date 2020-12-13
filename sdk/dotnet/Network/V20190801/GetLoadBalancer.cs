// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20190801
{
    public static class GetLoadBalancer
    {
        public static Task<GetLoadBalancerResult> InvokeAsync(GetLoadBalancerArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetLoadBalancerResult>("azure-nextgen:network/v20190801:getLoadBalancer", args ?? new GetLoadBalancerArgs(), options.WithVersion());
    }


    public sealed class GetLoadBalancerArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Expands referenced resources.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the load balancer.
        /// </summary>
        [Input("loadBalancerName", required: true)]
        public string LoadBalancerName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetLoadBalancerArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetLoadBalancerResult
    {
        /// <summary>
        /// Collection of backend address pools used by a load balancer.
        /// </summary>
        public readonly ImmutableArray<Outputs.BackendAddressPoolResponse> BackendAddressPools;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// Object representing the frontend IPs to be used for the load balancer.
        /// </summary>
        public readonly ImmutableArray<Outputs.FrontendIPConfigurationResponse> FrontendIPConfigurations;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Defines an external port range for inbound NAT to a single backend port on NICs associated with a load balancer. Inbound NAT rules are created automatically for each NIC associated with the Load Balancer using an external port from this range. Defining an Inbound NAT pool on your Load Balancer is mutually exclusive with defining inbound Nat rules. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an inbound NAT pool. They have to reference individual inbound NAT rules.
        /// </summary>
        public readonly ImmutableArray<Outputs.InboundNatPoolResponse> InboundNatPools;
        /// <summary>
        /// Collection of inbound NAT Rules used by a load balancer. Defining inbound NAT rules on your load balancer is mutually exclusive with defining an inbound NAT pool. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an Inbound NAT pool. They have to reference individual inbound NAT rules.
        /// </summary>
        public readonly ImmutableArray<Outputs.InboundNatRuleResponse> InboundNatRules;
        /// <summary>
        /// Object collection representing the load balancing rules Gets the provisioning.
        /// </summary>
        public readonly ImmutableArray<Outputs.LoadBalancingRuleResponse> LoadBalancingRules;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The outbound rules.
        /// </summary>
        public readonly ImmutableArray<Outputs.OutboundRuleResponse> OutboundRules;
        /// <summary>
        /// Collection of probe objects used in the load balancer.
        /// </summary>
        public readonly ImmutableArray<Outputs.ProbeResponse> Probes;
        /// <summary>
        /// The provisioning state of the load balancer resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The resource GUID property of the load balancer resource.
        /// </summary>
        public readonly string? ResourceGuid;
        /// <summary>
        /// The load balancer SKU.
        /// </summary>
        public readonly Outputs.LoadBalancerSkuResponse? Sku;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetLoadBalancerResult(
            ImmutableArray<Outputs.BackendAddressPoolResponse> backendAddressPools,

            string? etag,

            ImmutableArray<Outputs.FrontendIPConfigurationResponse> frontendIPConfigurations,

            string? id,

            ImmutableArray<Outputs.InboundNatPoolResponse> inboundNatPools,

            ImmutableArray<Outputs.InboundNatRuleResponse> inboundNatRules,

            ImmutableArray<Outputs.LoadBalancingRuleResponse> loadBalancingRules,

            string? location,

            string name,

            ImmutableArray<Outputs.OutboundRuleResponse> outboundRules,

            ImmutableArray<Outputs.ProbeResponse> probes,

            string provisioningState,

            string? resourceGuid,

            Outputs.LoadBalancerSkuResponse? sku,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            BackendAddressPools = backendAddressPools;
            Etag = etag;
            FrontendIPConfigurations = frontendIPConfigurations;
            Id = id;
            InboundNatPools = inboundNatPools;
            InboundNatRules = inboundNatRules;
            LoadBalancingRules = loadBalancingRules;
            Location = location;
            Name = name;
            OutboundRules = outboundRules;
            Probes = probes;
            ProvisioningState = provisioningState;
            ResourceGuid = resourceGuid;
            Sku = sku;
            Tags = tags;
            Type = type;
        }
    }
}
