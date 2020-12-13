// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.MachineLearningCompute.V20170801Preview
{
    public static class GetOperationalizationCluster
    {
        public static Task<GetOperationalizationClusterResult> InvokeAsync(GetOperationalizationClusterArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetOperationalizationClusterResult>("azure-nextgen:machinelearningcompute/v20170801preview:getOperationalizationCluster", args ?? new GetOperationalizationClusterArgs(), options.WithVersion());
    }


    public sealed class GetOperationalizationClusterArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the cluster.
        /// </summary>
        [Input("clusterName", required: true)]
        public string ClusterName { get; set; } = null!;

        /// <summary>
        /// Name of the resource group in which the cluster is located.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetOperationalizationClusterArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetOperationalizationClusterResult
    {
        /// <summary>
        /// AppInsights configuration.
        /// </summary>
        public readonly Outputs.AppInsightsPropertiesResponse? AppInsights;
        /// <summary>
        /// The cluster type.
        /// </summary>
        public readonly string ClusterType;
        /// <summary>
        /// Container Registry properties.
        /// </summary>
        public readonly Outputs.ContainerRegistryPropertiesResponse? ContainerRegistry;
        /// <summary>
        /// Parameters for the Azure Container Service cluster.
        /// </summary>
        public readonly Outputs.AcsClusterPropertiesResponse? ContainerService;
        /// <summary>
        /// The date and time when the cluster was created.
        /// </summary>
        public readonly string CreatedOn;
        /// <summary>
        /// The description of the cluster.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Contains global configuration for the web services in the cluster.
        /// </summary>
        public readonly Outputs.GlobalServiceConfigurationResponse? GlobalServiceConfiguration;
        /// <summary>
        /// Specifies the resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Specifies the location of the resource.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The date and time when the cluster was last modified.
        /// </summary>
        public readonly string ModifiedOn;
        /// <summary>
        /// Specifies the name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// List of provisioning errors reported by the resource provider.
        /// </summary>
        public readonly ImmutableArray<Outputs.ErrorResponseWrapperResponse> ProvisioningErrors;
        /// <summary>
        /// The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Storage Account properties.
        /// </summary>
        public readonly Outputs.StorageAccountPropertiesResponse? StorageAccount;
        /// <summary>
        /// Contains resource tags defined as key/value pairs.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Specifies the type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetOperationalizationClusterResult(
            Outputs.AppInsightsPropertiesResponse? appInsights,

            string clusterType,

            Outputs.ContainerRegistryPropertiesResponse? containerRegistry,

            Outputs.AcsClusterPropertiesResponse? containerService,

            string createdOn,

            string? description,

            Outputs.GlobalServiceConfigurationResponse? globalServiceConfiguration,

            string id,

            string location,

            string modifiedOn,

            string name,

            ImmutableArray<Outputs.ErrorResponseWrapperResponse> provisioningErrors,

            string provisioningState,

            Outputs.StorageAccountPropertiesResponse? storageAccount,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            AppInsights = appInsights;
            ClusterType = clusterType;
            ContainerRegistry = containerRegistry;
            ContainerService = containerService;
            CreatedOn = createdOn;
            Description = description;
            GlobalServiceConfiguration = globalServiceConfiguration;
            Id = id;
            Location = location;
            ModifiedOn = modifiedOn;
            Name = name;
            ProvisioningErrors = provisioningErrors;
            ProvisioningState = provisioningState;
            StorageAccount = storageAccount;
            Tags = tags;
            Type = type;
        }
    }
}
