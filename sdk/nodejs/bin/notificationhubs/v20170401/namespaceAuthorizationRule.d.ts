import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Description of a Namespace AuthorizationRules.
 */
export declare class NamespaceAuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing NamespaceAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NamespaceAuthorizationRule;
    /**
     * Returns true if the given object is an instance of NamespaceAuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NamespaceAuthorizationRule;
    /**
     * A string that describes the claim type
     */
    readonly claimType: pulumi.Output<string>;
    /**
     * A string that describes the claim value
     */
    readonly claimValue: pulumi.Output<string>;
    /**
     * The created time for this rule
     */
    readonly createdTime: pulumi.Output<string>;
    /**
     * A string that describes the authorization rule.
     */
    readonly keyName: pulumi.Output<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The last modified time for this rule
     */
    readonly modifiedTime: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    readonly primaryKey: pulumi.Output<string>;
    /**
     * The revision number for the rule
     */
    readonly revision: pulumi.Output<number>;
    /**
     * The rights associated with the rule.
     */
    readonly rights: pulumi.Output<string[] | undefined>;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    readonly secondaryKey: pulumi.Output<string>;
    /**
     * The sku of the created namespace
     */
    readonly sku: pulumi.Output<outputs.notificationhubs.v20170401.SkuResponse | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a NamespaceAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceAuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a NamespaceAuthorizationRule resource.
 */
export interface NamespaceAuthorizationRuleArgs {
    /**
     * Authorization Rule Name.
     */
    readonly authorizationRuleName: pulumi.Input<string>;
    /**
     * The namespace name.
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * Properties of the Namespace AuthorizationRules.
     */
    readonly properties: pulumi.Input<inputs.notificationhubs.v20170401.SharedAccessAuthorizationRuleProperties>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
