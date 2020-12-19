// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20190501.Inputs
{

    /// <summary>
    /// Describes Forwarding Route.
    /// </summary>
    public sealed class ForwardingConfigurationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// A reference to the BackendPool which this rule routes to.
        /// </summary>
        [Input("backendPool")]
        public Input<Inputs.SubResourceArgs>? BackendPool { get; set; }

        /// <summary>
        /// The caching configuration associated with this rule.
        /// </summary>
        [Input("cacheConfiguration")]
        public Input<Inputs.CacheConfigurationArgs>? CacheConfiguration { get; set; }

        /// <summary>
        /// A custom path used to rewrite resource paths matched by this rule. Leave empty to use incoming path.
        /// </summary>
        [Input("customForwardingPath")]
        public Input<string>? CustomForwardingPath { get; set; }

        /// <summary>
        /// Protocol this rule will use when forwarding traffic to backends.
        /// </summary>
        [Input("forwardingProtocol")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20190501.FrontDoorForwardingProtocol>? ForwardingProtocol { get; set; }

        /// <summary>
        /// 
        /// Expected value is '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration'.
        /// </summary>
        [Input("odataType", required: true)]
        public Input<string> OdataType { get; set; } = null!;

        public ForwardingConfigurationArgs()
        {
        }
    }
}
