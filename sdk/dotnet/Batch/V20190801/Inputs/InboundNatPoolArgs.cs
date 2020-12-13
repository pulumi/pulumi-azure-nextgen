// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Batch.V20190801.Inputs
{

    public sealed class InboundNatPoolArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// This must be unique within a Batch pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400.
        /// </summary>
        [Input("backendPort", required: true)]
        public Input<int> BackendPort { get; set; } = null!;

        /// <summary>
        /// Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
        /// </summary>
        [Input("frontendPortRangeEnd", required: true)]
        public Input<int> FrontendPortRangeEnd { get; set; } = null!;

        /// <summary>
        /// Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
        /// </summary>
        [Input("frontendPortRangeStart", required: true)]
        public Input<int> FrontendPortRangeStart { get; set; } = null!;

        /// <summary>
        /// The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        [Input("networkSecurityGroupRules")]
        private InputList<Inputs.NetworkSecurityGroupRuleArgs>? _networkSecurityGroupRules;

        /// <summary>
        /// The maximum number of rules that can be specified across all the endpoints on a Batch pool is 25. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. If the maximum number of network security group rules is exceeded the request fails with HTTP status code 400.
        /// </summary>
        public InputList<Inputs.NetworkSecurityGroupRuleArgs> NetworkSecurityGroupRules
        {
            get => _networkSecurityGroupRules ?? (_networkSecurityGroupRules = new InputList<Inputs.NetworkSecurityGroupRuleArgs>());
            set => _networkSecurityGroupRules = value;
        }

        [Input("protocol", required: true)]
        public Input<Pulumi.AzureNextGen.Batch.V20190801.InboundEndpointProtocol> Protocol { get; set; } = null!;

        public InboundNatPoolArgs()
        {
        }
    }
}
