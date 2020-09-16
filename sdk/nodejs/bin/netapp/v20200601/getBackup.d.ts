import * as pulumi from "@pulumi/pulumi";
export declare function getBackup(args: GetBackupArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupResult>;
export interface GetBackupArgs {
    /**
     * The name of the NetApp account
     */
    readonly accountName: string;
    /**
     * The name of the backup
     */
    readonly backupName: string;
    /**
     * The name of the capacity pool
     */
    readonly poolName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the volume
     */
    readonly volumeName: string;
}
/**
 * Backup of a Volume
 */
export interface GetBackupResult {
    /**
     * Type of backup adhoc or scheduled
     */
    readonly backupType: string;
    /**
     * The creation date of the backup
     */
    readonly creationDate: string;
    /**
     * Label for backup
     */
    readonly label?: string;
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
     * Size of backup
     */
    readonly size: number;
    /**
     * Resource type
     */
    readonly type: string;
}
