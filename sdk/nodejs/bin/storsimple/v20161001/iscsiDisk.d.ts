import * as pulumi from "@pulumi/pulumi";
/**
 * The iSCSI disk.
 */
export declare class IscsiDisk extends pulumi.CustomResource {
    /**
     * Get an existing IscsiDisk resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IscsiDisk;
    /**
     * Returns true if the given object is an instance of IscsiDisk.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IscsiDisk;
    /**
     * The access control records.
     */
    readonly accessControlRecords: pulumi.Output<string[]>;
    /**
     * The data policy.
     */
    readonly dataPolicy: pulumi.Output<string>;
    /**
     * The description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The disk status.
     */
    readonly diskStatus: pulumi.Output<string>;
    /**
     * The local used capacity in bytes.
     */
    readonly localUsedCapacityInBytes: pulumi.Output<number>;
    /**
     * The monitoring.
     */
    readonly monitoringStatus: pulumi.Output<string>;
    /**
     * The name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioned capacity in bytes.
     */
    readonly provisionedCapacityInBytes: pulumi.Output<number>;
    /**
     * The type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The used capacity in bytes.
     */
    readonly usedCapacityInBytes: pulumi.Output<number>;
    /**
     * Create a IscsiDisk resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IscsiDiskArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
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
    readonly dataPolicy: pulumi.Input<string>;
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
    readonly diskStatus: pulumi.Input<string>;
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
    readonly monitoringStatus: pulumi.Input<string>;
    /**
     * The provisioned capacity in bytes.
     */
    readonly provisionedCapacityInBytes: pulumi.Input<number>;
    /**
     * The resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
