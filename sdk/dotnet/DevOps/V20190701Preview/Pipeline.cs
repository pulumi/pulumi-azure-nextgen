// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DevOps.V20190701Preview
{
    /// <summary>
    /// Azure DevOps Pipeline used to configure Continuous Integration (CI) &amp; Continuous Delivery (CD) for Azure resources.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:devops/v20190701preview:Pipeline")]
    public partial class Pipeline : Pulumi.CustomResource
    {
        /// <summary>
        /// Configuration used to bootstrap the Pipeline.
        /// </summary>
        [Output("bootstrapConfiguration")]
        public Output<Outputs.BootstrapConfigurationResponse> BootstrapConfiguration { get; private set; } = null!;

        /// <summary>
        /// Resource Location
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// Resource Name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Reference to the Azure DevOps Organization containing the Pipeline.
        /// </summary>
        [Output("organization")]
        public Output<Outputs.OrganizationReferenceResponse> Organization { get; private set; } = null!;

        /// <summary>
        /// Unique identifier of the Azure Pipeline within the Azure DevOps Project.
        /// </summary>
        [Output("pipelineId")]
        public Output<int> PipelineId { get; private set; } = null!;

        /// <summary>
        /// Reference to the Azure DevOps Project containing the Pipeline.
        /// </summary>
        [Output("project")]
        public Output<Outputs.ProjectReferenceResponse> Project { get; private set; } = null!;

        /// <summary>
        /// Resource Tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource Type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Pipeline resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Pipeline(string name, PipelineArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:devops/v20190701preview:Pipeline", name, args ?? new PipelineArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Pipeline(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:devops/v20190701preview:Pipeline", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Pipeline resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Pipeline Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Pipeline(name, id, options);
        }
    }

    public sealed class PipelineArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Configuration used to bootstrap the Pipeline.
        /// </summary>
        [Input("bootstrapConfiguration", required: true)]
        public Input<Inputs.BootstrapConfigurationArgs> BootstrapConfiguration { get; set; } = null!;

        /// <summary>
        /// Resource Location
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Reference to the Azure DevOps Organization containing the Pipeline.
        /// </summary>
        [Input("organization", required: true)]
        public Input<Inputs.OrganizationReferenceArgs> Organization { get; set; } = null!;

        /// <summary>
        /// The name of the Azure Pipeline resource in ARM.
        /// </summary>
        [Input("pipelineName", required: true)]
        public Input<string> PipelineName { get; set; } = null!;

        /// <summary>
        /// Reference to the Azure DevOps Project containing the Pipeline.
        /// </summary>
        [Input("project", required: true)]
        public Input<Inputs.ProjectReferenceArgs> Project { get; set; } = null!;

        /// <summary>
        /// Name of the resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource Tags
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public PipelineArgs()
        {
        }
    }
}
