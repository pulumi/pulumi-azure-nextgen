import * as pulumi from "@pulumi/pulumi";
export declare function getAuthorization(args: GetAuthorizationArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthorizationResult>;
export interface GetAuthorizationArgs {
    /**
     * Name of the ExpressRoute Circuit Authorization in the private cloud
     */
    readonly authorizationName: string;
    /**
     * Name of the private cloud
     */
    readonly privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
/**
 * ExpressRoute Circuit Authorization
 */
export interface GetAuthorizationResult {
    /**
     * The ID of the ExpressRoute Circuit Authorization
     */
    readonly expressRouteAuthorizationId: string;
    /**
     * The key of the ExpressRoute Circuit Authorization
     */
    readonly expressRouteAuthorizationKey: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The state of the  ExpressRoute Circuit Authorization provisioning
     */
    readonly provisioningState: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
