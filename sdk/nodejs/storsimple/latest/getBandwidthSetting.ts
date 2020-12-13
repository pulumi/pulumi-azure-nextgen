// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getBandwidthSetting(args: GetBandwidthSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetBandwidthSettingResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:storsimple/latest:getBandwidthSetting", {
        "bandwidthSettingName": args.bandwidthSettingName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

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
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
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
    readonly schedules: outputs.storsimple.latest.BandwidthScheduleResponse[];
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * The number of volumes that uses the bandwidth setting.
     */
    readonly volumeCount: number;
}
