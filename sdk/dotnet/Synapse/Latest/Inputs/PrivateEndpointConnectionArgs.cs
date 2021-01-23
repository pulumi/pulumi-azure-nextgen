// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Synapse.Latest.Inputs
{

    /// <summary>
    /// A private endpoint connection
    /// </summary>
    public sealed class PrivateEndpointConnectionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Connection state of the private endpoint connection.
        /// </summary>
        [Input("privateLinkServiceConnectionState")]
        public Input<Inputs.PrivateLinkServiceConnectionStateArgs>? PrivateLinkServiceConnectionState { get; set; }

        public PrivateEndpointConnectionArgs()
        {
        }
    }
}
