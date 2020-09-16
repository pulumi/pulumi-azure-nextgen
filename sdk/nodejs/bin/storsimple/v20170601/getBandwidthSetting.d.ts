import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getBandwidthSetting(args: GetBandwidthSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetBandwidthSettingResult>;
export interface GetBandwidthSettingArgs {
    /**
     * The name of bandwidth setting to be fetched.
     */
    readonly bandwidthSettingName: string;
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
 * The bandwidth setting.
 */
export interface GetBandwidthSettingResult {
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: string;
    /**
     * The name of the object.
     */
    readonly name: string;
    /**
     * The schedules.
     */
    readonly schedules: outputs.storsimple.v20170601.BandwidthScheduleResponse[];
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * The number of volumes that uses the bandwidth setting.
     */
    readonly volumeCount: number;
}
