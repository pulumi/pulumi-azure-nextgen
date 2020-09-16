import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPatchSchedule(args: GetPatchScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetPatchScheduleResult>;
export interface GetPatchScheduleArgs {
    /**
     * The name of the redis cache.
     */
    readonly name: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Response to put/get patch schedules for Redis cache.
 */
export interface GetPatchScheduleResult {
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * List of patch schedules for a Redis cache.
     */
    readonly scheduleEntries: outputs.cache.v20170201.ScheduleEntryResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
}
