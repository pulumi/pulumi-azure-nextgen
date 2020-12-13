// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20190601.Inputs
{

    /// <summary>
    /// Defines contents of a web application firewall global configuration.
    /// </summary>
    public sealed class PolicySettingsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Describes if the policy is in enabled state or disabled state.
        /// </summary>
        [Input("enabledState")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20190601.WebApplicationFirewallEnabledState>? EnabledState { get; set; }

        /// <summary>
        /// Describes if it is in detection mode or prevention mode at policy level.
        /// </summary>
        [Input("mode")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20190601.WebApplicationFirewallMode>? Mode { get; set; }

        public PolicySettingsArgs()
        {
        }
    }
}
