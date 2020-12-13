// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20160330.Inputs
{

    /// <summary>
    /// SKU of application gateway
    /// </summary>
    public sealed class ApplicationGatewaySkuArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Gets or sets capacity (instance count) of application gateway
        /// </summary>
        [Input("capacity")]
        public Input<int>? Capacity { get; set; }

        /// <summary>
        /// Gets or sets name of application gateway SKU
        /// </summary>
        [Input("name")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20160330.ApplicationGatewaySkuName>? Name { get; set; }

        /// <summary>
        /// Gets or sets tier of application gateway
        /// </summary>
        [Input("tier")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20160330.ApplicationGatewayTier>? Tier { get; set; }

        public ApplicationGatewaySkuArgs()
        {
        }
    }
}
