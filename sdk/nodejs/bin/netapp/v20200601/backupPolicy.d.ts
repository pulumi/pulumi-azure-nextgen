import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Backup policy information
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
     * Daily backups count to keep
     */
    readonly dailyBackupsToKeep: pulumi.Output<number | undefined>;
    /**
     * The property to decide policy is enabled or not
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Monthly backups count to keep
     */
    readonly monthlyBackupsToKeep: pulumi.Output<number | undefined>;
    /**
     * Name of backup policy
     */
    readonly name: pulumi.Output<string>;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: pulumi.Output<string>;
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
     * A list of volumes assigned to this policy
     */
    readonly volumeBackups: pulumi.Output<outputs.netapp.v20200601.VolumeBackupsResponse[] | undefined>;
    /**
     * Volumes using current backup policy
     */
    readonly volumesAssigned: pulumi.Output<number | undefined>;
    /**
     * Weekly backups count to keep
     */
    readonly weeklyBackupsToKeep: pulumi.Output<number | undefined>;
    /**
     * Yearly backups count to keep
     */
    readonly yearlyBackupsToKeep: pulumi.Output<number | undefined>;
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
     * The name of the NetApp account
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * Backup policy Name which uniquely identify backup policy.
     */
    readonly backupPolicyName: pulumi.Input<string>;
    /**
     * Daily backups count to keep
     */
    readonly dailyBackupsToKeep?: pulumi.Input<number>;
    /**
     * The property to decide policy is enabled or not
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Monthly backups count to keep
     */
    readonly monthlyBackupsToKeep?: pulumi.Input<number>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of volumes assigned to this policy
     */
    readonly volumeBackups?: pulumi.Input<pulumi.Input<inputs.netapp.v20200601.VolumeBackups>[]>;
    /**
     * Volumes using current backup policy
     */
    readonly volumesAssigned?: pulumi.Input<number>;
    /**
     * Weekly backups count to keep
     */
    readonly weeklyBackupsToKeep?: pulumi.Input<number>;
    /**
     * Yearly backups count to keep
     */
    readonly yearlyBackupsToKeep?: pulumi.Input<number>;
}
