// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function listVirtualMachineApplicableSchedules(args: ListVirtualMachineApplicableSchedulesArgs, opts?: pulumi.InvokeOptions): Promise<ListVirtualMachineApplicableSchedulesResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:devtestlab/latest:listVirtualMachineApplicableSchedules", {
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListVirtualMachineApplicableSchedulesArgs {
    /**
     * The name of the lab.
     */
    readonly labName: string;
    /**
     * The name of the virtual machine.
     */
    readonly name: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Schedules applicable to a virtual machine. The schedules may have been defined on a VM or on lab level.
 */
export interface ListVirtualMachineApplicableSchedulesResult {
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The auto-shutdown schedule, if one has been set at the lab or lab resource level.
     */
    readonly labVmsShutdown?: outputs.devtestlab.latest.ScheduleResponse;
    /**
     * The auto-startup schedule, if one has been set at the lab or lab resource level.
     */
    readonly labVmsStartup?: outputs.devtestlab.latest.ScheduleResponse;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
