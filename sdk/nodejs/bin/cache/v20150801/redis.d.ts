import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A Redis item in CreateOrUpdate Operation response.
 */
export declare class Redis extends pulumi.CustomResource {
    /**
     * Get an existing Redis resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Redis;
    /**
     * Returns true if the given object is an instance of Redis.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Redis;
    /**
     * Redis cache access keys.
     */
    readonly accessKeys: pulumi.Output<outputs.cache.v20150801.RedisAccessKeysResponse | undefined>;
    /**
     * If the value is true, then the non-SLL Redis server port (6379) will be enabled.
     */
    readonly enableNonSslPort: pulumi.Output<boolean | undefined>;
    /**
     * Redis host name.
     */
    readonly hostName: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Redis non-SSL port.
     */
    readonly port: pulumi.Output<number | undefined>;
    /**
     * Redis instance provisioning status.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
     */
    readonly redisConfiguration: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * RedisVersion parameter has been deprecated. As such, it is no longer necessary to provide this parameter and any value specified is ignored.
     */
    readonly redisVersion: pulumi.Output<string | undefined>;
    /**
     * The number of shards to be created on a Premium Cluster Cache.
     */
    readonly shardCount: pulumi.Output<number | undefined>;
    /**
     * What SKU of Redis cache to deploy.
     */
    readonly sku: pulumi.Output<outputs.cache.v20150801.SkuResponse>;
    /**
     * Redis SSL port.
     */
    readonly sslPort: pulumi.Output<number | undefined>;
    /**
     * Required when deploying a Redis cache inside an existing Azure Virtual Network.
     */
    readonly staticIP: pulumi.Output<string | undefined>;
    /**
     * Required when deploying a Redis cache inside an existing Azure Virtual Network.
     */
    readonly subnet: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * tenantSettings
     */
    readonly tenantSettings: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The exact ARM resource ID of the virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.ClassicNetwork/VirtualNetworks/vnet1
     */
    readonly virtualNetwork: pulumi.Output<string | undefined>;
    /**
     * Create a Redis resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RedisArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Redis resource.
 */
export interface RedisArgs {
    /**
     * If the value is true, then the non-SLL Redis server port (6379) will be enabled.
     */
    readonly enableNonSslPort?: pulumi.Input<boolean>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the Redis cache.
     */
    readonly name: pulumi.Input<string>;
    /**
     * All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
     */
    readonly redisConfiguration?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * RedisVersion parameter has been deprecated. As such, it is no longer necessary to provide this parameter and any value specified is ignored.
     */
    readonly redisVersion?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The number of shards to be created on a Premium Cluster Cache.
     */
    readonly shardCount?: pulumi.Input<number>;
    /**
     * What SKU of Redis cache to deploy.
     */
    readonly sku: pulumi.Input<inputs.cache.v20150801.Sku>;
    /**
     * Required when deploying a Redis cache inside an existing Azure Virtual Network.
     */
    readonly staticIP?: pulumi.Input<string>;
    /**
     * Required when deploying a Redis cache inside an existing Azure Virtual Network.
     */
    readonly subnet?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * tenantSettings
     */
    readonly tenantSettings?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The exact ARM resource ID of the virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.ClassicNetwork/VirtualNetworks/vnet1
     */
    readonly virtualNetwork?: pulumi.Input<string>;
}
