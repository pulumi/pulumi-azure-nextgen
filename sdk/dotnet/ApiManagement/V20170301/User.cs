// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20170301
{
    /// <summary>
    /// User details.
    /// </summary>
    public partial class User : Pulumi.CustomResource
    {
        /// <summary>
        /// Email address.
        /// </summary>
        [Output("email")]
        public Output<string?> Email { get; private set; } = null!;

        /// <summary>
        /// First name.
        /// </summary>
        [Output("firstName")]
        public Output<string?> FirstName { get; private set; } = null!;

        /// <summary>
        /// Collection of groups user is part of.
        /// </summary>
        [Output("groups")]
        public Output<ImmutableArray<Outputs.GroupContractResponse>> Groups { get; private set; } = null!;

        /// <summary>
        /// Collection of user identities.
        /// </summary>
        [Output("identities")]
        public Output<ImmutableArray<Outputs.UserIdentityContractResponse>> Identities { get; private set; } = null!;

        /// <summary>
        /// Last name.
        /// </summary>
        [Output("lastName")]
        public Output<string?> LastName { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Optional note about a user set by the administrator.
        /// </summary>
        [Output("note")]
        public Output<string?> Note { get; private set; } = null!;

        /// <summary>
        /// Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        /// </summary>
        [Output("registrationDate")]
        public Output<string?> RegistrationDate { get; private set; } = null!;

        /// <summary>
        /// Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
        /// </summary>
        [Output("state")]
        public Output<string?> State { get; private set; } = null!;

        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a User resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public User(string name, UserArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/v20170301:User", name, args ?? new UserArgs(), MakeResourceOptions(options, ""))
        {
        }

        private User(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/v20170301:User", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/latest:User"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20160707:User"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20161010:User"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180101:User"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180601preview:User"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20190101:User"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20191201:User"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20191201preview:User"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20200601preview:User"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing User resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static User Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new User(name, id, options);
        }
    }

    public sealed class UserArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Determines the type of confirmation e-mail that will be sent to the newly created user.
        /// </summary>
        [Input("confirmation")]
        public InputUnion<string, Pulumi.AzureNextGen.ApiManagement.V20170301.Confirmation>? Confirmation { get; set; }

        /// <summary>
        /// Email address. Must not be empty and must be unique within the service instance.
        /// </summary>
        [Input("email", required: true)]
        public Input<string> Email { get; set; } = null!;

        /// <summary>
        /// First name.
        /// </summary>
        [Input("firstName", required: true)]
        public Input<string> FirstName { get; set; } = null!;

        /// <summary>
        /// Last name.
        /// </summary>
        [Input("lastName", required: true)]
        public Input<string> LastName { get; set; } = null!;

        /// <summary>
        /// Optional note about a user set by the administrator.
        /// </summary>
        [Input("note")]
        public Input<string>? Note { get; set; }

        /// <summary>
        /// User Password. If no value is provided, a default password is generated.
        /// </summary>
        [Input("password")]
        public Input<string>? Password { get; set; }

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
        /// Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
        /// </summary>
        [Input("state")]
        public InputUnion<string, Pulumi.AzureNextGen.ApiManagement.V20170301.UserState>? State { get; set; }

        /// <summary>
        /// User identifier. Must be unique in the current API Management service instance.
        /// </summary>
        [Input("uid", required: true)]
        public Input<string> Uid { get; set; } = null!;

        public UserArgs()
        {
        }
    }
}
