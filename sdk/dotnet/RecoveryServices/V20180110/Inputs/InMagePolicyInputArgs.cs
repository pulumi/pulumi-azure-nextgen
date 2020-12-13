// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20180110.Inputs
{

    /// <summary>
    /// VMWare Azure specific protection profile Input.
    /// </summary>
    public sealed class InMagePolicyInputArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The app consistent snapshot frequency (in minutes).
        /// </summary>
        [Input("appConsistentFrequencyInMinutes")]
        public Input<int>? AppConsistentFrequencyInMinutes { get; set; }

        /// <summary>
        /// The class type.
        /// </summary>
        [Input("instanceType")]
        public Input<string>? InstanceType { get; set; }

        /// <summary>
        /// A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
        /// </summary>
        [Input("multiVmSyncStatus", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.RecoveryServices.V20180110.SetMultiVmSyncStatus> MultiVmSyncStatus { get; set; } = null!;

        /// <summary>
        /// The duration in minutes until which the recovery points need to be stored.
        /// </summary>
        [Input("recoveryPointHistory")]
        public Input<int>? RecoveryPointHistory { get; set; }

        /// <summary>
        /// The recovery point threshold in minutes.
        /// </summary>
        [Input("recoveryPointThresholdInMinutes")]
        public Input<int>? RecoveryPointThresholdInMinutes { get; set; }

        public InMagePolicyInputArgs()
        {
        }
    }
}
