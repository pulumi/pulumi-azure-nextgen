// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cdn.V20200415.Inputs
{

    /// <summary>
    /// Defines contents of a web application firewall global configuration
    /// </summary>
    public sealed class PolicySettingsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
        /// </summary>
        [Input("defaultCustomBlockResponseBody")]
        public Input<string>? DefaultCustomBlockResponseBody { get; set; }

        /// <summary>
        /// If the action type is block, this field defines the default customer overridable http response status code.
        /// </summary>
        [Input("defaultCustomBlockResponseStatusCode")]
        public Input<int>? DefaultCustomBlockResponseStatusCode { get; set; }

        /// <summary>
        /// If action type is redirect, this field represents the default redirect URL for the client.
        /// </summary>
        [Input("defaultRedirectUrl")]
        public Input<string>? DefaultRedirectUrl { get; set; }

        /// <summary>
        /// describes if the policy is in enabled state or disabled state
        /// </summary>
        [Input("enabledState")]
        public InputUnion<string, Pulumi.AzureNextGen.Cdn.V20200415.PolicyEnabledState>? EnabledState { get; set; }

        /// <summary>
        /// Describes if it is in detection mode or prevention mode at policy level.
        /// </summary>
        [Input("mode")]
        public InputUnion<string, Pulumi.AzureNextGen.Cdn.V20200415.PolicyMode>? Mode { get; set; }

        public PolicySettingsArgs()
        {
        }
    }
}
