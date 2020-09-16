import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Resource group information.
 */
export declare class ResourceGroup extends pulumi.CustomResource {
    /**
     * Get an existing ResourceGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ResourceGroup;
    /**
     * Returns true if the given object is an instance of ResourceGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ResourceGroup;
    /**
     * The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The ID of the resource that manages this resource group.
     */
    readonly managedBy: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The resource group properties.
     */
    readonly properties: pulumi.Output<outputs.resources.v20160901.ResourceGroupPropertiesResponse>;
    /**
     * The tags attached to the resource group.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a ResourceGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ResourceGroupArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ResourceGroup resource.
 */
export interface ResourceGroupArgs {
    /**
     * The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The ID of the resource that manages this resource group.
     */
    readonly managedBy?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the resource group to create or update.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The tags attached to the resource group.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
