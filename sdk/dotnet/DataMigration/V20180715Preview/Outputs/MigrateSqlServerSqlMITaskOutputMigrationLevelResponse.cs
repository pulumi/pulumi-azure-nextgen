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
    public sealed class MigrateSqlServerSqlMITaskOutputMigrationLevelResponse
    {
        /// <summary>
        /// Selected agent jobs as a map from name to id
        /// </summary>
        public readonly ImmutableDictionary<string, string> AgentJobs;
        /// <summary>
        /// Selected databases as a map from database name to database id
        /// </summary>
        public readonly ImmutableDictionary<string, string> Databases;
        /// <summary>
        /// Migration end time
        /// </summary>
        public readonly string EndedOn;
        /// <summary>
        /// Migration exceptions and warnings.
        /// </summary>
        public readonly ImmutableArray<Outputs.ReportableExceptionResponse> ExceptionsAndWarnings;
        /// <summary>
        /// Result identifier
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Selected logins as a map from name to id
        /// </summary>
        public readonly ImmutableDictionary<string, string> Logins;
        /// <summary>
        /// Migration progress message
        /// </summary>
        public readonly string Message;
        /// <summary>
        /// List of orphaned users.
        /// </summary>
        public readonly ImmutableArray<Outputs.OrphanedUserInfoResponse> OrphanedUsersInfo;
        /// <summary>
        /// Result type
        /// Expected value is 'MigrationLevelOutput'.
        /// </summary>
        public readonly string ResultType;
        /// <summary>
        /// Map of server role migration results.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.StartMigrationScenarioServerRoleResultResponse> ServerRoleResults;
        /// <summary>
        /// Source server brand version
        /// </summary>
        public readonly string SourceServerBrandVersion;
        /// <summary>
        /// Source server version
        /// </summary>
        public readonly string SourceServerVersion;
        /// <summary>
        /// Migration start time
        /// </summary>
        public readonly string StartedOn;
        /// <summary>
        /// Current state of migration
        /// </summary>
        public readonly string State;
        /// <summary>
        /// Current status of migration
        /// </summary>
        public readonly string Status;
        /// <summary>
        /// Target server brand version
        /// </summary>
        public readonly string TargetServerBrandVersion;
        /// <summary>
        /// Target server version
        /// </summary>
        public readonly string TargetServerVersion;

        [OutputConstructor]
        private MigrateSqlServerSqlMITaskOutputMigrationLevelResponse(
            ImmutableDictionary<string, string> agentJobs,

            ImmutableDictionary<string, string> databases,

            string endedOn,

            ImmutableArray<Outputs.ReportableExceptionResponse> exceptionsAndWarnings,

            string id,

            ImmutableDictionary<string, string> logins,

            string message,

            ImmutableArray<Outputs.OrphanedUserInfoResponse> orphanedUsersInfo,

            string resultType,

            ImmutableDictionary<string, Outputs.StartMigrationScenarioServerRoleResultResponse> serverRoleResults,

            string sourceServerBrandVersion,

            string sourceServerVersion,

            string startedOn,

            string state,

            string status,

            string targetServerBrandVersion,

            string targetServerVersion)
        {
            AgentJobs = agentJobs;
            Databases = databases;
            EndedOn = endedOn;
            ExceptionsAndWarnings = exceptionsAndWarnings;
            Id = id;
            Logins = logins;
            Message = message;
            OrphanedUsersInfo = orphanedUsersInfo;
            ResultType = resultType;
            ServerRoleResults = serverRoleResults;
            SourceServerBrandVersion = sourceServerBrandVersion;
            SourceServerVersion = sourceServerVersion;
            StartedOn = startedOn;
            State = state;
            Status = status;
            TargetServerBrandVersion = targetServerBrandVersion;
            TargetServerVersion = targetServerVersion;
        }
    }
}
