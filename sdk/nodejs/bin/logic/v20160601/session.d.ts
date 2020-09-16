import * as pulumi from "@pulumi/pulumi";
/**
 * The integration account session.
 */
export declare class Session extends pulumi.CustomResource {
    /**
     * Get an existing Session resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Session;
    /**
     * Returns true if the given object is an instance of Session.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Session;
    /**
     * The changed time.
     */
    readonly changedTime: pulumi.Output<string>;
    /**
     * The session content.
     */
    readonly content: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * The created time.
     */
    readonly createdTime: pulumi.Output<string>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Gets the resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Gets the resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Session resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SessionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Session resource.
 */
export interface SessionArgs {
    /**
     * The session content.
     */
    readonly content?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The integration account name.
     */
    readonly integrationAccountName: pulumi.Input<string>;
    /**
     * The resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The integration account session name.
     */
    readonly sessionName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
