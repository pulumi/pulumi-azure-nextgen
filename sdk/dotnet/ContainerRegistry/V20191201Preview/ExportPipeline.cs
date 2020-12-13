// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20191201Preview
{
    /// <summary>
    /// An object that represents an export pipeline for a container registry.
    /// </summary>
    public partial class ExportPipeline : Pulumi.CustomResource
    {
        /// <summary>
        /// The identity of the export pipeline.
        /// </summary>
        [Output("identity")]
        public Output<Outputs.IdentityPropertiesResponse?> Identity { get; private set; } = null!;

        /// <summary>
        /// The location of the export pipeline.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The list of all options configured for the pipeline.
        /// </summary>
        [Output("options")]
        public Output<ImmutableArray<string>> Options { get; private set; } = null!;

        /// <summary>
        /// The provisioning state of the pipeline at the time the operation was called.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Metadata pertaining to creation and last modification of the resource.
        /// </summary>
        [Output("systemData")]
        public Output<Outputs.SystemDataResponse> SystemData { get; private set; } = null!;

        /// <summary>
        /// The target properties of the export pipeline.
        /// </summary>
        [Output("target")]
        public Output<Outputs.ExportPipelineTargetPropertiesResponse> Target { get; private set; } = null!;

        /// <summary>
        /// The type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ExportPipeline resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ExportPipeline(string name, ExportPipelineArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:containerregistry/v20191201preview:ExportPipeline", name, args ?? new ExportPipelineArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ExportPipeline(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:containerregistry/v20191201preview:ExportPipeline", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:containerregistry/v20201101preview:ExportPipeline"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ExportPipeline resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ExportPipeline Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ExportPipeline(name, id, options);
        }
    }

    public sealed class ExportPipelineArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the export pipeline.
        /// </summary>
        [Input("exportPipelineName", required: true)]
        public Input<string> ExportPipelineName { get; set; } = null!;

        /// <summary>
        /// The identity of the export pipeline.
        /// </summary>
        [Input("identity")]
        public Input<Inputs.IdentityPropertiesArgs>? Identity { get; set; }

        /// <summary>
        /// The location of the export pipeline.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        [Input("options")]
        private InputList<Union<string, Pulumi.AzureNextGen.ContainerRegistry.V20191201Preview.PipelineOptions>>? _options;

        /// <summary>
        /// The list of all options configured for the pipeline.
        /// </summary>
        public InputList<Union<string, Pulumi.AzureNextGen.ContainerRegistry.V20191201Preview.PipelineOptions>> Options
        {
            get => _options ?? (_options = new InputList<Union<string, Pulumi.AzureNextGen.ContainerRegistry.V20191201Preview.PipelineOptions>>());
            set => _options = value;
        }

        /// <summary>
        /// The name of the container registry.
        /// </summary>
        [Input("registryName", required: true)]
        public Input<string> RegistryName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group to which the container registry belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The target properties of the export pipeline.
        /// </summary>
        [Input("target", required: true)]
        public Input<Inputs.ExportPipelineTargetPropertiesArgs> Target { get; set; } = null!;

        public ExportPipelineArgs()
        {
        }
    }
}
