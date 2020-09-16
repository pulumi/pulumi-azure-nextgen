import * as pulumi from "@pulumi/pulumi";
export declare function getFirewallRule(args: GetFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallRuleResult>;
export interface GetFirewallRuleArgs {
    /**
     * The name of the Redis cache.
     */
    readonly cacheName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the firewall rule.
     */
    readonly ruleName: string;
}
/**
 * A firewall rule on a redis cache has a name, and describes a contiguous range of IP addresses permitted to connect
 */
export interface GetFirewallRuleResult {
    /**
     * highest IP address included in the range
     */
    readonly endIP: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * lowest IP address included in the range
     */
    readonly startIP: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
