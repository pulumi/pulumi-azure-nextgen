// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.Latest.Outputs
{

    [OutputType]
    public sealed class InMageRcmPolicyDetailsResponse
    {
        /// <summary>
        /// The app consistent snapshot frequency in minutes.
        /// </summary>
        public readonly int AppConsistentFrequencyInMinutes;
        /// <summary>
        /// The crash consistent snapshot frequency in minutes.
        /// </summary>
        public readonly int CrashConsistentFrequencyInMinutes;
        /// <summary>
        /// A value indicating whether multi-VM sync has to be enabled.
        /// </summary>
        public readonly string EnableMultiVmSync;
        /// <summary>
        /// Gets the class type. Overridden in derived classes.
        /// Expected value is 'InMageRcm'.
        /// </summary>
        public readonly string InstanceType;
        /// <summary>
        /// The duration in minutes until which the recovery points need to be stored.
        /// </summary>
        public readonly int RecoveryPointHistoryInMinutes;

        [OutputConstructor]
        private InMageRcmPolicyDetailsResponse(
            int appConsistentFrequencyInMinutes,

            int crashConsistentFrequencyInMinutes,

            string enableMultiVmSync,

            string instanceType,

            int recoveryPointHistoryInMinutes)
        {
            AppConsistentFrequencyInMinutes = appConsistentFrequencyInMinutes;
            CrashConsistentFrequencyInMinutes = crashConsistentFrequencyInMinutes;
            EnableMultiVmSync = enableMultiVmSync;
            InstanceType = instanceType;
            RecoveryPointHistoryInMinutes = recoveryPointHistoryInMinutes;
        }
    }
}
