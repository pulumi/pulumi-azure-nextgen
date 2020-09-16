import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Volume resource
 */
export declare class Volume extends pulumi.CustomResource {
    /**
     * Get an existing Volume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Volume;
    /**
     * Returns true if the given object is an instance of Volume.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Volume;
    /**
     * Unique Baremetal Tenant Identifier.
     */
    readonly baremetalTenantId: pulumi.Output<string>;
    /**
     * A unique file path for the volume. Used when creating mount targets
     */
    readonly creationToken: pulumi.Output<string>;
    /**
     * DataProtection type volumes include an object containing details of the replication
     */
    readonly dataProtection: pulumi.Output<outputs.netapp.v20200201.VolumePropertiesResponseDataProtection | undefined>;
    /**
     * Set of export policy rules
     */
    readonly exportPolicy: pulumi.Output<outputs.netapp.v20200201.VolumePropertiesResponseExportPolicy | undefined>;
    /**
     * Unique FileSystem Identifier.
     */
    readonly fileSystemId: pulumi.Output<string>;
    /**
     * Restoring
     */
    readonly isRestoring: pulumi.Output<boolean | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * List of mount targets
     */
    readonly mountTargets: pulumi.Output<outputs.netapp.v20200201.MountTargetPropertiesResponse[] | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Set of protocol types
     */
    readonly protocolTypes: pulumi.Output<string[] | undefined>;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The service level of the file system
     */
    readonly serviceLevel: pulumi.Output<string | undefined>;
    /**
     * If enabled (true) the volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots (default to true).
     */
    readonly snapshotDirectoryVisible: pulumi.Output<boolean | undefined>;
    /**
     * UUID v4 or resource identifier used to identify the Snapshot.
     */
    readonly snapshotId: pulumi.Output<string | undefined>;
    /**
     * The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
     */
    readonly subnetId: pulumi.Output<string>;
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
     * Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.
     */
    readonly usageThreshold: pulumi.Output<number>;
    /**
     * What type of volume is this
     */
    readonly volumeType: pulumi.Output<string | undefined>;
    /**
     * Create a Volume resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Volume resource.
 */
export interface VolumeArgs {
    /**
     * The name of the NetApp account
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * A unique file path for the volume. Used when creating mount targets
     */
    readonly creationToken: pulumi.Input<string>;
    /**
     * DataProtection type volumes include an object containing details of the replication
     */
    readonly dataProtection?: pulumi.Input<inputs.netapp.v20200201.VolumePropertiesDataProtection>;
    /**
     * Set of export policy rules
     */
    readonly exportPolicy?: pulumi.Input<inputs.netapp.v20200201.VolumePropertiesExportPolicy>;
    /**
     * Restoring
     */
    readonly isRestoring?: pulumi.Input<boolean>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * List of mount targets
     */
    readonly mountTargets?: pulumi.Input<pulumi.Input<inputs.netapp.v20200201.MountTargetProperties>[]>;
    /**
     * The name of the capacity pool
     */
    readonly poolName: pulumi.Input<string>;
    /**
     * Set of protocol types
     */
    readonly protocolTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The service level of the file system
     */
    readonly serviceLevel?: pulumi.Input<string>;
    /**
     * If enabled (true) the volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots (default to true).
     */
    readonly snapshotDirectoryVisible?: pulumi.Input<boolean>;
    /**
     * UUID v4 or resource identifier used to identify the Snapshot.
     */
    readonly snapshotId?: pulumi.Input<string>;
    /**
     * The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
     */
    readonly subnetId: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.
     */
    readonly usageThreshold: pulumi.Input<number>;
    /**
     * The name of the volume
     */
    readonly volumeName: pulumi.Input<string>;
    /**
     * What type of volume is this
     */
    readonly volumeType?: pulumi.Input<string>;
}
