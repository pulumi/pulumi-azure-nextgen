// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200501
{
    public static class GetHubVirtualNetworkConnection
    {
        public static Task<GetHubVirtualNetworkConnectionResult> InvokeAsync(GetHubVirtualNetworkConnectionArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetHubVirtualNetworkConnectionResult>("azure-nextgen:network/v20200501:getHubVirtualNetworkConnection", args ?? new GetHubVirtualNetworkConnectionArgs(), options.WithVersion());
    }


    public sealed class GetHubVirtualNetworkConnectionArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the vpn connection.
        /// </summary>
        [Input("connectionName", required: true)]
        public string ConnectionName { get; set; } = null!;

        /// <summary>
        /// The resource group name of the VirtualHub.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the VirtualHub.
        /// </summary>
        [Input("virtualHubName", required: true)]
        public string VirtualHubName { get; set; } = null!;

        public GetHubVirtualNetworkConnectionArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetHubVirtualNetworkConnectionResult
    {
        /// <summary>
        /// Deprecated: VirtualHub to RemoteVnet transit to enabled or not.
        /// </summary>
        public readonly bool? AllowHubToRemoteVnetTransit;
        /// <summary>
        /// Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.
        /// </summary>
        public readonly bool? AllowRemoteVnetToUseHubVnetGateways;
        /// <summary>
        /// Enable internet security.
        /// </summary>
        public readonly bool? EnableInternetSecurity;
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
        /// The provisioning state of the hub virtual network connection resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Reference to the remote virtual network.
        /// </summary>
        public readonly Outputs.SubResourceResponse? RemoteVirtualNetwork;
        /// <summary>
        /// The Routing Configuration indicating the associated and propagated route tables on this connection.
        /// </summary>
        public readonly Outputs.RoutingConfigurationResponse? RoutingConfiguration;

        [OutputConstructor]
        private GetHubVirtualNetworkConnectionResult(
            bool? allowHubToRemoteVnetTransit,

            bool? allowRemoteVnetToUseHubVnetGateways,

            bool? enableInternetSecurity,

            string etag,

            string? id,

            string? name,

            string provisioningState,

            Outputs.SubResourceResponse? remoteVirtualNetwork,

            Outputs.RoutingConfigurationResponse? routingConfiguration)
        {
            AllowHubToRemoteVnetTransit = allowHubToRemoteVnetTransit;
            AllowRemoteVnetToUseHubVnetGateways = allowRemoteVnetToUseHubVnetGateways;
            EnableInternetSecurity = enableInternetSecurity;
            Etag = etag;
            Id = id;
            Name = name;
            ProvisioningState = provisioningState;
            RemoteVirtualNetwork = remoteVirtualNetwork;
            RoutingConfiguration = routingConfiguration;
        }
    }
}
