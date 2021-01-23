// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Migrate.V20191001Preview.Outputs
{

    [OutputType]
    public sealed class MoveResourcePropertiesResponseMoveStatus
    {
        /// <summary>
        /// An error response from the azure resource mover service.
        /// </summary>
        public readonly Outputs.MoveResourceErrorResponse? Errors;
        /// <summary>
        /// Defines the job status.
        /// </summary>
        public readonly Outputs.JobStatusResponse? JobStatus;
        /// <summary>
        /// Defines the MoveResource states.
        /// </summary>
        public readonly string MoveState;

        [OutputConstructor]
        private MoveResourcePropertiesResponseMoveStatus(
            Outputs.MoveResourceErrorResponse? errors,

            Outputs.JobStatusResponse? jobStatus,

            string moveState)
        {
            Errors = errors;
            JobStatus = jobStatus;
            MoveState = moveState;
        }
    }
}
