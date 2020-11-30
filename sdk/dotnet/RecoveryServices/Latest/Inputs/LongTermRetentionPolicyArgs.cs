// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.Latest.Inputs
{

    /// <summary>
    /// Long term retention policy.
    /// </summary>
    public sealed class LongTermRetentionPolicyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Daily retention schedule of the protection policy.
        /// </summary>
        [Input("dailySchedule")]
        public Input<Inputs.DailyRetentionScheduleArgs>? DailySchedule { get; set; }

        /// <summary>
        /// Monthly retention schedule of the protection policy.
        /// </summary>
        [Input("monthlySchedule")]
        public Input<Inputs.MonthlyRetentionScheduleArgs>? MonthlySchedule { get; set; }

        /// <summary>
        /// This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
        /// </summary>
        [Input("retentionPolicyType", required: true)]
        public Input<string> RetentionPolicyType { get; set; } = null!;

        /// <summary>
        /// Weekly retention schedule of the protection policy.
        /// </summary>
        [Input("weeklySchedule")]
        public Input<Inputs.WeeklyRetentionScheduleArgs>? WeeklySchedule { get; set; }

        /// <summary>
        /// Yearly retention schedule of the protection policy.
        /// </summary>
        [Input("yearlySchedule")]
        public Input<Inputs.YearlyRetentionScheduleArgs>? YearlySchedule { get; set; }

        public LongTermRetentionPolicyArgs()
        {
        }
    }
}
