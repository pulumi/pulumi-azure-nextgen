// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200701
{
    public static class GetPublicIPAddress
    {
        public static Task<GetPublicIPAddressResult> InvokeAsync(GetPublicIPAddressArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetPublicIPAddressResult>("azure-nextgen:network/v20200701:getPublicIPAddress", args ?? new GetPublicIPAddressArgs(), options.WithVersion());
    }


    public sealed class GetPublicIPAddressArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Expands referenced resources.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the public IP address.
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
        /// The DDoS protection custom policy associated with the public IP address.
        /// </summary>
        public readonly Outputs.DdosSettingsResponse? DdosSettings;
        /// <summary>
        /// The FQDN of the DNS record associated with the public IP address.
        /// </summary>
        public readonly Outputs.PublicIPAddressDnsSettingsResponse? DnsSettings;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// The extended location of the public ip address.
        /// </summary>
        public readonly Outputs.ExtendedLocationResponse? ExtendedLocation;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// The idle timeout of the public IP address.
        /// </summary>
        public readonly int? IdleTimeoutInMinutes;
        /// <summary>
        /// The IP address associated with the public IP address resource.
        /// </summary>
        public readonly string? IpAddress;
        /// <summary>
        /// The IP configuration associated with the public IP address.
        /// </summary>
        public readonly Outputs.IPConfigurationResponse IpConfiguration;
        /// <summary>
        /// The list of tags associated with the public IP address.
        /// </summary>
        public readonly ImmutableArray<Outputs.IpTagResponse> IpTags;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning state of the public IP address resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The public IP address version.
        /// </summary>
        public readonly string? PublicIPAddressVersion;
        /// <summary>
        /// The public IP address allocation method.
        /// </summary>
        public readonly string? PublicIPAllocationMethod;
        /// <summary>
        /// The Public IP Prefix this Public IP Address should be allocated from.
        /// </summary>
        public readonly Outputs.SubResourceResponse? PublicIPPrefix;
        /// <summary>
        /// The resource GUID property of the public IP address resource.
        /// </summary>
        public readonly string ResourceGuid;
        /// <summary>
        /// The public IP address SKU.
        /// </summary>
        public readonly Outputs.PublicIPAddressSkuResponse? Sku;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// A list of availability zones denoting the IP allocated for the resource needs to come from.
        /// </summary>
        public readonly ImmutableArray<string> Zones;

        [OutputConstructor]
        private GetPublicIPAddressResult(
            Outputs.DdosSettingsResponse? ddosSettings,

            Outputs.PublicIPAddressDnsSettingsResponse? dnsSettings,

            string etag,

            Outputs.ExtendedLocationResponse? extendedLocation,

            string? id,

            int? idleTimeoutInMinutes,

            string? ipAddress,

            Outputs.IPConfigurationResponse ipConfiguration,

            ImmutableArray<Outputs.IpTagResponse> ipTags,

            string? location,

            string name,

            string provisioningState,

            string? publicIPAddressVersion,

            string? publicIPAllocationMethod,

            Outputs.SubResourceResponse? publicIPPrefix,

            string resourceGuid,

            Outputs.PublicIPAddressSkuResponse? sku,

            ImmutableDictionary<string, string>? tags,

            string type,

            ImmutableArray<string> zones)
        {
            DdosSettings = ddosSettings;
            DnsSettings = dnsSettings;
            Etag = etag;
            ExtendedLocation = extendedLocation;
            Id = id;
            IdleTimeoutInMinutes = idleTimeoutInMinutes;
            IpAddress = ipAddress;
            IpConfiguration = ipConfiguration;
            IpTags = ipTags;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            PublicIPAddressVersion = publicIPAddressVersion;
            PublicIPAllocationMethod = publicIPAllocationMethod;
            PublicIPPrefix = publicIPPrefix;
            ResourceGuid = resourceGuid;
            Sku = sku;
            Tags = tags;
            Type = type;
            Zones = zones;
        }
    }
}
