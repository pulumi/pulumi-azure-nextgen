import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * An Azure resource which represents access to a suite of Maps REST APIs.
 */
export declare class Account extends pulumi.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Account;
    /**
     * Returns true if the given object is an instance of Account.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Account;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the Maps Account, which is unique within a Resource Group.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The map account properties.
     */
    readonly properties: pulumi.Output<outputs.maps.v20170101preview.MapsAccountPropertiesResponse>;
    /**
     * The SKU of this account.
     */
    readonly sku: pulumi.Output<outputs.maps.v20170101preview.SkuResponse>;
    /**
     * Gets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * Azure resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * The name of the Maps Account.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the Azure Resource Group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of this account.
     */
    readonly sku: pulumi.Input<inputs.maps.v20170101preview.Sku>;
    /**
     * Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
