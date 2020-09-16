import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listWebAppBackupConfiguration(args: ListWebAppBackupConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppBackupConfigurationResult>;
export interface ListWebAppBackupConfigurationArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * Description of a backup which will be performed.
 */
export interface ListWebAppBackupConfigurationResult {
    /**
     * Name of the backup.
     */
    readonly backupName?: string;
    /**
     * Schedule for the backup if it is executed periodically.
     */
    readonly backupSchedule?: outputs.web.v20200601.BackupScheduleResponse;
    /**
     * Databases included in the backup.
     */
    readonly databases?: outputs.web.v20200601.DatabaseBackupSettingResponse[];
    /**
     * True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled.
     */
    readonly enabled?: boolean;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * SAS URL to the container.
     */
    readonly storageAccountUrl: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
