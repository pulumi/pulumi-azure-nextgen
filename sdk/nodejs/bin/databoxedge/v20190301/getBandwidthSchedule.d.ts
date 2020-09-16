import * as pulumi from "@pulumi/pulumi";
export declare function getBandwidthSchedule(args: GetBandwidthScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetBandwidthScheduleResult>;
export interface GetBandwidthScheduleArgs {
    /**
     * The device name.
     */
    readonly deviceName: string;
    /**
     * The bandwidth schedule name.
     */
    readonly name: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * The bandwidth schedule details.
 */
export interface GetBandwidthScheduleResult {
    /**
     * The days of the week when this schedule is applicable.
     */
    readonly days: string[];
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * The bandwidth rate in Mbps.
     */
    readonly rateInMbps: number;
    /**
     * The start time of the schedule in UTC.
     */
    readonly start: string;
    /**
     * The stop time of the schedule in UTC.
     */
    readonly stop: string;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
