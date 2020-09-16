import * as pulumi from "@pulumi/pulumi";
/**
 * The volume.
 */
export declare class Volume extends pulumi.CustomResource {
    /**
     * Get an existing Volume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Volume;
    /**
     * Returns true if the given object is an instance of Volume.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Volume;
    /**
     * The IDs of the access control records, associated with the volume.
     */
    readonly accessControlRecordIds: pulumi.Output<string[]>;
    /**
     * The IDs of the backup policies, in which this volume is part of.
     */
    readonly backupPolicyIds: pulumi.Output<string[]>;
    /**
     * The backup status of the volume.
     */
    readonly backupStatus: pulumi.Output<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * The monitoring status of the volume.
     */
    readonly monitoringStatus: pulumi.Output<string>;
    /**
     * The name of the object.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The operation status on the volume.
     */
    readonly operationStatus: pulumi.Output<string>;
    /**
     * The size of the volume in bytes.
     */
    readonly sizeInBytes: pulumi.Output<number>;
    /**
     * The hierarchical type of the object.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The ID of the volume container, in which this volume is created.
     */
    readonly volumeContainerId: pulumi.Output<string>;
    /**
     * The volume status.
     */
    readonly volumeStatus: pulumi.Output<string>;
    /**
     * The type of the volume.
     */
    readonly volumeType: pulumi.Output<string>;
    /**
     * Create a Volume resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Volume resource.
 */
export interface VolumeArgs {
    /**
     * The IDs of the access control records, associated with the volume.
     */
    readonly accessControlRecordIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The device name
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * The manager name
     */
    readonly managerName: pulumi.Input<string>;
    /**
     * The monitoring status of the volume.
     */
    readonly monitoringStatus: pulumi.Input<string>;
    /**
     * The resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The size of the volume in bytes.
     */
    readonly sizeInBytes: pulumi.Input<number>;
    /**
     * The volume container name.
     */
    readonly volumeContainerName: pulumi.Input<string>;
    /**
     * The volume name.
     */
    readonly volumeName: pulumi.Input<string>;
    /**
     * The volume status.
     */
    readonly volumeStatus: pulumi.Input<string>;
    /**
     * The type of the volume.
     */
    readonly volumeType: pulumi.Input<string>;
}
