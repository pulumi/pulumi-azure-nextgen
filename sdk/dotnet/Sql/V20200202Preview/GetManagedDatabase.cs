// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200202Preview
{
    public static class GetManagedDatabase
    {
        public static Task<GetManagedDatabaseResult> InvokeAsync(GetManagedDatabaseArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetManagedDatabaseResult>("azure-nextgen:sql/v20200202preview:getManagedDatabase", args ?? new GetManagedDatabaseArgs(), options.WithVersion());
    }


    public sealed class GetManagedDatabaseArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the database.
        /// </summary>
        [Input("databaseName", required: true)]
        public string DatabaseName { get; set; } = null!;

        /// <summary>
        /// The name of the managed instance.
        /// </summary>
        [Input("managedInstanceName", required: true)]
        public string ManagedInstanceName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetManagedDatabaseArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetManagedDatabaseResult
    {
        /// <summary>
        /// Whether to auto complete restore of this managed database.
        /// </summary>
        public readonly bool? AutoCompleteRestore;
        /// <summary>
        /// Collation of the metadata catalog.
        /// </summary>
        public readonly string? CatalogCollation;
        /// <summary>
        /// Collation of the managed database.
        /// </summary>
        public readonly string? Collation;
        /// <summary>
        /// Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. RestoreLongTermRetentionBackup: Create a database by restoring from a long term retention backup (longTermRetentionBackupResourceId required).
        /// </summary>
        public readonly string? CreateMode;
        /// <summary>
        /// Creation date of the database.
        /// </summary>
        public readonly string CreationDate;
        /// <summary>
        /// Geo paired region.
        /// </summary>
        public readonly string DefaultSecondaryLocation;
        /// <summary>
        /// Earliest restore point in time for point in time restore.
        /// </summary>
        public readonly string EarliestRestorePoint;
        /// <summary>
        /// Instance Failover Group resource identifier that this managed database belongs to.
        /// </summary>
        public readonly string FailoverGroupId;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Last backup file name for restore of this managed database.
        /// </summary>
        public readonly string? LastBackupName;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The name of the Long Term Retention backup to be used for restore of this managed database.
        /// </summary>
        public readonly string? LongTermRetentionBackupResourceId;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The resource identifier of the recoverable database associated with create operation of this database.
        /// </summary>
        public readonly string? RecoverableDatabaseId;
        /// <summary>
        /// The restorable dropped database resource id to restore when creating this database.
        /// </summary>
        public readonly string? RestorableDroppedDatabaseId;
        /// <summary>
        /// Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
        /// </summary>
        public readonly string? RestorePointInTime;
        /// <summary>
        /// The resource identifier of the source database associated with create operation of this database.
        /// </summary>
        public readonly string? SourceDatabaseId;
        /// <summary>
        /// Status of the database.
        /// </summary>
        public readonly string Status;
        /// <summary>
        /// Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token.
        /// </summary>
        public readonly string? StorageContainerSasToken;
        /// <summary>
        /// Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored.
        /// </summary>
        public readonly string? StorageContainerUri;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetManagedDatabaseResult(
            bool? autoCompleteRestore,

            string? catalogCollation,

            string? collation,

            string? createMode,

            string creationDate,

            string defaultSecondaryLocation,

            string earliestRestorePoint,

            string failoverGroupId,

            string id,

            string? lastBackupName,

            string location,

            string? longTermRetentionBackupResourceId,

            string name,

            string? recoverableDatabaseId,

            string? restorableDroppedDatabaseId,

            string? restorePointInTime,

            string? sourceDatabaseId,

            string status,

            string? storageContainerSasToken,

            string? storageContainerUri,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            AutoCompleteRestore = autoCompleteRestore;
            CatalogCollation = catalogCollation;
            Collation = collation;
            CreateMode = createMode;
            CreationDate = creationDate;
            DefaultSecondaryLocation = defaultSecondaryLocation;
            EarliestRestorePoint = earliestRestorePoint;
            FailoverGroupId = failoverGroupId;
            Id = id;
            LastBackupName = lastBackupName;
            Location = location;
            LongTermRetentionBackupResourceId = longTermRetentionBackupResourceId;
            Name = name;
            RecoverableDatabaseId = recoverableDatabaseId;
            RestorableDroppedDatabaseId = restorableDroppedDatabaseId;
            RestorePointInTime = restorePointInTime;
            SourceDatabaseId = sourceDatabaseId;
            Status = status;
            StorageContainerSasToken = storageContainerSasToken;
            StorageContainerUri = storageContainerUri;
            Tags = tags;
            Type = type;
        }
    }
}
