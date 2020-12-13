// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.SecurityInsights.V20190101Preview
{
    public static class GetBookmarkRelation
    {
        public static Task<GetBookmarkRelationResult> InvokeAsync(GetBookmarkRelationArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetBookmarkRelationResult>("azure-nextgen:securityinsights/v20190101preview:getBookmarkRelation", args ?? new GetBookmarkRelationArgs(), options.WithVersion());
    }


    public sealed class GetBookmarkRelationArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Bookmark ID
        /// </summary>
        [Input("bookmarkId", required: true)]
        public string BookmarkId { get; set; } = null!;

        /// <summary>
        /// The namespace of workspaces resource provider- Microsoft.OperationalInsights.
        /// </summary>
        [Input("operationalInsightsResourceProvider", required: true)]
        public string OperationalInsightsResourceProvider { get; set; } = null!;

        /// <summary>
        /// Relation Name
        /// </summary>
        [Input("relationName", required: true)]
        public string RelationName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group within the user's subscription. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the workspace.
        /// </summary>
        [Input("workspaceName", required: true)]
        public string WorkspaceName { get; set; } = null!;

        public GetBookmarkRelationArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetBookmarkRelationResult
    {
        /// <summary>
        /// Etag of the azure resource
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// Azure resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Azure resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The resource ID of the related resource
        /// </summary>
        public readonly string RelatedResourceId;
        /// <summary>
        /// The resource kind of the related resource
        /// </summary>
        public readonly string RelatedResourceKind;
        /// <summary>
        /// The name of the related resource
        /// </summary>
        public readonly string RelatedResourceName;
        /// <summary>
        /// The resource type of the related resource
        /// </summary>
        public readonly string RelatedResourceType;
        /// <summary>
        /// Azure resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetBookmarkRelationResult(
            string? etag,

            string id,

            string name,

            string relatedResourceId,

            string relatedResourceKind,

            string relatedResourceName,

            string relatedResourceType,

            string type)
        {
            Etag = etag;
            Id = id;
            Name = name;
            RelatedResourceId = relatedResourceId;
            RelatedResourceKind = relatedResourceKind;
            RelatedResourceName = relatedResourceName;
            RelatedResourceType = relatedResourceType;
            Type = type;
        }
    }
}
