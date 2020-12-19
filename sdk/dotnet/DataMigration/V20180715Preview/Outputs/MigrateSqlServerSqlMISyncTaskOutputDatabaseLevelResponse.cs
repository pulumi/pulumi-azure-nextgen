// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.V20180715Preview.Outputs
{

    [OutputType]
    public sealed class MigrateSqlServerSqlMISyncTaskOutputDatabaseLevelResponse
    {
        /// <summary>
        /// Backup sets that are currently active (Either being uploaded or getting restored)
        /// </summary>
        public readonly ImmutableArray<Outputs.BackupSetInfoResponse> ActiveBackupSets;
        /// <summary>
        /// Name of container created in the Azure Storage account where backups are copied to
        /// </summary>
        public readonly string ContainerName;
        /// <summary>
        /// Database migration end time
        /// </summary>
        public readonly string EndedOn;
        /// <summary>
        /// prefix string to use for querying errors for this database
        /// </summary>
        public readonly string ErrorPrefix;
        /// <summary>
        /// Migration exceptions and warnings
        /// </summary>
        public readonly ImmutableArray<Outputs.ReportableExceptionResponse> ExceptionsAndWarnings;
        /// <summary>
        /// Details of full backup set
        /// </summary>
        public readonly Outputs.BackupSetInfoResponse FullBackupSetInfo;
        /// <summary>
        /// Result identifier
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Whether full backup has been applied to the target database or not
        /// </summary>
        public readonly bool IsFullBackupRestored;
        /// <summary>
        /// Last applied backup set information
        /// </summary>
        public readonly Outputs.BackupSetInfoResponse LastRestoredBackupSetInfo;
        /// <summary>
        /// Current state of database
        /// </summary>
        public readonly string MigrationState;
        /// <summary>
        /// Result type
        /// Expected value is 'DatabaseLevelOutput'.
        /// </summary>
        public readonly string ResultType;
        /// <summary>
        /// Name of the database
        /// </summary>
        public readonly string SourceDatabaseName;
        /// <summary>
        /// Database migration start time
        /// </summary>
        public readonly string StartedOn;

        [OutputConstructor]
        private MigrateSqlServerSqlMISyncTaskOutputDatabaseLevelResponse(
            ImmutableArray<Outputs.BackupSetInfoResponse> activeBackupSets,

            string containerName,

            string endedOn,

            string errorPrefix,

            ImmutableArray<Outputs.ReportableExceptionResponse> exceptionsAndWarnings,

            Outputs.BackupSetInfoResponse fullBackupSetInfo,

            string id,

            bool isFullBackupRestored,

            Outputs.BackupSetInfoResponse lastRestoredBackupSetInfo,

            string migrationState,

            string resultType,

            string sourceDatabaseName,

            string startedOn)
        {
            ActiveBackupSets = activeBackupSets;
            ContainerName = containerName;
            EndedOn = endedOn;
            ErrorPrefix = errorPrefix;
            ExceptionsAndWarnings = exceptionsAndWarnings;
            FullBackupSetInfo = fullBackupSetInfo;
            Id = id;
            IsFullBackupRestored = isFullBackupRestored;
            LastRestoredBackupSetInfo = lastRestoredBackupSetInfo;
            MigrationState = migrationState;
            ResultType = resultType;
            SourceDatabaseName = sourceDatabaseName;
            StartedOn = startedOn;
        }
    }
}
