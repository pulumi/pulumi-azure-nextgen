// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20160810.Outputs
{

    [OutputType]
    public sealed class InMageBasePolicyDetailsResponse
    {
        /// <summary>
        /// The app consistent snapshot frequency in minutes.
        /// </summary>
        public readonly int? AppConsistentFrequencyInMinutes;
        /// <summary>
        /// Gets the class type. Overridden in derived classes.
        /// Expected value is 'InMageBasePolicyDetails'.
        /// </summary>
        public readonly string InstanceType;
        /// <summary>
        /// A value indicating whether multi-VM sync has to be enabled.
        /// </summary>
        public readonly string? MultiVmSyncStatus;
        /// <summary>
        /// The duration in minutes until which the recovery points need to be stored.
        /// </summary>
        public readonly int? RecoveryPointHistory;
        /// <summary>
        /// The recovery point threshold in minutes.
        /// </summary>
        public readonly int? RecoveryPointThresholdInMinutes;

        [OutputConstructor]
        private InMageBasePolicyDetailsResponse(
            int? appConsistentFrequencyInMinutes,

            string instanceType,

            string? multiVmSyncStatus,

            int? recoveryPointHistory,

            int? recoveryPointThresholdInMinutes)
        {
            AppConsistentFrequencyInMinutes = appConsistentFrequencyInMinutes;
            InstanceType = instanceType;
            MultiVmSyncStatus = multiVmSyncStatus;
            RecoveryPointHistory = recoveryPointHistory;
            RecoveryPointThresholdInMinutes = recoveryPointThresholdInMinutes;
        }
    }
}
