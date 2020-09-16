import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A Content Key Policy resource.
 */
export declare class ContentKeyPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ContentKeyPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ContentKeyPolicy;
    /**
     * Returns true if the given object is an instance of ContentKeyPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ContentKeyPolicy;
    /**
     * The creation date of the Policy
     */
    readonly created: pulumi.Output<string>;
    /**
     * A description for the Policy.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The last modified date of the Policy
     */
    readonly lastModified: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Key Policy options.
     */
    readonly options: pulumi.Output<outputs.media.v20180701.ContentKeyPolicyOptionResponse[]>;
    /**
     * The legacy Policy ID.
     */
    readonly policyId: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ContentKeyPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContentKeyPolicyArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ContentKeyPolicy resource.
 */
export interface ContentKeyPolicyArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The Content Key Policy name.
     */
    readonly contentKeyPolicyName: pulumi.Input<string>;
    /**
     * A description for the Policy.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The Key Policy options.
     */
    readonly options: pulumi.Input<pulumi.Input<inputs.media.v20180701.ContentKeyPolicyOption>[]>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
