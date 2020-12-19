// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20180601.Outputs
{

    [OutputType]
    public sealed class RerunTumblingWindowTriggerResponse
    {
        /// <summary>
        /// List of tags that can be used for describing the trigger.
        /// </summary>
        public readonly ImmutableArray<object> Annotations;
        /// <summary>
        /// Trigger description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The parent trigger reference.
        /// </summary>
        public readonly object ParentTrigger;
        /// <summary>
        /// The end time for the time period for which restatement is initiated. Only UTC time is currently supported.
        /// </summary>
        public readonly string RequestedEndTime;
        /// <summary>
        /// The start time for the time period for which restatement is initiated. Only UTC time is currently supported.
        /// </summary>
        public readonly string RequestedStartTime;
        /// <summary>
        /// The max number of parallel time windows (ready for execution) for which a rerun is triggered.
        /// </summary>
        public readonly int RerunConcurrency;
        /// <summary>
        /// Indicates if trigger is running or not. Updated when Start/Stop APIs are called on the Trigger.
        /// </summary>
        public readonly string RuntimeState;
        /// <summary>
        /// Trigger type.
        /// Expected value is 'RerunTumblingWindowTrigger'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private RerunTumblingWindowTriggerResponse(
            ImmutableArray<object> annotations,

            string? description,

            object parentTrigger,

            string requestedEndTime,

            string requestedStartTime,

            int rerunConcurrency,

            string runtimeState,

            string type)
        {
            Annotations = annotations;
            Description = description;
            ParentTrigger = parentTrigger;
            RequestedEndTime = requestedEndTime;
            RequestedStartTime = requestedStartTime;
            RerunConcurrency = rerunConcurrency;
            RuntimeState = runtimeState;
            Type = type;
        }
    }
}
