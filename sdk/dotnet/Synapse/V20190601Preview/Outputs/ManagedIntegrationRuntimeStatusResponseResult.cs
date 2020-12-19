// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Synapse.V20190601Preview.Outputs
{

    [OutputType]
    public sealed class ManagedIntegrationRuntimeStatusResponseResult
    {
        /// <summary>
        /// The time at which the integration runtime was created, in ISO8601 format.
        /// </summary>
        public readonly string CreateTime;
        /// <summary>
        /// The workspace name which the integration runtime belong to.
        /// </summary>
        public readonly string DataFactoryName;
        /// <summary>
        /// The last operation result that occurred on this integration runtime.
        /// </summary>
        public readonly Outputs.ManagedIntegrationRuntimeOperationResultResponseResult LastOperation;
        /// <summary>
        /// The list of nodes for managed integration runtime.
        /// </summary>
        public readonly ImmutableArray<Outputs.ManagedIntegrationRuntimeNodeResponseResult> Nodes;
        /// <summary>
        /// The errors that occurred on this integration runtime.
        /// </summary>
        public readonly ImmutableArray<Outputs.ManagedIntegrationRuntimeErrorResponseResult> OtherErrors;
        /// <summary>
        /// The state of integration runtime.
        /// </summary>
        public readonly string State;
        /// <summary>
        /// Type of integration runtime.
        /// Expected value is 'Managed'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private ManagedIntegrationRuntimeStatusResponseResult(
            string createTime,

            string dataFactoryName,

            Outputs.ManagedIntegrationRuntimeOperationResultResponseResult lastOperation,

            ImmutableArray<Outputs.ManagedIntegrationRuntimeNodeResponseResult> nodes,

            ImmutableArray<Outputs.ManagedIntegrationRuntimeErrorResponseResult> otherErrors,

            string state,

            string type)
        {
            CreateTime = createTime;
            DataFactoryName = dataFactoryName;
            LastOperation = lastOperation;
            Nodes = nodes;
            OtherErrors = otherErrors;
            State = state;
            Type = type;
        }
    }
}
