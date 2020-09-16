import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A schedule.
 */
export declare class GlobalSchedule extends pulumi.CustomResource {
    /**
     * Get an existing GlobalSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GlobalSchedule;
    /**
     * Returns true if the given object is an instance of GlobalSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GlobalSchedule;
    /**
     * The creation date of the schedule.
     */
    readonly createdDate: pulumi.Output<string>;
    /**
     * If the schedule will occur once each day of the week, specify the daily recurrence.
     */
    readonly dailyRecurrence: pulumi.Output<outputs.devtestlab.v20180915.DayDetailsResponse | undefined>;
    /**
     * If the schedule will occur multiple times a day, specify the hourly recurrence.
     */
    readonly hourlyRecurrence: pulumi.Output<outputs.devtestlab.v20180915.HourDetailsResponse | undefined>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Notification settings.
     */
    readonly notificationSettings: pulumi.Output<outputs.devtestlab.v20180915.NotificationSettingsResponse | undefined>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The status of the schedule (i.e. Enabled, Disabled)
     */
    readonly status: pulumi.Output<string | undefined>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The resource ID to which the schedule belongs
     */
    readonly targetResourceId: pulumi.Output<string | undefined>;
    /**
     * The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
     */
    readonly taskType: pulumi.Output<string | undefined>;
    /**
     * The time zone ID (e.g. Pacific Standard time).
     */
    readonly timeZoneId: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: pulumi.Output<string>;
    /**
     * If the schedule will occur only some days of the week, specify the weekly recurrence.
     */
    readonly weeklyRecurrence: pulumi.Output<outputs.devtestlab.v20180915.WeekDetailsResponse | undefined>;
    /**
     * Create a GlobalSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GlobalScheduleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a GlobalSchedule resource.
 */
export interface GlobalScheduleArgs {
    /**
     * If the schedule will occur once each day of the week, specify the daily recurrence.
     */
    readonly dailyRecurrence?: pulumi.Input<inputs.devtestlab.v20180915.DayDetails>;
    /**
     * If the schedule will occur multiple times a day, specify the hourly recurrence.
     */
    readonly hourlyRecurrence?: pulumi.Input<inputs.devtestlab.v20180915.HourDetails>;
    /**
     * The location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the schedule.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Notification settings.
     */
    readonly notificationSettings?: pulumi.Input<inputs.devtestlab.v20180915.NotificationSettings>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The status of the schedule (i.e. Enabled, Disabled)
     */
    readonly status?: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The resource ID to which the schedule belongs
     */
    readonly targetResourceId?: pulumi.Input<string>;
    /**
     * The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
     */
    readonly taskType?: pulumi.Input<string>;
    /**
     * The time zone ID (e.g. Pacific Standard time).
     */
    readonly timeZoneId?: pulumi.Input<string>;
    /**
     * If the schedule will occur only some days of the week, specify the weekly recurrence.
     */
    readonly weeklyRecurrence?: pulumi.Input<inputs.devtestlab.v20180915.WeekDetails>;
}
