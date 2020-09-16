import * as pulumi from "@pulumi/pulumi";
export declare function getSnapshot(args: GetSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetSnapshotResult>;
export interface GetSnapshotArgs {
    /**
     * The name of the NetApp account
     */
    readonly accountName: string;
    /**
     * The name of the capacity pool
     */
    readonly poolName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the mount target
     */
    readonly snapshotName: string;
    /**
     * The name of the volume
     */
    readonly volumeName: string;
}
/**
 * Snapshot of a Volume
 */
export interface GetSnapshotResult {
    /**
     * The creation date of the snapshot
     */
    readonly created: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: string;
    /**
     * UUID v4 used to identify the Snapshot
     */
    readonly snapshotId: string;
    /**
     * Resource type
     */
    readonly type: string;
}
