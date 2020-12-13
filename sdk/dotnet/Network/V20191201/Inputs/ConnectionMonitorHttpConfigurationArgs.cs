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
    /// Describes the HTTP configuration.
    /// </summary>
    public sealed class ConnectionMonitorHttpConfigurationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The HTTP method to use.
        /// </summary>
        [Input("method")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20191201.HTTPConfigurationMethod>? Method { get; set; }

        /// <summary>
        /// The path component of the URI. For instance, "/dir1/dir2".
        /// </summary>
        [Input("path")]
        public Input<string>? Path { get; set; }

        /// <summary>
        /// The port to connect to.
        /// </summary>
        [Input("port")]
        public Input<int>? Port { get; set; }

        /// <summary>
        /// Value indicating whether HTTPS is preferred over HTTP in cases where the choice is not explicit.
        /// </summary>
        [Input("preferHTTPS")]
        public Input<bool>? PreferHTTPS { get; set; }

        [Input("requestHeaders")]
        private InputList<Inputs.HTTPHeaderArgs>? _requestHeaders;

        /// <summary>
        /// The HTTP headers to transmit with the request.
        /// </summary>
        public InputList<Inputs.HTTPHeaderArgs> RequestHeaders
        {
            get => _requestHeaders ?? (_requestHeaders = new InputList<Inputs.HTTPHeaderArgs>());
            set => _requestHeaders = value;
        }

        [Input("validStatusCodeRanges")]
        private InputList<string>? _validStatusCodeRanges;

        /// <summary>
        /// HTTP status codes to consider successful. For instance, "2xx,301-304,418".
        /// </summary>
        public InputList<string> ValidStatusCodeRanges
        {
            get => _validStatusCodeRanges ?? (_validStatusCodeRanges = new InputList<string>());
            set => _validStatusCodeRanges = value;
        }

        public ConnectionMonitorHttpConfigurationArgs()
        {
        }
    }
}
