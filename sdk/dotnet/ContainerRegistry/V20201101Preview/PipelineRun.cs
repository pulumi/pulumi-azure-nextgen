// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20201101Preview
{
    /// <summary>
    /// An object that represents a pipeline run for a container registry.
    /// </summary>
    public partial class PipelineRun : Pulumi.CustomResource
    {
        /// <summary>
        /// How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed.
        /// </summary>
        [Output("forceUpdateTag")]
        public Output<string?> ForceUpdateTag { get; private set; } = null!;

        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The provisioning state of a pipeline run.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The request parameters for a pipeline run.
        /// </summary>
        [Output("request")]
        public Output<Outputs.PipelineRunRequestResponse?> Request { get; private set; } = null!;

        /// <summary>
        /// The response of a pipeline run.
        /// </summary>
        [Output("response")]
        public Output<Outputs.PipelineRunResponseResponse> Response { get; private set; } = null!;

        /// <summary>
        /// Metadata pertaining to creation and last modification of the resource.
        /// </summary>
        [Output("systemData")]
        public Output<Outputs.SystemDataResponse> SystemData { get; private set; } = null!;

        /// <summary>
        /// The type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a PipelineRun resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public PipelineRun(string name, PipelineRunArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:containerregistry/v20201101preview:PipelineRun", name, args ?? new PipelineRunArgs(), MakeResourceOptions(options, ""))
        {
        }

        private PipelineRun(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:containerregistry/v20201101preview:PipelineRun", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:containerregistry/v20191201preview:PipelineRun"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing PipelineRun resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static PipelineRun Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new PipelineRun(name, id, options);
        }
    }

    public sealed class PipelineRunArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed.
        /// </summary>
        [Input("forceUpdateTag")]
        public Input<string>? ForceUpdateTag { get; set; }

        /// <summary>
        /// The name of the pipeline run.
        /// </summary>
        [Input("pipelineRunName", required: true)]
        public Input<string> PipelineRunName { get; set; } = null!;

        /// <summary>
        /// The name of the container registry.
        /// </summary>
        [Input("registryName", required: true)]
        public Input<string> RegistryName { get; set; } = null!;

        /// <summary>
        /// The request parameters for a pipeline run.
        /// </summary>
        [Input("request")]
        public Input<Inputs.PipelineRunRequestArgs>? Request { get; set; }

        /// <summary>
        /// The name of the resource group to which the container registry belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public PipelineRunArgs()
        {
        }
    }
}
