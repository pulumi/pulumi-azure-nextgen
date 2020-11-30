// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../../types";
import * as utilities from "../../utilities";

export function getBackup(args: GetBackupArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:netapp/v20200801:getBackup", {
        "accountName": args.accountName,
        "backupName": args.backupName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "volumeName": args.volumeName,
    }, opts);
}

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
     * UUID v4 used to identify the Backup
     */
    readonly backupId: string;
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
