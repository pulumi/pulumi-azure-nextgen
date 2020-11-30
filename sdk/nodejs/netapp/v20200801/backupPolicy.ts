// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../../types";
import * as utilities from "../../utilities";

/**
 * Backup policy information
 */
export class BackupPolicy extends pulumi.CustomResource {
    /**
     * Get an existing BackupPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BackupPolicy {
        return new BackupPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:netapp/v20200801:BackupPolicy';

    /**
     * Returns true if the given object is an instance of BackupPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupPolicy.__pulumiType;
    }

    /**
     * Daily backups count to keep
     */
    public readonly dailyBackupsToKeep!: pulumi.Output<number | undefined>;
    /**
     * The property to decide policy is enabled or not
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Monthly backups count to keep
     */
    public readonly monthlyBackupsToKeep!: pulumi.Output<number | undefined>;
    /**
     * Name of backup policy
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure lifecycle management
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A list of volumes assigned to this policy
     */
    public readonly volumeBackups!: pulumi.Output<outputs.netapp.v20200801.VolumeBackupsResponse[] | undefined>;
    /**
     * Volumes using current backup policy
     */
    public readonly volumesAssigned!: pulumi.Output<number | undefined>;
    /**
     * Weekly backups count to keep
     */
    public readonly weeklyBackupsToKeep!: pulumi.Output<number | undefined>;
    /**
     * Yearly backups count to keep
     */
    public readonly yearlyBackupsToKeep!: pulumi.Output<number | undefined>;

    /**
     * Create a BackupPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if (!args || args.accountName === undefined) {
                throw new Error("Missing required property 'accountName'");
            }
            if (!args || args.backupPolicyName === undefined) {
                throw new Error("Missing required property 'backupPolicyName'");
            }
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["backupPolicyName"] = args ? args.backupPolicyName : undefined;
            inputs["dailyBackupsToKeep"] = args ? args.dailyBackupsToKeep : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["monthlyBackupsToKeep"] = args ? args.monthlyBackupsToKeep : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["volumeBackups"] = args ? args.volumeBackups : undefined;
            inputs["volumesAssigned"] = args ? args.volumesAssigned : undefined;
            inputs["weeklyBackupsToKeep"] = args ? args.weeklyBackupsToKeep : undefined;
            inputs["yearlyBackupsToKeep"] = args ? args.yearlyBackupsToKeep : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["dailyBackupsToKeep"] = undefined /*out*/;
            inputs["enabled"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["monthlyBackupsToKeep"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["volumeBackups"] = undefined /*out*/;
            inputs["volumesAssigned"] = undefined /*out*/;
            inputs["weeklyBackupsToKeep"] = undefined /*out*/;
            inputs["yearlyBackupsToKeep"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:netapp/latest:BackupPolicy" }, { type: "azure-nextgen:netapp/v20200501:BackupPolicy" }, { type: "azure-nextgen:netapp/v20200601:BackupPolicy" }, { type: "azure-nextgen:netapp/v20200701:BackupPolicy" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(BackupPolicy.__pulumiType, name, inputs, opts);
    }
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
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of volumes assigned to this policy
     */
    readonly volumeBackups?: pulumi.Input<pulumi.Input<inputs.netapp.v20200801.VolumeBackups>[]>;
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
