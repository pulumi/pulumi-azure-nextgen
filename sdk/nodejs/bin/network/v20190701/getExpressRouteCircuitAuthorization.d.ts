import * as pulumi from "@pulumi/pulumi";
export declare function getExpressRouteCircuitAuthorization(args: GetExpressRouteCircuitAuthorizationArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCircuitAuthorizationResult>;
export interface GetExpressRouteCircuitAuthorizationArgs {
    /**
     * The name of the authorization.
     */
    readonly authorizationName: string;
    /**
     * The name of the express route circuit.
     */
    readonly circuitName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Authorization in an ExpressRouteCircuit resource.
 */
export interface GetExpressRouteCircuitAuthorizationResult {
    /**
     * The authorization key.
     */
    readonly authorizationKey?: string;
    /**
     * The authorization use status.
     */
    readonly authorizationUseStatus?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the authorization resource.
     */
    readonly provisioningState?: string;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
