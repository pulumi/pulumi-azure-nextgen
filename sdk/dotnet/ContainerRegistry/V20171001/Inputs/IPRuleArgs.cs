// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20171001.Inputs
{

    /// <summary>
    /// IP rule with specific IP or IP range in CIDR format.
    /// </summary>
    public sealed class IPRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The action of IP ACL rule.
        /// </summary>
        [Input("action")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerRegistry.V20171001.Action>? Action { get; set; }

        /// <summary>
        /// Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
        /// </summary>
        [Input("iPAddressOrRange", required: true)]
        public Input<string> IPAddressOrRange { get; set; } = null!;

        public IPRuleArgs()
        {
        }
    }
}
