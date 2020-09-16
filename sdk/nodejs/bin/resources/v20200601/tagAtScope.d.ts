import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Wrapper resource for tags API requests and responses.
 */
export declare class TagAtScope extends pulumi.CustomResource {
    /**
     * Get an existing TagAtScope resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TagAtScope;
    /**
     * Returns true if the given object is an instance of TagAtScope.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TagAtScope;
    /**
     * The name of the tags wrapper resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The set of tags.
     */
    readonly properties: pulumi.Output<outputs.resources.v20200601.TagsResponse>;
    /**
     * The type of the tags wrapper resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a TagAtScope resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TagAtScopeArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a TagAtScope resource.
 */
export interface TagAtScopeArgs {
    /**
     * The set of tags.
     */
    readonly properties: pulumi.Input<inputs.resources.v20200601.Tags>;
    /**
     * The resource scope.
     */
    readonly scope: pulumi.Input<string>;
}
