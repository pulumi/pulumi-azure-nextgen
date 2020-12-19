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
    public sealed class MigrateOracleAzureDbPostgreSqlSyncTaskOutputMigrationLevelResponse
    {
        /// <summary>
        /// Migration end time
        /// </summary>
        public readonly string EndedOn;
        /// <summary>
        /// Result identifier
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Result type
        /// Expected value is 'MigrationLevelOutput'.
        /// </summary>
        public readonly string ResultType;
        /// <summary>
        /// Source server name
        /// </summary>
        public readonly string SourceServer;
        /// <summary>
        /// Source server version
        /// </summary>
        public readonly string SourceServerVersion;
        /// <summary>
        /// Migration start time
        /// </summary>
        public readonly string StartedOn;
        /// <summary>
        /// Target server name
        /// </summary>
        public readonly string TargetServer;
        /// <summary>
        /// Target server version
        /// </summary>
        public readonly string TargetServerVersion;

        [OutputConstructor]
        private MigrateOracleAzureDbPostgreSqlSyncTaskOutputMigrationLevelResponse(
            string endedOn,

            string id,

            string resultType,

            string sourceServer,

            string sourceServerVersion,

            string startedOn,

            string targetServer,

            string targetServerVersion)
        {
            EndedOn = endedOn;
            Id = id;
            ResultType = resultType;
            SourceServer = sourceServer;
            SourceServerVersion = sourceServerVersion;
            StartedOn = startedOn;
            TargetServer = targetServer;
            TargetServerVersion = targetServerVersion;
        }
    }
}
