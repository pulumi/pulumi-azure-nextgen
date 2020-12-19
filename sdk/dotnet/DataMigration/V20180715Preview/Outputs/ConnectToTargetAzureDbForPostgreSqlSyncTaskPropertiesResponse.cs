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
    public sealed class ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse
    {
        /// <summary>
        /// Key value pairs of client data to attach meta data information to task
        /// </summary>
        public readonly ImmutableDictionary<string, string>? ClientData;
        /// <summary>
        /// Array of command properties.
        /// </summary>
        public readonly ImmutableArray<Union<Outputs.MigrateMISyncCompleteCommandPropertiesResponse, Outputs.MigrateSyncCompleteCommandPropertiesResponse>> Commands;
        /// <summary>
        /// Array of errors. This is ignored if submitted.
        /// </summary>
        public readonly ImmutableArray<Outputs.ODataErrorResponse> Errors;
        /// <summary>
        /// Task input
        /// </summary>
        public readonly Outputs.ConnectToTargetAzureDbForPostgreSqlSyncTaskInputResponse? Input;
        /// <summary>
        /// Task output. This is ignored if submitted.
        /// </summary>
        public readonly ImmutableArray<Outputs.ConnectToTargetAzureDbForPostgreSqlSyncTaskOutputResponse> Output;
        /// <summary>
        /// The state of the task. This is ignored if submitted.
        /// </summary>
        public readonly string State;
        /// <summary>
        /// Task type.
        /// Expected value is 'ConnectToTarget.AzureDbForPostgreSql.Sync'.
        /// </summary>
        public readonly string TaskType;

        [OutputConstructor]
        private ConnectToTargetAzureDbForPostgreSqlSyncTaskPropertiesResponse(
            ImmutableDictionary<string, string>? clientData,

            ImmutableArray<Union<Outputs.MigrateMISyncCompleteCommandPropertiesResponse, Outputs.MigrateSyncCompleteCommandPropertiesResponse>> commands,

            ImmutableArray<Outputs.ODataErrorResponse> errors,

            Outputs.ConnectToTargetAzureDbForPostgreSqlSyncTaskInputResponse? input,

            ImmutableArray<Outputs.ConnectToTargetAzureDbForPostgreSqlSyncTaskOutputResponse> output,

            string state,

            string taskType)
        {
            ClientData = clientData;
            Commands = commands;
            Errors = errors;
            Input = input;
            Output = output;
            State = state;
            TaskType = taskType;
        }
    }
}
