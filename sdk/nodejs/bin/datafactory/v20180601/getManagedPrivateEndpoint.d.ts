import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getManagedPrivateEndpoint(args: GetManagedPrivateEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedPrivateEndpointResult>;
export interface GetManagedPrivateEndpointArgs {
    /**
     * The factory name.
     */
    readonly factoryName: string;
    /**
     * Managed private endpoint name
     */
    readonly managedPrivateEndpointName: string;
    /**
     * Managed virtual network name
     */
    readonly managedVirtualNetworkName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * Managed private endpoint resource type.
 */
export interface GetManagedPrivateEndpointResult {
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * Managed private endpoint properties.
     */
    readonly properties: outputs.datafactory.v20180601.ManagedPrivateEndpointResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
