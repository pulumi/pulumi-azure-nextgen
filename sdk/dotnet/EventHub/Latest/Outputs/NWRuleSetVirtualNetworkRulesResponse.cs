// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventHub.Latest.Outputs
{

    [OutputType]
    public sealed class NWRuleSetVirtualNetworkRulesResponse
    {
        /// <summary>
        /// Value that indicates whether to ignore missing VNet Service Endpoint
        /// </summary>
        public readonly bool? IgnoreMissingVnetServiceEndpoint;
        /// <summary>
        /// Subnet properties
        /// </summary>
        public readonly Outputs.SubnetResponse? Subnet;

        [OutputConstructor]
        private NWRuleSetVirtualNetworkRulesResponse(
            bool? ignoreMissingVnetServiceEndpoint,

            Outputs.SubnetResponse? subnet)
        {
            IgnoreMissingVnetServiceEndpoint = ignoreMissingVnetServiceEndpoint;
            Subnet = subnet;
        }
    }
}