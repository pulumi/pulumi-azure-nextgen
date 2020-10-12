// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Kusto.V20200918
{
    public static class GetCluster
    {
        public static Task<GetClusterResult> InvokeAsync(GetClusterArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetClusterResult>("azure-nextgen:kusto/v20200918:getCluster", args ?? new GetClusterArgs(), options.WithVersion());
    }


    public sealed class GetClusterArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Kusto cluster.
        /// </summary>
        [Input("clusterName", required: true)]
        public string ClusterName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group containing the Kusto cluster.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetClusterArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetClusterResult
    {
        /// <summary>
        /// The cluster data ingestion URI.
        /// </summary>
        public readonly string DataIngestionUri;
        /// <summary>
        /// A boolean value that indicates if the cluster's disks are encrypted.
        /// </summary>
        public readonly bool? EnableDiskEncryption;
        /// <summary>
        /// A boolean value that indicates if double encryption is enabled.
        /// </summary>
        public readonly bool? EnableDoubleEncryption;
        /// <summary>
        /// A boolean value that indicates if the purge operations are enabled.
        /// </summary>
        public readonly bool? EnablePurge;
        /// <summary>
        /// A boolean value that indicates if the streaming ingest is enabled.
        /// </summary>
        public readonly bool? EnableStreamingIngest;
        /// <summary>
        /// The engine type
        /// </summary>
        public readonly string? EngineType;
        /// <summary>
        /// The identity of the cluster, if configured.
        /// </summary>
        public readonly Outputs.IdentityResponse? Identity;
        /// <summary>
        /// KeyVault properties for the cluster encryption.
        /// </summary>
        public readonly Outputs.KeyVaultPropertiesResponse? KeyVaultProperties;
        /// <summary>
        /// List of the cluster's language extensions.
        /// </summary>
        public readonly Outputs.LanguageExtensionsListResponse LanguageExtensions;
        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Optimized auto scale definition.
        /// </summary>
        public readonly Outputs.OptimizedAutoscaleResponse? OptimizedAutoscale;
        /// <summary>
        /// The provisioned state of the resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The SKU of the cluster.
        /// </summary>
        public readonly Outputs.AzureSkuResponse Sku;
        /// <summary>
        /// The state of the resource.
        /// </summary>
        public readonly string State;
        /// <summary>
        /// The reason for the cluster's current state.
        /// </summary>
        public readonly string StateReason;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The cluster's external tenants.
        /// </summary>
        public readonly ImmutableArray<Outputs.TrustedExternalTenantResponse> TrustedExternalTenants;
        /// <summary>
        /// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The cluster URI.
        /// </summary>
        public readonly string Uri;
        /// <summary>
        /// Virtual network definition.
        /// </summary>
        public readonly Outputs.VirtualNetworkConfigurationResponse? VirtualNetworkConfiguration;
        /// <summary>
        /// The availability zones of the cluster.
        /// </summary>
        public readonly ImmutableArray<string> Zones;

        [OutputConstructor]
        private GetClusterResult(
            string dataIngestionUri,

            bool? enableDiskEncryption,

            bool? enableDoubleEncryption,

            bool? enablePurge,

            bool? enableStreamingIngest,

            string? engineType,

            Outputs.IdentityResponse? identity,

            Outputs.KeyVaultPropertiesResponse? keyVaultProperties,

            Outputs.LanguageExtensionsListResponse languageExtensions,

            string location,

            string name,

            Outputs.OptimizedAutoscaleResponse? optimizedAutoscale,

            string provisioningState,

            Outputs.AzureSkuResponse sku,

            string state,

            string stateReason,

            ImmutableDictionary<string, string>? tags,

            ImmutableArray<Outputs.TrustedExternalTenantResponse> trustedExternalTenants,

            string type,

            string uri,

            Outputs.VirtualNetworkConfigurationResponse? virtualNetworkConfiguration,

            ImmutableArray<string> zones)
        {
            DataIngestionUri = dataIngestionUri;
            EnableDiskEncryption = enableDiskEncryption;
            EnableDoubleEncryption = enableDoubleEncryption;
            EnablePurge = enablePurge;
            EnableStreamingIngest = enableStreamingIngest;
            EngineType = engineType;
            Identity = identity;
            KeyVaultProperties = keyVaultProperties;
            LanguageExtensions = languageExtensions;
            Location = location;
            Name = name;
            OptimizedAutoscale = optimizedAutoscale;
            ProvisioningState = provisioningState;
            Sku = sku;
            State = state;
            StateReason = stateReason;
            Tags = tags;
            TrustedExternalTenants = trustedExternalTenants;
            Type = type;
            Uri = uri;
            VirtualNetworkConfiguration = virtualNetworkConfiguration;
            Zones = zones;
        }
    }
}
