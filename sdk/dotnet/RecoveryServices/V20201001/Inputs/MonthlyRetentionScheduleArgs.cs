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
    /// Monthly retention schedule.
    /// </summary>
    public sealed class MonthlyRetentionScheduleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Retention duration of retention Policy.
        /// </summary>
        [Input("retentionDuration")]
        public Input<Inputs.RetentionDurationArgs>? RetentionDuration { get; set; }

        /// <summary>
        /// Daily retention format for monthly retention policy.
        /// </summary>
        [Input("retentionScheduleDaily")]
        public Input<Inputs.DailyRetentionFormatArgs>? RetentionScheduleDaily { get; set; }

        /// <summary>
        /// Retention schedule format type for monthly retention policy.
        /// </summary>
        [Input("retentionScheduleFormatType")]
        public Input<string>? RetentionScheduleFormatType { get; set; }

        /// <summary>
        /// Weekly retention format for monthly retention policy.
        /// </summary>
        [Input("retentionScheduleWeekly")]
        public Input<Inputs.WeeklyRetentionFormatArgs>? RetentionScheduleWeekly { get; set; }

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

        public MonthlyRetentionScheduleArgs()
        {
        }
    }
}
