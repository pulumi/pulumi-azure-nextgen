import * as pulumi from "@pulumi/pulumi";
/**
 * The backup policy.
 */
export declare class BackupPolicy extends pulumi.CustomResource {
    /**
     * Get an existing BackupPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BackupPolicy;
    /**
     * Returns true if the given object is an instance of BackupPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BackupPolicy;
    /**
     * The backup policy creation type. Indicates whether this was created through SaaS or through StorSimple Snapshot Manager.
     */
    readonly backupPolicyCreationType: pulumi.Output<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * The time of the last backup for the backup policy.
     */
    readonly lastBackupTime: pulumi.Output<string>;
    /**
     * The name of the object.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The time of the next backup for the backup policy.
     */
    readonly nextBackupTime: pulumi.Output<string>;
    /**
     * Indicates whether at least one of the schedules in the backup policy is active or not.
     */
    readonly scheduledBackupStatus: pulumi.Output<string>;
    /**
     * The count of schedules the backup policy contains.
     */
    readonly schedulesCount: pulumi.Output<number>;
    /**
     * If the backup policy was created by StorSimple Snapshot Manager, then this field indicates the hostname of the StorSimple Snapshot Manager.
     */
    readonly ssmHostName: pulumi.Output<string>;
    /**
     * The hierarchical type of the object.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The path IDs of the volumes which are part of the backup policy.
     */
    readonly volumeIds: pulumi.Output<string[]>;
    /**
     * Create a BackupPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupPolicyArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a BackupPolicy resource.
 */
export interface BackupPolicyArgs {
    /**
     * The name of the backup policy to be created/updated.
     */
    readonly backupPolicyName: pulumi.Input<string>;
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
     * The path IDs of the volumes which are part of the backup policy.
     */
    readonly volumeIds: pulumi.Input<pulumi.Input<string>[]>;
}
