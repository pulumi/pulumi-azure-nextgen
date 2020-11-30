// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200801Preview
{
    public static class GetElasticPool
    {
        public static Task<GetElasticPoolResult> InvokeAsync(GetElasticPoolArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetElasticPoolResult>("azure-nextgen:sql/v20200801preview:getElasticPool", args ?? new GetElasticPoolArgs(), options.WithVersion());
    }


    public sealed class GetElasticPoolArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the elastic pool.
        /// </summary>
        [Input("elasticPoolName", required: true)]
        public string ElasticPoolName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the server.
        /// </summary>
        [Input("serverName", required: true)]
        public string ServerName { get; set; } = null!;

        public GetElasticPoolArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetElasticPoolResult
    {
        /// <summary>
        /// The creation date of the elastic pool (ISO8601 format).
        /// </summary>
        public readonly string CreationDate;
        /// <summary>
        /// Kind of elastic pool. This is metadata used for the Azure portal experience.
        /// </summary>
        public readonly string Kind;
        /// <summary>
        /// The license type to apply for this elastic pool.
        /// </summary>
        public readonly string? LicenseType;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Maintenance configuration id assigned to the elastic pool. This configuration defines the period when the maintenance updates will will occur.
        /// </summary>
        public readonly string? MaintenanceConfigurationId;
        /// <summary>
        /// The storage limit for the database elastic pool in bytes.
        /// </summary>
        public readonly int? MaxSizeBytes;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The per database settings for the elastic pool.
        /// </summary>
        public readonly Outputs.ElasticPoolPerDatabaseSettingsResponse? PerDatabaseSettings;
        /// <summary>
        /// The elastic pool SKU.
        /// 
        /// The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or the following command:
        /// 
        /// ```azurecli
        /// az sql elastic-pool list-editions -l &lt;location&gt; -o table
        /// ````
        /// </summary>
        public readonly Outputs.SkuResponse? Sku;
        /// <summary>
        /// The state of the elastic pool.
        /// </summary>
        public readonly string State;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones.
        /// </summary>
        public readonly bool? ZoneRedundant;

        [OutputConstructor]
        private GetElasticPoolResult(
            string creationDate,

            string kind,

            string? licenseType,

            string location,

            string? maintenanceConfigurationId,

            int? maxSizeBytes,

            string name,

            Outputs.ElasticPoolPerDatabaseSettingsResponse? perDatabaseSettings,

            Outputs.SkuResponse? sku,

            string state,

            ImmutableDictionary<string, string>? tags,

            string type,

            bool? zoneRedundant)
        {
            CreationDate = creationDate;
            Kind = kind;
            LicenseType = licenseType;
            Location = location;
            MaintenanceConfigurationId = maintenanceConfigurationId;
            MaxSizeBytes = maxSizeBytes;
            Name = name;
            PerDatabaseSettings = perDatabaseSettings;
            Sku = sku;
            State = state;
            Tags = tags;
            Type = type;
            ZoneRedundant = zoneRedundant;
        }
    }
}
