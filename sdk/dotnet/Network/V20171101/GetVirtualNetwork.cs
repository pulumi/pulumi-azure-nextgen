// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20171101
{
    public static class GetVirtualNetwork
    {
        public static Task<GetVirtualNetworkResult> InvokeAsync(GetVirtualNetworkArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVirtualNetworkResult>("azure-nextgen:network/v20171101:getVirtualNetwork", args ?? new GetVirtualNetworkArgs(), options.WithVersion());
    }


    public sealed class GetVirtualNetworkArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Expands referenced resources.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the virtual network.
        /// </summary>
        [Input("virtualNetworkName", required: true)]
        public string VirtualNetworkName { get; set; } = null!;

        public GetVirtualNetworkArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetVirtualNetworkResult
    {
        /// <summary>
        /// The AddressSpace that contains an array of IP address ranges that can be used by subnets.
        /// </summary>
        public readonly Outputs.AddressSpaceResponse? AddressSpace;
        /// <summary>
        /// The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network.
        /// </summary>
        public readonly Outputs.DhcpOptionsResponse? DhcpOptions;
        /// <summary>
        /// Indicates if DDoS protection is enabled for all the protected resources in a Virtual Network.
        /// </summary>
        public readonly bool? EnableDdosProtection;
        /// <summary>
        /// Indicates if Vm protection is enabled for all the subnets in a Virtual Network.
        /// </summary>
        public readonly bool? EnableVmProtection;
        /// <summary>
        /// Gets a unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// The resourceGuid property of the Virtual Network resource.
        /// </summary>
        public readonly string? ResourceGuid;
        /// <summary>
        /// A list of subnets in a Virtual Network.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubnetResponse> Subnets;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// A list of peerings in a Virtual Network.
        /// </summary>
        public readonly ImmutableArray<Outputs.VirtualNetworkPeeringResponse> VirtualNetworkPeerings;

        [OutputConstructor]
        private GetVirtualNetworkResult(
            Outputs.AddressSpaceResponse? addressSpace,

            Outputs.DhcpOptionsResponse? dhcpOptions,

            bool? enableDdosProtection,

            bool? enableVmProtection,

            string? etag,

            string? id,

            string? location,

            string name,

            string? provisioningState,

            string? resourceGuid,

            ImmutableArray<Outputs.SubnetResponse> subnets,

            ImmutableDictionary<string, string>? tags,

            string type,

            ImmutableArray<Outputs.VirtualNetworkPeeringResponse> virtualNetworkPeerings)
        {
            AddressSpace = addressSpace;
            DhcpOptions = dhcpOptions;
            EnableDdosProtection = enableDdosProtection;
            EnableVmProtection = enableVmProtection;
            Etag = etag;
            Id = id;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            ResourceGuid = resourceGuid;
            Subnets = subnets;
            Tags = tags;
            Type = type;
            VirtualNetworkPeerings = virtualNetworkPeerings;
        }
    }
}
