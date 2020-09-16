import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Resource information.
 */
export declare class Resource extends pulumi.CustomResource {
    /**
     * Get an existing Resource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Resource;
    /**
     * Returns true if the given object is an instance of Resource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Resource;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets or sets the plan of the resource.
     */
    readonly plan: pulumi.Output<outputs.resources.v20151101.PlanResponse | undefined>;
    /**
     * Gets or sets the resource properties.
     */
    readonly properties: pulumi.Output<{
        [key: string]: any;
    }>;
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
     * Create a Resource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ResourceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Resource resource.
 */
export interface ResourceArgs {
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Resource identity.
     */
    readonly parentResourcePath: pulumi.Input<string>;
    /**
     * Gets or sets the plan of the resource.
     */
    readonly plan?: pulumi.Input<inputs.resources.v20151101.Plan>;
    /**
     * Gets or sets the resource properties.
     */
    readonly properties?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource identity.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * Resource identity.
     */
    readonly resourceProviderNamespace: pulumi.Input<string>;
    /**
     * Resource identity.
     */
    readonly resourceType: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
