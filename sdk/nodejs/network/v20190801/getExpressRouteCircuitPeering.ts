// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getExpressRouteCircuitPeering(args: GetExpressRouteCircuitPeeringArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCircuitPeeringResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20190801:getExpressRouteCircuitPeering", {
        "circuitName": args.circuitName,
        "peeringName": args.peeringName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRouteCircuitPeeringArgs {
    /**
     * The name of the express route circuit.
     */
    readonly circuitName: string;
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
 * Peering in an ExpressRouteCircuit resource.
 */
export interface GetExpressRouteCircuitPeeringResult {
    /**
     * The Azure ASN.
     */
    readonly azureASN?: number;
    /**
     * The list of circuit connections associated with Azure Private Peering for this circuit.
     */
    readonly connections?: outputs.network.v20190801.ExpressRouteCircuitConnectionResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The ExpressRoute connection.
     */
    readonly expressRouteConnection?: outputs.network.v20190801.ExpressRouteConnectionIdResponse;
    /**
     * The GatewayManager Etag.
     */
    readonly gatewayManagerEtag?: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The IPv6 peering configuration.
     */
    readonly ipv6PeeringConfig?: outputs.network.v20190801.Ipv6ExpressRouteCircuitPeeringConfigResponse;
    /**
     * Who was the last to modify the peering.
     */
    readonly lastModifiedBy?: string;
    /**
     * The Microsoft peering configuration.
     */
    readonly microsoftPeeringConfig?: outputs.network.v20190801.ExpressRouteCircuitPeeringConfigResponse;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The peer ASN.
     */
    readonly peerASN?: number;
    /**
     * The list of peered circuit connections associated with Azure Private Peering for this circuit.
     */
    readonly peeredConnections: outputs.network.v20190801.PeerExpressRouteCircuitConnectionResponse[];
    /**
     * The peering type.
     */
    readonly peeringType?: string;
    /**
     * The primary port.
     */
    readonly primaryAzurePort?: string;
    /**
     * The primary address prefix.
     */
    readonly primaryPeerAddressPrefix?: string;
    /**
     * The provisioning state of the express route circuit peering resource.
     */
    readonly provisioningState: string;
    /**
     * The reference of the RouteFilter resource.
     */
    readonly routeFilter?: outputs.network.v20190801.SubResourceResponse;
    /**
     * The secondary port.
     */
    readonly secondaryAzurePort?: string;
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
     * The peering stats of express route circuit.
     */
    readonly stats?: outputs.network.v20190801.ExpressRouteCircuitStatsResponse;
    /**
     * Type of the resource.
     */
    readonly type: string;
    /**
     * The VLAN ID.
     */
    readonly vlanId?: number;
}
