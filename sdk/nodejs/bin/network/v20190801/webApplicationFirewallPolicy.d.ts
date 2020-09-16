import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Defines web application firewall policy.
 */
export declare class WebApplicationFirewallPolicy extends pulumi.CustomResource {
    /**
     * Get an existing WebApplicationFirewallPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebApplicationFirewallPolicy;
    /**
     * Returns true if the given object is an instance of WebApplicationFirewallPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebApplicationFirewallPolicy;
    /**
     * A collection of references to application gateways.
     */
    readonly applicationGateways: pulumi.Output<outputs.network.v20190801.ApplicationGatewayResponse[]>;
    /**
     * Describes custom rules inside the policy.
     */
    readonly customRules: pulumi.Output<outputs.network.v20190801.WebApplicationFirewallCustomRuleResponse[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Describes the managedRules structure
     */
    readonly managedRules: pulumi.Output<outputs.network.v20190801.ManagedRulesDefinitionResponse>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Describes policySettings for policy.
     */
    readonly policySettings: pulumi.Output<outputs.network.v20190801.PolicySettingsResponse | undefined>;
    /**
     * The provisioning state of the web application firewall policy resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Resource status of the policy.
     */
    readonly resourceState: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a WebApplicationFirewallPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebApplicationFirewallPolicyArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WebApplicationFirewallPolicy resource.
 */
export interface WebApplicationFirewallPolicyArgs {
    /**
     * Describes custom rules inside the policy.
     */
    readonly customRules?: pulumi.Input<pulumi.Input<inputs.network.v20190801.WebApplicationFirewallCustomRule>[]>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Describes the managedRules structure
     */
    readonly managedRules: pulumi.Input<inputs.network.v20190801.ManagedRulesDefinition>;
    /**
     * The name of the policy.
     */
    readonly policyName: pulumi.Input<string>;
    /**
     * Describes policySettings for policy.
     */
    readonly policySettings?: pulumi.Input<inputs.network.v20190801.PolicySettings>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
