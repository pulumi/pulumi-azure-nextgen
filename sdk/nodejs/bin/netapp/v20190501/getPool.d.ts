import * as pulumi from "@pulumi/pulumi";
export declare function getPool(args: GetPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetPoolResult>;
export interface GetPoolArgs {
    /**
     * The name of the NetApp account
     */
    readonly accountName: string;
    /**
     * The name of the capacity pool
     */
    readonly poolName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Capacity pool resource
 */
export interface GetPoolResult {
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * UUID v4 used to identify the Pool
     */
    readonly poolId: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: string;
    /**
     * The service level of the file system
     */
    readonly serviceLevel: string;
    /**
     * Provisioned size of the pool (in bytes). Allowed values are in 4TiB chunks (value must be multiply of 4398046511104).
     */
    readonly size: number;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: any;
    };
    /**
     * Resource type
     */
    readonly type: string;
}
