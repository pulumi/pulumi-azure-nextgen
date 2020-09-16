import * as pulumi from "@pulumi/pulumi";
export declare function getFirewallRule(args: GetFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallRuleResult>;
export interface GetFirewallRuleArgs {
    /**
     * The name of the firewall rule.
     */
    readonly firewallRuleName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the server.
     */
    readonly serverName: string;
}
/**
 * Represents a server firewall rule.
 */
export interface GetFirewallRuleResult {
    /**
     * The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
     */
    readonly endIpAddress: string;
    /**
     * Kind of server that contains this firewall rule.
     */
    readonly kind: string;
    /**
     * Location of the server that contains this firewall rule.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses.
     */
    readonly startIpAddress: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
