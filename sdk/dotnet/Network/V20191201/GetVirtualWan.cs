// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20191201
{
    public static class GetVirtualWan
    {
        public static Task<GetVirtualWanResult> InvokeAsync(GetVirtualWanArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVirtualWanResult>("azure-nextgen:network/v20191201:getVirtualWan", args ?? new GetVirtualWanArgs(), options.WithVersion());
    }


    public sealed class GetVirtualWanArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The resource group name of the VirtualWan.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the VirtualWAN being retrieved.
        /// </summary>
        [Input("virtualWANName", required: true)]
        public string VirtualWANName { get; set; } = null!;

        public GetVirtualWanArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetVirtualWanResult
    {
        /// <summary>
        /// True if branch to branch traffic is allowed.
        /// </summary>
        public readonly bool? AllowBranchToBranchTraffic;
        /// <summary>
        /// True if Vnet to Vnet traffic is allowed.
        /// </summary>
        public readonly bool? AllowVnetToVnetTraffic;
        /// <summary>
        /// Vpn encryption to be disabled or not.
        /// </summary>
        public readonly bool? DisableVpnEncryption;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The office local breakout category.
        /// </summary>
        public readonly string Office365LocalBreakoutCategory;
        /// <summary>
        /// The provisioning state of the virtual WAN resource.
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
        /// List of VirtualHubs in the VirtualWAN.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubResourceResponse> VirtualHubs;
        /// <summary>
        /// List of VpnSites in the VirtualWAN.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubResourceResponse> VpnSites;

        [OutputConstructor]
        private GetVirtualWanResult(
            bool? allowBranchToBranchTraffic,

            bool? allowVnetToVnetTraffic,

            bool? disableVpnEncryption,

            string etag,

            string? id,

            string location,

            string name,

            string office365LocalBreakoutCategory,

            string provisioningState,

            ImmutableDictionary<string, string>? tags,

            string type,

            ImmutableArray<Outputs.SubResourceResponse> virtualHubs,

            ImmutableArray<Outputs.SubResourceResponse> vpnSites)
        {
            AllowBranchToBranchTraffic = allowBranchToBranchTraffic;
            AllowVnetToVnetTraffic = allowVnetToVnetTraffic;
            DisableVpnEncryption = disableVpnEncryption;
            Etag = etag;
            Id = id;
            Location = location;
            Name = name;
            Office365LocalBreakoutCategory = office365LocalBreakoutCategory;
            ProvisioningState = provisioningState;
            Tags = tags;
            Type = type;
            VirtualHubs = virtualHubs;
            VpnSites = vpnSites;
        }
    }
}
