// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200601
{
    public static class GetVirtualNetworkPeering
    {
        public static Task<GetVirtualNetworkPeeringResult> InvokeAsync(GetVirtualNetworkPeeringArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVirtualNetworkPeeringResult>("azure-nextgen:network/v20200601:getVirtualNetworkPeering", args ?? new GetVirtualNetworkPeeringArgs(), options.WithVersion());
    }


    public sealed class GetVirtualNetworkPeeringArgs : Pulumi.InvokeArgs
    {
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

        /// <summary>
        /// The name of the virtual network peering.
        /// </summary>
        [Input("virtualNetworkPeeringName", required: true)]
        public string VirtualNetworkPeeringName { get; set; } = null!;

        public GetVirtualNetworkPeeringArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetVirtualNetworkPeeringResult
    {
        /// <summary>
        /// Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
        /// </summary>
        public readonly bool? AllowForwardedTraffic;
        /// <summary>
        /// If gateway links can be used in remote virtual networking to link to this virtual network.
        /// </summary>
        public readonly bool? AllowGatewayTransit;
        /// <summary>
        /// Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
        /// </summary>
        public readonly bool? AllowVirtualNetworkAccess;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The status of the virtual network peering.
        /// </summary>
        public readonly string? PeeringState;
        /// <summary>
        /// The provisioning state of the virtual network peering resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The reference to the remote virtual network address space.
        /// </summary>
        public readonly Outputs.AddressSpaceResponse? RemoteAddressSpace;
        /// <summary>
        /// The reference to the remote virtual network's Bgp Communities.
        /// </summary>
        public readonly Outputs.VirtualNetworkBgpCommunitiesResponse? RemoteBgpCommunities;
        /// <summary>
        /// The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
        /// </summary>
        public readonly Outputs.SubResourceResponse? RemoteVirtualNetwork;
        /// <summary>
        /// If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
        /// </summary>
        public readonly bool? UseRemoteGateways;

        [OutputConstructor]
        private GetVirtualNetworkPeeringResult(
            bool? allowForwardedTraffic,

            bool? allowGatewayTransit,

            bool? allowVirtualNetworkAccess,

            string etag,

            string? id,

            string? name,

            string? peeringState,

            string provisioningState,

            Outputs.AddressSpaceResponse? remoteAddressSpace,

            Outputs.VirtualNetworkBgpCommunitiesResponse? remoteBgpCommunities,

            Outputs.SubResourceResponse? remoteVirtualNetwork,

            bool? useRemoteGateways)
        {
            AllowForwardedTraffic = allowForwardedTraffic;
            AllowGatewayTransit = allowGatewayTransit;
            AllowVirtualNetworkAccess = allowVirtualNetworkAccess;
            Etag = etag;
            Id = id;
            Name = name;
            PeeringState = peeringState;
            ProvisioningState = provisioningState;
            RemoteAddressSpace = remoteAddressSpace;
            RemoteBgpCommunities = remoteBgpCommunities;
            RemoteVirtualNetwork = remoteVirtualNetwork;
            UseRemoteGateways = useRemoteGateways;
        }
    }
}
