// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200501.Inputs
{

    /// <summary>
    /// Frontend IP address of the load balancer.
    /// </summary>
    public sealed class FrontendIPConfigurationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The private IP address of the IP configuration.
        /// </summary>
        [Input("privateIPAddress")]
        public Input<string>? PrivateIPAddress { get; set; }

        /// <summary>
        /// Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
        /// </summary>
        [Input("privateIPAddressVersion")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20200501.IPVersion>? PrivateIPAddressVersion { get; set; }

        /// <summary>
        /// The Private IP allocation method.
        /// </summary>
        [Input("privateIPAllocationMethod")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20200501.IPAllocationMethod>? PrivateIPAllocationMethod { get; set; }

        /// <summary>
        /// The reference to the Public IP resource.
        /// </summary>
        [Input("publicIPAddress")]
        public Input<Inputs.PublicIPAddressArgs>? PublicIPAddress { get; set; }

        /// <summary>
        /// The reference to the Public IP Prefix resource.
        /// </summary>
        [Input("publicIPPrefix")]
        public Input<Inputs.SubResourceArgs>? PublicIPPrefix { get; set; }

        /// <summary>
        /// The reference to the subnet resource.
        /// </summary>
        [Input("subnet")]
        public Input<Inputs.SubnetArgs>? Subnet { get; set; }

        [Input("zones")]
        private InputList<string>? _zones;

        /// <summary>
        /// A list of availability zones denoting the IP allocated for the resource needs to come from.
        /// </summary>
        public InputList<string> Zones
        {
            get => _zones ?? (_zones = new InputList<string>());
            set => _zones = value;
        }

        public FrontendIPConfigurationArgs()
        {
        }
    }
}
