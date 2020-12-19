// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.V20180419.Outputs
{

    [OutputType]
    public sealed class MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputDatabaseErrorResponse
    {
        /// <summary>
        /// Error message
        /// </summary>
        public readonly string? ErrorMessage;
        /// <summary>
        /// List of error events.
        /// </summary>
        public readonly ImmutableArray<Outputs.SyncMigrationDatabaseErrorEventResponse> Events;
        /// <summary>
        /// Result identifier
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Result type
        /// Expected value is 'DatabaseLevelErrorOutput'.
        /// </summary>
        public readonly string ResultType;

        [OutputConstructor]
        private MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputDatabaseErrorResponse(
            string? errorMessage,

            ImmutableArray<Outputs.SyncMigrationDatabaseErrorEventResponse> events,

            string id,

            string resultType)
        {
            ErrorMessage = errorMessage;
            Events = events;
            Id = id;
            ResultType = resultType;
        }
    }
}
