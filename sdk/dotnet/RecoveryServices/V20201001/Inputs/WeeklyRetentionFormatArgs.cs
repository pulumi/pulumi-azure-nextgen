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
    /// Weekly retention format.
    /// </summary>
    public sealed class WeeklyRetentionFormatArgs : Pulumi.ResourceArgs
    {
        [Input("daysOfTheWeek")]
        private InputList<Pulumi.AzureNextGen.RecoveryServices.V20201001.DayOfWeek>? _daysOfTheWeek;

        /// <summary>
        /// List of days of the week.
        /// </summary>
        public InputList<Pulumi.AzureNextGen.RecoveryServices.V20201001.DayOfWeek> DaysOfTheWeek
        {
            get => _daysOfTheWeek ?? (_daysOfTheWeek = new InputList<Pulumi.AzureNextGen.RecoveryServices.V20201001.DayOfWeek>());
            set => _daysOfTheWeek = value;
        }

        [Input("weeksOfTheMonth")]
        private InputList<Pulumi.AzureNextGen.RecoveryServices.V20201001.WeekOfMonth>? _weeksOfTheMonth;

        /// <summary>
        /// List of weeks of month.
        /// </summary>
        public InputList<Pulumi.AzureNextGen.RecoveryServices.V20201001.WeekOfMonth> WeeksOfTheMonth
        {
            get => _weeksOfTheMonth ?? (_weeksOfTheMonth = new InputList<Pulumi.AzureNextGen.RecoveryServices.V20201001.WeekOfMonth>());
            set => _weeksOfTheMonth = value;
        }

        public WeeklyRetentionFormatArgs()
        {
        }
    }
}
