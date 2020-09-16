import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The IoT Central application.
 */
export declare class App extends pulumi.CustomResource {
    /**
     * Get an existing App resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): App;
    /**
     * Returns true if the given object is an instance of App.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is App;
    /**
     * The ID of the application.
     */
    readonly applicationId: pulumi.Output<string>;
    /**
     * The display name of the application.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The ARM resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A valid instance SKU.
     */
    readonly sku: pulumi.Output<outputs.iotcentral.v20180901.AppSkuInfoResponse>;
    /**
     * The subdomain of the application.
     */
    readonly subdomain: pulumi.Output<string | undefined>;
    /**
     * The resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.
     */
    readonly template: pulumi.Output<string | undefined>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a App resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a App resource.
 */
export interface AppArgs {
    /**
     * The display name of the application.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the IoT Central application.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The ARM resource name of the IoT Central application.
     */
    readonly resourceName: pulumi.Input<string>;
    /**
     * A valid instance SKU.
     */
    readonly sku: pulumi.Input<inputs.iotcentral.v20180901.AppSkuInfo>;
    /**
     * The subdomain of the application.
     */
    readonly subdomain?: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.
     */
    readonly template?: pulumi.Input<string>;
}
