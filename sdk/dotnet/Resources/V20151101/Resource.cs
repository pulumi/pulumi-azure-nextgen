// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Resources.V20151101
{
    /// <summary>
    /// Resource information.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:resources/v20151101:Resource")]
    public partial class Resource : Pulumi.CustomResource
    {
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
        /// Gets or sets the plan of the resource.
        /// </summary>
        [Output("plan")]
        public Output<Outputs.PlanResponse?> Plan { get; private set; } = null!;

        /// <summary>
        /// Gets or sets the resource properties.
        /// </summary>
        [Output("properties")]
        public Output<object> Properties { get; private set; } = null!;

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
        /// Create a Resource resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Resource(string name, ResourceArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:resources/v20151101:Resource", name, args ?? new ResourceArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Resource(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:resources/v20151101:Resource", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:resources/latest:Resource"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20160201:Resource"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20160701:Resource"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20160901:Resource"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20170510:Resource"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20180201:Resource"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20180501:Resource"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20190301:Resource"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20190501:Resource"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20190510:Resource"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20190701:Resource"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20190801:Resource"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20191001:Resource"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20200601:Resource"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20200801:Resource"},
                    new Pulumi.Alias { Type = "azure-nextgen:resources/v20201001:Resource"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Resource resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Resource Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Resource(name, id, options);
        }
    }

    public sealed class ResourceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Resource location
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// Resource identity.
        /// </summary>
        [Input("parentResourcePath", required: true)]
        public Input<string> ParentResourcePath { get; set; } = null!;

        /// <summary>
        /// Gets or sets the plan of the resource.
        /// </summary>
        [Input("plan")]
        public Input<Inputs.PlanArgs>? Plan { get; set; }

        /// <summary>
        /// Gets or sets the resource properties.
        /// </summary>
        [Input("properties")]
        public Input<object>? Properties { get; set; }

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Resource identity.
        /// </summary>
        [Input("resourceName", required: true)]
        public Input<string> ResourceName { get; set; } = null!;

        /// <summary>
        /// Resource identity.
        /// </summary>
        [Input("resourceProviderNamespace", required: true)]
        public Input<string> ResourceProviderNamespace { get; set; } = null!;

        /// <summary>
        /// Resource identity.
        /// </summary>
        [Input("resourceType", required: true)]
        public Input<string> ResourceType { get; set; } = null!;

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

        public ResourceArgs()
        {
        }
    }
}
