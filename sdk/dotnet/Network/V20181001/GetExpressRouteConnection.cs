// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20181001
{
    public static class GetExpressRouteConnection
    {
        public static Task<GetExpressRouteConnectionResult> InvokeAsync(GetExpressRouteConnectionArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetExpressRouteConnectionResult>("azure-nextgen:network/v20181001:getExpressRouteConnection", args ?? new GetExpressRouteConnectionArgs(), options.WithVersion());
    }


    public sealed class GetExpressRouteConnectionArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the ExpressRoute connection.
        /// </summary>
        [Input("connectionName", required: true)]
        public string ConnectionName { get; set; } = null!;

        /// <summary>
        /// The name of the ExpressRoute gateway.
        /// </summary>
        [Input("expressRouteGatewayName", required: true)]
        public string ExpressRouteGatewayName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetExpressRouteConnectionArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetExpressRouteConnectionResult
    {
        /// <summary>
        /// Authorization key to establish the connection.
        /// </summary>
        public readonly string? AuthorizationKey;
        /// <summary>
        /// The ExpressRoute circuit peering.
        /// </summary>
        public readonly Outputs.ExpressRouteCircuitPeeringIdResponse ExpressRouteCircuitPeering;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning state of the resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The routing weight associated to the connection.
        /// </summary>
        public readonly int? RoutingWeight;

        [OutputConstructor]
        private GetExpressRouteConnectionResult(
            string? authorizationKey,

            Outputs.ExpressRouteCircuitPeeringIdResponse expressRouteCircuitPeering,

            string? id,

            string name,

            string provisioningState,

            int? routingWeight)
        {
            AuthorizationKey = authorizationKey;
            ExpressRouteCircuitPeering = expressRouteCircuitPeering;
            Id = id;
            Name = name;
            ProvisioningState = provisioningState;
            RoutingWeight = routingWeight;
        }
    }
}
