// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200101.Outputs
{

    [OutputType]
    public sealed class ForwardingConfigurationResponse
    {
        /// <summary>
        /// A reference to the BackendPool which this rule routes to.
        /// </summary>
        public readonly Outputs.SubResourceResponse? BackendPool;
        /// <summary>
        /// The caching configuration associated with this rule.
        /// </summary>
        public readonly Outputs.CacheConfigurationResponse? CacheConfiguration;
        /// <summary>
        /// A custom path used to rewrite resource paths matched by this rule. Leave empty to use incoming path.
        /// </summary>
        public readonly string? CustomForwardingPath;
        /// <summary>
        /// Protocol this rule will use when forwarding traffic to backends.
        /// </summary>
        public readonly string? ForwardingProtocol;
        /// <summary>
        /// 
        /// Expected value is '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration'.
        /// </summary>
        public readonly string OdataType;

        [OutputConstructor]
        private ForwardingConfigurationResponse(
            Outputs.SubResourceResponse? backendPool,

            Outputs.CacheConfigurationResponse? cacheConfiguration,

            string? customForwardingPath,

            string? forwardingProtocol,

            string odataType)
        {
            BackendPool = backendPool;
            CacheConfiguration = cacheConfiguration;
            CustomForwardingPath = customForwardingPath;
            ForwardingProtocol = forwardingProtocol;
            OdataType = odataType;
        }
    }
}
