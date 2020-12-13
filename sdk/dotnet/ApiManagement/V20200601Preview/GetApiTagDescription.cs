// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20200601Preview
{
    public static class GetApiTagDescription
    {
        public static Task<GetApiTagDescriptionResult> InvokeAsync(GetApiTagDescriptionArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetApiTagDescriptionResult>("azure-nextgen:apimanagement/v20200601preview:getApiTagDescription", args ?? new GetApiTagDescriptionArgs(), options.WithVersion());
    }


    public sealed class GetApiTagDescriptionArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
        /// </summary>
        [Input("apiId", required: true)]
        public string ApiId { get; set; } = null!;

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
        /// Tag description identifier. Used when creating tagDescription for API/Tag association. Based on API and Tag names.
        /// </summary>
        [Input("tagDescriptionId", required: true)]
        public string TagDescriptionId { get; set; } = null!;

        public GetApiTagDescriptionArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetApiTagDescriptionResult
    {
        /// <summary>
        /// Description of the Tag.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Tag name.
        /// </summary>
        public readonly string? DisplayName;
        /// <summary>
        /// Description of the external resources describing the tag.
        /// </summary>
        public readonly string? ExternalDocsDescription;
        /// <summary>
        /// Absolute URL of external resources describing the tag.
        /// </summary>
        public readonly string? ExternalDocsUrl;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Identifier of the tag in the form of /tags/{tagId}
        /// </summary>
        public readonly string? TagId;
        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetApiTagDescriptionResult(
            string? description,

            string? displayName,

            string? externalDocsDescription,

            string? externalDocsUrl,

            string id,

            string name,

            string? tagId,

            string type)
        {
            Description = description;
            DisplayName = displayName;
            ExternalDocsDescription = externalDocsDescription;
            ExternalDocsUrl = externalDocsUrl;
            Id = id;
            Name = name;
            TagId = tagId;
            Type = type;
        }
    }
}
