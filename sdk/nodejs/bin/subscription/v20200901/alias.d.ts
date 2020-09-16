import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Subscription Information with the alias.
 */
export declare class Alias extends pulumi.CustomResource {
    /**
     * Get an existing Alias resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Alias;
    /**
     * Returns true if the given object is an instance of Alias.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Alias;
    /**
     * Alias ID.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Put Alias response properties.
     */
    readonly properties: pulumi.Output<outputs.subscription.v20200901.PutAliasResponsePropertiesResponse>;
    /**
     * Resource type, Microsoft.Subscription/aliases.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Alias resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AliasArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Alias resource.
 */
export interface AliasArgs {
    /**
     * Alias Name
     */
    readonly aliasName: pulumi.Input<string>;
    /**
     * Put alias request properties.
     */
    readonly properties: pulumi.Input<inputs.subscription.v20200901.PutAliasRequestProperties>;
}
