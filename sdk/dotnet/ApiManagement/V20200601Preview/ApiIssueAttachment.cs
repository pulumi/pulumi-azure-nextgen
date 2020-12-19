// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20200601Preview
{
    /// <summary>
    /// Issue Attachment Contract details.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:apimanagement/v20200601preview:ApiIssueAttachment")]
    public partial class ApiIssueAttachment : Pulumi.CustomResource
    {
        /// <summary>
        /// An HTTP link or Base64-encoded binary data.
        /// </summary>
        [Output("content")]
        public Output<string> Content { get; private set; } = null!;

        /// <summary>
        /// Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property.
        /// </summary>
        [Output("contentFormat")]
        public Output<string> ContentFormat { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Filename by which the binary data will be saved.
        /// </summary>
        [Output("title")]
        public Output<string> Title { get; private set; } = null!;

        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ApiIssueAttachment resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ApiIssueAttachment(string name, ApiIssueAttachmentArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/v20200601preview:ApiIssueAttachment", name, args ?? new ApiIssueAttachmentArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ApiIssueAttachment(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/v20200601preview:ApiIssueAttachment", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/latest:ApiIssueAttachment"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20170301:ApiIssueAttachment"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180101:ApiIssueAttachment"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180601preview:ApiIssueAttachment"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20190101:ApiIssueAttachment"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20191201:ApiIssueAttachment"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20191201preview:ApiIssueAttachment"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ApiIssueAttachment resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ApiIssueAttachment Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ApiIssueAttachment(name, id, options);
        }
    }

    public sealed class ApiIssueAttachmentArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// API identifier. Must be unique in the current API Management service instance.
        /// </summary>
        [Input("apiId", required: true)]
        public Input<string> ApiId { get; set; } = null!;

        /// <summary>
        /// Attachment identifier within an Issue. Must be unique in the current Issue.
        /// </summary>
        [Input("attachmentId", required: true)]
        public Input<string> AttachmentId { get; set; } = null!;

        /// <summary>
        /// An HTTP link or Base64-encoded binary data.
        /// </summary>
        [Input("content", required: true)]
        public Input<string> Content { get; set; } = null!;

        /// <summary>
        /// Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property.
        /// </summary>
        [Input("contentFormat", required: true)]
        public Input<string> ContentFormat { get; set; } = null!;

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
        /// Filename by which the binary data will be saved.
        /// </summary>
        [Input("title", required: true)]
        public Input<string> Title { get; set; } = null!;

        public ApiIssueAttachmentArgs()
        {
        }
    }
}
