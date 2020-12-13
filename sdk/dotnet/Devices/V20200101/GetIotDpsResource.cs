// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Devices.V20200101
{
    public static class GetIotDpsResource
    {
        public static Task<GetIotDpsResourceResult> InvokeAsync(GetIotDpsResourceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetIotDpsResourceResult>("azure-nextgen:devices/v20200101:getIotDpsResource", args ?? new GetIotDpsResourceArgs(), options.WithVersion());
    }


    public sealed class GetIotDpsResourceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the provisioning service to retrieve.
        /// </summary>
        [Input("provisioningServiceName", required: true)]
        public string ProvisioningServiceName { get; set; } = null!;

        /// <summary>
        /// Resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetIotDpsResourceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetIotDpsResourceResult
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
        /// Service specific properties for a provisioning service
        /// </summary>
        public readonly Outputs.IotDpsPropertiesDescriptionResponse Properties;
        /// <summary>
        /// Sku info for a provisioning Service.
        /// </summary>
        public readonly Outputs.IotDpsSkuInfoResponse Sku;
        /// <summary>
        /// The resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetIotDpsResourceResult(
            string? etag,

            string id,

            string location,

            string name,

            Outputs.IotDpsPropertiesDescriptionResponse properties,

            Outputs.IotDpsSkuInfoResponse sku,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Etag = etag;
            Id = id;
            Location = location;
            Name = name;
            Properties = properties;
            Sku = sku;
            Tags = tags;
            Type = type;
        }
    }
}
