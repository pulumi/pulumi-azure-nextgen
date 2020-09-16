import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The volume container.
 */
export declare class VolumeContainer extends pulumi.CustomResource {
    /**
     * Get an existing VolumeContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VolumeContainer;
    /**
     * Returns true if the given object is an instance of VolumeContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VolumeContainer;
    /**
     * The bandwidth-rate set on the volume container.
     */
    readonly bandWidthRateInMbps: pulumi.Output<number | undefined>;
    /**
     * The ID of the bandwidth setting associated with the volume container.
     */
    readonly bandwidthSettingId: pulumi.Output<string | undefined>;
    /**
     * The key used to encrypt data in the volume container. It is required when property 'EncryptionStatus' is "Enabled".
     */
    readonly encryptionKey: pulumi.Output<outputs.storsimple.v20170601.AsymmetricEncryptedSecretResponse | undefined>;
    /**
     * The flag to denote whether encryption is enabled or not.
     */
    readonly encryptionStatus: pulumi.Output<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * The name of the object.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The owner ship status of the volume container. Only when the status is "NotOwned", the delete operation on the volume container is permitted.
     */
    readonly ownerShipStatus: pulumi.Output<string>;
    /**
     * The path ID of storage account associated with the volume container.
     */
    readonly storageAccountCredentialId: pulumi.Output<string>;
    /**
     * The total cloud storage for the volume container.
     */
    readonly totalCloudStorageUsageInBytes: pulumi.Output<number>;
    /**
     * The hierarchical type of the object.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The number of volumes in the volume Container.
     */
    readonly volumeCount: pulumi.Output<number>;
    /**
     * Create a VolumeContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeContainerArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VolumeContainer resource.
 */
export interface VolumeContainerArgs {
    /**
     * The bandwidth-rate set on the volume container.
     */
    readonly bandWidthRateInMbps?: pulumi.Input<number>;
    /**
     * The ID of the bandwidth setting associated with the volume container.
     */
    readonly bandwidthSettingId?: pulumi.Input<string>;
    /**
     * The device name
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * The key used to encrypt data in the volume container. It is required when property 'EncryptionStatus' is "Enabled".
     */
    readonly encryptionKey?: pulumi.Input<inputs.storsimple.v20170601.AsymmetricEncryptedSecret>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * The manager name
     */
    readonly managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The path ID of storage account associated with the volume container.
     */
    readonly storageAccountCredentialId: pulumi.Input<string>;
    /**
     * The name of the volume container.
     */
    readonly volumeContainerName: pulumi.Input<string>;
}
