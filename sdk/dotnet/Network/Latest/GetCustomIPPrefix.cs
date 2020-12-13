// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.Latest
{
    public static class GetCustomIPPrefix
    {
        public static Task<GetCustomIPPrefixResult> InvokeAsync(GetCustomIPPrefixArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetCustomIPPrefixResult>("azure-nextgen:network/latest:getCustomIPPrefix", args ?? new GetCustomIPPrefixArgs(), options.WithVersion());
    }


    public sealed class GetCustomIPPrefixArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the custom IP prefix.
        /// </summary>
        [Input("customIpPrefixName", required: true)]
        public string CustomIpPrefixName { get; set; } = null!;

        /// <summary>
        /// Expands referenced resources.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetCustomIPPrefixArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetCustomIPPrefixResult
    {
        /// <summary>
        /// The prefix range in CIDR notation. Should include the start address and the prefix length.
        /// </summary>
        public readonly string? Cidr;
        /// <summary>
        /// The commissioned state of the Custom IP Prefix.
        /// </summary>
        public readonly string? CommissionedState;
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
        public readonly string? Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning state of the custom IP prefix resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The list of all referenced PublicIpPrefixes.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubResourceResponse> PublicIpPrefixes;
        /// <summary>
        /// The resource GUID property of the custom IP prefix resource.
        /// </summary>
        public readonly string ResourceGuid;
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
        private GetCustomIPPrefixResult(
            string? cidr,

            string? commissionedState,

            string etag,

            string? id,

            string? location,

            string name,

            string provisioningState,

            ImmutableArray<Outputs.SubResourceResponse> publicIpPrefixes,

            string resourceGuid,

            ImmutableDictionary<string, string>? tags,

            string type,

            ImmutableArray<string> zones)
        {
            Cidr = cidr;
            CommissionedState = commissionedState;
            Etag = etag;
            Id = id;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            PublicIpPrefixes = publicIpPrefixes;
            ResourceGuid = resourceGuid;
            Tags = tags;
            Type = type;
            Zones = zones;
        }
    }
}
