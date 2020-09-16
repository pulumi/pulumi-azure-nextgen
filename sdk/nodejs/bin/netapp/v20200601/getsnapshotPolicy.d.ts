import * as pulumi from "@pulumi/pulumi";
export declare function getsnapshotPolicy(args: GetsnapshotPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetsnapshotPolicyResult>;
export interface GetsnapshotPolicyArgs {
    /**
     * The name of the NetApp account
     */
    readonly accountName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the snapshot policy target
     */
    readonly snapshotPolicyName: string;
}
/**
 * Snapshot policy information
 */
export interface GetsnapshotPolicyResult {
    /**
     * Schedule for daily snapshots
     */
    readonly dailySchedule?: {
        [key: string]: any;
    };
    /**
     * The property to decide policy is enabled or not
     */
    readonly enabled?: boolean;
    /**
     * Schedule for hourly snapshots
     */
    readonly hourlySchedule?: {
        [key: string]: any;
    };
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Schedule for monthly snapshots
     */
    readonly monthlySchedule?: {
        [key: string]: any;
    };
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Schedule for weekly snapshots
     */
    readonly weeklySchedule?: {
        [key: string]: any;
    };
}
