// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Synapse.V20190601Preview
{
    /// <summary>
    /// A Big Data pool
    /// </summary>
    public partial class BigDataPool : Pulumi.CustomResource
    {
        /// <summary>
        /// Auto-pausing properties
        /// </summary>
        [Output("autoPause")]
        public Output<Outputs.AutoPausePropertiesResponse?> AutoPause { get; private set; } = null!;

        /// <summary>
        /// Auto-scaling properties
        /// </summary>
        [Output("autoScale")]
        public Output<Outputs.AutoScalePropertiesResponse?> AutoScale { get; private set; } = null!;

        /// <summary>
        /// The time when the Big Data pool was created.
        /// </summary>
        [Output("creationDate")]
        public Output<string?> CreationDate { get; private set; } = null!;

        /// <summary>
        /// The default folder where Spark logs will be written.
        /// </summary>
        [Output("defaultSparkLogFolder")]
        public Output<string?> DefaultSparkLogFolder { get; private set; } = null!;

        /// <summary>
        /// Whether compute isolation is required or not.
        /// </summary>
        [Output("isComputeIsolationEnabled")]
        public Output<bool?> IsComputeIsolationEnabled { get; private set; } = null!;

        /// <summary>
        /// Library version requirements
        /// </summary>
        [Output("libraryRequirements")]
        public Output<Outputs.LibraryRequirementsResponse?> LibraryRequirements { get; private set; } = null!;

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
        /// The number of nodes in the Big Data pool.
        /// </summary>
        [Output("nodeCount")]
        public Output<int?> NodeCount { get; private set; } = null!;

        /// <summary>
        /// The level of compute power that each node in the Big Data pool has.
        /// </summary>
        [Output("nodeSize")]
        public Output<string?> NodeSize { get; private set; } = null!;

        /// <summary>
        /// The kind of nodes that the Big Data pool provides.
        /// </summary>
        [Output("nodeSizeFamily")]
        public Output<string?> NodeSizeFamily { get; private set; } = null!;

        /// <summary>
        /// The state of the Big Data pool.
        /// </summary>
        [Output("provisioningState")]
        public Output<string?> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Spark configuration file to specify additional properties
        /// </summary>
        [Output("sparkConfigProperties")]
        public Output<Outputs.LibraryRequirementsResponse?> SparkConfigProperties { get; private set; } = null!;

        /// <summary>
        /// The Spark events folder
        /// </summary>
        [Output("sparkEventsFolder")]
        public Output<string?> SparkEventsFolder { get; private set; } = null!;

        /// <summary>
        /// The Apache Spark version.
        /// </summary>
        [Output("sparkVersion")]
        public Output<string?> SparkVersion { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a BigDataPool resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public BigDataPool(string name, BigDataPoolArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:synapse/v20190601preview:BigDataPool", name, args ?? new BigDataPoolArgs(), MakeResourceOptions(options, ""))
        {
        }

        private BigDataPool(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:synapse/v20190601preview:BigDataPool", name, null, MakeResourceOptions(options, id))
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
        /// Get an existing BigDataPool resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static BigDataPool Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new BigDataPool(name, id, options);
        }
    }

    public sealed class BigDataPoolArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Auto-pausing properties
        /// </summary>
        [Input("autoPause")]
        public Input<Inputs.AutoPausePropertiesArgs>? AutoPause { get; set; }

        /// <summary>
        /// Auto-scaling properties
        /// </summary>
        [Input("autoScale")]
        public Input<Inputs.AutoScalePropertiesArgs>? AutoScale { get; set; }

        /// <summary>
        /// Big Data pool name
        /// </summary>
        [Input("bigDataPoolName", required: true)]
        public Input<string> BigDataPoolName { get; set; } = null!;

        /// <summary>
        /// The time when the Big Data pool was created.
        /// </summary>
        [Input("creationDate")]
        public Input<string>? CreationDate { get; set; }

        /// <summary>
        /// The default folder where Spark logs will be written.
        /// </summary>
        [Input("defaultSparkLogFolder")]
        public Input<string>? DefaultSparkLogFolder { get; set; }

        /// <summary>
        /// Whether to stop any running jobs in the Big Data pool
        /// </summary>
        [Input("force")]
        public Input<bool>? Force { get; set; }

        /// <summary>
        /// Whether compute isolation is required or not.
        /// </summary>
        [Input("isComputeIsolationEnabled")]
        public Input<bool>? IsComputeIsolationEnabled { get; set; }

        /// <summary>
        /// Library version requirements
        /// </summary>
        [Input("libraryRequirements")]
        public Input<Inputs.LibraryRequirementsArgs>? LibraryRequirements { get; set; }

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The number of nodes in the Big Data pool.
        /// </summary>
        [Input("nodeCount")]
        public Input<int>? NodeCount { get; set; }

        /// <summary>
        /// The level of compute power that each node in the Big Data pool has.
        /// </summary>
        [Input("nodeSize")]
        public Input<string>? NodeSize { get; set; }

        /// <summary>
        /// The kind of nodes that the Big Data pool provides.
        /// </summary>
        [Input("nodeSizeFamily")]
        public Input<string>? NodeSizeFamily { get; set; }

        /// <summary>
        /// The state of the Big Data pool.
        /// </summary>
        [Input("provisioningState")]
        public Input<string>? ProvisioningState { get; set; }

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Spark configuration file to specify additional properties
        /// </summary>
        [Input("sparkConfigProperties")]
        public Input<Inputs.LibraryRequirementsArgs>? SparkConfigProperties { get; set; }

        /// <summary>
        /// The Spark events folder
        /// </summary>
        [Input("sparkEventsFolder")]
        public Input<string>? SparkEventsFolder { get; set; }

        /// <summary>
        /// The Apache Spark version.
        /// </summary>
        [Input("sparkVersion")]
        public Input<string>? SparkVersion { get; set; }

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

        /// <summary>
        /// The name of the workspace
        /// </summary>
        [Input("workspaceName", required: true)]
        public Input<string> WorkspaceName { get; set; } = null!;

        public BigDataPoolArgs()
        {
        }
    }
}
