import * as pulumi from "@pulumi/pulumi";
/**
 * Snapshot of a Volume
 */
export declare class Snapshot extends pulumi.CustomResource {
    /**
     * Get an existing Snapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Snapshot;
    /**
     * Returns true if the given object is an instance of Snapshot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Snapshot;
    /**
     * The creation date of the snapshot
     */
    readonly creationDate: pulumi.Output<string>;
    /**
     * UUID v4 used to identify the FileSystem
     */
    readonly fileSystemId: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * UUID v4 used to identify the Snapshot
     */
    readonly snapshotId: pulumi.Output<string>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Snapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnapshotArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Snapshot resource.
 */
export interface SnapshotArgs {
    /**
     * The name of the NetApp account
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * UUID v4 used to identify the FileSystem
     */
    readonly fileSystemId?: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the capacity pool
     */
    readonly poolName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the mount target
     */
    readonly snapshotName: pulumi.Input<string>;
    /**
     * The name of the volume
     */
    readonly volumeName: pulumi.Input<string>;
}
