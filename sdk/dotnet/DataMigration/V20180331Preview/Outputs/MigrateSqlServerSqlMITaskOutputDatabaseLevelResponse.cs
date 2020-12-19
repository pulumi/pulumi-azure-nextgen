// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.V20180331Preview.Outputs
{

    [OutputType]
    public sealed class MigrateSqlServerSqlMITaskOutputDatabaseLevelResponse
    {
        /// <summary>
        /// Name of the database
        /// </summary>
        public readonly string DatabaseName;
        /// <summary>
        /// Migration end time
        /// </summary>
        public readonly string EndedOn;
        /// <summary>
        /// Migration exceptions and warnings
        /// </summary>
        public readonly ImmutableArray<Outputs.ReportableExceptionResponse> ExceptionsAndWarnings;
        /// <summary>
        /// Result identifier
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Migration progress message
        /// </summary>
        public readonly string Message;
        /// <summary>
        /// Result type
        /// Expected value is 'DatabaseLevelOutput'.
        /// </summary>
        public readonly string ResultType;
        /// <summary>
        /// Size of the database in megabytes
        /// </summary>
        public readonly double SizeMB;
        /// <summary>
        /// Current stage of migration
        /// </summary>
        public readonly string Stage;
        /// <summary>
        /// Migration start time
        /// </summary>
        public readonly string StartedOn;
        /// <summary>
        /// Current state of migration
        /// </summary>
        public readonly string State;

        [OutputConstructor]
        private MigrateSqlServerSqlMITaskOutputDatabaseLevelResponse(
            string databaseName,

            string endedOn,

            ImmutableArray<Outputs.ReportableExceptionResponse> exceptionsAndWarnings,

            string id,

            string message,

            string resultType,

            double sizeMB,

            string stage,

            string startedOn,

            string state)
        {
            DatabaseName = databaseName;
            EndedOn = endedOn;
            ExceptionsAndWarnings = exceptionsAndWarnings;
            Id = id;
            Message = message;
            ResultType = resultType;
            SizeMB = sizeMB;
            Stage = stage;
            StartedOn = startedOn;
            State = state;
        }
    }
}
