// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getBackupPolicy(args: GetBackupPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupPolicyResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:storsimple/v20170601:getBackupPolicy", {
        "backupPolicyName": args.backupPolicyName,
        "deviceName": args.deviceName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBackupPolicyArgs {
    /**
     * The name of backup policy to be fetched.
     */
    readonly backupPolicyName: string;
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
}

/**
 * The backup policy.
 */
export interface GetBackupPolicyResult {
    /**
     * The backup policy creation type. Indicates whether this was created through SaaS or through StorSimple Snapshot Manager.
     */
    readonly backupPolicyCreationType: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: string;
    /**
     * The time of the last backup for the backup policy.
     */
    readonly lastBackupTime: string;
    /**
     * The name of the object.
     */
    readonly name: string;
    /**
     * The time of the next backup for the backup policy.
     */
    readonly nextBackupTime: string;
    /**
     * Indicates whether at least one of the schedules in the backup policy is active or not.
     */
    readonly scheduledBackupStatus: string;
    /**
     * The count of schedules the backup policy contains.
     */
    readonly schedulesCount: number;
    /**
     * If the backup policy was created by StorSimple Snapshot Manager, then this field indicates the hostname of the StorSimple Snapshot Manager.
     */
    readonly ssmHostName: string;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * The path IDs of the volumes which are part of the backup policy.
     */
    readonly volumeIds: string[];
}
