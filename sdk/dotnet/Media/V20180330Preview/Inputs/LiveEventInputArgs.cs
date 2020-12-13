// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.V20180330Preview.Inputs
{

    /// <summary>
    /// The Live Event input.
    /// </summary>
    public sealed class LiveEventInputArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The access token.
        /// </summary>
        [Input("accessToken")]
        public Input<string>? AccessToken { get; set; }

        [Input("endpoints")]
        private InputList<Inputs.LiveEventEndpointArgs>? _endpoints;

        /// <summary>
        /// The input endpoints for the Live Event.
        /// </summary>
        public InputList<Inputs.LiveEventEndpointArgs> Endpoints
        {
            get => _endpoints ?? (_endpoints = new InputList<Inputs.LiveEventEndpointArgs>());
            set => _endpoints = value;
        }

        /// <summary>
        /// ISO 8601 timespan duration of the key frame interval duration.
        /// </summary>
        [Input("keyFrameIntervalDuration")]
        public Input<string>? KeyFrameIntervalDuration { get; set; }

        /// <summary>
        /// The streaming protocol for the Live Event.
        /// </summary>
        [Input("streamingProtocol", required: true)]
        public Input<Pulumi.AzureNextGen.Media.V20180330Preview.LiveEventInputProtocol> StreamingProtocol { get; set; } = null!;

        public LiveEventInputArgs()
        {
        }
    }
}
