import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The storage account credential
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
     * The details of the storage account password
     */
    readonly accessKey: pulumi.Output<outputs.storsimple.v20161001.AsymmetricEncryptedSecretResponse | undefined>;
    /**
     * The cloud service provider
     */
    readonly cloudType: pulumi.Output<string>;
    /**
     * SSL needs to be enabled or not
     */
    readonly enableSSL: pulumi.Output<string>;
    /**
     * The storage endpoint
     */
    readonly endPoint: pulumi.Output<string>;
    /**
     * The storage account's geo location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The storage account login
     */
    readonly login: pulumi.Output<string>;
    /**
     * The name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The type.
     */
    readonly type: pulumi.Output<string>;
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
     * The details of the storage account password
     */
    readonly accessKey?: pulumi.Input<inputs.storsimple.v20161001.AsymmetricEncryptedSecret>;
    /**
     * The cloud service provider
     */
    readonly cloudType: pulumi.Input<string>;
    /**
     * The credential name.
     */
    readonly credentialName: pulumi.Input<string>;
    /**
     * SSL needs to be enabled or not
     */
    readonly enableSSL: pulumi.Input<string>;
    /**
     * The storage endpoint
     */
    readonly endPoint: pulumi.Input<string>;
    /**
     * The storage account's geo location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The storage account login
     */
    readonly login: pulumi.Input<string>;
    /**
     * The manager name
     */
    readonly managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
