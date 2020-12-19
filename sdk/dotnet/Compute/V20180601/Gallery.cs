// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20180601
{
    /// <summary>
    /// Specifies information about the Shared Image Gallery that you want to create or update.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:compute/v20180601:Gallery")]
    public partial class Gallery : Pulumi.CustomResource
    {
        /// <summary>
        /// The description of this Shared Image Gallery resource. This property is updatable.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// Describes the gallery unique name.
        /// </summary>
        [Output("identifier")]
        public Output<Outputs.GalleryIdentifierResponse?> Identifier { get; private set; } = null!;

        /// <summary>
        /// Resource location
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The provisioning state, which only appears in the response.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Resource tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Gallery resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Gallery(string name, GalleryArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:compute/v20180601:Gallery", name, args ?? new GalleryArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Gallery(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:compute/v20180601:Gallery", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:compute/latest:Gallery"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20190301:Gallery"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20190701:Gallery"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20191201:Gallery"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20200930:Gallery"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Gallery resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Gallery Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Gallery(name, id, options);
        }
    }

    public sealed class GalleryArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The description of this Shared Image Gallery resource. This property is updatable.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// The name of the Shared Image Gallery. The allowed characters are alphabets and numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
        /// </summary>
        [Input("galleryName", required: true)]
        public Input<string> GalleryName { get; set; } = null!;

        /// <summary>
        /// Resource location
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public GalleryArgs()
        {
        }
    }
}
