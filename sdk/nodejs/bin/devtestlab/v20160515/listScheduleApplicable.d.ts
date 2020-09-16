import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listScheduleApplicable(args: ListScheduleApplicableArgs, opts?: pulumi.InvokeOptions): Promise<ListScheduleApplicableResult>;
export interface ListScheduleApplicableArgs {
    /**
     * The name of the lab.
     */
    readonly labName: string;
    /**
     * The name of the schedule.
     */
    readonly name: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * The response of a list operation.
 */
export interface ListScheduleApplicableResult {
    /**
     * Link for next set of results.
     */
    readonly nextLink?: string;
    /**
     * Results of the list operation.
     */
    readonly value?: outputs.devtestlab.v20160515.ScheduleResponse[];
}
