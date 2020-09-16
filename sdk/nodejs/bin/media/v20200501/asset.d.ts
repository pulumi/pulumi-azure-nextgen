import * as pulumi from "@pulumi/pulumi";
/**
 * An Asset.
 */
export declare class Asset extends pulumi.CustomResource {
    /**
     * Get an existing Asset resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Asset;
    /**
     * Returns true if the given object is an instance of Asset.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Asset;
    /**
     * The alternate ID of the Asset.
     */
    readonly alternateId: pulumi.Output<string | undefined>;
    /**
     * The Asset ID.
     */
    readonly assetId: pulumi.Output<string>;
    /**
     * The name of the asset blob container.
     */
    readonly container: pulumi.Output<string | undefined>;
    /**
     * The creation date of the Asset.
     */
    readonly created: pulumi.Output<string>;
    /**
     * The Asset description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The last modified date of the Asset.
     */
    readonly lastModified: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the storage account.
     */
    readonly storageAccountName: pulumi.Output<string | undefined>;
    /**
     * The Asset encryption format. One of None or MediaStorageEncryption.
     */
    readonly storageEncryptionFormat: pulumi.Output<string>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Asset resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssetArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Asset resource.
 */
export interface AssetArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The alternate ID of the Asset.
     */
    readonly alternateId?: pulumi.Input<string>;
    /**
     * The Asset name.
     */
    readonly assetName: pulumi.Input<string>;
    /**
     * The name of the asset blob container.
     */
    readonly container?: pulumi.Input<string>;
    /**
     * The Asset description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the storage account.
     */
    readonly storageAccountName?: pulumi.Input<string>;
}
