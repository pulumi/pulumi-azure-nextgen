// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * The backup policy.
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
    public static readonly __pulumiType = 'azure-nextgen:storsimple/latest:BackupPolicy';

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
     * The backup policy creation type. Indicates whether this was created through SaaS or through StorSimple Snapshot Manager.
     */
    public /*out*/ readonly backupPolicyCreationType!: pulumi.Output<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The time of the last backup for the backup policy.
     */
    public /*out*/ readonly lastBackupTime!: pulumi.Output<string>;
    /**
     * The name of the object.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The time of the next backup for the backup policy.
     */
    public /*out*/ readonly nextBackupTime!: pulumi.Output<string>;
    /**
     * Indicates whether at least one of the schedules in the backup policy is active or not.
     */
    public /*out*/ readonly scheduledBackupStatus!: pulumi.Output<string>;
    /**
     * The count of schedules the backup policy contains.
     */
    public /*out*/ readonly schedulesCount!: pulumi.Output<number>;
    /**
     * If the backup policy was created by StorSimple Snapshot Manager, then this field indicates the hostname of the StorSimple Snapshot Manager.
     */
    public /*out*/ readonly ssmHostName!: pulumi.Output<string>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The path IDs of the volumes which are part of the backup policy.
     */
    public readonly volumeIds!: pulumi.Output<string[]>;

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
            if ((!args || args.backupPolicyName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'backupPolicyName'");
            }
            if ((!args || args.deviceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.managerName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'managerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.volumeIds === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'volumeIds'");
            }
            inputs["backupPolicyName"] = args ? args.backupPolicyName : undefined;
            inputs["deviceName"] = args ? args.deviceName : undefined;
            inputs["kind"] = args ? args.kind : undefined;
            inputs["managerName"] = args ? args.managerName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["volumeIds"] = args ? args.volumeIds : undefined;
            inputs["backupPolicyCreationType"] = undefined /*out*/;
            inputs["lastBackupTime"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["nextBackupTime"] = undefined /*out*/;
            inputs["scheduledBackupStatus"] = undefined /*out*/;
            inputs["schedulesCount"] = undefined /*out*/;
            inputs["ssmHostName"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["backupPolicyCreationType"] = undefined /*out*/;
            inputs["kind"] = undefined /*out*/;
            inputs["lastBackupTime"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["nextBackupTime"] = undefined /*out*/;
            inputs["scheduledBackupStatus"] = undefined /*out*/;
            inputs["schedulesCount"] = undefined /*out*/;
            inputs["ssmHostName"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["volumeIds"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:storsimple/v20170601:BackupPolicy" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(BackupPolicy.__pulumiType, name, inputs, opts);
    }
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
    readonly kind?: pulumi.Input<enums.storsimple.latest.Kind>;
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
