import * as pulumi from "@pulumi/pulumi";
/**
 * The bandwidth schedule details.
 */
export declare class BandwidthSchedule extends pulumi.CustomResource {
    /**
     * Get an existing BandwidthSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BandwidthSchedule;
    /**
     * Returns true if the given object is an instance of BandwidthSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BandwidthSchedule;
    /**
     * The days of the week when this schedule is applicable.
     */
    readonly days: pulumi.Output<string[]>;
    /**
     * The object name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The bandwidth rate in Mbps.
     */
    readonly rateInMbps: pulumi.Output<number>;
    /**
     * The start time of the schedule in UTC.
     */
    readonly start: pulumi.Output<string>;
    /**
     * The stop time of the schedule in UTC.
     */
    readonly stop: pulumi.Output<string>;
    /**
     * The hierarchical type of the object.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a BandwidthSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BandwidthScheduleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a BandwidthSchedule resource.
 */
export interface BandwidthScheduleArgs {
    /**
     * The days of the week when this schedule is applicable.
     */
    readonly days: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The device name.
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * The bandwidth schedule name which needs to be added/updated.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The bandwidth rate in Mbps.
     */
    readonly rateInMbps: pulumi.Input<number>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The start time of the schedule in UTC.
     */
    readonly start: pulumi.Input<string>;
    /**
     * The stop time of the schedule in UTC.
     */
    readonly stop: pulumi.Input<string>;
}
