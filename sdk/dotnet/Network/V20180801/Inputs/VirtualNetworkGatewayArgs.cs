// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20180801.Inputs
{

    /// <summary>
    /// A common class for general resource information
    /// </summary>
    public sealed class VirtualNetworkGatewayArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// ActiveActive flag
        /// </summary>
        [Input("activeActive")]
        public Input<bool>? ActiveActive { get; set; }

        /// <summary>
        /// Virtual network gateway's BGP speaker settings.
        /// </summary>
        [Input("bgpSettings")]
        public Input<Inputs.BgpSettingsArgs>? BgpSettings { get; set; }

        /// <summary>
        /// Whether BGP is enabled for this virtual network gateway or not.
        /// </summary>
        [Input("enableBgp")]
        public Input<bool>? EnableBgp { get; set; }

        /// <summary>
        /// Gets a unique read-only string that changes whenever the resource is updated.
        /// </summary>
        [Input("etag")]
        public Input<string>? Etag { get; set; }

        /// <summary>
        /// The reference of the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
        /// </summary>
        [Input("gatewayDefaultSite")]
        public Input<Inputs.SubResourceArgs>? GatewayDefaultSite { get; set; }

        /// <summary>
        /// The type of this virtual network gateway. Possible values are: 'Vpn' and 'ExpressRoute'.
        /// </summary>
        [Input("gatewayType")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20180801.VirtualNetworkGatewayType>? GatewayType { get; set; }

        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        [Input("ipConfigurations")]
        private InputList<Inputs.VirtualNetworkGatewayIPConfigurationArgs>? _ipConfigurations;

        /// <summary>
        /// IP configurations for virtual network gateway.
        /// </summary>
        public InputList<Inputs.VirtualNetworkGatewayIPConfigurationArgs> IpConfigurations
        {
            get => _ipConfigurations ?? (_ipConfigurations = new InputList<Inputs.VirtualNetworkGatewayIPConfigurationArgs>());
            set => _ipConfigurations = value;
        }

        /// <summary>
        /// Resource location.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The resource GUID property of the VirtualNetworkGateway resource.
        /// </summary>
        [Input("resourceGuid")]
        public Input<string>? ResourceGuid { get; set; }

        /// <summary>
        /// The reference of the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
        /// </summary>
        [Input("sku")]
        public Input<Inputs.VirtualNetworkGatewaySkuArgs>? Sku { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The reference of the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
        /// </summary>
        [Input("vpnClientConfiguration")]
        public Input<Inputs.VpnClientConfigurationArgs>? VpnClientConfiguration { get; set; }

        /// <summary>
        /// The type of this virtual network gateway. Possible values are: 'PolicyBased' and 'RouteBased'.
        /// </summary>
        [Input("vpnType")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20180801.VpnType>? VpnType { get; set; }

        public VirtualNetworkGatewayArgs()
        {
        }
    }
}
