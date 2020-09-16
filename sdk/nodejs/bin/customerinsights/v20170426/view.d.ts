import * as pulumi from "@pulumi/pulumi";
/**
 * The view resource format.
 */
export declare class View extends pulumi.CustomResource {
    /**
     * Get an existing View resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): View;
    /**
     * Returns true if the given object is an instance of View.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is View;
    /**
     * Date time when view was last modified.
     */
    readonly changed: pulumi.Output<string>;
    /**
     * Date time when view was created.
     */
    readonly created: pulumi.Output<string>;
    /**
     * View definition.
     */
    readonly definition: pulumi.Output<string>;
    /**
     * Localized display name for the view.
     */
    readonly displayName: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * the hub name.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * the user ID.
     */
    readonly userId: pulumi.Output<string | undefined>;
    /**
     * Name of the view.
     */
    readonly viewName: pulumi.Output<string>;
    /**
     * Create a View resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ViewArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a View resource.
 */
export interface ViewArgs {
    /**
     * View definition.
     */
    readonly definition: pulumi.Input<string>;
    /**
     * Localized display name for the view.
     */
    readonly displayName?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the hub.
     */
    readonly hubName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * the user ID.
     */
    readonly userId?: pulumi.Input<string>;
    /**
     * The name of the view.
     */
    readonly viewName: pulumi.Input<string>;
}
