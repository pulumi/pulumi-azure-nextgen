// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20201001.Inputs
{

    /// <summary>
    /// Weekly retention schedule.
    /// </summary>
    public sealed class WeeklyRetentionScheduleArgs : Pulumi.ResourceArgs
    {
        [Input("daysOfTheWeek")]
        private InputList<Pulumi.AzureNextGen.RecoveryServices.V20201001.DayOfWeek>? _daysOfTheWeek;

        /// <summary>
        /// List of days of week for weekly retention policy.
        /// </summary>
        public InputList<Pulumi.AzureNextGen.RecoveryServices.V20201001.DayOfWeek> DaysOfTheWeek
        {
            get => _daysOfTheWeek ?? (_daysOfTheWeek = new InputList<Pulumi.AzureNextGen.RecoveryServices.V20201001.DayOfWeek>());
            set => _daysOfTheWeek = value;
        }

        /// <summary>
        /// Retention duration of retention Policy.
        /// </summary>
        [Input("retentionDuration")]
        public Input<Inputs.RetentionDurationArgs>? RetentionDuration { get; set; }

        [Input("retentionTimes")]
        private InputList<string>? _retentionTimes;

        /// <summary>
        /// Retention times of retention policy.
        /// </summary>
        public InputList<string> RetentionTimes
        {
            get => _retentionTimes ?? (_retentionTimes = new InputList<string>());
            set => _retentionTimes = value;
        }

        public WeeklyRetentionScheduleArgs()
        {
        }
    }
}
