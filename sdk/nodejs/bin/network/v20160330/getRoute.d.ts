import * as pulumi from "@pulumi/pulumi";
export declare function getRoute(args: GetRouteArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteResult>;
export interface GetRouteArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the route.
     */
    readonly routeName: string;
    /**
     * The name of the route table.
     */
    readonly routeTableName: string;
}
/**
 * Route resource
 */
export interface GetRouteResult {
    /**
     * Gets or sets the destination CIDR to which the route applies.
     */
    readonly addressPrefix?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: string;
    /**
     * Gets name of the resource that is unique within a resource group. This name can be used to access the resource
     */
    readonly name?: string;
    /**
     * Gets or sets the IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
     */
    readonly nextHopIpAddress?: string;
    /**
     * Gets or sets the type of Azure hop the packet should be sent to.
     */
    readonly nextHopType: string;
    /**
     * Gets or sets Provisioning state of the resource Updating/Deleting/Failed
     */
    readonly provisioningState?: string;
}
