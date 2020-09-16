import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPatchSchedule(args: GetPatchScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetPatchScheduleResult>;
export interface GetPatchScheduleArgs {
    /**
     * Default string modeled as parameter for auto generation to work correctly.
     */
    readonly default: string;
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
     * Resource name.
     */
    readonly name: string;
    /**
     * List of patch schedules for a Redis cache.
     */
    readonly scheduleEntries: outputs.cache.v20180301.ScheduleEntryResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
}
