// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20191101
{
    public static class GetExpressRouteCircuitPeering
    {
        public static Task<GetExpressRouteCircuitPeeringResult> InvokeAsync(GetExpressRouteCircuitPeeringArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetExpressRouteCircuitPeeringResult>("azure-nextgen:network/v20191101:getExpressRouteCircuitPeering", args ?? new GetExpressRouteCircuitPeeringArgs(), options.WithVersion());
    }


    public sealed class GetExpressRouteCircuitPeeringArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the express route circuit.
        /// </summary>
        [Input("circuitName", required: true)]
        public string CircuitName { get; set; } = null!;

        /// <summary>
        /// The name of the peering.
        /// </summary>
        [Input("peeringName", required: true)]
        public string PeeringName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetExpressRouteCircuitPeeringArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetExpressRouteCircuitPeeringResult
    {
        /// <summary>
        /// The Azure ASN.
        /// </summary>
        public readonly int? AzureASN;
        /// <summary>
        /// The list of circuit connections associated with Azure Private Peering for this circuit.
        /// </summary>
        public readonly ImmutableArray<Outputs.ExpressRouteCircuitConnectionResponse> Connections;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// The ExpressRoute connection.
        /// </summary>
        public readonly Outputs.ExpressRouteConnectionIdResponse? ExpressRouteConnection;
        /// <summary>
        /// The GatewayManager Etag.
        /// </summary>
        public readonly string? GatewayManagerEtag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// The IPv6 peering configuration.
        /// </summary>
        public readonly Outputs.Ipv6ExpressRouteCircuitPeeringConfigResponse? Ipv6PeeringConfig;
        /// <summary>
        /// Who was the last to modify the peering.
        /// </summary>
        public readonly string LastModifiedBy;
        /// <summary>
        /// The Microsoft peering configuration.
        /// </summary>
        public readonly Outputs.ExpressRouteCircuitPeeringConfigResponse? MicrosoftPeeringConfig;
        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The peer ASN.
        /// </summary>
        public readonly int? PeerASN;
        /// <summary>
        /// The list of peered circuit connections associated with Azure Private Peering for this circuit.
        /// </summary>
        public readonly ImmutableArray<Outputs.PeerExpressRouteCircuitConnectionResponse> PeeredConnections;
        /// <summary>
        /// The peering type.
        /// </summary>
        public readonly string? PeeringType;
        /// <summary>
        /// The primary port.
        /// </summary>
        public readonly string? PrimaryAzurePort;
        /// <summary>
        /// The primary address prefix.
        /// </summary>
        public readonly string? PrimaryPeerAddressPrefix;
        /// <summary>
        /// The provisioning state of the express route circuit peering resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The reference to the RouteFilter resource.
        /// </summary>
        public readonly Outputs.SubResourceResponse? RouteFilter;
        /// <summary>
        /// The secondary port.
        /// </summary>
        public readonly string? SecondaryAzurePort;
        /// <summary>
        /// The secondary address prefix.
        /// </summary>
        public readonly string? SecondaryPeerAddressPrefix;
        /// <summary>
        /// The shared key.
        /// </summary>
        public readonly string? SharedKey;
        /// <summary>
        /// The peering state.
        /// </summary>
        public readonly string? State;
        /// <summary>
        /// The peering stats of express route circuit.
        /// </summary>
        public readonly Outputs.ExpressRouteCircuitStatsResponse? Stats;
        /// <summary>
        /// Type of the resource.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The VLAN ID.
        /// </summary>
        public readonly int? VlanId;

        [OutputConstructor]
        private GetExpressRouteCircuitPeeringResult(
            int? azureASN,

            ImmutableArray<Outputs.ExpressRouteCircuitConnectionResponse> connections,

            string etag,

            Outputs.ExpressRouteConnectionIdResponse? expressRouteConnection,

            string? gatewayManagerEtag,

            string? id,

            Outputs.Ipv6ExpressRouteCircuitPeeringConfigResponse? ipv6PeeringConfig,

            string lastModifiedBy,

            Outputs.ExpressRouteCircuitPeeringConfigResponse? microsoftPeeringConfig,

            string? name,

            int? peerASN,

            ImmutableArray<Outputs.PeerExpressRouteCircuitConnectionResponse> peeredConnections,

            string? peeringType,

            string? primaryAzurePort,

            string? primaryPeerAddressPrefix,

            string provisioningState,

            Outputs.SubResourceResponse? routeFilter,

            string? secondaryAzurePort,

            string? secondaryPeerAddressPrefix,

            string? sharedKey,

            string? state,

            Outputs.ExpressRouteCircuitStatsResponse? stats,

            string type,

            int? vlanId)
        {
            AzureASN = azureASN;
            Connections = connections;
            Etag = etag;
            ExpressRouteConnection = expressRouteConnection;
            GatewayManagerEtag = gatewayManagerEtag;
            Id = id;
            Ipv6PeeringConfig = ipv6PeeringConfig;
            LastModifiedBy = lastModifiedBy;
            MicrosoftPeeringConfig = microsoftPeeringConfig;
            Name = name;
            PeerASN = peerASN;
            PeeredConnections = peeredConnections;
            PeeringType = peeringType;
            PrimaryAzurePort = primaryAzurePort;
            PrimaryPeerAddressPrefix = primaryPeerAddressPrefix;
            ProvisioningState = provisioningState;
            RouteFilter = routeFilter;
            SecondaryAzurePort = secondaryAzurePort;
            SecondaryPeerAddressPrefix = secondaryPeerAddressPrefix;
            SharedKey = sharedKey;
            State = state;
            Stats = stats;
            Type = type;
            VlanId = vlanId;
        }
    }
}
