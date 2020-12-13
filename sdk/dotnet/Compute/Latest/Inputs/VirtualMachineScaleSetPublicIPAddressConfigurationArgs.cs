// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.Latest.Inputs
{

    /// <summary>
    /// Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration
    /// </summary>
    public sealed class VirtualMachineScaleSetPublicIPAddressConfigurationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The dns settings to be applied on the publicIP addresses .
        /// </summary>
        [Input("dnsSettings")]
        public Input<Inputs.VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettingsArgs>? DnsSettings { get; set; }

        /// <summary>
        /// The idle timeout of the public IP address.
        /// </summary>
        [Input("idleTimeoutInMinutes")]
        public Input<int>? IdleTimeoutInMinutes { get; set; }

        [Input("ipTags")]
        private InputList<Inputs.VirtualMachineScaleSetIpTagArgs>? _ipTags;

        /// <summary>
        /// The list of IP tags associated with the public IP address.
        /// </summary>
        public InputList<Inputs.VirtualMachineScaleSetIpTagArgs> IpTags
        {
            get => _ipTags ?? (_ipTags = new InputList<Inputs.VirtualMachineScaleSetIpTagArgs>());
            set => _ipTags = value;
        }

        /// <summary>
        /// The publicIP address configuration name.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Available from Api-Version 2019-07-01 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. Possible values are: 'IPv4' and 'IPv6'.
        /// </summary>
        [Input("publicIPAddressVersion")]
        public InputUnion<string, Pulumi.AzureNextGen.Compute.Latest.IPVersion>? PublicIPAddressVersion { get; set; }

        /// <summary>
        /// The PublicIPPrefix from which to allocate publicIP addresses.
        /// </summary>
        [Input("publicIPPrefix")]
        public Input<Inputs.SubResourceArgs>? PublicIPPrefix { get; set; }

        public VirtualMachineScaleSetPublicIPAddressConfigurationArgs()
        {
        }
    }
}
