import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Rule Group resource.
 */
export declare class FirewallPolicyRuleGroup extends pulumi.CustomResource {
    /**
     * Get an existing FirewallPolicyRuleGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FirewallPolicyRuleGroup;
    /**
     * Returns true if the given object is an instance of FirewallPolicyRuleGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FirewallPolicyRuleGroup;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Priority of the Firewall Policy Rule Group resource.
     */
    readonly priority: pulumi.Output<number | undefined>;
    /**
     * The provisioning state of the firewall policy rule group resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Group of Firewall Policy rules.
     */
    readonly rules: pulumi.Output<outputs.network.v20190701.FirewallPolicyRuleResponse[] | undefined>;
    /**
     * Rule Group type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a FirewallPolicyRuleGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallPolicyRuleGroupArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a FirewallPolicyRuleGroup resource.
 */
export interface FirewallPolicyRuleGroupArgs {
    /**
     * The name of the Firewall Policy.
     */
    readonly firewallPolicyName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Priority of the Firewall Policy Rule Group resource.
     */
    readonly priority?: pulumi.Input<number>;
    /**
     * The provisioning state of the firewall policy rule group resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the FirewallPolicyRuleGroup.
     */
    readonly ruleGroupName: pulumi.Input<string>;
    /**
     * Group of Firewall Policy rules.
     */
    readonly rules?: pulumi.Input<pulumi.Input<inputs.network.v20190701.FirewallPolicyRule>[]>;
}
