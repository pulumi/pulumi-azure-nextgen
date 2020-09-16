import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Definition of the schedule.
 */
export declare class Schedule extends pulumi.CustomResource {
    /**
     * Get an existing Schedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Schedule;
    /**
     * Returns true if the given object is an instance of Schedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Schedule;
    /**
     * Gets or sets the advanced schedule.
     */
    readonly advancedSchedule: pulumi.Output<outputs.automation.v20151031.AdvancedScheduleResponse | undefined>;
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the end time of the schedule.
     */
    readonly expiryTime: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the expiry time's offset in minutes.
     */
    readonly expiryTimeOffsetMinutes: pulumi.Output<number | undefined>;
    /**
     * Gets or sets the frequency of the schedule.
     */
    readonly frequency: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the interval of the schedule.
     */
    readonly interval: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Gets or sets a value indicating whether this schedule is enabled.
     */
    readonly isEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets or sets the next run time of the schedule.
     */
    readonly nextRun: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the next run time's offset in minutes.
     */
    readonly nextRunOffsetMinutes: pulumi.Output<number | undefined>;
    /**
     * Gets or sets the start time of the schedule.
     */
    readonly startTime: pulumi.Output<string | undefined>;
    /**
     * Gets the start time's offset in minutes.
     */
    readonly startTimeOffsetMinutes: pulumi.Output<number>;
    /**
     * Gets or sets the time zone of the schedule.
     */
    readonly timeZone: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Schedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Schedule resource.
 */
export interface ScheduleArgs {
    /**
     * Gets or sets the AdvancedSchedule.
     */
    readonly advancedSchedule?: pulumi.Input<inputs.automation.v20151031.AdvancedSchedule>;
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: pulumi.Input<string>;
    /**
     * Gets or sets the description of the schedule.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Gets or sets the end time of the schedule.
     */
    readonly expiryTime?: pulumi.Input<string>;
    /**
     * Gets or sets the frequency of the schedule.
     */
    readonly frequency: pulumi.Input<string>;
    /**
     * Gets or sets the interval of the schedule.
     */
    readonly interval?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Gets or sets the name of the Schedule.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The schedule name.
     */
    readonly scheduleName: pulumi.Input<string>;
    /**
     * Gets or sets the start time of the schedule.
     */
    readonly startTime: pulumi.Input<string>;
    /**
     * Gets or sets the time zone of the schedule.
     */
    readonly timeZone?: pulumi.Input<string>;
}
