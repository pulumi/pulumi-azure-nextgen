import * as pulumi from "@pulumi/pulumi";
/**
 * The details of the snoozed or dismissed rule; for example, the duration, name, and GUID associated with the rule.
 */
export declare class Suppression extends pulumi.CustomResource {
    /**
     * Get an existing Suppression resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Suppression;
    /**
     * Returns true if the given object is an instance of Suppression.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Suppression;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The GUID of the suppression.
     */
    readonly suppressionId: pulumi.Output<string | undefined>;
    /**
     * The duration for which the suppression is valid.
     */
    readonly ttl: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Suppression resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SuppressionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Suppression resource.
 */
export interface SuppressionArgs {
    /**
     * The name of the suppression.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The recommendation ID.
     */
    readonly recommendationId: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
     */
    readonly resourceUri: pulumi.Input<string>;
    /**
     * The GUID of the suppression.
     */
    readonly suppressionId?: pulumi.Input<string>;
    /**
     * The duration for which the suppression is valid.
     */
    readonly ttl?: pulumi.Input<string>;
}
