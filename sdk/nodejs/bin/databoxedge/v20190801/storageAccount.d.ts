import * as pulumi from "@pulumi/pulumi";
/**
 * Represents a Storage Account on the  Data Box Edge/Gateway device.
 */
export declare class StorageAccount extends pulumi.CustomResource {
    /**
     * Get an existing StorageAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageAccount;
    /**
     * Returns true if the given object is an instance of StorageAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StorageAccount;
    /**
     * BlobEndpoint of Storage Account
     */
    readonly blobEndpoint: pulumi.Output<string>;
    /**
     * The Container Count. Present only for Storage Accounts with DataPolicy set to Cloud.
     */
    readonly containerCount: pulumi.Output<number>;
    /**
     * Data policy of the storage Account.
     */
    readonly dataPolicy: pulumi.Output<string | undefined>;
    /**
     * Description for the storage Account.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The object name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Storage Account Credential Id
     */
    readonly storageAccountCredentialId: pulumi.Output<string | undefined>;
    /**
     * Current status of the storage account
     */
    readonly storageAccountStatus: pulumi.Output<string | undefined>;
    /**
     * The hierarchical type of the object.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a StorageAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageAccountArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a StorageAccount resource.
 */
export interface StorageAccountArgs {
    /**
     * Data policy of the storage Account.
     */
    readonly dataPolicy?: pulumi.Input<string>;
    /**
     * Description for the storage Account.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The device name.
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Storage Account Credential Id
     */
    readonly storageAccountCredentialId?: pulumi.Input<string>;
    /**
     * The StorageAccount name.
     */
    readonly storageAccountName: pulumi.Input<string>;
    /**
     * Current status of the storage account
     */
    readonly storageAccountStatus?: pulumi.Input<string>;
}
