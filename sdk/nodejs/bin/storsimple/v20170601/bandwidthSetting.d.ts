import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The bandwidth setting.
 */
export declare class BandwidthSetting extends pulumi.CustomResource {
    /**
     * Get an existing BandwidthSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BandwidthSetting;
    /**
     * Returns true if the given object is an instance of BandwidthSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BandwidthSetting;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * The name of the object.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The schedules.
     */
    readonly schedules: pulumi.Output<outputs.storsimple.v20170601.BandwidthScheduleResponse[]>;
    /**
     * The hierarchical type of the object.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The number of volumes that uses the bandwidth setting.
     */
    readonly volumeCount: pulumi.Output<number>;
    /**
     * Create a BandwidthSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BandwidthSettingArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a BandwidthSetting resource.
 */
export interface BandwidthSettingArgs {
    /**
     * The bandwidth setting name.
     */
    readonly bandwidthSettingName: pulumi.Input<string>;
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
     * The schedules.
     */
    readonly schedules: pulumi.Input<pulumi.Input<inputs.storsimple.v20170601.BandwidthSchedule>[]>;
}
