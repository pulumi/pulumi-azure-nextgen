import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listVirtualMachineApplicableSchedules(args: ListVirtualMachineApplicableSchedulesArgs, opts?: pulumi.InvokeOptions): Promise<ListVirtualMachineApplicableSchedulesResult>;
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
     * The auto-shutdown schedule, if one has been set at the lab or lab resource level.
     */
    readonly labVmsShutdown?: outputs.devtestlab.v20160515.ScheduleResponse;
    /**
     * The auto-startup schedule, if one has been set at the lab or lab resource level.
     */
    readonly labVmsStartup?: outputs.devtestlab.v20160515.ScheduleResponse;
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
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource.
     */
    readonly type: string;
}
