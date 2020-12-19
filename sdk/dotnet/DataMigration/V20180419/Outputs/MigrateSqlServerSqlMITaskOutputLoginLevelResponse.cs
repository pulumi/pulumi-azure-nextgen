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
    public sealed class MigrateSqlServerSqlMITaskOutputLoginLevelResponse
    {
        /// <summary>
        /// Login migration end time
        /// </summary>
        public readonly string EndedOn;
        /// <summary>
        /// Login migration errors and warnings per login
        /// </summary>
        public readonly ImmutableArray<Outputs.ReportableExceptionResponse> ExceptionsAndWarnings;
        /// <summary>
        /// Result identifier
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Login name.
        /// </summary>
        public readonly string LoginName;
        /// <summary>
        /// Login migration progress message
        /// </summary>
        public readonly string Message;
        /// <summary>
        /// Result type
        /// Expected value is 'LoginLevelOutput'.
        /// </summary>
        public readonly string ResultType;
        /// <summary>
        /// Current stage of login
        /// </summary>
        public readonly string Stage;
        /// <summary>
        /// Login migration start time
        /// </summary>
        public readonly string StartedOn;
        /// <summary>
        /// Current state of login
        /// </summary>
        public readonly string State;

        [OutputConstructor]
        private MigrateSqlServerSqlMITaskOutputLoginLevelResponse(
            string endedOn,

            ImmutableArray<Outputs.ReportableExceptionResponse> exceptionsAndWarnings,

            string id,

            string loginName,

            string message,

            string resultType,

            string stage,

            string startedOn,

            string state)
        {
            EndedOn = endedOn;
            ExceptionsAndWarnings = exceptionsAndWarnings;
            Id = id;
            LoginName = loginName;
            Message = message;
            ResultType = resultType;
            Stage = stage;
            StartedOn = startedOn;
            State = state;
        }
    }
}
