import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listDeviceFailoverTars(args: ListDeviceFailoverTarsArgs, opts?: pulumi.InvokeOptions): Promise<ListDeviceFailoverTarsResult>;
export interface ListDeviceFailoverTarsArgs {
    /**
     * The manager name
     */
    readonly managerName: string;
    /**
     * The resource group name
     */
    readonly resourceGroupName: string;
    /**
     * The source device name on which failover is performed.
     */
    readonly sourceDeviceName: string;
    /**
     * The list of path IDs of the volume containers that needs to be failed-over, for which we want to fetch the eligible targets.
     */
    readonly volumeContainers?: string[];
}
/**
 * The list of all devices in a resource and their eligibility status as a failover target device.
 */
export interface ListDeviceFailoverTarsResult {
    /**
     * The list of all the failover targets.
     */
    readonly value?: outputs.storsimple.v20170601.FailoverTargetResponse[];
}
