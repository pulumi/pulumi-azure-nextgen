// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20190101
{
    /// <summary>
    /// Recipient User details.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:apimanagement/v20190101:NotificationRecipientUser")]
    public partial class NotificationRecipientUser : Pulumi.CustomResource
    {
        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// API Management UserId subscribed to notification.
        /// </summary>
        [Output("userId")]
        public Output<string?> UserId { get; private set; } = null!;


        /// <summary>
        /// Create a NotificationRecipientUser resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public NotificationRecipientUser(string name, NotificationRecipientUserArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/v20190101:NotificationRecipientUser", name, args ?? new NotificationRecipientUserArgs(), MakeResourceOptions(options, ""))
        {
        }

        private NotificationRecipientUser(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/v20190101:NotificationRecipientUser", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/latest:NotificationRecipientUser"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20170301:NotificationRecipientUser"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180101:NotificationRecipientUser"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180601preview:NotificationRecipientUser"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20191201:NotificationRecipientUser"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20191201preview:NotificationRecipientUser"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20200601preview:NotificationRecipientUser"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing NotificationRecipientUser resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static NotificationRecipientUser Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new NotificationRecipientUser(name, id, options);
        }
    }

    public sealed class NotificationRecipientUserArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Notification Name Identifier.
        /// </summary>
        [Input("notificationName", required: true)]
        public Input<string> NotificationName { get; set; } = null!;

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
        /// User identifier. Must be unique in the current API Management service instance.
        /// </summary>
        [Input("userId", required: true)]
        public Input<string> UserId { get; set; } = null!;

        public NotificationRecipientUserArgs()
        {
        }
    }
}