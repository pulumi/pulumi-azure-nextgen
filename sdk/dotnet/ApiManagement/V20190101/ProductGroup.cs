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
    /// Contract details.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:apimanagement/v20190101:ProductGroup")]
    public partial class ProductGroup : Pulumi.CustomResource
    {
        /// <summary>
        /// true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
        /// </summary>
        [Output("builtIn")]
        public Output<bool> BuiltIn { get; private set; } = null!;

        /// <summary>
        /// Group description. Can contain HTML formatting tags.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// Group name.
        /// </summary>
        [Output("displayName")]
        public Output<string> DisplayName { get; private set; } = null!;

        /// <summary>
        /// For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory `aad://&lt;tenant&gt;.onmicrosoft.com/groups/&lt;group object id&gt;`; otherwise the value is null.
        /// </summary>
        [Output("externalId")]
        public Output<string?> ExternalId { get; private set; } = null!;

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
        /// Create a ProductGroup resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ProductGroup(string name, ProductGroupArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/v20190101:ProductGroup", name, args ?? new ProductGroupArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ProductGroup(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/v20190101:ProductGroup", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/latest:ProductGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20170301:ProductGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180101:ProductGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180601preview:ProductGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20191201:ProductGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20191201preview:ProductGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20200601preview:ProductGroup"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ProductGroup resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ProductGroup Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ProductGroup(name, id, options);
        }
    }

    public sealed class ProductGroupArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Group identifier. Must be unique in the current API Management service instance.
        /// </summary>
        [Input("groupId", required: true)]
        public Input<string> GroupId { get; set; } = null!;

        /// <summary>
        /// Product identifier. Must be unique in the current API Management service instance.
        /// </summary>
        [Input("productId", required: true)]
        public Input<string> ProductId { get; set; } = null!;

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

        public ProductGroupArgs()
        {
        }
    }
}