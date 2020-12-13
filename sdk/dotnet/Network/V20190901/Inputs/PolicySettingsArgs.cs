// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20190901.Inputs
{

    /// <summary>
    /// Defines contents of a web application firewall global configuration.
    /// </summary>
    public sealed class PolicySettingsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Maximum file upload size in Mb for WAF.
        /// </summary>
        [Input("fileUploadLimitInMb")]
        public Input<int>? FileUploadLimitInMb { get; set; }

        /// <summary>
        /// Maximum request body size in Kb for WAF.
        /// </summary>
        [Input("maxRequestBodySizeInKb")]
        public Input<int>? MaxRequestBodySizeInKb { get; set; }

        /// <summary>
        /// Describes if it is in detection mode or prevention mode at policy level.
        /// </summary>
        [Input("mode")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20190901.WebApplicationFirewallMode>? Mode { get; set; }

        /// <summary>
        /// Whether to allow WAF to check request Body.
        /// </summary>
        [Input("requestBodyCheck")]
        public Input<bool>? RequestBodyCheck { get; set; }

        /// <summary>
        /// Describes if the policy is in enabled state or disabled state.
        /// </summary>
        [Input("state")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20190901.WebApplicationFirewallEnabledState>? State { get; set; }

        public PolicySettingsArgs()
        {
        }
    }
}
