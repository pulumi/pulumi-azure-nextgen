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
    public sealed class LogSchedulePolicyResponse
    {
        /// <summary>
        /// Frequency of the log schedule operation of this policy in minutes.
        /// </summary>
        public readonly int? ScheduleFrequencyInMins;
        /// <summary>
        /// This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
        /// </summary>
        public readonly string SchedulePolicyType;

        [OutputConstructor]
        private LogSchedulePolicyResponse(
            int? scheduleFrequencyInMins,

            string schedulePolicyType)
        {
            ScheduleFrequencyInMins = scheduleFrequencyInMins;
            SchedulePolicyType = schedulePolicyType;
        }
    }
}