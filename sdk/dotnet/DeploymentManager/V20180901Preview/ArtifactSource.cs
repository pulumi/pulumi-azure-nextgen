// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DeploymentManager.V20180901Preview
{
    /// <summary>
    /// The resource that defines the source location where the artifacts are located.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:deploymentmanager/v20180901preview:ArtifactSource")]
    public partial class ArtifactSource : Pulumi.CustomResource
    {
        /// <summary>
        /// The path from the location that the 'authentication' property [say, a SAS URI to the blob container] refers to, to the location of the artifacts. This can be used to differentiate different versions of the artifacts. Or, different types of artifacts like binaries or templates. The location referenced by the authentication property concatenated with this optional artifactRoot path forms the artifact source location where the artifacts are expected to be found.
        /// </summary>
        [Output("artifactRoot")]
        public Output<string?> ArtifactRoot { get; private set; } = null!;

        /// <summary>
        /// The authentication method to use to access the artifact source.
        /// </summary>
        [Output("authentication")]
        public Output<Outputs.SasAuthenticationResponse> Authentication { get; private set; } = null!;

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The type of artifact source used.
        /// </summary>
        [Output("sourceType")]
        public Output<string> SourceType { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ArtifactSource resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ArtifactSource(string name, ArtifactSourceArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:deploymentmanager/v20180901preview:ArtifactSource", name, args ?? new ArtifactSourceArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ArtifactSource(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:deploymentmanager/v20180901preview:ArtifactSource", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:deploymentmanager/v20191101preview:ArtifactSource"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ArtifactSource resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ArtifactSource Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ArtifactSource(name, id, options);
        }
    }

    public sealed class ArtifactSourceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The path from the location that the 'authentication' property [say, a SAS URI to the blob container] refers to, to the location of the artifacts. This can be used to differentiate different versions of the artifacts. Or, different types of artifacts like binaries or templates. The location referenced by the authentication property concatenated with this optional artifactRoot path forms the artifact source location where the artifacts are expected to be found.
        /// </summary>
        [Input("artifactRoot")]
        public Input<string>? ArtifactRoot { get; set; }

        /// <summary>
        /// The name of the artifact source.
        /// </summary>
        [Input("artifactSourceName", required: true)]
        public Input<string> ArtifactSourceName { get; set; } = null!;

        /// <summary>
        /// The authentication method to use to access the artifact source.
        /// </summary>
        [Input("authentication", required: true)]
        public Input<Inputs.SasAuthenticationArgs> Authentication { get; set; } = null!;

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The type of artifact source used.
        /// </summary>
        [Input("sourceType", required: true)]
        public Input<string> SourceType { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public ArtifactSourceArgs()
        {
        }
    }
}
