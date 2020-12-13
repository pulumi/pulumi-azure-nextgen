// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.Latest
{
    public static class GetNetworkVirtualAppliance
    {
        public static Task<GetNetworkVirtualApplianceResult> InvokeAsync(GetNetworkVirtualApplianceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetNetworkVirtualApplianceResult>("azure-nextgen:network/latest:getNetworkVirtualAppliance", args ?? new GetNetworkVirtualApplianceArgs(), options.WithVersion());
    }


    public sealed class GetNetworkVirtualApplianceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Expands referenced resources.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of Network Virtual Appliance.
        /// </summary>
        [Input("networkVirtualApplianceName", required: true)]
        public string NetworkVirtualApplianceName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetNetworkVirtualApplianceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetNetworkVirtualApplianceResult
    {
        /// <summary>
        /// Address Prefix.
        /// </summary>
        public readonly string AddressPrefix;
        /// <summary>
        /// BootStrapConfigurationBlobs storage URLs.
        /// </summary>
        public readonly ImmutableArray<string> BootStrapConfigurationBlobs;
        /// <summary>
        /// CloudInitConfiguration string in plain text.
        /// </summary>
        public readonly string? CloudInitConfiguration;
        /// <summary>
        /// CloudInitConfigurationBlob storage URLs.
        /// </summary>
        public readonly ImmutableArray<string> CloudInitConfigurationBlobs;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// The service principal that has read access to cloud-init and config blob.
        /// </summary>
        public readonly Outputs.ManagedServiceIdentityResponse? Identity;
        /// <summary>
        /// List of references to InboundSecurityRules.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubResourceResponse> InboundSecurityRules;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Network Virtual Appliance SKU.
        /// </summary>
        public readonly Outputs.VirtualApplianceSkuPropertiesResponse? NvaSku;
        /// <summary>
        /// The provisioning state of the resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// VirtualAppliance ASN.
        /// </summary>
        public readonly int? VirtualApplianceAsn;
        /// <summary>
        /// List of Virtual Appliance Network Interfaces.
        /// </summary>
        public readonly ImmutableArray<Outputs.VirtualApplianceNicPropertiesResponse> VirtualApplianceNics;
        /// <summary>
        /// List of references to VirtualApplianceSite.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubResourceResponse> VirtualApplianceSites;
        /// <summary>
        /// The Virtual Hub where Network Virtual Appliance is being deployed.
        /// </summary>
        public readonly Outputs.SubResourceResponse? VirtualHub;

        [OutputConstructor]
        private GetNetworkVirtualApplianceResult(
            string addressPrefix,

            ImmutableArray<string> bootStrapConfigurationBlobs,

            string? cloudInitConfiguration,

            ImmutableArray<string> cloudInitConfigurationBlobs,

            string etag,

            string? id,

            Outputs.ManagedServiceIdentityResponse? identity,

            ImmutableArray<Outputs.SubResourceResponse> inboundSecurityRules,

            string? location,

            string name,

            Outputs.VirtualApplianceSkuPropertiesResponse? nvaSku,

            string provisioningState,

            ImmutableDictionary<string, string>? tags,

            string type,

            int? virtualApplianceAsn,

            ImmutableArray<Outputs.VirtualApplianceNicPropertiesResponse> virtualApplianceNics,

            ImmutableArray<Outputs.SubResourceResponse> virtualApplianceSites,

            Outputs.SubResourceResponse? virtualHub)
        {
            AddressPrefix = addressPrefix;
            BootStrapConfigurationBlobs = bootStrapConfigurationBlobs;
            CloudInitConfiguration = cloudInitConfiguration;
            CloudInitConfigurationBlobs = cloudInitConfigurationBlobs;
            Etag = etag;
            Id = id;
            Identity = identity;
            InboundSecurityRules = inboundSecurityRules;
            Location = location;
            Name = name;
            NvaSku = nvaSku;
            ProvisioningState = provisioningState;
            Tags = tags;
            Type = type;
            VirtualApplianceAsn = virtualApplianceAsn;
            VirtualApplianceNics = virtualApplianceNics;
            VirtualApplianceSites = virtualApplianceSites;
            VirtualHub = virtualHub;
        }
    }
}
