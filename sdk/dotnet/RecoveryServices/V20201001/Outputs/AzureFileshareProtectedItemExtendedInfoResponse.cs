// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20201001.Outputs
{

    [OutputType]
    public sealed class AzureFileshareProtectedItemExtendedInfoResponse
    {
        /// <summary>
        /// The oldest backup copy available for this item in the service.
        /// </summary>
        public readonly string? OldestRecoveryPoint;
        /// <summary>
        /// Indicates consistency of policy object and policy applied to this backup item.
        /// </summary>
        public readonly string? PolicyState;
        /// <summary>
        /// Number of available backup copies associated with this backup item.
        /// </summary>
        public readonly int? RecoveryPointCount;
        /// <summary>
        /// Indicates the state of this resource. Possible values are from enum ResourceState {Invalid, Active, SoftDeleted, Deleted}
        /// </summary>
        public readonly string ResourceState;
        /// <summary>
        /// The resource state sync time for this backup item.
        /// </summary>
        public readonly string ResourceStateSyncTime;

        [OutputConstructor]
        private AzureFileshareProtectedItemExtendedInfoResponse(
            string? oldestRecoveryPoint,

            string? policyState,

            int? recoveryPointCount,

            string resourceState,

            string resourceStateSyncTime)
        {
            OldestRecoveryPoint = oldestRecoveryPoint;
            PolicyState = policyState;
            RecoveryPointCount = recoveryPointCount;
            ResourceState = resourceState;
            ResourceStateSyncTime = resourceStateSyncTime;
        }
    }
}
