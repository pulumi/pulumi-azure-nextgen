// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20191201.Inputs
{

    /// <summary>
    /// Describes the connection monitor endpoint filter item.
    /// </summary>
    public sealed class ConnectionMonitorEndpointFilterItemArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The address of the filter item.
        /// </summary>
        [Input("address")]
        public Input<string>? Address { get; set; }

        /// <summary>
        /// The type of item included in the filter. Currently only 'AgentAddress' is supported.
        /// </summary>
        [Input("type")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20191201.ConnectionMonitorEndpointFilterItemType>? Type { get; set; }

        public ConnectionMonitorEndpointFilterItemArgs()
        {
        }
    }
}
