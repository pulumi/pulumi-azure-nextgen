import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getExpressRouteCircuitConnection(args: GetExpressRouteCircuitConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCircuitConnectionResult>;
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
    readonly circuitConnectionStatus?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
     */
    readonly expressRouteCircuitPeering?: outputs.network.v20190601.SubResourceResponse;
    /**
     * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
     */
    readonly peerExpressRouteCircuitPeering?: outputs.network.v20190601.SubResourceResponse;
    /**
     * Provisioning state of the circuit connection resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
