// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20201001Preview
{
    public static class GetCloudService
    {
        public static Task<GetCloudServiceResult> InvokeAsync(GetCloudServiceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetCloudServiceResult>("azure-nextgen:compute/v20201001preview:getCloudService", args ?? new GetCloudServiceArgs(), options.WithVersion());
    }


    public sealed class GetCloudServiceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the cloud service.
        /// </summary>
        [Input("cloudServiceName", required: true)]
        public string CloudServiceName { get; set; } = null!;

        /// <summary>
        /// Name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetCloudServiceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetCloudServiceResult
    {
        /// <summary>
        /// Resource Id.
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
        /// Cloud service properties
        /// </summary>
        public readonly Outputs.CloudServicePropertiesResponse Properties;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetCloudServiceResult(
            string id,

            string location,

            string name,

            Outputs.CloudServicePropertiesResponse properties,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Id = id;
            Location = location;
            Name = name;
            Properties = properties;
            Tags = tags;
            Type = type;
        }
    }
}
