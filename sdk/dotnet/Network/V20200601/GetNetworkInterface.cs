// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200601
{
    public static class GetNetworkInterface
    {
        public static Task<GetNetworkInterfaceResult> InvokeAsync(GetNetworkInterfaceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetNetworkInterfaceResult>("azure-nextgen:network/v20200601:getNetworkInterface", args ?? new GetNetworkInterfaceArgs(), options.WithVersion());
    }


    public sealed class GetNetworkInterfaceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Expands referenced resources.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the network interface.
        /// </summary>
        [Input("networkInterfaceName", required: true)]
        public string NetworkInterfaceName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetNetworkInterfaceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetNetworkInterfaceResult
    {
        /// <summary>
        /// The DNS settings in network interface.
        /// </summary>
        public readonly Outputs.NetworkInterfaceDnsSettingsResponse? DnsSettings;
        /// <summary>
        /// A reference to the dscp configuration to which the network interface is linked.
        /// </summary>
        public readonly Outputs.SubResourceResponse DscpConfiguration;
        /// <summary>
        /// If the network interface is accelerated networking enabled.
        /// </summary>
        public readonly bool? EnableAcceleratedNetworking;
        /// <summary>
        /// Indicates whether IP forwarding is enabled on this network interface.
        /// </summary>
        public readonly bool? EnableIPForwarding;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// A list of references to linked BareMetal resources.
        /// </summary>
        public readonly ImmutableArray<string> HostedWorkloads;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// A list of IPConfigurations of the network interface.
        /// </summary>
        public readonly ImmutableArray<Outputs.NetworkInterfaceIPConfigurationResponse> IpConfigurations;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The MAC address of the network interface.
        /// </summary>
        public readonly string MacAddress;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The reference to the NetworkSecurityGroup resource.
        /// </summary>
        public readonly Outputs.NetworkSecurityGroupResponse? NetworkSecurityGroup;
        /// <summary>
        /// Whether this is a primary network interface on a virtual machine.
        /// </summary>
        public readonly bool Primary;
        /// <summary>
        /// A reference to the private endpoint to which the network interface is linked.
        /// </summary>
        public readonly Outputs.PrivateEndpointResponse PrivateEndpoint;
        /// <summary>
        /// The provisioning state of the network interface resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The resource GUID property of the network interface resource.
        /// </summary>
        public readonly string ResourceGuid;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// A list of TapConfigurations of the network interface.
        /// </summary>
        public readonly ImmutableArray<Outputs.NetworkInterfaceTapConfigurationResponse> TapConfigurations;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The reference to a virtual machine.
        /// </summary>
        public readonly Outputs.SubResourceResponse VirtualMachine;

        [OutputConstructor]
        private GetNetworkInterfaceResult(
            Outputs.NetworkInterfaceDnsSettingsResponse? dnsSettings,

            Outputs.SubResourceResponse dscpConfiguration,

            bool? enableAcceleratedNetworking,

            bool? enableIPForwarding,

            string etag,

            ImmutableArray<string> hostedWorkloads,

            string? id,

            ImmutableArray<Outputs.NetworkInterfaceIPConfigurationResponse> ipConfigurations,

            string? location,

            string macAddress,

            string name,

            Outputs.NetworkSecurityGroupResponse? networkSecurityGroup,

            bool primary,

            Outputs.PrivateEndpointResponse privateEndpoint,

            string provisioningState,

            string resourceGuid,

            ImmutableDictionary<string, string>? tags,

            ImmutableArray<Outputs.NetworkInterfaceTapConfigurationResponse> tapConfigurations,

            string type,

            Outputs.SubResourceResponse virtualMachine)
        {
            DnsSettings = dnsSettings;
            DscpConfiguration = dscpConfiguration;
            EnableAcceleratedNetworking = enableAcceleratedNetworking;
            EnableIPForwarding = enableIPForwarding;
            Etag = etag;
            HostedWorkloads = hostedWorkloads;
            Id = id;
            IpConfigurations = ipConfigurations;
            Location = location;
            MacAddress = macAddress;
            Name = name;
            NetworkSecurityGroup = networkSecurityGroup;
            Primary = primary;
            PrivateEndpoint = privateEndpoint;
            ProvisioningState = provisioningState;
            ResourceGuid = resourceGuid;
            Tags = tags;
            TapConfigurations = tapConfigurations;
            Type = type;
            VirtualMachine = virtualMachine;
        }
    }
}
