// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200202Preview
{
    /// <summary>
    /// A managed database resource.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:sql/v20200202preview:ManagedDatabase")]
    public partial class ManagedDatabase : Pulumi.CustomResource
    {
        /// <summary>
        /// Whether to auto complete restore of this managed database.
        /// </summary>
        [Output("autoCompleteRestore")]
        public Output<bool?> AutoCompleteRestore { get; private set; } = null!;

        /// <summary>
        /// Collation of the metadata catalog.
        /// </summary>
        [Output("catalogCollation")]
        public Output<string?> CatalogCollation { get; private set; } = null!;

        /// <summary>
        /// Collation of the managed database.
        /// </summary>
        [Output("collation")]
        public Output<string?> Collation { get; private set; } = null!;

        /// <summary>
        /// Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. RestoreLongTermRetentionBackup: Create a database by restoring from a long term retention backup (longTermRetentionBackupResourceId required).
        /// </summary>
        [Output("createMode")]
        public Output<string?> CreateMode { get; private set; } = null!;

        /// <summary>
        /// Creation date of the database.
        /// </summary>
        [Output("creationDate")]
        public Output<string> CreationDate { get; private set; } = null!;

        /// <summary>
        /// Geo paired region.
        /// </summary>
        [Output("defaultSecondaryLocation")]
        public Output<string> DefaultSecondaryLocation { get; private set; } = null!;

        /// <summary>
        /// Earliest restore point in time for point in time restore.
        /// </summary>
        [Output("earliestRestorePoint")]
        public Output<string> EarliestRestorePoint { get; private set; } = null!;

        /// <summary>
        /// Instance Failover Group resource identifier that this managed database belongs to.
        /// </summary>
        [Output("failoverGroupId")]
        public Output<string> FailoverGroupId { get; private set; } = null!;

        /// <summary>
        /// Last backup file name for restore of this managed database.
        /// </summary>
        [Output("lastBackupName")]
        public Output<string?> LastBackupName { get; private set; } = null!;

        /// <summary>
        /// Resource location.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The name of the Long Term Retention backup to be used for restore of this managed database.
        /// </summary>
        [Output("longTermRetentionBackupResourceId")]
        public Output<string?> LongTermRetentionBackupResourceId { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The resource identifier of the recoverable database associated with create operation of this database.
        /// </summary>
        [Output("recoverableDatabaseId")]
        public Output<string?> RecoverableDatabaseId { get; private set; } = null!;

        /// <summary>
        /// The restorable dropped database resource id to restore when creating this database.
        /// </summary>
        [Output("restorableDroppedDatabaseId")]
        public Output<string?> RestorableDroppedDatabaseId { get; private set; } = null!;

        /// <summary>
        /// Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
        /// </summary>
        [Output("restorePointInTime")]
        public Output<string?> RestorePointInTime { get; private set; } = null!;

        /// <summary>
        /// The resource identifier of the source database associated with create operation of this database.
        /// </summary>
        [Output("sourceDatabaseId")]
        public Output<string?> SourceDatabaseId { get; private set; } = null!;

        /// <summary>
        /// Status of the database.
        /// </summary>
        [Output("status")]
        public Output<string> Status { get; private set; } = null!;

        /// <summary>
        /// Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token.
        /// </summary>
        [Output("storageContainerSasToken")]
        public Output<string?> StorageContainerSasToken { get; private set; } = null!;

        /// <summary>
        /// Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored.
        /// </summary>
        [Output("storageContainerUri")]
        public Output<string?> StorageContainerUri { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ManagedDatabase resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ManagedDatabase(string name, ManagedDatabaseArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20200202preview:ManagedDatabase", name, args ?? new ManagedDatabaseArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ManagedDatabase(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20200202preview:ManagedDatabase", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20170301preview:ManagedDatabase"},
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20180601preview:ManagedDatabase"},
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20190601preview:ManagedDatabase"},
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20200801preview:ManagedDatabase"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ManagedDatabase resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ManagedDatabase Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ManagedDatabase(name, id, options);
        }
    }

    public sealed class ManagedDatabaseArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Whether to auto complete restore of this managed database.
        /// </summary>
        [Input("autoCompleteRestore")]
        public Input<bool>? AutoCompleteRestore { get; set; }

        /// <summary>
        /// Collation of the metadata catalog.
        /// </summary>
        [Input("catalogCollation")]
        public InputUnion<string, Pulumi.AzureNextGen.Sql.V20200202Preview.CatalogCollationType>? CatalogCollation { get; set; }

        /// <summary>
        /// Collation of the managed database.
        /// </summary>
        [Input("collation")]
        public Input<string>? Collation { get; set; }

        /// <summary>
        /// Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. RestoreLongTermRetentionBackup: Create a database by restoring from a long term retention backup (longTermRetentionBackupResourceId required).
        /// </summary>
        [Input("createMode")]
        public InputUnion<string, Pulumi.AzureNextGen.Sql.V20200202Preview.ManagedDatabaseCreateMode>? CreateMode { get; set; }

        /// <summary>
        /// The name of the database.
        /// </summary>
        [Input("databaseName", required: true)]
        public Input<string> DatabaseName { get; set; } = null!;

        /// <summary>
        /// Last backup file name for restore of this managed database.
        /// </summary>
        [Input("lastBackupName")]
        public Input<string>? LastBackupName { get; set; }

        /// <summary>
        /// Resource location.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The name of the Long Term Retention backup to be used for restore of this managed database.
        /// </summary>
        [Input("longTermRetentionBackupResourceId")]
        public Input<string>? LongTermRetentionBackupResourceId { get; set; }

        /// <summary>
        /// The name of the managed instance.
        /// </summary>
        [Input("managedInstanceName", required: true)]
        public Input<string> ManagedInstanceName { get; set; } = null!;

        /// <summary>
        /// The resource identifier of the recoverable database associated with create operation of this database.
        /// </summary>
        [Input("recoverableDatabaseId")]
        public Input<string>? RecoverableDatabaseId { get; set; }

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The restorable dropped database resource id to restore when creating this database.
        /// </summary>
        [Input("restorableDroppedDatabaseId")]
        public Input<string>? RestorableDroppedDatabaseId { get; set; }

        /// <summary>
        /// Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
        /// </summary>
        [Input("restorePointInTime")]
        public Input<string>? RestorePointInTime { get; set; }

        /// <summary>
        /// The resource identifier of the source database associated with create operation of this database.
        /// </summary>
        [Input("sourceDatabaseId")]
        public Input<string>? SourceDatabaseId { get; set; }

        /// <summary>
        /// Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token.
        /// </summary>
        [Input("storageContainerSasToken")]
        public Input<string>? StorageContainerSasToken { get; set; }

        /// <summary>
        /// Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored.
        /// </summary>
        [Input("storageContainerUri")]
        public Input<string>? StorageContainerUri { get; set; }

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

        public ManagedDatabaseArgs()
        {
        }
    }
}
