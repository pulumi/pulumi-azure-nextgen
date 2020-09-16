import * as pulumi from "@pulumi/pulumi";
/**
 * Represents a server firewall rule.
 */
export declare class FirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing FirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FirewallRule;
    /**
     * Returns true if the given object is an instance of FirewallRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FirewallRule;
    /**
     * The end IP address of the server firewall rule. Must be IPv4 format.
     */
    readonly endIpAddress: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The start IP address of the server firewall rule. Must be IPv4 format.
     */
    readonly startIpAddress: pulumi.Output<string>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a FirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallRuleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a FirewallRule resource.
 */
export interface FirewallRuleArgs {
    /**
     * The end IP address of the server firewall rule. Must be IPv4 format.
     */
    readonly endIpAddress: pulumi.Input<string>;
    /**
     * The name of the server firewall rule.
     */
    readonly firewallRuleName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * The start IP address of the server firewall rule. Must be IPv4 format.
     */
    readonly startIpAddress: pulumi.Input<string>;
}
