// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.Latest
{
    public static class GetDatabase
    {
        public static Task<GetDatabaseResult> InvokeAsync(GetDatabaseArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDatabaseResult>("azure-nextgen:sql/latest:getDatabase", args ?? new GetDatabaseArgs(), options.WithVersion());
    }


    public sealed class GetDatabaseArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the database to be retrieved.
        /// </summary>
        [Input("databaseName", required: true)]
        public string DatabaseName { get; set; } = null!;

        /// <summary>
        /// A comma separated list of child objects to expand in the response. Possible properties: serviceTierAdvisors, transparentDataEncryption.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

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

        public GetDatabaseArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDatabaseResult
    {
        /// <summary>
        /// The collation of the database. If createMode is not Default, this value is ignored.
        /// </summary>
        public readonly string? Collation;
        /// <summary>
        /// The containment state of the database.
        /// </summary>
        public readonly int ContainmentState;
        /// <summary>
        /// Specifies the mode of database creation.
        /// 
        /// Default: regular database creation.
        /// 
        /// Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.
        /// 
        /// OnlineSecondary/NonReadableSecondary: creates a database as a (readable or nonreadable) secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.
        /// 
        /// PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.
        /// 
        /// Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.
        /// 
        /// Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.
        /// 
        /// RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.
        /// 
        /// Copy, NonReadableSecondary, OnlineSecondary and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
        /// </summary>
        public readonly string? CreateMode;
        /// <summary>
        /// The creation date of the database (ISO8601 format).
        /// </summary>
        public readonly string CreationDate;
        /// <summary>
        /// The current service level objective ID of the database. This is the ID of the service level objective that is currently active.
        /// </summary>
        public readonly string CurrentServiceObjectiveId;
        /// <summary>
        /// The ID of the database.
        /// </summary>
        public readonly string DatabaseId;
        /// <summary>
        /// The default secondary region for this database.
        /// </summary>
        public readonly string DefaultSecondaryLocation;
        /// <summary>
        /// This records the earliest start date and time that restore is available for this database (ISO8601 format).
        /// </summary>
        public readonly string EarliestRestoreDate;
        /// <summary>
        /// The edition of the database. The DatabaseEditions enumeration contains all the valid editions. If createMode is NonReadableSecondary or OnlineSecondary, this value is ignored.
        /// 
        /// The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
        /// 
        /// ```azurecli
        /// az sql db list-editions -l &lt;location&gt; -o table
        /// ````
        /// 
        /// ```powershell
        /// Get-AzSqlServerServiceObjective -Location &lt;location&gt;
        /// ````
        /// </summary>
        public readonly string? Edition;
        /// <summary>
        /// The name of the elastic pool the database is in. If elasticPoolName and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveName is ignored. Not supported for DataWarehouse edition.
        /// </summary>
        public readonly string? ElasticPoolName;
        /// <summary>
        /// The resource identifier of the failover group containing this database.
        /// </summary>
        public readonly string FailoverGroupId;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Kind of database.  This is metadata used for the Azure portal experience.
        /// </summary>
        public readonly string Kind;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The max size of the database expressed in bytes. If createMode is not Default, this value is ignored. To see possible values, query the capabilities API (/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationID}/capabilities) referred to by operationId: "Capabilities_ListByLocation."
        /// </summary>
        public readonly string? MaxSizeBytes;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Conditional. If the database is a geo-secondary, readScale indicates whether read-only connections are allowed to this database or not. Not supported for DataWarehouse edition.
        /// </summary>
        public readonly string? ReadScale;
        /// <summary>
        /// The recommended indices for this database.
        /// </summary>
        public readonly ImmutableArray<Outputs.RecommendedIndexResponse> RecommendedIndex;
        /// <summary>
        /// Conditional. If createMode is RestoreLongTermRetentionBackup, then this value is required. Specifies the resource ID of the recovery point to restore from.
        /// </summary>
        public readonly string? RecoveryServicesRecoveryPointResourceId;
        /// <summary>
        /// The configured service level objective ID of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of currentServiceObjectiveId property. If requestedServiceObjectiveId and requestedServiceObjectiveName are both updated, the value of requestedServiceObjectiveId overrides the value of requestedServiceObjectiveName.
        /// 
        /// The list of SKUs may vary by region and support offer. To determine the service objective ids that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API.
        /// </summary>
        public readonly string? RequestedServiceObjectiveId;
        /// <summary>
        /// The name of the configured service level objective of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of serviceLevelObjective property. 
        /// 
        /// The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
        /// 
        /// ```azurecli
        /// az sql db list-editions -l &lt;location&gt; -o table
        /// ````
        /// 
        /// ```powershell
        /// Get-AzSqlServerServiceObjective -Location &lt;location&gt;
        /// ````
        /// </summary>
        public readonly string? RequestedServiceObjectiveName;
        /// <summary>
        /// Conditional. If createMode is PointInTimeRestore, this value is required. If createMode is Restore, this value is optional. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. Must be greater than or equal to the source database's earliestRestoreDate value.
        /// </summary>
        public readonly string? RestorePointInTime;
        /// <summary>
        /// Indicates the name of the sample schema to apply when creating this database. If createMode is not Default, this value is ignored. Not supported for DataWarehouse edition.
        /// </summary>
        public readonly string? SampleName;
        /// <summary>
        /// The current service level objective of the database.
        /// </summary>
        public readonly string ServiceLevelObjective;
        /// <summary>
        /// The list of service tier advisors for this database. Expanded property
        /// </summary>
        public readonly ImmutableArray<Outputs.ServiceTierAdvisorResponse> ServiceTierAdvisors;
        /// <summary>
        /// Conditional. If createMode is Restore and sourceDatabaseId is the deleted database's original resource id when it existed (as opposed to its current restorable dropped database id), then this value is required. Specifies the time that the database was deleted.
        /// </summary>
        public readonly string? SourceDatabaseDeletionDate;
        /// <summary>
        /// Conditional. If createMode is Copy, NonReadableSecondary, OnlineSecondary, PointInTimeRestore, Recovery, or Restore, then this value is required. Specifies the resource ID of the source database. If createMode is NonReadableSecondary or OnlineSecondary, the name of the source database must be the same as the new database being created.
        /// </summary>
        public readonly string? SourceDatabaseId;
        /// <summary>
        /// The status of the database.
        /// </summary>
        public readonly string Status;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The transparent data encryption info for this database.
        /// </summary>
        public readonly ImmutableArray<Outputs.TransparentDataEncryptionResponse> TransparentDataEncryption;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
        /// </summary>
        public readonly bool? ZoneRedundant;

        [OutputConstructor]
        private GetDatabaseResult(
            string? collation,

            int containmentState,

            string? createMode,

            string creationDate,

            string currentServiceObjectiveId,

            string databaseId,

            string defaultSecondaryLocation,

            string earliestRestoreDate,

            string? edition,

            string? elasticPoolName,

            string failoverGroupId,

            string id,

            string kind,

            string location,

            string? maxSizeBytes,

            string name,

            string? readScale,

            ImmutableArray<Outputs.RecommendedIndexResponse> recommendedIndex,

            string? recoveryServicesRecoveryPointResourceId,

            string? requestedServiceObjectiveId,

            string? requestedServiceObjectiveName,

            string? restorePointInTime,

            string? sampleName,

            string serviceLevelObjective,

            ImmutableArray<Outputs.ServiceTierAdvisorResponse> serviceTierAdvisors,

            string? sourceDatabaseDeletionDate,

            string? sourceDatabaseId,

            string status,

            ImmutableDictionary<string, string>? tags,

            ImmutableArray<Outputs.TransparentDataEncryptionResponse> transparentDataEncryption,

            string type,

            bool? zoneRedundant)
        {
            Collation = collation;
            ContainmentState = containmentState;
            CreateMode = createMode;
            CreationDate = creationDate;
            CurrentServiceObjectiveId = currentServiceObjectiveId;
            DatabaseId = databaseId;
            DefaultSecondaryLocation = defaultSecondaryLocation;
            EarliestRestoreDate = earliestRestoreDate;
            Edition = edition;
            ElasticPoolName = elasticPoolName;
            FailoverGroupId = failoverGroupId;
            Id = id;
            Kind = kind;
            Location = location;
            MaxSizeBytes = maxSizeBytes;
            Name = name;
            ReadScale = readScale;
            RecommendedIndex = recommendedIndex;
            RecoveryServicesRecoveryPointResourceId = recoveryServicesRecoveryPointResourceId;
            RequestedServiceObjectiveId = requestedServiceObjectiveId;
            RequestedServiceObjectiveName = requestedServiceObjectiveName;
            RestorePointInTime = restorePointInTime;
            SampleName = sampleName;
            ServiceLevelObjective = serviceLevelObjective;
            ServiceTierAdvisors = serviceTierAdvisors;
            SourceDatabaseDeletionDate = sourceDatabaseDeletionDate;
            SourceDatabaseId = sourceDatabaseId;
            Status = status;
            Tags = tags;
            TransparentDataEncryption = transparentDataEncryption;
            Type = type;
            ZoneRedundant = zoneRedundant;
        }
    }
}
