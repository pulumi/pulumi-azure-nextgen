// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20180401.Inputs
{

    /// <summary>
    /// Class containing endpoint monitoring settings in a Traffic Manager profile.
    /// </summary>
    public sealed class MonitorConfigArgs : Pulumi.ResourceArgs
    {
        [Input("customHeaders")]
        private InputList<Inputs.MonitorConfigCustomHeadersArgs>? _customHeaders;

        /// <summary>
        /// List of custom headers.
        /// </summary>
        public InputList<Inputs.MonitorConfigCustomHeadersArgs> CustomHeaders
        {
            get => _customHeaders ?? (_customHeaders = new InputList<Inputs.MonitorConfigCustomHeadersArgs>());
            set => _customHeaders = value;
        }

        [Input("expectedStatusCodeRanges")]
        private InputList<Inputs.MonitorConfigExpectedStatusCodeRangesArgs>? _expectedStatusCodeRanges;

        /// <summary>
        /// List of expected status code ranges.
        /// </summary>
        public InputList<Inputs.MonitorConfigExpectedStatusCodeRangesArgs> ExpectedStatusCodeRanges
        {
            get => _expectedStatusCodeRanges ?? (_expectedStatusCodeRanges = new InputList<Inputs.MonitorConfigExpectedStatusCodeRangesArgs>());
            set => _expectedStatusCodeRanges = value;
        }

        /// <summary>
        /// The monitor interval for endpoints in this profile. This is the interval at which Traffic Manager will check the health of each endpoint in this profile.
        /// </summary>
        [Input("intervalInSeconds")]
        public Input<int>? IntervalInSeconds { get; set; }

        /// <summary>
        /// The path relative to the endpoint domain name used to probe for endpoint health.
        /// </summary>
        [Input("path")]
        public Input<string>? Path { get; set; }

        /// <summary>
        /// The TCP port used to probe for endpoint health.
        /// </summary>
        [Input("port")]
        public Input<int>? Port { get; set; }

        /// <summary>
        /// The profile-level monitoring status of the Traffic Manager profile.
        /// </summary>
        [Input("profileMonitorStatus")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20180401.ProfileMonitorStatus>? ProfileMonitorStatus { get; set; }

        /// <summary>
        /// The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health.
        /// </summary>
        [Input("protocol")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20180401.MonitorProtocol>? Protocol { get; set; }

        /// <summary>
        /// The monitor timeout for endpoints in this profile. This is the time that Traffic Manager allows endpoints in this profile to response to the health check.
        /// </summary>
        [Input("timeoutInSeconds")]
        public Input<int>? TimeoutInSeconds { get; set; }

        /// <summary>
        /// The number of consecutive failed health check that Traffic Manager tolerates before declaring an endpoint in this profile Degraded after the next failed health check.
        /// </summary>
        [Input("toleratedNumberOfFailures")]
        public Input<int>? ToleratedNumberOfFailures { get; set; }

        public MonitorConfigArgs()
        {
        }
    }
}
