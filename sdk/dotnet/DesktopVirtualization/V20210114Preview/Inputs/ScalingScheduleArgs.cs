// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DesktopVirtualization.V20210114Preview.Inputs
{

    /// <summary>
    /// Scaling plan schedule.
    /// </summary>
    public sealed class ScalingScheduleArgs : Pulumi.ResourceArgs
    {
        [Input("daysOfWeek")]
        private InputList<string>? _daysOfWeek;

        /// <summary>
        /// Set of days of the week on which this schedule is active.
        /// </summary>
        public InputList<string> DaysOfWeek
        {
            get => _daysOfWeek ?? (_daysOfWeek = new InputList<string>());
            set => _daysOfWeek = value;
        }

        /// <summary>
        /// Name of the scaling schedule.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Load balancing algorithm for off-peak period.
        /// </summary>
        [Input("offPeakLoadBalancingAlgorithm")]
        public InputUnion<string, Pulumi.AzureNextGen.DesktopVirtualization.V20210114Preview.SessionHostLoadBalancingAlgorithm>? OffPeakLoadBalancingAlgorithm { get; set; }

        /// <summary>
        /// Starting time for off-peak period.
        /// </summary>
        [Input("offPeakStartTime")]
        public Input<string>? OffPeakStartTime { get; set; }

        /// <summary>
        /// Load balancing algorithm for peak period.
        /// </summary>
        [Input("peakLoadBalancingAlgorithm")]
        public InputUnion<string, Pulumi.AzureNextGen.DesktopVirtualization.V20210114Preview.SessionHostLoadBalancingAlgorithm>? PeakLoadBalancingAlgorithm { get; set; }

        /// <summary>
        /// Starting time for peak period.
        /// </summary>
        [Input("peakStartTime")]
        public Input<string>? PeakStartTime { get; set; }

        /// <summary>
        /// Capacity threshold for ramp down period.
        /// </summary>
        [Input("rampDownCapacityThresholdPct")]
        public Input<int>? RampDownCapacityThresholdPct { get; set; }

        /// <summary>
        /// Should users be logged off forcefully from hosts.
        /// </summary>
        [Input("rampDownForceLogoffUsers")]
        public Input<bool>? RampDownForceLogoffUsers { get; set; }

        /// <summary>
        /// Load balancing algorithm for ramp down period.
        /// </summary>
        [Input("rampDownLoadBalancingAlgorithm")]
        public InputUnion<string, Pulumi.AzureNextGen.DesktopVirtualization.V20210114Preview.SessionHostLoadBalancingAlgorithm>? RampDownLoadBalancingAlgorithm { get; set; }

        /// <summary>
        /// Minimum host percentage for ramp down period.
        /// </summary>
        [Input("rampDownMinimumHostsPct")]
        public Input<int>? RampDownMinimumHostsPct { get; set; }

        /// <summary>
        /// Notification message for users during ramp down period.
        /// </summary>
        [Input("rampDownNotificationMessage")]
        public Input<string>? RampDownNotificationMessage { get; set; }

        /// <summary>
        /// Number of minutes to wait to stop hosts during ramp down period.
        /// </summary>
        [Input("rampDownNotificationMinutes")]
        public Input<int>? RampDownNotificationMinutes { get; set; }

        /// <summary>
        /// Starting time for ramp down period.
        /// </summary>
        [Input("rampDownStartTime")]
        public Input<string>? RampDownStartTime { get; set; }

        /// <summary>
        /// Specifies when to stop hosts during ramp down period.
        /// </summary>
        [Input("rampDownStopHostsWhen")]
        public InputUnion<string, Pulumi.AzureNextGen.DesktopVirtualization.V20210114Preview.StopHostsWhen>? RampDownStopHostsWhen { get; set; }

        /// <summary>
        /// Load balancing algorithm for ramp up period.
        /// </summary>
        [Input("rampUpAlgorithm")]
        public InputUnion<string, Pulumi.AzureNextGen.DesktopVirtualization.V20210114Preview.SessionHostLoadBalancingAlgorithm>? RampUpAlgorithm { get; set; }

        /// <summary>
        /// Capacity threshold for ramp up period.
        /// </summary>
        [Input("rampUpCapacityThresholdPct")]
        public Input<int>? RampUpCapacityThresholdPct { get; set; }

        /// <summary>
        /// Minimum host percentage for ramp up period.
        /// </summary>
        [Input("rampUpMinimumHostPct")]
        public Input<int>? RampUpMinimumHostPct { get; set; }

        /// <summary>
        /// Starting time for ramp up period.
        /// </summary>
        [Input("rampUpStartTime")]
        public Input<string>? RampUpStartTime { get; set; }

        public ScalingScheduleArgs()
        {
        }
    }
}
