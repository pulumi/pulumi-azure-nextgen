import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The Backup Schedule Group
 */
export declare class BackupScheduleGroup extends pulumi.CustomResource {
    /**
     * Get an existing BackupScheduleGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BackupScheduleGroup;
    /**
     * Returns true if the given object is an instance of BackupScheduleGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BackupScheduleGroup;
    /**
     * The name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The start time. When this field is specified we will generate Default GrandFather Father Son Backup Schedules.
     */
    readonly startTime: pulumi.Output<outputs.storsimple.v20161001.TimeResponse>;
    /**
     * The type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a BackupScheduleGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupScheduleGroupArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a BackupScheduleGroup resource.
 */
export interface BackupScheduleGroupArgs {
    /**
     * The name of the device.
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * The manager name
     */
    readonly managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the schedule group.
     */
    readonly scheduleGroupName: pulumi.Input<string>;
    /**
     * The start time. When this field is specified we will generate Default GrandFather Father Son Backup Schedules.
     */
    readonly startTime: pulumi.Input<inputs.storsimple.v20161001.Time>;
}
