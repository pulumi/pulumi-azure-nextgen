import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getFirewallPolicyRuleGroup(args: GetFirewallPolicyRuleGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallPolicyRuleGroupResult>;
export interface GetFirewallPolicyRuleGroupArgs {
    /**
     * The name of the Firewall Policy.
     */
    readonly firewallPolicyName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the FirewallPolicyRuleGroup.
     */
    readonly ruleGroupName: string;
}
/**
 * Rule Group resource
 */
export interface GetFirewallPolicyRuleGroupResult {
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * Priority of the Firewall Policy Rule Group resource.
     */
    readonly priority?: number;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState?: string;
    /**
     * Group of Firewall Policy rules.
     */
    readonly rules?: outputs.network.v20190601.FirewallPolicyRuleResponse[];
    /**
     * Rule Group type.
     */
    readonly type: string;
}
