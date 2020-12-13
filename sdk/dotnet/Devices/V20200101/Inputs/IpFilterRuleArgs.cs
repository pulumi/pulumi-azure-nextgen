// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Devices.V20200101.Inputs
{

    /// <summary>
    /// The IP filter rules for the IoT dps.
    /// </summary>
    public sealed class IpFilterRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The desired action for requests captured by this rule.
        /// </summary>
        [Input("action", required: true)]
        public Input<Pulumi.AzureNextGen.Devices.V20200101.IpFilterActionType> Action { get; set; } = null!;

        /// <summary>
        /// The name of the IP filter rule.
        /// </summary>
        [Input("filterName", required: true)]
        public Input<string> FilterName { get; set; } = null!;

        /// <summary>
        /// A string that contains the IP address range in CIDR notation for the rule.
        /// </summary>
        [Input("ipMask", required: true)]
        public Input<string> IpMask { get; set; } = null!;

        /// <summary>
        /// Target for requests captured by this rule.
        /// </summary>
        [Input("target")]
        public Input<Pulumi.AzureNextGen.Devices.V20200101.IpFilterTargetType>? Target { get; set; }

        public IpFilterRuleArgs()
        {
        }
    }
}
