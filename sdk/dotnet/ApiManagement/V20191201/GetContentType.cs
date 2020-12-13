// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20191201
{
    public static class GetContentType
    {
        public static Task<GetContentTypeResult> InvokeAsync(GetContentTypeArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetContentTypeResult>("azure-nextgen:apimanagement/v20191201:getContentType", args ?? new GetContentTypeArgs(), options.WithVersion());
    }


    public sealed class GetContentTypeArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Content type identifier.
        /// </summary>
        [Input("contentTypeId", required: true)]
        public string ContentTypeId { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the API Management service.
        /// </summary>
        [Input("serviceName", required: true)]
        public string ServiceName { get; set; } = null!;

        public GetContentTypeArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetContentTypeResult
    {
        /// <summary>
        /// Content type description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Content type schema.
        /// </summary>
        public readonly object? Schema;
        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Content type version.
        /// </summary>
        public readonly string? Version;

        [OutputConstructor]
        private GetContentTypeResult(
            string? description,

            string id,

            string name,

            object? schema,

            string type,

            string? version)
        {
            Description = description;
            Id = id;
            Name = name;
            Schema = schema;
            Type = type;
            Version = version;
        }
    }
}
