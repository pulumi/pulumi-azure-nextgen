// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200601.Inputs
{

    /// <summary>
    /// Probe of the application gateway.
    /// </summary>
    public sealed class ApplicationGatewayProbeArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Host name to send the probe to.
        /// </summary>
        [Input("host")]
        public Input<string>? Host { get; set; }

        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// The probing interval in seconds. This is the time interval between two consecutive probes. Acceptable values are from 1 second to 86400 seconds.
        /// </summary>
        [Input("interval")]
        public Input<int>? Interval { get; set; }

        /// <summary>
        /// Criterion for classifying a healthy probe response.
        /// </summary>
        [Input("match")]
        public Input<Inputs.ApplicationGatewayProbeHealthResponseMatchArgs>? Match { get; set; }

        /// <summary>
        /// Minimum number of servers that are always marked healthy. Default value is 0.
        /// </summary>
        [Input("minServers")]
        public Input<int>? MinServers { get; set; }

        /// <summary>
        /// Name of the probe that is unique within an Application Gateway.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Relative path of probe. Valid path starts from '/'. Probe is sent to &lt;Protocol&gt;://&lt;host&gt;:&lt;port&gt;&lt;path&gt;.
        /// </summary>
        [Input("path")]
        public Input<string>? Path { get; set; }

        /// <summary>
        /// Whether the host header should be picked from the backend http settings. Default value is false.
        /// </summary>
        [Input("pickHostNameFromBackendHttpSettings")]
        public Input<bool>? PickHostNameFromBackendHttpSettings { get; set; }

        /// <summary>
        /// Custom port which will be used for probing the backend servers. The valid value ranges from 1 to 65535. In case not set, port from http settings will be used. This property is valid for Standard_v2 and WAF_v2 only.
        /// </summary>
        [Input("port")]
        public Input<int>? Port { get; set; }

        /// <summary>
        /// The protocol used for the probe.
        /// </summary>
        [Input("protocol")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20200601.ApplicationGatewayProtocol>? Protocol { get; set; }

        /// <summary>
        /// The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds.
        /// </summary>
        [Input("timeout")]
        public Input<int>? Timeout { get; set; }

        /// <summary>
        /// The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20.
        /// </summary>
        [Input("unhealthyThreshold")]
        public Input<int>? UnhealthyThreshold { get; set; }

        public ApplicationGatewayProbeArgs()
        {
        }
    }
}
