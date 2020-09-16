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
 * Authorization in a ExpressRouteCircuit resource
 */
export interface GetExpressRouteCircuitAuthorizationResult {
    /**
     * Gets or sets the authorization key
     */
    readonly authorizationKey?: string;
    /**
     * Gets or sets AuthorizationUseStatus
     */
    readonly authorizationUseStatus?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: string;
    /**
     * Gets name of the resource that is unique within a resource group. This name can be used to access the resource
     */
    readonly name?: string;
    /**
     * Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState?: string;
}
