import * as pulumi from "@pulumi/pulumi";
/**
 * Snapshot policy information
 */
export declare class SnapshotPolicy extends pulumi.CustomResource {
    /**
     * Get an existing SnapshotPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SnapshotPolicy;
    /**
     * Returns true if the given object is an instance of SnapshotPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SnapshotPolicy;
    /**
     * Schedule for daily snapshots
     */
    readonly dailySchedule: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * The property to decide policy is enabled or not
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Schedule for hourly snapshots
     */
    readonly hourlySchedule: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Schedule for monthly snapshots
     */
    readonly monthlySchedule: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Schedule for weekly snapshots
     */
    readonly weeklySchedule: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Create a SnapshotPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnapshotPolicyArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a SnapshotPolicy resource.
 */
export interface SnapshotPolicyArgs {
    /**
     * The name of the NetApp account
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * Schedule for daily snapshots
     */
    readonly dailySchedule?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The property to decide policy is enabled or not
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Schedule for hourly snapshots
     */
    readonly hourlySchedule?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Schedule for monthly snapshots
     */
    readonly monthlySchedule?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the snapshot policy target
     */
    readonly snapshotPolicyName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Schedule for weekly snapshots
     */
    readonly weeklySchedule?: pulumi.Input<{
        [key: string]: any;
    }>;
}
