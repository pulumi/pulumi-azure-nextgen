// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20180601Preview
{
    public static class GetApiRelease
    {
        public static Task<GetApiReleaseResult> InvokeAsync(GetApiReleaseArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetApiReleaseResult>("azure-nextgen:apimanagement/v20180601preview:getApiRelease", args ?? new GetApiReleaseArgs(), options.WithVersion());
    }


    public sealed class GetApiReleaseArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// API identifier. Must be unique in the current API Management service instance.
        /// </summary>
        [Input("apiId", required: true)]
        public string ApiId { get; set; } = null!;

        /// <summary>
        /// Release identifier within an API. Must be unique in the current API Management service instance.
        /// </summary>
        [Input("releaseId", required: true)]
        public string ReleaseId { get; set; } = null!;

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

        public GetApiReleaseArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetApiReleaseResult
    {
        /// <summary>
        /// Identifier of the API the release belongs to.
        /// </summary>
        public readonly string? ApiId;
        /// <summary>
        /// The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
        /// </summary>
        public readonly string CreatedDateTime;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Release Notes
        /// </summary>
        public readonly string? Notes;
        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The time the API release was updated.
        /// </summary>
        public readonly string UpdatedDateTime;

        [OutputConstructor]
        private GetApiReleaseResult(
            string? apiId,

            string createdDateTime,

            string id,

            string name,

            string? notes,

            string type,

            string updatedDateTime)
        {
            ApiId = apiId;
            CreatedDateTime = createdDateTime;
            Id = id;
            Name = name;
            Notes = notes;
            Type = type;
            UpdatedDateTime = updatedDateTime;
        }
    }
}
