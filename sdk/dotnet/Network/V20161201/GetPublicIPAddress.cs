// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20161201
{
    public static class GetPublicIPAddress
    {
        public static Task<GetPublicIPAddressResult> InvokeAsync(GetPublicIPAddressArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetPublicIPAddressResult>("azure-nextgen:network/v20161201:getPublicIPAddress", args ?? new GetPublicIPAddressArgs(), options.WithVersion());
    }


    public sealed class GetPublicIPAddressArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Expands referenced resources.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the subnet.
        /// </summary>
        [Input("publicIpAddressName", required: true)]
        public string PublicIpAddressName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetPublicIPAddressArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetPublicIPAddressResult
    {
        /// <summary>
        /// The FQDN of the DNS record associated with the public IP address.
        /// </summary>
        public readonly Outputs.PublicIPAddressDnsSettingsResponse? DnsSettings;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// The idle timeout of the public IP address.
        /// </summary>
        public readonly int? IdleTimeoutInMinutes;
        public readonly string? IpAddress;
        /// <summary>
        /// IPConfiguration
        /// </summary>
        public readonly Outputs.IPConfigurationResponse IpConfiguration;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
        /// </summary>
        public readonly string? PublicIPAddressVersion;
        /// <summary>
        /// The public IP allocation method. Possible values are: 'Static' and 'Dynamic'.
        /// </summary>
        public readonly string? PublicIPAllocationMethod;
        /// <summary>
        /// The resource GUID property of the public IP resource.
        /// </summary>
        public readonly string? ResourceGuid;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetPublicIPAddressResult(
            Outputs.PublicIPAddressDnsSettingsResponse? dnsSettings,

            string? etag,

            string? id,

            int? idleTimeoutInMinutes,

            string? ipAddress,

            Outputs.IPConfigurationResponse ipConfiguration,

            string? location,

            string name,

            string? provisioningState,

            string? publicIPAddressVersion,

            string? publicIPAllocationMethod,

            string? resourceGuid,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            DnsSettings = dnsSettings;
            Etag = etag;
            Id = id;
            IdleTimeoutInMinutes = idleTimeoutInMinutes;
            IpAddress = ipAddress;
            IpConfiguration = ipConfiguration;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            PublicIPAddressVersion = publicIPAddressVersion;
            PublicIPAllocationMethod = publicIPAllocationMethod;
            ResourceGuid = resourceGuid;
            Tags = tags;
            Type = type;
        }
    }
}
