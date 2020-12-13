// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20181101
{
    public static class GetVirtualNetworkGateway
    {
        public static Task<GetVirtualNetworkGatewayResult> InvokeAsync(GetVirtualNetworkGatewayArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVirtualNetworkGatewayResult>("azure-nextgen:network/v20181101:getVirtualNetworkGateway", args ?? new GetVirtualNetworkGatewayArgs(), options.WithVersion());
    }


    public sealed class GetVirtualNetworkGatewayArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the virtual network gateway.
        /// </summary>
        [Input("virtualNetworkGatewayName", required: true)]
        public string VirtualNetworkGatewayName { get; set; } = null!;

        public GetVirtualNetworkGatewayArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetVirtualNetworkGatewayResult
    {
        /// <summary>
        /// ActiveActive flag
        /// </summary>
        public readonly bool? ActiveActive;
        /// <summary>
        /// Virtual network gateway's BGP speaker settings.
        /// </summary>
        public readonly Outputs.BgpSettingsResponse? BgpSettings;
        /// <summary>
        /// Whether BGP is enabled for this virtual network gateway or not.
        /// </summary>
        public readonly bool? EnableBgp;
        /// <summary>
        /// Gets a unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// The reference of the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
        /// </summary>
        public readonly Outputs.SubResourceResponse? GatewayDefaultSite;
        /// <summary>
        /// The type of this virtual network gateway. Possible values are: 'Vpn' and 'ExpressRoute'.
        /// </summary>
        public readonly string? GatewayType;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// IP configurations for virtual network gateway.
        /// </summary>
        public readonly ImmutableArray<Outputs.VirtualNetworkGatewayIPConfigurationResponse> IpConfigurations;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning state of the VirtualNetworkGateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The resource GUID property of the VirtualNetworkGateway resource.
        /// </summary>
        public readonly string? ResourceGuid;
        /// <summary>
        /// The reference of the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
        /// </summary>
        public readonly Outputs.VirtualNetworkGatewaySkuResponse? Sku;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The reference of the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
        /// </summary>
        public readonly Outputs.VpnClientConfigurationResponse? VpnClientConfiguration;
        /// <summary>
        /// The type of this virtual network gateway. Possible values are: 'PolicyBased' and 'RouteBased'.
        /// </summary>
        public readonly string? VpnType;

        [OutputConstructor]
        private GetVirtualNetworkGatewayResult(
            bool? activeActive,

            Outputs.BgpSettingsResponse? bgpSettings,

            bool? enableBgp,

            string? etag,

            Outputs.SubResourceResponse? gatewayDefaultSite,

            string? gatewayType,

            string? id,

            ImmutableArray<Outputs.VirtualNetworkGatewayIPConfigurationResponse> ipConfigurations,

            string? location,

            string name,

            string provisioningState,

            string? resourceGuid,

            Outputs.VirtualNetworkGatewaySkuResponse? sku,

            ImmutableDictionary<string, string>? tags,

            string type,

            Outputs.VpnClientConfigurationResponse? vpnClientConfiguration,

            string? vpnType)
        {
            ActiveActive = activeActive;
            BgpSettings = bgpSettings;
            EnableBgp = enableBgp;
            Etag = etag;
            GatewayDefaultSite = gatewayDefaultSite;
            GatewayType = gatewayType;
            Id = id;
            IpConfigurations = ipConfigurations;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            ResourceGuid = resourceGuid;
            Sku = sku;
            Tags = tags;
            Type = type;
            VpnClientConfiguration = vpnClientConfiguration;
            VpnType = vpnType;
        }
    }
}
