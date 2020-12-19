// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataMigration.V20171115Preview.Outputs
{

    [OutputType]
    public sealed class GetUserTablesSqlTaskPropertiesResponse
    {
        /// <summary>
        /// Array of errors. This is ignored if submitted.
        /// </summary>
        public readonly ImmutableArray<Outputs.ODataErrorResponse> Errors;
        /// <summary>
        /// Task input
        /// </summary>
        public readonly Outputs.GetUserTablesSqlTaskInputResponse? Input;
        /// <summary>
        /// Task output. This is ignored if submitted.
        /// </summary>
        public readonly ImmutableArray<Outputs.GetUserTablesSqlTaskOutputResponse> Output;
        /// <summary>
        /// The state of the task. This is ignored if submitted.
        /// </summary>
        public readonly string State;
        /// <summary>
        /// Task type.
        /// Expected value is 'GetUserTables.Sql'.
        /// </summary>
        public readonly string TaskType;

        [OutputConstructor]
        private GetUserTablesSqlTaskPropertiesResponse(
            ImmutableArray<Outputs.ODataErrorResponse> errors,

            Outputs.GetUserTablesSqlTaskInputResponse? input,

            ImmutableArray<Outputs.GetUserTablesSqlTaskOutputResponse> output,

            string state,

            string taskType)
        {
            Errors = errors;
            Input = input;
            Output = output;
            State = state;
            TaskType = taskType;
        }
    }
}
