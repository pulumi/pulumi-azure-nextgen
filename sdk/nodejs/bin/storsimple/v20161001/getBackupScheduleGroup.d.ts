import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getBackupScheduleGroup(args: GetBackupScheduleGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupScheduleGroupResult>;
export interface GetBackupScheduleGroupArgs {
    /**
     * The name of the device.
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
     * The name of the schedule group.
     */
    readonly scheduleGroupName: string;
}
/**
 * The Backup Schedule Group
 */
export interface GetBackupScheduleGroupResult {
    /**
     * The name.
     */
    readonly name: string;
    /**
     * The start time. When this field is specified we will generate Default GrandFather Father Son Backup Schedules.
     */
    readonly startTime: outputs.storsimple.v20161001.TimeResponse;
    /**
     * The type.
     */
    readonly type: string;
}
