import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * An object that represents a container registry.
 */
export declare class Registry extends pulumi.CustomResource {
    /**
     * Get an existing Registry resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Registry;
    /**
     * Returns true if the given object is an instance of Registry.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Registry;
    /**
     * The value that indicates whether the admin user is enabled.
     */
    readonly adminUserEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The creation date of the container registry in ISO8601 format.
     */
    readonly creationDate: pulumi.Output<string>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The URL that can be used to log into the container registry.
     */
    readonly loginServer: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the container registry at the time the operation was called.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The SKU of the container registry.
     */
    readonly sku: pulumi.Output<outputs.containerregistry.v20170301.SkuResponse>;
    /**
     * The properties of the storage account for the container registry.
     */
    readonly storageAccount: pulumi.Output<outputs.containerregistry.v20170301.StorageAccountPropertiesResponse | undefined>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Registry resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistryArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Registry resource.
 */
export interface RegistryArgs {
    /**
     * The value that indicates whether the admin user is enabled.
     */
    readonly adminUserEnabled?: pulumi.Input<boolean>;
    /**
     * The location of the container registry. This cannot be changed after the resource is created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    readonly registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the container registry.
     */
    readonly sku: pulumi.Input<inputs.containerregistry.v20170301.Sku>;
    /**
     * The parameters of a storage account for the container registry. If specified, the storage account must be in the same physical location as the container registry.
     */
    readonly storageAccount: pulumi.Input<inputs.containerregistry.v20170301.StorageAccountParameters>;
    /**
     * The tags for the container registry.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
