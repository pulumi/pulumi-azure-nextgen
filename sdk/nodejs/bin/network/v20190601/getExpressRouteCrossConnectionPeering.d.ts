import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getExpressRouteCrossConnectionPeering(args: GetExpressRouteCrossConnectionPeeringArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCrossConnectionPeeringResult>;
export interface GetExpressRouteCrossConnectionPeeringArgs {
    /**
     * The name of the ExpressRouteCrossConnection.
     */
    readonly crossConnectionName: string;
    /**
     * The name of the peering.
     */
    readonly peeringName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Peering in an ExpressRoute Cross Connection resource.
 */
export interface GetExpressRouteCrossConnectionPeeringResult {
    /**
     * The Azure ASN.
     */
    readonly azureASN: number;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The GatewayManager Etag.
     */
    readonly gatewayManagerEtag?: string;
    /**
     * The IPv6 peering configuration.
     */
    readonly ipv6PeeringConfig?: outputs.network.v20190601.Ipv6ExpressRouteCircuitPeeringConfigResponse;
    /**
     * Gets whether the provider or the customer last modified the peering.
     */
    readonly lastModifiedBy?: string;
    /**
     * The Microsoft peering configuration.
     */
    readonly microsoftPeeringConfig?: outputs.network.v20190601.ExpressRouteCircuitPeeringConfigResponse;
    /**
     * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The peer ASN.
     */
    readonly peerASN?: number;
    /**
     * The peering type.
     */
    readonly peeringType?: string;
    /**
     * The primary port.
     */
    readonly primaryAzurePort: string;
    /**
     * The primary address prefix.
     */
    readonly primaryPeerAddressPrefix?: string;
    /**
     * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string;
    /**
     * The secondary port.
     */
    readonly secondaryAzurePort: string;
    /**
     * The secondary address prefix.
     */
    readonly secondaryPeerAddressPrefix?: string;
    /**
     * The shared key.
     */
    readonly sharedKey?: string;
    /**
     * The peering state.
     */
    readonly state?: string;
    /**
     * The VLAN ID.
     */
    readonly vlanId?: number;
}
