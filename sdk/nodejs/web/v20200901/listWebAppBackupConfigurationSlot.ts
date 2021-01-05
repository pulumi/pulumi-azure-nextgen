// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function listWebAppBackupConfigurationSlot(args: ListWebAppBackupConfigurationSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppBackupConfigurationSlotResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:web/v20200901:listWebAppBackupConfigurationSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface ListWebAppBackupConfigurationSlotArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the backup configuration for the production slot.
     */
    readonly slot: string;
}

/**
 * Description of a backup which will be performed.
 */
export interface ListWebAppBackupConfigurationSlotResult {
    /**
     * Name of the backup.
     */
    readonly backupName?: string;
    /**
     * Schedule for the backup if it is executed periodically.
     */
    readonly backupSchedule?: outputs.web.v20200901.BackupScheduleResponse;
    /**
     * Databases included in the backup.
     */
    readonly databases?: outputs.web.v20200901.DatabaseBackupSettingResponse[];
    /**
     * True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled.
     */
    readonly enabled?: boolean;
    /**
     * Resource Id.
     */
    readonly id: string;
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
     * The system metadata relating to this resource.
     */
    readonly systemData: outputs.web.v20200901.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}