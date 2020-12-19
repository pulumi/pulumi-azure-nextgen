// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20191201Preview
{
    /// <summary>
    /// Tag Contract details.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:apimanagement/v20191201preview:TagByProduct")]
    public partial class TagByProduct : Pulumi.CustomResource
    {
        /// <summary>
        /// Tag name.
        /// </summary>
        [Output("displayName")]
        public Output<string> DisplayName { get; private set; } = null!;

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
        /// Create a TagByProduct resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public TagByProduct(string name, TagByProductArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/v20191201preview:TagByProduct", name, args ?? new TagByProductArgs(), MakeResourceOptions(options, ""))
        {
        }

        private TagByProduct(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/v20191201preview:TagByProduct", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/latest:TagByProduct"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20170301:TagByProduct"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180101:TagByProduct"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180601preview:TagByProduct"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20190101:TagByProduct"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20191201:TagByProduct"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20200601preview:TagByProduct"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing TagByProduct resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static TagByProduct Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new TagByProduct(name, id, options);
        }
    }

    public sealed class TagByProductArgs : Pulumi.ResourceArgs
    {
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

        /// <summary>
        /// Tag identifier. Must be unique in the current API Management service instance.
        /// </summary>
        [Input("tagId", required: true)]
        public Input<string> TagId { get; set; } = null!;

        public TagByProductArgs()
        {
        }
    }
}
