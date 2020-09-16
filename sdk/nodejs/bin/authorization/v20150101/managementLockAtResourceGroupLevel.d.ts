import * as pulumi from "@pulumi/pulumi";
/**
 * Management lock information.
 */
export declare class ManagementLockAtResourceGroupLevel extends pulumi.CustomResource {
    /**
     * Get an existing ManagementLockAtResourceGroupLevel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagementLockAtResourceGroupLevel;
    /**
     * Returns true if the given object is an instance of ManagementLockAtResourceGroupLevel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ManagementLockAtResourceGroupLevel;
    /**
     * The lock level of the management lock.
     */
    readonly level: pulumi.Output<string | undefined>;
    /**
     * The name of the lock.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The notes of the management lock.
     */
    readonly notes: pulumi.Output<string | undefined>;
    /**
     * The type of the lock.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ManagementLockAtResourceGroupLevel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagementLockAtResourceGroupLevelArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ManagementLockAtResourceGroupLevel resource.
 */
export interface ManagementLockAtResourceGroupLevelArgs {
    /**
     * The lock level of the management lock.
     */
    readonly level?: pulumi.Input<string>;
    /**
     * The lock name.
     */
    readonly lockName: pulumi.Input<string>;
    /**
     * The name of the lock.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The notes of the management lock.
     */
    readonly notes?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
