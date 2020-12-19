// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20170901Preview.Inputs
{

    /// <summary>
    /// Trigger that schedules pipeline runs for all fixed time interval windows from a start time without gaps and also supports backfill scenarios (when start time is in the past).
    /// </summary>
    public sealed class TumblingWindowTriggerArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies how long the trigger waits past due time before triggering new run. It doesn't alter window start and end time. The default is 0. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
        /// </summary>
        [Input("delay")]
        public Input<object>? Delay { get; set; }

        /// <summary>
        /// Trigger description.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// The end time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported.
        /// </summary>
        [Input("endTime")]
        public Input<string>? EndTime { get; set; }

        /// <summary>
        /// The frequency of the time windows.
        /// </summary>
        [Input("frequency", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DataFactory.V20170901Preview.TumblingWindowFrequency> Frequency { get; set; } = null!;

        /// <summary>
        /// The interval of the time windows. The minimum interval allowed is 15 Minutes.
        /// </summary>
        [Input("interval", required: true)]
        public Input<int> Interval { get; set; } = null!;

        /// <summary>
        /// The max number of parallel time windows (ready for execution) for which a new run is triggered.
        /// </summary>
        [Input("maxConcurrency", required: true)]
        public Input<int> MaxConcurrency { get; set; } = null!;

        /// <summary>
        /// Pipeline for which runs are created when an event is fired for trigger window that is ready.
        /// </summary>
        [Input("pipeline", required: true)]
        public Input<Inputs.TriggerPipelineReferenceArgs> Pipeline { get; set; } = null!;

        /// <summary>
        /// Retry policy that will be applied for failed pipeline runs.
        /// </summary>
        [Input("retryPolicy")]
        public Input<Inputs.RetryPolicyArgs>? RetryPolicy { get; set; }

        /// <summary>
        /// The start time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported.
        /// </summary>
        [Input("startTime", required: true)]
        public Input<string> StartTime { get; set; } = null!;

        /// <summary>
        /// Trigger type.
        /// Expected value is 'TumblingWindowTrigger'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public TumblingWindowTriggerArgs()
        {
        }
    }
}
