// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20181201
{
    public static class GetExpressRouteCircuit
    {
        public static Task<GetExpressRouteCircuitResult> InvokeAsync(GetExpressRouteCircuitArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetExpressRouteCircuitResult>("azure-nextgen:network/v20181201:getExpressRouteCircuit", args ?? new GetExpressRouteCircuitArgs(), options.WithVersion());
    }


    public sealed class GetExpressRouteCircuitArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of express route circuit.
        /// </summary>
        [Input("circuitName", required: true)]
        public string CircuitName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetExpressRouteCircuitArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetExpressRouteCircuitResult
    {
        /// <summary>
        /// Allow classic operations
        /// </summary>
        public readonly bool? AllowClassicOperations;
        /// <summary>
        /// Flag to enable Global Reach on the circuit.
        /// </summary>
        public readonly bool? AllowGlobalReach;
        /// <summary>
        /// The list of authorizations.
        /// </summary>
        public readonly ImmutableArray<Outputs.ExpressRouteCircuitAuthorizationResponse> Authorizations;
        /// <summary>
        /// The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
        /// </summary>
        public readonly double? BandwidthInGbps;
        /// <summary>
        /// The CircuitProvisioningState state of the resource.
        /// </summary>
        public readonly string? CircuitProvisioningState;
        /// <summary>
        /// Gets a unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
        /// </summary>
        public readonly Outputs.SubResourceResponse? ExpressRoutePort;
        /// <summary>
        /// The GatewayManager Etag.
        /// </summary>
        public readonly string? GatewayManagerEtag;
        /// <summary>
        /// Flag denoting Global reach status.
        /// </summary>
        public readonly bool? GlobalReachEnabled;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The list of peerings.
        /// </summary>
        public readonly ImmutableArray<Outputs.ExpressRouteCircuitPeeringResponse> Peerings;
        /// <summary>
        /// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// The ServiceKey.
        /// </summary>
        public readonly string? ServiceKey;
        /// <summary>
        /// The ServiceProviderNotes.
        /// </summary>
        public readonly string? ServiceProviderNotes;
        /// <summary>
        /// The ServiceProviderProperties.
        /// </summary>
        public readonly Outputs.ExpressRouteCircuitServiceProviderPropertiesResponse? ServiceProviderProperties;
        /// <summary>
        /// The ServiceProviderProvisioningState state of the resource. Possible values are 'NotProvisioned', 'Provisioning', 'Provisioned', and 'Deprovisioning'.
        /// </summary>
        public readonly string? ServiceProviderProvisioningState;
        /// <summary>
        /// The SKU.
        /// </summary>
        public readonly Outputs.ExpressRouteCircuitSkuResponse? Sku;
        /// <summary>
        /// The identifier of the circuit traffic. Outer tag for QinQ encapsulation.
        /// </summary>
        public readonly int Stag;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetExpressRouteCircuitResult(
            bool? allowClassicOperations,

            bool? allowGlobalReach,

            ImmutableArray<Outputs.ExpressRouteCircuitAuthorizationResponse> authorizations,

            double? bandwidthInGbps,

            string? circuitProvisioningState,

            string etag,

            Outputs.SubResourceResponse? expressRoutePort,

            string? gatewayManagerEtag,

            bool? globalReachEnabled,

            string? id,

            string? location,

            string name,

            ImmutableArray<Outputs.ExpressRouteCircuitPeeringResponse> peerings,

            string? provisioningState,

            string? serviceKey,

            string? serviceProviderNotes,

            Outputs.ExpressRouteCircuitServiceProviderPropertiesResponse? serviceProviderProperties,

            string? serviceProviderProvisioningState,

            Outputs.ExpressRouteCircuitSkuResponse? sku,

            int stag,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            AllowClassicOperations = allowClassicOperations;
            AllowGlobalReach = allowGlobalReach;
            Authorizations = authorizations;
            BandwidthInGbps = bandwidthInGbps;
            CircuitProvisioningState = circuitProvisioningState;
            Etag = etag;
            ExpressRoutePort = expressRoutePort;
            GatewayManagerEtag = gatewayManagerEtag;
            GlobalReachEnabled = globalReachEnabled;
            Id = id;
            Location = location;
            Name = name;
            Peerings = peerings;
            ProvisioningState = provisioningState;
            ServiceKey = serviceKey;
            ServiceProviderNotes = serviceProviderNotes;
            ServiceProviderProperties = serviceProviderProperties;
            ServiceProviderProvisioningState = serviceProviderProvisioningState;
            Sku = sku;
            Stag = stag;
            Tags = tags;
            Type = type;
        }
    }
}
