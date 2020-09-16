import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getVirtualHubRouteTableV2(args: GetVirtualHubRouteTableV2Args, opts?: pulumi.InvokeOptions): Promise<GetVirtualHubRouteTableV2Result>;
export interface GetVirtualHubRouteTableV2Args {
    /**
     * The resource group name of the VirtualHubRouteTableV2.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the VirtualHubRouteTableV2.
     */
    readonly routeTableName: string;
    /**
     * The name of the VirtualHub.
     */
    readonly virtualHubName: string;
}
/**
 * VirtualHubRouteTableV2 Resource.
 */
export interface GetVirtualHubRouteTableV2Result {
    /**
     * List of all connections attached to this route table v2.
     */
    readonly attachedConnections?: string[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the virtual hub route table v2 resource.
     */
    readonly provisioningState: string;
    /**
     * List of all routes.
     */
    readonly routes?: outputs.network.v20191201.VirtualHubRouteV2Response[];
}
