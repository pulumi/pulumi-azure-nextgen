// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.Latest.Outputs
{

    [OutputType]
    public sealed class MigrateSqlServerSqlDbTaskOutputDatabaseLevelValidationResultResponse
    {
        /// <summary>
        /// Provides data integrity validation result between the source and target tables that are migrated.
        /// </summary>
        public readonly Outputs.DataIntegrityValidationResultResponse DataIntegrityValidationResult;
        /// <summary>
        /// Validation end time
        /// </summary>
        public readonly string EndedOn;
        /// <summary>
        /// Result identifier
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Migration Identifier
        /// </summary>
        public readonly string MigrationId;
        /// <summary>
        /// Results of some of the query execution result between source and target database
        /// </summary>
        public readonly Outputs.QueryAnalysisValidationResultResponse QueryAnalysisValidationResult;
        /// <summary>
        /// Result type
        /// Expected value is 'MigrationDatabaseLevelValidationOutput'.
        /// </summary>
        public readonly string ResultType;
        /// <summary>
        /// Provides schema comparison result between source and target database
        /// </summary>
        public readonly Outputs.SchemaComparisonValidationResultResponse SchemaValidationResult;
        /// <summary>
        /// Name of the source database
        /// </summary>
        public readonly string SourceDatabaseName;
        /// <summary>
        /// Validation start time
        /// </summary>
        public readonly string StartedOn;
        /// <summary>
        /// Current status of validation at the database level
        /// </summary>
        public readonly string Status;
        /// <summary>
        /// Name of the target database
        /// </summary>
        public readonly string TargetDatabaseName;

        [OutputConstructor]
        private MigrateSqlServerSqlDbTaskOutputDatabaseLevelValidationResultResponse(
            Outputs.DataIntegrityValidationResultResponse dataIntegrityValidationResult,

            string endedOn,

            string id,

            string migrationId,

            Outputs.QueryAnalysisValidationResultResponse queryAnalysisValidationResult,

            string resultType,

            Outputs.SchemaComparisonValidationResultResponse schemaValidationResult,

            string sourceDatabaseName,

            string startedOn,

            string status,

            string targetDatabaseName)
        {
            DataIntegrityValidationResult = dataIntegrityValidationResult;
            EndedOn = endedOn;
            Id = id;
            MigrationId = migrationId;
            QueryAnalysisValidationResult = queryAnalysisValidationResult;
            ResultType = resultType;
            SchemaValidationResult = schemaValidationResult;
            SourceDatabaseName = sourceDatabaseName;
            StartedOn = startedOn;
            Status = status;
            TargetDatabaseName = targetDatabaseName;
        }
    }
}
