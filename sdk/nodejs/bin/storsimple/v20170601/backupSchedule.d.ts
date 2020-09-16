import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The backup schedule.
 */
export declare class BackupSchedule extends pulumi.CustomResource {
    /**
     * Get an existing BackupSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BackupSchedule;
    /**
     * Returns true if the given object is an instance of BackupSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BackupSchedule;
    /**
     * The type of backup which needs to be taken.
     */
    readonly backupType: pulumi.Output<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * The last successful backup run which was triggered for the schedule.
     */
    readonly lastSuccessfulRun: pulumi.Output<string>;
    /**
     * The name of the object.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The number of backups to be retained.
     */
    readonly retentionCount: pulumi.Output<number>;
    /**
     * The schedule recurrence.
     */
    readonly scheduleRecurrence: pulumi.Output<outputs.storsimple.v20170601.ScheduleRecurrenceResponse>;
    /**
     * The schedule status.
     */
    readonly scheduleStatus: pulumi.Output<string>;
    /**
     * The start time of the schedule.
     */
    readonly startTime: pulumi.Output<string>;
    /**
     * The hierarchical type of the object.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a BackupSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupScheduleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a BackupSchedule resource.
 */
export interface BackupScheduleArgs {
    /**
     * The backup policy name.
     */
    readonly backupPolicyName: pulumi.Input<string>;
    /**
     * The backup schedule name.
     */
    readonly backupScheduleName: pulumi.Input<string>;
    /**
     * The type of backup which needs to be taken.
     */
    readonly backupType: pulumi.Input<string>;
    /**
     * The device name
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * The manager name
     */
    readonly managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The number of backups to be retained.
     */
    readonly retentionCount: pulumi.Input<number>;
    /**
     * The schedule recurrence.
     */
    readonly scheduleRecurrence: pulumi.Input<inputs.storsimple.v20170601.ScheduleRecurrence>;
    /**
     * The schedule status.
     */
    readonly scheduleStatus: pulumi.Input<string>;
    /**
     * The start time of the schedule.
     */
    readonly startTime: pulumi.Input<string>;
}
