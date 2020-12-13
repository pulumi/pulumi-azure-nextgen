// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20150501Preview.Inputs
{

    /// <summary>
    /// Request routing rule of application gateway
    /// </summary>
    public sealed class ApplicationGatewayRequestRoutingRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Gets or sets backend address pool resource of application gateway 
        /// </summary>
        [Input("backendAddressPool")]
        public Input<Inputs.SubResourceArgs>? BackendAddressPool { get; set; }

        /// <summary>
        /// Gets or sets frontend port resource of application gateway 
        /// </summary>
        [Input("backendHttpSettings")]
        public Input<Inputs.SubResourceArgs>? BackendHttpSettings { get; set; }

        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated
        /// </summary>
        [Input("etag")]
        public Input<string>? Etag { get; set; }

        /// <summary>
        /// Gets or sets http listener resource of application gateway 
        /// </summary>
        [Input("httpListener")]
        public Input<Inputs.SubResourceArgs>? HttpListener { get; set; }

        /// <summary>
        /// Resource Id
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// Gets name of the resource that is unique within a resource group. This name can be used to access the resource
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Gets or sets Provisioning state of the request routing rule resource Updating/Deleting/Failed
        /// </summary>
        [Input("provisioningState")]
        public Input<string>? ProvisioningState { get; set; }

        /// <summary>
        /// Gets or sets the rule type
        /// </summary>
        [Input("ruleType")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20150501Preview.ApplicationGatewayRequestRoutingRuleType>? RuleType { get; set; }

        public ApplicationGatewayRequestRoutingRuleArgs()
        {
        }
    }
}
