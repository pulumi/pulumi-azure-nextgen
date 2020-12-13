// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.Latest
{
    public static class GetVirtualHubIpConfiguration
    {
        public static Task<GetVirtualHubIpConfigurationResult> InvokeAsync(GetVirtualHubIpConfigurationArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVirtualHubIpConfigurationResult>("azure-nextgen:network/latest:getVirtualHubIpConfiguration", args ?? new GetVirtualHubIpConfigurationArgs(), options.WithVersion());
    }


    public sealed class GetVirtualHubIpConfigurationArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the ipconfig.
        /// </summary>
        [Input("ipConfigName", required: true)]
        public string IpConfigName { get; set; } = null!;

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

        public GetVirtualHubIpConfigurationArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetVirtualHubIpConfigurationResult
    {
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Name of the Ip Configuration.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The private IP address of the IP configuration.
        /// </summary>
        public readonly string? PrivateIPAddress;
        /// <summary>
        /// The private IP address allocation method.
        /// </summary>
        public readonly string? PrivateIPAllocationMethod;
        /// <summary>
        /// The provisioning state of the IP configuration resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The reference to the public IP resource.
        /// </summary>
        public readonly Outputs.PublicIPAddressResponse? PublicIPAddress;
        /// <summary>
        /// The reference to the subnet resource.
        /// </summary>
        public readonly Outputs.SubnetResponse? Subnet;
        /// <summary>
        /// Ipconfiguration type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetVirtualHubIpConfigurationResult(
            string etag,

            string? id,

            string? name,

            string? privateIPAddress,

            string? privateIPAllocationMethod,

            string provisioningState,

            Outputs.PublicIPAddressResponse? publicIPAddress,

            Outputs.SubnetResponse? subnet,

            string type)
        {
            Etag = etag;
            Id = id;
            Name = name;
            PrivateIPAddress = privateIPAddress;
            PrivateIPAllocationMethod = privateIPAllocationMethod;
            ProvisioningState = provisioningState;
            PublicIPAddress = publicIPAddress;
            Subnet = subnet;
            Type = type;
        }
    }
}
