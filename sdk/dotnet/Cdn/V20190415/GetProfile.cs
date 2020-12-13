// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cdn.V20190415
{
    public static class GetProfile
    {
        public static Task<GetProfileResult> InvokeAsync(GetProfileArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetProfileResult>("azure-nextgen:cdn/v20190415:getProfile", args ?? new GetProfileArgs(), options.WithVersion());
    }


    public sealed class GetProfileArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the CDN profile which is unique within the resource group.
        /// </summary>
        [Input("profileName", required: true)]
        public string ProfileName { get; set; } = null!;

        /// <summary>
        /// Name of the Resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetProfileArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetProfileResult
    {
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Provisioning status of the profile.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Resource status of the profile.
        /// </summary>
        public readonly string ResourceState;
        /// <summary>
        /// The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.
        /// </summary>
        public readonly Outputs.SkuResponse Sku;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetProfileResult(
            string id,

            string location,

            string name,

            string provisioningState,

            string resourceState,

            Outputs.SkuResponse sku,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Id = id;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            ResourceState = resourceState;
            Sku = sku;
            Tags = tags;
            Type = type;
        }
    }
}
