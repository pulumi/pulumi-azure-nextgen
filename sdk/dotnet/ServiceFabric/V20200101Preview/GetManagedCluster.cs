// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceFabric.V20200101Preview
{
    public static class GetManagedCluster
    {
        public static Task<GetManagedClusterResult> InvokeAsync(GetManagedClusterArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetManagedClusterResult>("azure-nextgen:servicefabric/v20200101preview:getManagedCluster", args ?? new GetManagedClusterArgs(), options.WithVersion());
    }


    public sealed class GetManagedClusterArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the cluster resource.
        /// </summary>
        [Input("clusterName", required: true)]
        public string ClusterName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetManagedClusterArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetManagedClusterResult
    {
        /// <summary>
        /// client certificates for the cluster.
        /// </summary>
        public readonly ImmutableArray<string> AddonFeatures;
        /// <summary>
        /// vm admin user password.
        /// </summary>
        public readonly string? AdminPassword;
        /// <summary>
        /// vm admin user name.
        /// </summary>
        public readonly string AdminUserName;
        /// <summary>
        /// Azure active directory.
        /// </summary>
        public readonly Outputs.AzureActiveDirectoryResponse? AzureActiveDirectory;
        /// <summary>
        /// The port used for client connections to the cluster.
        /// </summary>
        public readonly int? ClientConnectionPort;
        /// <summary>
        /// client certificates for the cluster.
        /// </summary>
        public readonly ImmutableArray<Outputs.ClientCertificateResponse> Clients;
        /// <summary>
        /// The cluster certificate thumbprint used node to node communication.
        /// </summary>
        public readonly string ClusterCertificateThumbprint;
        /// <summary>
        /// The Service Fabric runtime version of the cluster. This property can only by set the user when **upgradeMode** is set to 'Manual'. To get list of available Service Fabric versions for new clusters use [ClusterVersion API](./ClusterVersion.md). To get the list of available version for existing clusters use **availableClusterVersions**.
        /// </summary>
        public readonly string? ClusterCodeVersion;
        /// <summary>
        /// A service generated unique identifier for the cluster resource.
        /// </summary>
        public readonly string ClusterId;
        /// <summary>
        /// The current state of the cluster.
        /// </summary>
        public readonly string ClusterState;
        /// <summary>
        /// The cluster dns name.
        /// </summary>
        public readonly string DnsName;
        /// <summary>
        /// Azure resource etag.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// The list of custom fabric settings to configure the cluster.
        /// </summary>
        public readonly ImmutableArray<Outputs.SettingsSectionDescriptionResponse> FabricSettings;
        /// <summary>
        /// the cluster Fully qualified domain name.
        /// </summary>
        public readonly string Fqdn;
        /// <summary>
        /// The port used for http connections to the cluster.
        /// </summary>
        public readonly int? HttpGatewayConnectionPort;
        /// <summary>
        /// Azure resource identifier.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Describes load balancing rules.
        /// </summary>
        public readonly ImmutableArray<Outputs.LoadBalancingRuleResponse> LoadBalancingRules;
        /// <summary>
        /// Azure resource location.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Azure resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning state of the managed cluster resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The sku of the managed cluster
        /// </summary>
        public readonly Outputs.SkuResponse? Sku;
        /// <summary>
        /// Azure resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Azure resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetManagedClusterResult(
            ImmutableArray<string> addonFeatures,

            string? adminPassword,

            string adminUserName,

            Outputs.AzureActiveDirectoryResponse? azureActiveDirectory,

            int? clientConnectionPort,

            ImmutableArray<Outputs.ClientCertificateResponse> clients,

            string clusterCertificateThumbprint,

            string? clusterCodeVersion,

            string clusterId,

            string clusterState,

            string dnsName,

            string etag,

            ImmutableArray<Outputs.SettingsSectionDescriptionResponse> fabricSettings,

            string fqdn,

            int? httpGatewayConnectionPort,

            string id,

            ImmutableArray<Outputs.LoadBalancingRuleResponse> loadBalancingRules,

            string location,

            string name,

            string provisioningState,

            Outputs.SkuResponse? sku,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            AddonFeatures = addonFeatures;
            AdminPassword = adminPassword;
            AdminUserName = adminUserName;
            AzureActiveDirectory = azureActiveDirectory;
            ClientConnectionPort = clientConnectionPort;
            Clients = clients;
            ClusterCertificateThumbprint = clusterCertificateThumbprint;
            ClusterCodeVersion = clusterCodeVersion;
            ClusterId = clusterId;
            ClusterState = clusterState;
            DnsName = dnsName;
            Etag = etag;
            FabricSettings = fabricSettings;
            Fqdn = fqdn;
            HttpGatewayConnectionPort = httpGatewayConnectionPort;
            Id = id;
            LoadBalancingRules = loadBalancingRules;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            Sku = sku;
            Tags = tags;
            Type = type;
        }
    }
}
