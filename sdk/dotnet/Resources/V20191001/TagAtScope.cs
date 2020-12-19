// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Resources.V20191001
{
    /// <summary>
    /// Wrapper resource for tags API requests and responses.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:resources/v20191001:TagAtScope")]
    public partial class TagAtScope : Pulumi.CustomResource
    {
        /// <summary>
        /// The name of the tags wrapper resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The set of tags.
        /// </summary>
        [Output("properties")]
        public Output<Outputs.TagsResponse> Properties { get; private set; } = null!;

        /// <summary>
        /// The type of the tags wrapper resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a TagAtScope resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public TagAtScope(string name, TagAtScopeArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:resources/v20191001:TagAtScope", name, args ?? new TagAtScopeArgs(), MakeResourceOptions(options, ""))
        {
        }

        private TagAtScope(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:resources/v20191001:TagAtScope", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:resources/latest:TagAtScope"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20200601:TagAtScope"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20200801:TagAtScope"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20201001:TagAtScope"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing TagAtScope resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static TagAtScope Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new TagAtScope(name, id, options);
        }
    }

    public sealed class TagAtScopeArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The set of tags.
        /// </summary>
        [Input("properties", required: true)]
        public Input<Inputs.TagsArgs> Properties { get; set; } = null!;

        /// <summary>
        /// The resource scope.
        /// </summary>
        [Input("scope", required: true)]
        public Input<string> Scope { get; set; } = null!;

        public TagAtScopeArgs()
        {
        }
    }
}
