import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getFirewallPolicyRuleCollectionGroup(args: GetFirewallPolicyRuleCollectionGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallPolicyRuleCollectionGroupResult>;
export interface GetFirewallPolicyRuleCollectionGroupArgs {
    /**
     * The name of the Firewall Policy.
     */
    readonly firewallPolicyName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the FirewallPolicyRuleCollectionGroup.
     */
    readonly ruleCollectionGroupName: string;
}
/**
 * Rule Collection Group resource.
 */
export interface GetFirewallPolicyRuleCollectionGroupResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * Priority of the Firewall Policy Rule Collection Group resource.
     */
    readonly priority?: number;
    /**
     * The provisioning state of the firewall policy rule collection group resource.
     */
    readonly provisioningState: string;
    /**
     * Group of Firewall Policy rule collections.
     */
    readonly ruleCollections?: outputs.network.v20200601.FirewallPolicyRuleCollectionResponse[];
    /**
     * Rule Group type.
     */
    readonly type: string;
}
