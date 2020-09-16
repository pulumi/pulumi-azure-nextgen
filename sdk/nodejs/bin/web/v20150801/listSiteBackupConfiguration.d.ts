import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listSiteBackupConfiguration(args: ListSiteBackupConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<ListSiteBackupConfigurationResult>;
export interface ListSiteBackupConfigurationArgs {
    /**
     * Name of web app
     */
    readonly name: string;
    /**
     * Name of resource group
     */
    readonly resourceGroupName: string;
}
/**
 * Description of a backup which will be performed
 */
export interface ListSiteBackupConfigurationResult {
    /**
     * Schedule for the backup if it is executed periodically
     */
    readonly backupSchedule?: outputs.web.v20150801.BackupScheduleResponse;
    /**
     * Databases included in the backup
     */
    readonly databases?: outputs.web.v20150801.DatabaseBackupSettingResponse[];
    /**
     * True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled
     */
    readonly enabled?: boolean;
    /**
     * Kind of resource
     */
    readonly kind?: string;
    /**
     * Resource Location
     */
    readonly location: string;
    /**
     * Resource Name
     */
    readonly name?: string;
    /**
     * SAS URL to the container
     */
    readonly storageAccountUrl?: string;
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
}
