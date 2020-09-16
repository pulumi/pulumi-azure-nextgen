import * as pulumi from "@pulumi/pulumi";
/**
 * Single item in List or Get Migration Config operation
 */
export declare class MigrationConfig extends pulumi.CustomResource {
    /**
     * Get an existing MigrationConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MigrationConfig;
    /**
     * Returns true if the given object is an instance of MigrationConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is MigrationConfig;
    /**
     * State in which Standard to Premium Migration is, possible values : Unknown, Reverting, Completing, Initiating, Syncing, Active
     */
    readonly migrationState: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Number of entities pending to be replicated.
     */
    readonly pendingReplicationOperationsCount: pulumi.Output<number>;
    /**
     * Name to access Standard Namespace after migration
     */
    readonly postMigrationName: pulumi.Output<string>;
    /**
     * Provisioning state of Migration Configuration
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Existing premium Namespace ARM Id name which has no entities, will be used for migration
     */
    readonly targetNamespace: pulumi.Output<string>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a MigrationConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MigrationConfigArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a MigrationConfig resource.
 */
export interface MigrationConfigArgs {
    /**
     * The configuration name. Should always be "$default".
     */
    readonly configName: pulumi.Input<string>;
    /**
     * The namespace name
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * Name to access Standard Namespace after migration
     */
    readonly postMigrationName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Existing premium Namespace ARM Id name which has no entities, will be used for migration
     */
    readonly targetNamespace: pulumi.Input<string>;
}
