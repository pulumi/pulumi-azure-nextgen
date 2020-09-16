import * as pulumi from "@pulumi/pulumi";
export declare function getIscsiDisk(args: GetIscsiDiskArgs, opts?: pulumi.InvokeOptions): Promise<GetIscsiDiskResult>;
export interface GetIscsiDiskArgs {
    /**
     * The device name.
     */
    readonly deviceName: string;
    /**
     * The disk name.
     */
    readonly diskName: string;
    /**
     * The iSCSI server name.
     */
    readonly iscsiServerName: string;
    /**
     * The manager name
     */
    readonly managerName: string;
    /**
     * The resource group name
     */
    readonly resourceGroupName: string;
}
/**
 * The iSCSI disk.
 */
export interface GetIscsiDiskResult {
    /**
     * The access control records.
     */
    readonly accessControlRecords: string[];
    /**
     * The data policy.
     */
    readonly dataPolicy: string;
    /**
     * The description.
     */
    readonly description?: string;
    /**
     * The disk status.
     */
    readonly diskStatus: string;
    /**
     * The local used capacity in bytes.
     */
    readonly localUsedCapacityInBytes: number;
    /**
     * The monitoring.
     */
    readonly monitoringStatus: string;
    /**
     * The name.
     */
    readonly name: string;
    /**
     * The provisioned capacity in bytes.
     */
    readonly provisionedCapacityInBytes: number;
    /**
     * The type.
     */
    readonly type: string;
    /**
     * The used capacity in bytes.
     */
    readonly usedCapacityInBytes: number;
}
