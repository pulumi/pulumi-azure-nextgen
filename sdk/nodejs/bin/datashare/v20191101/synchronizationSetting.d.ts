import * as pulumi from "@pulumi/pulumi";
/**
 * A Synchronization Setting data transfer object.
 */
export declare class SynchronizationSetting extends pulumi.CustomResource {
    /**
     * Get an existing SynchronizationSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SynchronizationSetting;
    /**
     * Returns true if the given object is an instance of SynchronizationSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SynchronizationSetting;
    /**
     * Kind of synchronization
     */
    readonly kind: pulumi.Output<string>;
    /**
     * Name of the azure resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Type of the azure resource
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a SynchronizationSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SynchronizationSettingArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a SynchronizationSetting resource.
 */
export interface SynchronizationSettingArgs {
    /**
     * The name of the share account.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * Kind of synchronization
     */
    readonly kind: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share to add the synchronization setting to.
     */
    readonly shareName: pulumi.Input<string>;
    /**
     * The name of the synchronizationSetting.
     */
    readonly synchronizationSettingName: pulumi.Input<string>;
}
