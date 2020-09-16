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
     * The identity of the resource.
     */
    readonly identity: pulumi.Output<outputs.resources.v20170510.IdentityResponse | undefined>;
    /**
     * The kind of the resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * ID of the resource that manages this resource.
     */
    readonly managedBy: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * The plan of the resource.
     */
    readonly plan: pulumi.Output<outputs.resources.v20170510.PlanResponse | undefined>;
    /**
     * The resource properties.
     */
    readonly properties: pulumi.Output<{
        [key: string]: any;
    }>;
    /**
     * The SKU of the resource.
     */
    readonly sku: pulumi.Output<outputs.resources.v20170510.SkuResponse | undefined>;
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
     * The identity of the resource.
     */
    readonly identity?: pulumi.Input<inputs.resources.v20170510.Identity>;
    /**
     * The kind of the resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * ID of the resource that manages this resource.
     */
    readonly managedBy?: pulumi.Input<string>;
    /**
     * The parent resource identity.
     */
    readonly parentResourcePath: pulumi.Input<string>;
    /**
     * The plan of the resource.
     */
    readonly plan?: pulumi.Input<inputs.resources.v20170510.Plan>;
    /**
     * The resource properties.
     */
    readonly properties?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The name of the resource group for the resource. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource to create.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * The namespace of the resource provider.
     */
    readonly resourceProviderNamespace: pulumi.Input<string>;
    /**
     * The resource type of the resource to create.
     */
    readonly resourceType: pulumi.Input<string>;
    /**
     * The SKU of the resource.
     */
    readonly sku?: pulumi.Input<inputs.resources.v20170510.Sku>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
