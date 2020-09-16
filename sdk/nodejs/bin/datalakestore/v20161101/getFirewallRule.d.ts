import * as pulumi from "@pulumi/pulumi";
export declare function getFirewallRule(args: GetFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallRuleResult>;
export interface GetFirewallRuleArgs {
    /**
     * The name of the Data Lake Store account.
     */
    readonly accountName: string;
    /**
     * The name of the firewall rule to retrieve.
     */
    readonly firewallRuleName: string;
    /**
     * The name of the Azure resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Data Lake Store firewall rule information.
 */
export interface GetFirewallRuleResult {
    /**
     * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
     */
    readonly endIpAddress: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
     */
    readonly startIpAddress: string;
    /**
     * The resource type.
     */
    readonly type: string;
}
