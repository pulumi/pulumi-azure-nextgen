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
    /// Property details.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:apimanagement/v20190101:Property")]
    public partial class Property : Pulumi.CustomResource
    {
        /// <summary>
        /// Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters.
        /// </summary>
        [Output("displayName")]
        public Output<string> DisplayName { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Determines whether the value is a secret and should be encrypted or not. Default value is false.
        /// </summary>
        [Output("secret")]
        public Output<bool?> Secret { get; private set; } = null!;

        /// <summary>
        /// Optional tags that when provided can be used to filter the property list.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableArray<string>> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.
        /// </summary>
        [Output("value")]
        public Output<string> Value { get; private set; } = null!;


        /// <summary>
        /// Create a Property resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Property(string name, PropertyArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/v20190101:Property", name, args ?? new PropertyArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Property(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/v20190101:Property", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/latest:Property"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20160707:Property"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20161010:Property"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20170301:Property"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180101:Property"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180601preview:Property"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Property resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Property Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Property(name, id, options);
        }
    }

    public sealed class PropertyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters.
        /// </summary>
        [Input("displayName", required: true)]
        public Input<string> DisplayName { get; set; } = null!;

        /// <summary>
        /// Identifier of the property.
        /// </summary>
        [Input("propId", required: true)]
        public Input<string> PropId { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Determines whether the value is a secret and should be encrypted or not. Default value is false.
        /// </summary>
        [Input("secret")]
        public Input<bool>? Secret { get; set; }

        /// <summary>
        /// The name of the API Management service.
        /// </summary>
        [Input("serviceName", required: true)]
        public Input<string> ServiceName { get; set; } = null!;

        [Input("tags")]
        private InputList<string>? _tags;

        /// <summary>
        /// Optional tags that when provided can be used to filter the property list.
        /// </summary>
        public InputList<string> Tags
        {
            get => _tags ?? (_tags = new InputList<string>());
            set => _tags = value;
        }

        /// <summary>
        /// Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.
        /// </summary>
        [Input("value", required: true)]
        public Input<string> Value { get; set; } = null!;

        public PropertyArgs()
        {
        }
    }
}
