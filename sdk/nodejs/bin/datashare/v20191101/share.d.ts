import * as pulumi from "@pulumi/pulumi";
/**
 * A share data transfer object.
 */
export declare class Share extends pulumi.CustomResource {
    /**
     * Get an existing Share resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Share;
    /**
     * Returns true if the given object is an instance of Share.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Share;
    /**
     * Time at which the share was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * Share description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Name of the azure resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets or sets the provisioning state
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Share kind.
     */
    readonly shareKind: pulumi.Output<string | undefined>;
    /**
     * Share terms.
     */
    readonly terms: pulumi.Output<string | undefined>;
    /**
     * Type of the azure resource
     */
    readonly type: pulumi.Output<string>;
    /**
     * Email of the user who created the resource
     */
    readonly userEmail: pulumi.Output<string>;
    /**
     * Name of the user who created the resource
     */
    readonly userName: pulumi.Output<string>;
    /**
     * Create a Share resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ShareArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Share resource.
 */
export interface ShareArgs {
    /**
     * The name of the share account.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * Share description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Share kind.
     */
    readonly shareKind?: pulumi.Input<string>;
    /**
     * The name of the share.
     */
    readonly shareName: pulumi.Input<string>;
    /**
     * Share terms.
     */
    readonly terms?: pulumi.Input<string>;
}
