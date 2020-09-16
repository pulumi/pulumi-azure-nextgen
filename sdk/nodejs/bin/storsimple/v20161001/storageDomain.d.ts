import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The storage domain.
 */
export declare class StorageDomain extends pulumi.CustomResource {
    /**
     * Get an existing StorageDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageDomain;
    /**
     * Returns true if the given object is an instance of StorageDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StorageDomain;
    /**
     * The encryption key used to encrypt the data. This is a user secret.
     */
    readonly encryptionKey: pulumi.Output<outputs.storsimple.v20161001.AsymmetricEncryptedSecretResponse | undefined>;
    /**
     * The encryption status "Enabled | Disabled".
     */
    readonly encryptionStatus: pulumi.Output<string>;
    /**
     * The name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The storage account credentials.
     */
    readonly storageAccountCredentialIds: pulumi.Output<string[]>;
    /**
     * The type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a StorageDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageDomainArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a StorageDomain resource.
 */
export interface StorageDomainArgs {
    /**
     * The encryption key used to encrypt the data. This is a user secret.
     */
    readonly encryptionKey?: pulumi.Input<inputs.storsimple.v20161001.AsymmetricEncryptedSecret>;
    /**
     * The encryption status "Enabled | Disabled".
     */
    readonly encryptionStatus: pulumi.Input<string>;
    /**
     * The manager name
     */
    readonly managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The storage account credentials.
     */
    readonly storageAccountCredentialIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The storage domain name.
     */
    readonly storageDomainName: pulumi.Input<string>;
}
