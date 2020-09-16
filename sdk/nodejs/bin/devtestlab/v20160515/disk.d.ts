import * as pulumi from "@pulumi/pulumi";
/**
 * A Disk.
 */
export declare class Disk extends pulumi.CustomResource {
    /**
     * Get an existing Disk resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Disk;
    /**
     * Returns true if the given object is an instance of Disk.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Disk;
    /**
     * The creation date of the disk.
     */
    readonly createdDate: pulumi.Output<string>;
    /**
     * When backed by a blob, the name of the VHD blob without extension.
     */
    readonly diskBlobName: pulumi.Output<string | undefined>;
    /**
     * The size of the disk in Gibibytes.
     */
    readonly diskSizeGiB: pulumi.Output<number | undefined>;
    /**
     * The storage type for the disk (i.e. Standard, Premium).
     */
    readonly diskType: pulumi.Output<string | undefined>;
    /**
     * When backed by a blob, the URI of underlying blob.
     */
    readonly diskUri: pulumi.Output<string | undefined>;
    /**
     * The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite).
     */
    readonly hostCaching: pulumi.Output<string | undefined>;
    /**
     * The resource ID of the VM to which this disk is leased.
     */
    readonly leasedByLabVmId: pulumi.Output<string | undefined>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * When backed by managed disk, this is the ID of the compute disk resource.
     */
    readonly managedDiskId: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: pulumi.Output<string | undefined>;
    /**
     * Create a Disk resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiskArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Disk resource.
 */
export interface DiskArgs {
    /**
     * When backed by a blob, the name of the VHD blob without extension.
     */
    readonly diskBlobName?: pulumi.Input<string>;
    /**
     * The size of the disk in Gibibytes.
     */
    readonly diskSizeGiB?: pulumi.Input<number>;
    /**
     * The storage type for the disk (i.e. Standard, Premium).
     */
    readonly diskType?: pulumi.Input<string>;
    /**
     * When backed by a blob, the URI of underlying blob.
     */
    readonly diskUri?: pulumi.Input<string>;
    /**
     * The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite).
     */
    readonly hostCaching?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    readonly labName: pulumi.Input<string>;
    /**
     * The resource ID of the VM to which this disk is leased.
     */
    readonly leasedByLabVmId?: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * When backed by managed disk, this is the ID of the compute disk resource.
     */
    readonly managedDiskId?: pulumi.Input<string>;
    /**
     * The name of the disk.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier?: pulumi.Input<string>;
    /**
     * The name of the user profile.
     */
    readonly userName: pulumi.Input<string>;
}
