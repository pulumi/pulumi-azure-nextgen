// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cache.V20180301.Inputs
{

    /// <summary>
    /// Patch schedule entry for a Redis Cache.
    /// </summary>
    public sealed class ScheduleEntryArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Day of the week when a cache can be patched.
        /// </summary>
        [Input("dayOfWeek", required: true)]
        public Input<Pulumi.AzureNextGen.Cache.V20180301.DayOfWeek> DayOfWeek { get; set; } = null!;

        /// <summary>
        /// ISO8601 timespan specifying how much time cache patching can take. 
        /// </summary>
        [Input("maintenanceWindow")]
        public Input<string>? MaintenanceWindow { get; set; }

        /// <summary>
        /// Start hour after which cache patching can start.
        /// </summary>
        [Input("startHourUtc", required: true)]
        public Input<int> StartHourUtc { get; set; } = null!;

        public ScheduleEntryArgs()
        {
        }
    }
}
