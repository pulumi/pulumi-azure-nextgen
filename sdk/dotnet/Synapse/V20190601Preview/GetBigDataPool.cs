// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Synapse.V20190601Preview
{
    public static class GetBigDataPool
    {
        public static Task<GetBigDataPoolResult> InvokeAsync(GetBigDataPoolArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetBigDataPoolResult>("azure-nextgen:synapse/v20190601preview:getBigDataPool", args ?? new GetBigDataPoolArgs(), options.WithVersion());
    }


    public sealed class GetBigDataPoolArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Big Data pool name
        /// </summary>
        [Input("bigDataPoolName", required: true)]
        public string BigDataPoolName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the workspace
        /// </summary>
        [Input("workspaceName", required: true)]
        public string WorkspaceName { get; set; } = null!;

        public GetBigDataPoolArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetBigDataPoolResult
    {
        /// <summary>
        /// Auto-pausing properties
        /// </summary>
        public readonly Outputs.AutoPausePropertiesResponse? AutoPause;
        /// <summary>
        /// Auto-scaling properties
        /// </summary>
        public readonly Outputs.AutoScalePropertiesResponse? AutoScale;
        /// <summary>
        /// The time when the Big Data pool was created.
        /// </summary>
        public readonly string? CreationDate;
        /// <summary>
        /// The default folder where Spark logs will be written.
        /// </summary>
        public readonly string? DefaultSparkLogFolder;
        /// <summary>
        /// Whether library requirements changed.
        /// </summary>
        public readonly bool? HaveLibraryRequirementsChanged;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Whether compute isolation is required or not.
        /// </summary>
        public readonly bool? IsComputeIsolationEnabled;
        /// <summary>
        /// Library version requirements
        /// </summary>
        public readonly Outputs.LibraryRequirementsResponse? LibraryRequirements;
        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The number of nodes in the Big Data pool.
        /// </summary>
        public readonly int? NodeCount;
        /// <summary>
        /// The level of compute power that each node in the Big Data pool has.
        /// </summary>
        public readonly string? NodeSize;
        /// <summary>
        /// The kind of nodes that the Big Data pool provides.
        /// </summary>
        public readonly string? NodeSizeFamily;
        /// <summary>
        /// The state of the Big Data pool.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// Whether session level packages enabled.
        /// </summary>
        public readonly bool? SessionLevelPackagesEnabled;
        /// <summary>
        /// Spark configuration file to specify additional properties
        /// </summary>
        public readonly Outputs.LibraryRequirementsResponse? SparkConfigProperties;
        /// <summary>
        /// The Spark events folder
        /// </summary>
        public readonly string? SparkEventsFolder;
        /// <summary>
        /// The Apache Spark version.
        /// </summary>
        public readonly string? SparkVersion;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetBigDataPoolResult(
            Outputs.AutoPausePropertiesResponse? autoPause,

            Outputs.AutoScalePropertiesResponse? autoScale,

            string? creationDate,

            string? defaultSparkLogFolder,

            bool? haveLibraryRequirementsChanged,

            string id,

            bool? isComputeIsolationEnabled,

            Outputs.LibraryRequirementsResponse? libraryRequirements,

            string location,

            string name,

            int? nodeCount,

            string? nodeSize,

            string? nodeSizeFamily,

            string? provisioningState,

            bool? sessionLevelPackagesEnabled,

            Outputs.LibraryRequirementsResponse? sparkConfigProperties,

            string? sparkEventsFolder,

            string? sparkVersion,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            AutoPause = autoPause;
            AutoScale = autoScale;
            CreationDate = creationDate;
            DefaultSparkLogFolder = defaultSparkLogFolder;
            HaveLibraryRequirementsChanged = haveLibraryRequirementsChanged;
            Id = id;
            IsComputeIsolationEnabled = isComputeIsolationEnabled;
            LibraryRequirements = libraryRequirements;
            Location = location;
            Name = name;
            NodeCount = nodeCount;
            NodeSize = nodeSize;
            NodeSizeFamily = nodeSizeFamily;
            ProvisioningState = provisioningState;
            SessionLevelPackagesEnabled = sessionLevelPackagesEnabled;
            SparkConfigProperties = sparkConfigProperties;
            SparkEventsFolder = sparkEventsFolder;
            SparkVersion = sparkVersion;
            Tags = tags;
            Type = type;
        }
    }
}
