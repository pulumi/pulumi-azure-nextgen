// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function listDeviceFailoverSets(args: ListDeviceFailoverSetsArgs, opts?: pulumi.InvokeOptions): Promise<ListDeviceFailoverSetsResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:storsimple/v20170601:listDeviceFailoverSets", {
        "deviceName": args.deviceName,
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDeviceFailoverSetsArgs {
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
 * The list of failover sets.
 */
export interface ListDeviceFailoverSetsResult {
    /**
     * The list of failover sets.
     */
    readonly value?: outputs.storsimple.v20170601.FailoverSetResponse[];
}
