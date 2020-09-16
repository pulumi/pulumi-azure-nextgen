import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getCache(args: GetCacheArgs, opts?: pulumi.InvokeOptions): Promise<GetCacheResult>;
export interface GetCacheArgs {
    /**
     * Name of Cache.
     */
    readonly cacheName: string;
    /**
     * Target resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * A Cache instance. Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
 */
export interface GetCacheResult {
    /**
     * The size of this Cache, in GB.
     */
    readonly cacheSizeGB?: number;
    /**
     * Health of the Cache.
     */
    readonly health: outputs.storagecache.v20191101.CacheHealthResponse;
    /**
     * Region name string.
     */
    readonly location?: string;
    /**
     * Array of IP addresses that can be used by clients mounting this Cache.
     */
    readonly mountAddresses: string[];
    /**
     * Name of Cache.
     */
    readonly name: string;
    /**
     * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
     */
    readonly provisioningState?: string;
    /**
     * SKU for the Cache.
     */
    readonly sku?: outputs.storagecache.v20191101.CacheResponseSku;
    /**
     * Subnet used for the Cache.
     */
    readonly subnet?: string;
    /**
     * ARM tags as name/value pairs.
     */
    readonly tags?: {
        [key: string]: any;
    };
    /**
     * Type of the Cache; Microsoft.StorageCache/Cache
     */
    readonly type: string;
    /**
     * Upgrade status of the Cache.
     */
    readonly upgradeStatus?: outputs.storagecache.v20191101.CacheUpgradeStatusResponse;
}
