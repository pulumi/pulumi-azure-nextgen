import * as pulumi from "@pulumi/pulumi";
/**
 * Description of a namespace authorization rule.
 */
export declare class QueueAuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing QueueAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): QueueAuthorizationRule;
    /**
     * Returns true if the given object is an instance of QueueAuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is QueueAuthorizationRule;
    /**
     * A string that describes Claim Type for authorization rule.
     */
    readonly claimType: pulumi.Output<string | undefined>;
    /**
     * A string that describes Claim Value of authorization rule.
     */
    readonly claimValue: pulumi.Output<string | undefined>;
    /**
     * The time the namespace was created.
     */
    readonly createdTime: pulumi.Output<string>;
    /**
     * A string that describes the Key Name of authorization rule.
     */
    readonly keyName: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The time the namespace was updated.
     */
    readonly modifiedTime: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    readonly primaryKey: pulumi.Output<string | undefined>;
    /**
     * The rights associated with the rule.
     */
    readonly rights: pulumi.Output<string[]>;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    readonly secondaryKey: pulumi.Output<string | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a QueueAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QueueAuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a QueueAuthorizationRule resource.
 */
export interface QueueAuthorizationRuleArgs {
    /**
     * The authorization rule name.
     */
    readonly authorizationRuleName: pulumi.Input<string>;
    /**
     * A string that describes Claim Type for authorization rule.
     */
    readonly claimType?: pulumi.Input<string>;
    /**
     * A string that describes Claim Value of authorization rule.
     */
    readonly claimValue?: pulumi.Input<string>;
    /**
     * A string that describes the Key Name of authorization rule.
     */
    readonly keyName?: pulumi.Input<string>;
    /**
     * data center location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Name of the authorization rule.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The namespace name
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    readonly primaryKey?: pulumi.Input<string>;
    /**
     * The queue name.
     */
    readonly queueName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The rights associated with the rule.
     */
    readonly rights: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    readonly secondaryKey?: pulumi.Input<string>;
}
