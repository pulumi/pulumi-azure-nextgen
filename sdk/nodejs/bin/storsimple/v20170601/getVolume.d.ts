import * as pulumi from "@pulumi/pulumi";
export declare function getVolume(args: GetVolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeResult>;
export interface GetVolumeArgs {
    /**
     * The device name
     */
    readonly deviceName: string;
    /**
     * The manager name
     */
    readonly managerName: string;
    /**
     * The resource group name
     */
    readonly resourceGroupName: string;
    /**
     * The volume container name.
     */
    readonly volumeContainerName: string;
    /**
     * The volume name.
     */
    readonly volumeName: string;
}
/**
 * The volume.
 */
export interface GetVolumeResult {
    /**
     * The IDs of the access control records, associated with the volume.
     */
    readonly accessControlRecordIds: string[];
    /**
     * The IDs of the backup policies, in which this volume is part of.
     */
    readonly backupPolicyIds: string[];
    /**
     * The backup status of the volume.
     */
    readonly backupStatus: string;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: string;
    /**
     * The monitoring status of the volume.
     */
    readonly monitoringStatus: string;
    /**
     * The name of the object.
     */
    readonly name: string;
    /**
     * The operation status on the volume.
     */
    readonly operationStatus: string;
    /**
     * The size of the volume in bytes.
     */
    readonly sizeInBytes: number;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * The ID of the volume container, in which this volume is created.
     */
    readonly volumeContainerId: string;
    /**
     * The volume status.
     */
    readonly volumeStatus: string;
    /**
     * The type of the volume.
     */
    readonly volumeType: string;
}
