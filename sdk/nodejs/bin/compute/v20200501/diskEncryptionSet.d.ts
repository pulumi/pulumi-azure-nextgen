import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * disk encryption set resource.
 */
export declare class DiskEncryptionSet extends pulumi.CustomResource {
    /**
     * Get an existing DiskEncryptionSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DiskEncryptionSet;
    /**
     * Returns true if the given object is an instance of DiskEncryptionSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DiskEncryptionSet;
    /**
     * The key vault key which is currently used by this disk encryption set.
     */
    readonly activeKey: pulumi.Output<outputs.compute.v20200501.KeyVaultAndKeyReferenceResponse | undefined>;
    /**
     * The type of key used to encrypt the data of the disk.
     */
    readonly encryptionType: pulumi.Output<string | undefined>;
    /**
     * The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks.
     */
    readonly identity: pulumi.Output<outputs.compute.v20200501.EncryptionSetIdentityResponse | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * A readonly collection of key vault keys previously used by this disk encryption set while a key rotation is in progress. It will be empty if there is no ongoing key rotation.
     */
    readonly previousKeys: pulumi.Output<outputs.compute.v20200501.KeyVaultAndKeyReferenceResponse[]>;
    /**
     * The disk encryption set provisioning state.
     */
    readonly provisioningState: pulumi.Output<string>;
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
     * Create a DiskEncryptionSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiskEncryptionSetArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DiskEncryptionSet resource.
 */
export interface DiskEncryptionSetArgs {
    /**
     * The key vault key which is currently used by this disk encryption set.
     */
    readonly activeKey?: pulumi.Input<inputs.compute.v20200501.KeyVaultAndKeyReference>;
    /**
     * The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
     */
    readonly diskEncryptionSetName: pulumi.Input<string>;
    /**
     * The type of key used to encrypt the data of the disk.
     */
    readonly encryptionType?: pulumi.Input<string>;
    /**
     * The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks.
     */
    readonly identity?: pulumi.Input<inputs.compute.v20200501.EncryptionSetIdentity>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
