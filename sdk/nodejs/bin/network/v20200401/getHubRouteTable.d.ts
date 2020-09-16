import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getHubRouteTable(args: GetHubRouteTableArgs, opts?: pulumi.InvokeOptions): Promise<GetHubRouteTableResult>;
export interface GetHubRouteTableArgs {
    /**
     * The resource group name of the VirtualHub.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the RouteTable.
     */
    readonly routeTableName: string;
    /**
     * The name of the VirtualHub.
     */
    readonly virtualHubName: string;
}
/**
 * RouteTable resource in a virtual hub.
 */
export interface GetHubRouteTableResult {
    /**
     * List of all connections associated with this route table.
     */
    readonly associatedConnections: string[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * List of labels associated with this route table.
     */
    readonly labels?: string[];
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * List of all connections that advertise to this route table.
     */
    readonly propagatingConnections: string[];
    /**
     * The provisioning state of the RouteTable resource.
     */
    readonly provisioningState: string;
    /**
     * List of all routes.
     */
    readonly routes?: outputs.network.v20200401.HubRouteResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
}
