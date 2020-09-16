import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The DataManager resource.
 */
export declare class DataManager extends pulumi.CustomResource {
    /**
     * Get an existing DataManager resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataManager;
    /**
     * Returns true if the given object is an instance of DataManager.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DataManager;
    /**
     * Etag of the Resource.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East
     * US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo
     * region is specified on update the request will succeed.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The sku type.
     */
    readonly sku: pulumi.Output<outputs.hybriddata.v20190601.SkuResponse | undefined>;
    /**
     * The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource
     * (across resource groups).
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a DataManager resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataManagerArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DataManager resource.
 */
export interface DataManagerArgs {
    /**
     * The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    readonly dataManagerName: pulumi.Input<string>;
    /**
     * Etag of the Resource.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East
     * US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo
     * region is specified on update the request will succeed.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The Resource Group Name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The sku type.
     */
    readonly sku?: pulumi.Input<inputs.hybriddata.v20190601.Sku>;
    /**
     * The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource
     * (across resource groups).
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
