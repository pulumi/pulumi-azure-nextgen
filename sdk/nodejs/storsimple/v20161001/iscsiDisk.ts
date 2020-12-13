// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * The iSCSI disk.
 */
export class IscsiDisk extends pulumi.CustomResource {
    /**
     * Get an existing IscsiDisk resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IscsiDisk {
        return new IscsiDisk(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:storsimple/v20161001:IscsiDisk';

    /**
     * Returns true if the given object is an instance of IscsiDisk.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IscsiDisk {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IscsiDisk.__pulumiType;
    }

    /**
     * The access control records.
     */
    public readonly accessControlRecords!: pulumi.Output<string[]>;
    /**
     * The data policy.
     */
    public readonly dataPolicy!: pulumi.Output<string>;
    /**
     * The description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The disk status.
     */
    public readonly diskStatus!: pulumi.Output<string>;
    /**
     * The local used capacity in bytes.
     */
    public /*out*/ readonly localUsedCapacityInBytes!: pulumi.Output<number>;
    /**
     * The monitoring.
     */
    public readonly monitoringStatus!: pulumi.Output<string>;
    /**
     * The name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioned capacity in bytes.
     */
    public readonly provisionedCapacityInBytes!: pulumi.Output<number>;
    /**
     * The type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The used capacity in bytes.
     */
    public /*out*/ readonly usedCapacityInBytes!: pulumi.Output<number>;

    /**
     * Create a IscsiDisk resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IscsiDiskArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.accessControlRecords === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'accessControlRecords'");
            }
            if ((!args || args.dataPolicy === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'dataPolicy'");
            }
            if ((!args || args.deviceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.diskName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'diskName'");
            }
            if ((!args || args.diskStatus === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'diskStatus'");
            }
            if ((!args || args.iscsiServerName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'iscsiServerName'");
            }
            if ((!args || args.managerName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'managerName'");
            }
            if ((!args || args.monitoringStatus === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'monitoringStatus'");
            }
            if ((!args || args.provisionedCapacityInBytes === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'provisionedCapacityInBytes'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accessControlRecords"] = args ? args.accessControlRecords : undefined;
            inputs["dataPolicy"] = args ? args.dataPolicy : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["deviceName"] = args ? args.deviceName : undefined;
            inputs["diskName"] = args ? args.diskName : undefined;
            inputs["diskStatus"] = args ? args.diskStatus : undefined;
            inputs["iscsiServerName"] = args ? args.iscsiServerName : undefined;
            inputs["managerName"] = args ? args.managerName : undefined;
            inputs["monitoringStatus"] = args ? args.monitoringStatus : undefined;
            inputs["provisionedCapacityInBytes"] = args ? args.provisionedCapacityInBytes : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["localUsedCapacityInBytes"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["usedCapacityInBytes"] = undefined /*out*/;
        } else {
            inputs["accessControlRecords"] = undefined /*out*/;
            inputs["dataPolicy"] = undefined /*out*/;
            inputs["description"] = undefined /*out*/;
            inputs["diskStatus"] = undefined /*out*/;
            inputs["localUsedCapacityInBytes"] = undefined /*out*/;
            inputs["monitoringStatus"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisionedCapacityInBytes"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["usedCapacityInBytes"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:storsimple/latest:IscsiDisk" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(IscsiDisk.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a IscsiDisk resource.
 */
export interface IscsiDiskArgs {
    /**
     * The access control records.
     */
    readonly accessControlRecords: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The data policy.
     */
    readonly dataPolicy: pulumi.Input<enums.storsimple.v20161001.DataPolicy>;
    /**
     * The description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The device name.
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * The disk name.
     */
    readonly diskName: pulumi.Input<string>;
    /**
     * The disk status.
     */
    readonly diskStatus: pulumi.Input<enums.storsimple.v20161001.DiskStatus>;
    /**
     * The iSCSI server name.
     */
    readonly iscsiServerName: pulumi.Input<string>;
    /**
     * The manager name
     */
    readonly managerName: pulumi.Input<string>;
    /**
     * The monitoring.
     */
    readonly monitoringStatus: pulumi.Input<enums.storsimple.v20161001.MonitoringStatus>;
    /**
     * The provisioned capacity in bytes.
     */
    readonly provisionedCapacityInBytes: pulumi.Input<number>;
    /**
     * The resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
