// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200701.Inputs
{

    /// <summary>
    /// Describes the TCP configuration.
    /// </summary>
    public sealed class ConnectionMonitorTcpConfigurationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Destination port behavior.
        /// </summary>
        [Input("destinationPortBehavior")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20200701.DestinationPortBehavior>? DestinationPortBehavior { get; set; }

        /// <summary>
        /// Value indicating whether path evaluation with trace route should be disabled.
        /// </summary>
        [Input("disableTraceRoute")]
        public Input<bool>? DisableTraceRoute { get; set; }

        /// <summary>
        /// The port to connect to.
        /// </summary>
        [Input("port")]
        public Input<int>? Port { get; set; }

        public ConnectionMonitorTcpConfigurationArgs()
        {
        }
    }
}
