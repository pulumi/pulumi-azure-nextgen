import * as pulumi from "@pulumi/pulumi";
export declare function getCache(args: GetCacheArgs, opts?: pulumi.InvokeOptions): Promise<GetCacheResult>;
export interface GetCacheArgs {
    /**
     * Identifier of the Cache entity. Cache identifier (should be either 'default' or valid Azure region identifier).
     */
    readonly cacheId: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
}
/**
 * Cache details.
 */
export interface GetCacheResult {
    /**
     * Runtime connection string to cache
     */
    readonly connectionString: string;
    /**
     * Cache description
     */
    readonly description?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Original uri of entity in external system cache points to
     */
    readonly resourceId?: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
