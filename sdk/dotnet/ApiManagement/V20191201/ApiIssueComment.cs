// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20191201
{
    /// <summary>
    /// Issue Comment Contract details.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:apimanagement/v20191201:ApiIssueComment")]
    public partial class ApiIssueComment : Pulumi.CustomResource
    {
        /// <summary>
        /// Date and time when the comment was created.
        /// </summary>
        [Output("createdDate")]
        public Output<string?> CreatedDate { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Comment text.
        /// </summary>
        [Output("text")]
        public Output<string> Text { get; private set; } = null!;

        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// A resource identifier for the user who left the comment.
        /// </summary>
        [Output("userId")]
        public Output<string> UserId { get; private set; } = null!;


        /// <summary>
        /// Create a ApiIssueComment resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ApiIssueComment(string name, ApiIssueCommentArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/v20191201:ApiIssueComment", name, args ?? new ApiIssueCommentArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ApiIssueComment(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/v20191201:ApiIssueComment", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/latest:ApiIssueComment"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20170301:ApiIssueComment"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180101:ApiIssueComment"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180601preview:ApiIssueComment"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20190101:ApiIssueComment"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20191201preview:ApiIssueComment"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20200601preview:ApiIssueComment"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ApiIssueComment resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ApiIssueComment Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ApiIssueComment(name, id, options);
        }
    }

    public sealed class ApiIssueCommentArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// API identifier. Must be unique in the current API Management service instance.
        /// </summary>
        [Input("apiId", required: true)]
        public Input<string> ApiId { get; set; } = null!;

        /// <summary>
        /// Comment identifier within an Issue. Must be unique in the current Issue.
        /// </summary>
        [Input("commentId", required: true)]
        public Input<string> CommentId { get; set; } = null!;

        /// <summary>
        /// Date and time when the comment was created.
        /// </summary>
        [Input("createdDate")]
        public Input<string>? CreatedDate { get; set; }

        /// <summary>
        /// Issue identifier. Must be unique in the current API Management service instance.
        /// </summary>
        [Input("issueId", required: true)]
        public Input<string> IssueId { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the API Management service.
        /// </summary>
        [Input("serviceName", required: true)]
        public Input<string> ServiceName { get; set; } = null!;

        /// <summary>
        /// Comment text.
        /// </summary>
        [Input("text", required: true)]
        public Input<string> Text { get; set; } = null!;

        /// <summary>
        /// A resource identifier for the user who left the comment.
        /// </summary>
        [Input("userId", required: true)]
        public Input<string> UserId { get; set; } = null!;

        public ApiIssueCommentArgs()
        {
        }
    }
}
