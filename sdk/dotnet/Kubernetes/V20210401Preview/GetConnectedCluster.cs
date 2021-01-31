// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Kubernetes.V20210401Preview
{
    public static class GetConnectedCluster
    {
        public static Task<GetConnectedClusterResult> InvokeAsync(GetConnectedClusterArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetConnectedClusterResult>("azure-nextgen:kubernetes/v20210401preview:getConnectedCluster", args ?? new GetConnectedClusterArgs(), options.WithVersion());
    }


    public sealed class GetConnectedClusterArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Kubernetes cluster on which get is called.
        /// </summary>
        [Input("clusterName", required: true)]
        public string ClusterName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetConnectedClusterArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetConnectedClusterResult
    {
        /// <summary>
        /// Base64 encoded public certificate used by the agent to do the initial handshake to the backend services in Azure.
        /// </summary>
        public readonly string AgentPublicKeyCertificate;
        /// <summary>
        /// Version of the agent running on the connected cluster resource
        /// </summary>
        public readonly string AgentVersion;
        /// <summary>
        /// Represents the connectivity status of the connected cluster.
        /// </summary>
        public readonly string ConnectivityStatus;
        /// <summary>
        /// The Kubernetes distribution running on this connected cluster.
        /// </summary>
        public readonly string? Distribution;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The identity of the connected cluster.
        /// </summary>
        public readonly Outputs.ConnectedClusterIdentityResponse Identity;
        /// <summary>
        /// The infrastructure on which the Kubernetes cluster represented by this connected cluster is running on.
        /// </summary>
        public readonly string? Infrastructure;
        /// <summary>
        /// The Kubernetes version of the connected cluster resource
        /// </summary>
        public readonly string KubernetesVersion;
        /// <summary>
        /// Time representing the last instance when heart beat was received from the cluster
        /// </summary>
        public readonly string LastConnectivityTime;
        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Expiration time of the managed identity certificate
        /// </summary>
        public readonly string ManagedIdentityCertificateExpirationTime;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Connected cluster offering
        /// </summary>
        public readonly string Offering;
        /// <summary>
        /// Provisioning state of the connected cluster resource.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// Metadata pertaining to creation and last modification of the resource
        /// </summary>
        public readonly Outputs.SystemDataResponse SystemData;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Number of CPU cores present in the connected cluster resource
        /// </summary>
        public readonly int TotalCoreCount;
        /// <summary>
        /// Number of nodes present in the connected cluster resource
        /// </summary>
        public readonly int TotalNodeCount;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetConnectedClusterResult(
            string agentPublicKeyCertificate,

            string agentVersion,

            string connectivityStatus,

            string? distribution,

            string id,

            Outputs.ConnectedClusterIdentityResponse identity,

            string? infrastructure,

            string kubernetesVersion,

            string lastConnectivityTime,

            string location,

            string managedIdentityCertificateExpirationTime,

            string name,

            string offering,

            string? provisioningState,

            Outputs.SystemDataResponse systemData,

            ImmutableDictionary<string, string>? tags,

            int totalCoreCount,

            int totalNodeCount,

            string type)
        {
            AgentPublicKeyCertificate = agentPublicKeyCertificate;
            AgentVersion = agentVersion;
            ConnectivityStatus = connectivityStatus;
            Distribution = distribution;
            Id = id;
            Identity = identity;
            Infrastructure = infrastructure;
            KubernetesVersion = kubernetesVersion;
            LastConnectivityTime = lastConnectivityTime;
            Location = location;
            ManagedIdentityCertificateExpirationTime = managedIdentityCertificateExpirationTime;
            Name = name;
            Offering = offering;
            ProvisioningState = provisioningState;
            SystemData = systemData;
            Tags = tags;
            TotalCoreCount = totalCoreCount;
            TotalNodeCount = totalNodeCount;
            Type = type;
        }
    }
}
