// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Billing.V20180801Preview.Inputs
{

    /// <summary>
    /// The schedule associated with a report.
    /// </summary>
    public sealed class ReportScheduleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The schedule recurrence.
        /// </summary>
        [Input("recurrence", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Billing.V20180801Preview.RecurrenceType> Recurrence { get; set; } = null!;

        /// <summary>
        /// Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date.
        /// </summary>
        [Input("recurrencePeriod")]
        public Input<Inputs.ReportRecurrencePeriodArgs>? RecurrencePeriod { get; set; }

        /// <summary>
        /// The status of the schedule. Whether active or not. If inactive, the report's scheduled execution is paused.
        /// </summary>
        [Input("status")]
        public InputUnion<string, Pulumi.AzureNextGen.Billing.V20180801Preview.StatusType>? Status { get; set; }

        public ReportScheduleArgs()
        {
        }
    }
}
