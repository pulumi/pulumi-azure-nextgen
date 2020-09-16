import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getExpressRouteConnection(args: GetExpressRouteConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteConnectionResult>;
export interface GetExpressRouteConnectionArgs {
    /**
     * The name of the ExpressRoute connection.
     */
    readonly connectionName: string;
    /**
     * The name of the ExpressRoute gateway.
     */
    readonly expressRouteGatewayName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * ExpressRouteConnection resource.
 */
export interface GetExpressRouteConnectionResult {
    /**
     * Authorization key to establish the connection.
     */
    readonly authorizationKey?: string;
    /**
     * Enable internet security.
     */
    readonly enableInternetSecurity?: boolean;
    /**
     * The ExpressRoute circuit peering.
     */
    readonly expressRouteCircuitPeering: outputs.network.v20190901.ExpressRouteCircuitPeeringIdResponse;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning state of the express route connection resource.
     */
    readonly provisioningState: string;
    /**
     * The routing weight associated to the connection.
     */
    readonly routingWeight?: number;
}
