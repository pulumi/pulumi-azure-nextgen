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
    /// The resource representation of a service topology.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:deploymentmanager/v20180901preview:ServiceTopology")]
    public partial class ServiceTopology : Pulumi.CustomResource
    {
        /// <summary>
        /// The resource Id of the artifact source that contains the artifacts that can be referenced in the service units.
        /// </summary>
        [Output("artifactSourceId")]
        public Output<string?> ArtifactSourceId { get; private set; } = null!;

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
        /// Create a ServiceTopology resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ServiceTopology(string name, ServiceTopologyArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:deploymentmanager/v20180901preview:ServiceTopology", name, args ?? new ServiceTopologyArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ServiceTopology(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:deploymentmanager/v20180901preview:ServiceTopology", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:deploymentmanager/v20191101preview:ServiceTopology"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ServiceTopology resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ServiceTopology Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ServiceTopology(name, id, options);
        }
    }

    public sealed class ServiceTopologyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The resource Id of the artifact source that contains the artifacts that can be referenced in the service units.
        /// </summary>
        [Input("artifactSourceId")]
        public Input<string>? ArtifactSourceId { get; set; }

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
        /// The name of the service topology .
        /// </summary>
        [Input("serviceTopologyName", required: true)]
        public Input<string> ServiceTopologyName { get; set; } = null!;

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

        public ServiceTopologyArgs()
        {
        }
    }
}
