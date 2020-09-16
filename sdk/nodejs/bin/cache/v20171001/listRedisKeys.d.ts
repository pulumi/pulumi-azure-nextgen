import * as pulumi from "@pulumi/pulumi";
export declare function listRedisKeys(args: ListRedisKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListRedisKeysResult>;
export interface ListRedisKeysArgs {
    /**
     * The name of the Redis cache.
     */
    readonly name: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Redis cache access keys.
 */
export interface ListRedisKeysResult {
    /**
     * The current primary key that clients can use to authenticate with Redis cache.
     */
    readonly primaryKey: string;
    /**
     * The current secondary key that clients can use to authenticate with Redis cache.
     */
    readonly secondaryKey: string;
}
