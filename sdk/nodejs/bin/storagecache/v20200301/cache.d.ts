import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A Cache instance. Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
 */
export declare class Cache extends pulumi.CustomResource {
    /**
     * Get an existing Cache resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Cache;
    /**
     * Returns true if the given object is an instance of Cache.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Cache;
    /**
     * The size of this Cache, in GB.
     */
    readonly cacheSizeGB: pulumi.Output<number | undefined>;
    /**
     * Specifies encryption settings of the cache.
     */
    readonly encryptionSettings: pulumi.Output<outputs.storagecache.v20200301.CacheEncryptionSettingsResponse | undefined>;
    /**
     * Health of the Cache.
     */
    readonly health: pulumi.Output<outputs.storagecache.v20200301.CacheHealthResponse>;
    /**
     * The identity of the cache, if configured.
     */
    readonly identity: pulumi.Output<outputs.storagecache.v20200301.CacheIdentityResponse | undefined>;
    /**
     * Region name string.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Array of IP addresses that can be used by clients mounting this Cache.
     */
    readonly mountAddresses: pulumi.Output<string[]>;
    /**
     * Name of Cache.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies network settings of the cache.
     */
    readonly networkSettings: pulumi.Output<outputs.storagecache.v20200301.CacheNetworkSettingsResponse | undefined>;
    /**
     * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Specifies security settings of the cache.
     */
    readonly securitySettings: pulumi.Output<outputs.storagecache.v20200301.CacheSecuritySettingsResponse | undefined>;
    /**
     * SKU for the Cache.
     */
    readonly sku: pulumi.Output<outputs.storagecache.v20200301.CacheResponseSku | undefined>;
    /**
     * Subnet used for the Cache.
     */
    readonly subnet: pulumi.Output<string | undefined>;
    /**
     * ARM tags as name/value pairs.
     */
    readonly tags: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Type of the Cache; Microsoft.StorageCache/Cache
     */
    readonly type: pulumi.Output<string>;
    /**
     * Upgrade status of the Cache.
     */
    readonly upgradeStatus: pulumi.Output<outputs.storagecache.v20200301.CacheUpgradeStatusResponse | undefined>;
    /**
     * Create a Cache resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CacheArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Cache resource.
 */
export interface CacheArgs {
    /**
     * Name of Cache. Length of name must be not greater than 80 and chars must be in list of [-0-9a-zA-Z_] char class.
     */
    readonly cacheName: pulumi.Input<string>;
    /**
     * The size of this Cache, in GB.
     */
    readonly cacheSizeGB?: pulumi.Input<number>;
    /**
     * Specifies encryption settings of the cache.
     */
    readonly encryptionSettings?: pulumi.Input<inputs.storagecache.v20200301.CacheEncryptionSettings>;
    /**
     * The identity of the cache, if configured.
     */
    readonly identity?: pulumi.Input<inputs.storagecache.v20200301.CacheIdentity>;
    /**
     * Region name string.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies network settings of the cache.
     */
    readonly networkSettings?: pulumi.Input<inputs.storagecache.v20200301.CacheNetworkSettings>;
    /**
     * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * Target resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies security settings of the cache.
     */
    readonly securitySettings?: pulumi.Input<inputs.storagecache.v20200301.CacheSecuritySettings>;
    /**
     * SKU for the Cache.
     */
    readonly sku?: pulumi.Input<inputs.storagecache.v20200301.CacheSku>;
    /**
     * Subnet used for the Cache.
     */
    readonly subnet?: pulumi.Input<string>;
    /**
     * ARM tags as name/value pairs.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: any;
    }>;
}
