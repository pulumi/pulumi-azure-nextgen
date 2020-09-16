import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getbackupPolicy(args: GetbackupPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetbackupPolicyResult>;
export interface GetbackupPolicyArgs {
    /**
     * The name of the NetApp account
     */
    readonly accountName: string;
    /**
     * Backup policy Name which uniquely identify backup policy.
     */
    readonly backupPolicyName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Backup policy information
 */
export interface GetbackupPolicyResult {
    /**
     * Daily backups count to keep
     */
    readonly dailyBackupsToKeep?: number;
    /**
     * The property to decide policy is enabled or not
     */
    readonly enabled?: boolean;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Monthly backups count to keep
     */
    readonly monthlyBackupsToKeep?: number;
    /**
     * Name of backup policy
     */
    readonly name: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * A list of volumes assigned to this policy
     */
    readonly volumeBackups?: outputs.netapp.v20200601.VolumeBackupsResponse[];
    /**
     * Volumes using current backup policy
     */
    readonly volumesAssigned?: number;
    /**
     * Weekly backups count to keep
     */
    readonly weeklyBackupsToKeep?: number;
    /**
     * Yearly backups count to keep
     */
    readonly yearlyBackupsToKeep?: number;
}
