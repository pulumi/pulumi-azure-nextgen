import * as pulumi from "@pulumi/pulumi";
/**
 * A firewall rule on a redis cache has a name, and describes a contiguous range of IP addresses permitted to connect
 */
export declare class RedisFirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing RedisFirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RedisFirewallRule;
    /**
     * Returns true if the given object is an instance of RedisFirewallRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RedisFirewallRule;
    /**
     * highest IP address included in the range
     */
    readonly endIP: pulumi.Output<string>;
    /**
     * name of the firewall rule
     */
    readonly name: pulumi.Output<string>;
    /**
     * lowest IP address included in the range
     */
    readonly startIP: pulumi.Output<string>;
    /**
     * type (of the firewall rule resource = 'Microsoft.Cache/redis/firewallRule')
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a RedisFirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RedisFirewallRuleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a RedisFirewallRule resource.
 */
export interface RedisFirewallRuleArgs {
    /**
     * The name of the Redis cache.
     */
    readonly cacheName: pulumi.Input<string>;
    /**
     * highest IP address included in the range
     */
    readonly endIP: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the firewall rule.
     */
    readonly ruleName: pulumi.Input<string>;
    /**
     * lowest IP address included in the range
     */
    readonly startIP: pulumi.Input<string>;
}
