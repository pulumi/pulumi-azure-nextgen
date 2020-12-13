// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20180101
{
    public static class GetApiVersionSet
    {
        public static Task<GetApiVersionSetResult> InvokeAsync(GetApiVersionSetArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetApiVersionSetResult>("azure-nextgen:apimanagement/v20180101:getApiVersionSet", args ?? new GetApiVersionSetArgs(), options.WithVersion());
    }


    public sealed class GetApiVersionSetArgs : Pulumi.InvokeArgs
    {
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

        /// <summary>
        /// Api Version Set identifier. Must be unique in the current API Management service instance.
        /// </summary>
        [Input("versionSetId", required: true)]
        public string VersionSetId { get; set; } = null!;

        public GetApiVersionSetArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetApiVersionSetResult
    {
        /// <summary>
        /// Description of API Version Set.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Name of API Version Set
        /// </summary>
        public readonly string DisplayName;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
        /// </summary>
        public readonly string? VersionHeaderName;
        /// <summary>
        /// Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
        /// </summary>
        public readonly string? VersionQueryName;
        /// <summary>
        /// An value that determines where the API Version identifer will be located in a HTTP request.
        /// </summary>
        public readonly string VersioningScheme;

        [OutputConstructor]
        private GetApiVersionSetResult(
            string? description,

            string displayName,

            string id,

            string name,

            string type,

            string? versionHeaderName,

            string? versionQueryName,

            string versioningScheme)
        {
            Description = description;
            DisplayName = displayName;
            Id = id;
            Name = name;
            Type = type;
            VersionHeaderName = versionHeaderName;
            VersionQueryName = versionQueryName;
            VersioningScheme = versioningScheme;
        }
    }
}
