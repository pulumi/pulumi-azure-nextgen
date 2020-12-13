// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20161201.Inputs
{

    /// <summary>
    /// Authorization in an ExpressRouteCircuit resource.
    /// </summary>
    public sealed class ExpressRouteCircuitAuthorizationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The authorization key.
        /// </summary>
        [Input("authorizationKey")]
        public Input<string>? AuthorizationKey { get; set; }

        /// <summary>
        /// AuthorizationUseStatus. Possible values are: 'Available' and 'InUse'.
        /// </summary>
        [Input("authorizationUseStatus")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20161201.AuthorizationUseStatus>? AuthorizationUseStatus { get; set; }

        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        /// </summary>
        [Input("provisioningState")]
        public Input<string>? ProvisioningState { get; set; }

        public ExpressRouteCircuitAuthorizationArgs()
        {
        }
    }
}
