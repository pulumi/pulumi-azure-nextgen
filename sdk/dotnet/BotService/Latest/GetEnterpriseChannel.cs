// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.BotService.Latest
{
    public static class GetEnterpriseChannel
    {
        public static Task<GetEnterpriseChannelResult> InvokeAsync(GetEnterpriseChannelArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetEnterpriseChannelResult>("azure-nextgen:botservice/latest:getEnterpriseChannel", args ?? new GetEnterpriseChannelArgs(), options.WithVersion());
    }


    public sealed class GetEnterpriseChannelArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Bot resource group in the user subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the Bot resource.
        /// </summary>
        [Input("resourceName", required: true)]
        public string ResourceName { get; set; } = null!;

        public GetEnterpriseChannelArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetEnterpriseChannelResult
    {
        /// <summary>
        /// Entity Tag
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// Specifies the resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Required. Gets or sets the Kind of the resource.
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// Specifies the location of the resource.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Specifies the name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The set of properties specific to an Enterprise Channel resource.
        /// </summary>
        public readonly Outputs.EnterpriseChannelPropertiesResponse Properties;
        /// <summary>
        /// Gets or sets the SKU of the resource.
        /// </summary>
        public readonly Outputs.SkuResponse? Sku;
        /// <summary>
        /// Contains resource tags defined as key/value pairs.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Specifies the type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetEnterpriseChannelResult(
            string? etag,

            string id,

            string? kind,

            string? location,

            string name,

            Outputs.EnterpriseChannelPropertiesResponse properties,

            Outputs.SkuResponse? sku,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Etag = etag;
            Id = id;
            Kind = kind;
            Location = location;
            Name = name;
            Properties = properties;
            Sku = sku;
            Tags = tags;
            Type = type;
        }
    }
}
