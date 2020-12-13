// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getExpressRouteCircuitConnection(args: GetExpressRouteCircuitConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCircuitConnectionResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/latest:getExpressRouteCircuitConnection", {
        "circuitName": args.circuitName,
        "connectionName": args.connectionName,
        "peeringName": args.peeringName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRouteCircuitConnectionArgs {
    /**
     * The name of the express route circuit.
     */
    readonly circuitName: string;
    /**
     * The name of the express route circuit connection.
     */
    readonly connectionName: string;
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
 * Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
 */
export interface GetExpressRouteCircuitConnectionResult {
    /**
     * /29 IP address space to carve out Customer addresses for tunnels.
     */
    readonly addressPrefix?: string;
    /**
     * The authorization key.
     */
    readonly authorizationKey?: string;
    /**
     * Express Route Circuit connection state.
     */
    readonly circuitConnectionStatus: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
     */
    readonly expressRouteCircuitPeering?: outputs.network.latest.SubResourceResponse;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * IPv6 Address PrefixProperties of the express route circuit connection.
     */
    readonly ipv6CircuitConnectionConfig?: outputs.network.latest.Ipv6CircuitConnectionConfigResponse;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
     */
    readonly peerExpressRouteCircuitPeering?: outputs.network.latest.SubResourceResponse;
    /**
     * The provisioning state of the express route circuit connection resource.
     */
    readonly provisioningState: string;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
