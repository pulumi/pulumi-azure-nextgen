import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getRouteTable(args: GetRouteTableArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteTableResult>;
export interface GetRouteTableArgs {
    /**
     * expand references resources.
     */
    readonly expand?: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the route table.
     */
    readonly routeTableName: string;
}
/**
 * RouteTable resource
 */
export interface GetRouteTableResult {
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Gets provisioning state of the resource Updating/Deleting/Failed
     */
    readonly provisioningState?: string;
    /**
     * Gets or sets Routes in a Route Table
     */
    readonly routes?: outputs.network.v20160601.RouteResponse[];
    /**
     * Gets collection of references to subnets
     */
    readonly subnets: outputs.network.v20160601.SubnetResponse[];
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
}
