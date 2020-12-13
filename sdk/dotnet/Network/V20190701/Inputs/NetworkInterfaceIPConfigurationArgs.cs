// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20190701.Inputs
{

    /// <summary>
    /// IPConfiguration in a network interface.
    /// </summary>
    public sealed class NetworkInterfaceIPConfigurationArgs : Pulumi.ResourceArgs
    {
        [Input("applicationGatewayBackendAddressPools")]
        private InputList<Inputs.ApplicationGatewayBackendAddressPoolArgs>? _applicationGatewayBackendAddressPools;

        /// <summary>
        /// The reference of ApplicationGatewayBackendAddressPool resource.
        /// </summary>
        public InputList<Inputs.ApplicationGatewayBackendAddressPoolArgs> ApplicationGatewayBackendAddressPools
        {
            get => _applicationGatewayBackendAddressPools ?? (_applicationGatewayBackendAddressPools = new InputList<Inputs.ApplicationGatewayBackendAddressPoolArgs>());
            set => _applicationGatewayBackendAddressPools = value;
        }

        [Input("applicationSecurityGroups")]
        private InputList<Inputs.ApplicationSecurityGroupArgs>? _applicationSecurityGroups;

        /// <summary>
        /// Application security groups in which the IP configuration is included.
        /// </summary>
        public InputList<Inputs.ApplicationSecurityGroupArgs> ApplicationSecurityGroups
        {
            get => _applicationSecurityGroups ?? (_applicationSecurityGroups = new InputList<Inputs.ApplicationSecurityGroupArgs>());
            set => _applicationSecurityGroups = value;
        }

        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        [Input("etag")]
        public Input<string>? Etag { get; set; }

        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        [Input("loadBalancerBackendAddressPools")]
        private InputList<Inputs.BackendAddressPoolArgs>? _loadBalancerBackendAddressPools;

        /// <summary>
        /// The reference of LoadBalancerBackendAddressPool resource.
        /// </summary>
        public InputList<Inputs.BackendAddressPoolArgs> LoadBalancerBackendAddressPools
        {
            get => _loadBalancerBackendAddressPools ?? (_loadBalancerBackendAddressPools = new InputList<Inputs.BackendAddressPoolArgs>());
            set => _loadBalancerBackendAddressPools = value;
        }

        [Input("loadBalancerInboundNatRules")]
        private InputList<Inputs.InboundNatRuleArgs>? _loadBalancerInboundNatRules;

        /// <summary>
        /// A list of references of LoadBalancerInboundNatRules.
        /// </summary>
        public InputList<Inputs.InboundNatRuleArgs> LoadBalancerInboundNatRules
        {
            get => _loadBalancerInboundNatRules ?? (_loadBalancerInboundNatRules = new InputList<Inputs.InboundNatRuleArgs>());
            set => _loadBalancerInboundNatRules = value;
        }

        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Whether this is a primary customer address on the network interface.
        /// </summary>
        [Input("primary")]
        public Input<bool>? Primary { get; set; }

        /// <summary>
        /// Private IP address of the IP configuration.
        /// </summary>
        [Input("privateIPAddress")]
        public Input<string>? PrivateIPAddress { get; set; }

        /// <summary>
        /// Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
        /// </summary>
        [Input("privateIPAddressVersion")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20190701.IPVersion>? PrivateIPAddressVersion { get; set; }

        /// <summary>
        /// The private IP address allocation method.
        /// </summary>
        [Input("privateIPAllocationMethod")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20190701.IPAllocationMethod>? PrivateIPAllocationMethod { get; set; }

        /// <summary>
        /// Public IP address bound to the IP configuration.
        /// </summary>
        [Input("publicIPAddress")]
        public Input<Inputs.PublicIPAddressArgs>? PublicIPAddress { get; set; }

        /// <summary>
        /// Subnet bound to the IP configuration.
        /// </summary>
        [Input("subnet")]
        public Input<Inputs.SubnetArgs>? Subnet { get; set; }

        [Input("virtualNetworkTaps")]
        private InputList<Inputs.VirtualNetworkTapArgs>? _virtualNetworkTaps;

        /// <summary>
        /// The reference to Virtual Network Taps.
        /// </summary>
        public InputList<Inputs.VirtualNetworkTapArgs> VirtualNetworkTaps
        {
            get => _virtualNetworkTaps ?? (_virtualNetworkTaps = new InputList<Inputs.VirtualNetworkTapArgs>());
            set => _virtualNetworkTaps = value;
        }

        public NetworkInterfaceIPConfigurationArgs()
        {
        }
    }
}
