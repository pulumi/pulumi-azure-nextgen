// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20190701
{
    public static class GetVirtualRouterPeering
    {
        public static Task<GetVirtualRouterPeeringResult> InvokeAsync(GetVirtualRouterPeeringArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVirtualRouterPeeringResult>("azure-nextgen:network/v20190701:getVirtualRouterPeering", args ?? new GetVirtualRouterPeeringArgs(), options.WithVersion());
    }


    public sealed class GetVirtualRouterPeeringArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Virtual Router Peering.
        /// </summary>
        [Input("peeringName", required: true)]
        public string PeeringName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the Virtual Router.
        /// </summary>
        [Input("virtualRouterName", required: true)]
        public string VirtualRouterName { get; set; } = null!;

        public GetVirtualRouterPeeringArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetVirtualRouterPeeringResult
    {
        /// <summary>
        /// Gets a unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Gets name of the peering unique to VirtualRouter. This name can be used to access the resource.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// Peer ASN.
        /// </summary>
        public readonly int? PeerAsn;
        /// <summary>
        /// Peer IP.
        /// </summary>
        public readonly string? PeerIp;
        /// <summary>
        /// The provisioning state of the resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Peering type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetVirtualRouterPeeringResult(
            string etag,

            string? id,

            string? name,

            int? peerAsn,

            string? peerIp,

            string provisioningState,

            string type)
        {
            Etag = etag;
            Id = id;
            Name = name;
            PeerAsn = peerAsn;
            PeerIp = peerIp;
            ProvisioningState = provisioningState;
            Type = type;
        }
    }
}
