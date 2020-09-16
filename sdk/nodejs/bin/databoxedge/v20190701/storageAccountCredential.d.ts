import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The storage account credential.
 */
export declare class StorageAccountCredential extends pulumi.CustomResource {
    /**
     * Get an existing StorageAccountCredential resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageAccountCredential;
    /**
     * Returns true if the given object is an instance of StorageAccountCredential.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StorageAccountCredential;
    /**
     * Encrypted storage key.
     */
    readonly accountKey: pulumi.Output<outputs.databoxedge.v20190701.AsymmetricEncryptedSecretResponse | undefined>;
    /**
     * Type of storage accessed on the storage account.
     */
    readonly accountType: pulumi.Output<string>;
    /**
     * Alias for the storage account.
     */
    readonly alias: pulumi.Output<string>;
    /**
     * Blob end point for private clouds.
     */
    readonly blobDomainName: pulumi.Output<string | undefined>;
    /**
     * Connection string for the storage account. Use this string if username and account key are not specified.
     */
    readonly connectionString: pulumi.Output<string | undefined>;
    /**
     * The object name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Signifies whether SSL needs to be enabled or not.
     */
    readonly sslStatus: pulumi.Output<string>;
    /**
     * Id of the storage account.
     */
    readonly storageAccountId: pulumi.Output<string | undefined>;
    /**
     * The hierarchical type of the object.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Username for the storage account.
     */
    readonly userName: pulumi.Output<string | undefined>;
    /**
     * Create a StorageAccountCredential resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageAccountCredentialArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a StorageAccountCredential resource.
 */
export interface StorageAccountCredentialArgs {
    /**
     * Encrypted storage key.
     */
    readonly accountKey?: pulumi.Input<inputs.databoxedge.v20190701.AsymmetricEncryptedSecret>;
    /**
     * Type of storage accessed on the storage account.
     */
    readonly accountType: pulumi.Input<string>;
    /**
     * Alias for the storage account.
     */
    readonly alias: pulumi.Input<string>;
    /**
     * Blob end point for private clouds.
     */
    readonly blobDomainName?: pulumi.Input<string>;
    /**
     * Connection string for the storage account. Use this string if username and account key are not specified.
     */
    readonly connectionString?: pulumi.Input<string>;
    /**
     * The device name.
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * The storage account credential name.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Signifies whether SSL needs to be enabled or not.
     */
    readonly sslStatus: pulumi.Input<string>;
    /**
     * Id of the storage account.
     */
    readonly storageAccountId?: pulumi.Input<string>;
    /**
     * Username for the storage account.
     */
    readonly userName?: pulumi.Input<string>;
}
