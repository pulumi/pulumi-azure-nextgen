// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Devices.V20170119
{
    public static class GetIotHubResource
    {
        public static Task<GetIotHubResourceResult> InvokeAsync(GetIotHubResourceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetIotHubResourceResult>("azure-nextgen:devices/v20170119:getIotHubResource", args ?? new GetIotHubResourceArgs(), options.WithVersion());
    }


    public sealed class GetIotHubResourceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group that contains the IoT hub.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the IoT hub.
        /// </summary>
        [Input("resourceName", required: true)]
        public string ResourceName { get; set; } = null!;

        public GetIotHubResourceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetIotHubResourceResult
    {
        /// <summary>
        /// The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// The resource identifier.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The resource location.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The properties of an IoT hub.
        /// </summary>
        public readonly Outputs.IotHubPropertiesResponse Properties;
        /// <summary>
        /// The name of the resource group that contains the IoT hub. A resource group name uniquely identifies the resource group within the subscription.
        /// </summary>
        public readonly string Resourcegroup;
        /// <summary>
        /// Information about the SKU of the IoT hub.
        /// </summary>
        public readonly Outputs.IotHubSkuInfoResponse Sku;
        /// <summary>
        /// The subscription identifier.
        /// </summary>
        public readonly string Subscriptionid;
        /// <summary>
        /// The resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetIotHubResourceResult(
            string? etag,

            string id,

            string location,

            string name,

            Outputs.IotHubPropertiesResponse properties,

            string resourcegroup,

            Outputs.IotHubSkuInfoResponse sku,

            string subscriptionid,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Etag = etag;
            Id = id;
            Location = location;
            Name = name;
            Properties = properties;
            Resourcegroup = resourcegroup;
            Sku = sku;
            Subscriptionid = subscriptionid;
            Tags = tags;
            Type = type;
        }
    }
}
