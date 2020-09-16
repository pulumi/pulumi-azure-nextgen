import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listDeviceFailoverSets(args: ListDeviceFailoverSetsArgs, opts?: pulumi.InvokeOptions): Promise<ListDeviceFailoverSetsResult>;
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
