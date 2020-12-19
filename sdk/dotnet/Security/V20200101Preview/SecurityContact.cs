// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Security.V20200101Preview
{
    /// <summary>
    /// Contact details and configurations for notifications coming from Azure Security Center.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:security/v20200101preview:SecurityContact")]
    public partial class SecurityContact : Pulumi.CustomResource
    {
        /// <summary>
        /// Defines whether to send email notifications about new security alerts
        /// </summary>
        [Output("alertNotifications")]
        public Output<Outputs.SecurityContactPropertiesResponseAlertNotifications?> AlertNotifications { get; private set; } = null!;

        /// <summary>
        /// List of email addresses which will get notifications from Azure Security Center by the configurations defined in this security contact.
        /// </summary>
        [Output("emails")]
        public Output<string?> Emails { get; private set; } = null!;

        /// <summary>
        /// Resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Defines whether to send email notifications from Azure Security Center to persons with specific RBAC roles on the subscription.
        /// </summary>
        [Output("notificationsByRole")]
        public Output<Outputs.SecurityContactPropertiesResponseNotificationsByRole?> NotificationsByRole { get; private set; } = null!;

        /// <summary>
        /// The security contact's phone number
        /// </summary>
        [Output("phone")]
        public Output<string?> Phone { get; private set; } = null!;

        /// <summary>
        /// Resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a SecurityContact resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public SecurityContact(string name, SecurityContactArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:security/v20200101preview:SecurityContact", name, args ?? new SecurityContactArgs(), MakeResourceOptions(options, ""))
        {
        }

        private SecurityContact(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:security/v20200101preview:SecurityContact", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:security/v20170801preview:SecurityContact"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing SecurityContact resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static SecurityContact Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new SecurityContact(name, id, options);
        }
    }

    public sealed class SecurityContactArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of the security contact object
        /// </summary>
        [Input("securityContactName", required: true)]
        public Input<string> SecurityContactName { get; set; } = null!;

        public SecurityContactArgs()
        {
        }
    }
}
