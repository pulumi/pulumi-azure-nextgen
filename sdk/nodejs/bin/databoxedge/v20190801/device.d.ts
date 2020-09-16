import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The Data Box Edge/Gateway device.
 */
export declare class Device extends pulumi.CustomResource {
    /**
     * Get an existing Device resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Device;
    /**
     * Returns true if the given object is an instance of Device.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Device;
    /**
     * Type of compute roles configured.
     */
    readonly configuredRoleTypes: pulumi.Output<string[]>;
    /**
     * The Data Box Edge/Gateway device culture.
     */
    readonly culture: pulumi.Output<string>;
    /**
     * The status of the Data Box Edge/Gateway device.
     */
    readonly dataBoxEdgeDeviceStatus: pulumi.Output<string | undefined>;
    /**
     * The Description of the Data Box Edge/Gateway device.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The device software version number of the device (eg: 1.2.18105.6).
     */
    readonly deviceHcsVersion: pulumi.Output<string>;
    /**
     * The Data Box Edge/Gateway device local capacity in MB.
     */
    readonly deviceLocalCapacity: pulumi.Output<number>;
    /**
     * The Data Box Edge/Gateway device model.
     */
    readonly deviceModel: pulumi.Output<string>;
    /**
     * The Data Box Edge/Gateway device software version.
     */
    readonly deviceSoftwareVersion: pulumi.Output<string>;
    /**
     * The type of the Data Box Edge/Gateway device.
     */
    readonly deviceType: pulumi.Output<string>;
    /**
     * The etag for the devices.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The Data Box Edge/Gateway device name.
     */
    readonly friendlyName: pulumi.Output<string | undefined>;
    /**
     * The location of the device. This is a supported and registered Azure geographical region (for example, West US, East US, or Southeast Asia). The geographical region of a device cannot be changed once it is created, but if an identical geographical region is specified on update, the request will succeed.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The description of the Data Box Edge/Gateway device model.
     */
    readonly modelDescription: pulumi.Output<string | undefined>;
    /**
     * The object name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The number of nodes in the cluster.
     */
    readonly nodeCount: pulumi.Output<number>;
    /**
     * The Serial Number of Data Box Edge/Gateway device.
     */
    readonly serialNumber: pulumi.Output<string>;
    /**
     * The SKU type.
     */
    readonly sku: pulumi.Output<outputs.databoxedge.v20190801.SkuResponse | undefined>;
    /**
     * The list of tags that describe the device. These tags can be used to view and group this device (across resource groups).
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The Data Box Edge/Gateway device timezone.
     */
    readonly timeZone: pulumi.Output<string>;
    /**
     * The hierarchical type of the object.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Device resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeviceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Device resource.
 */
export interface DeviceArgs {
    /**
     * The status of the Data Box Edge/Gateway device.
     */
    readonly dataBoxEdgeDeviceStatus?: pulumi.Input<string>;
    /**
     * The Description of the Data Box Edge/Gateway device.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The device name.
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * The etag for the devices.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * The Data Box Edge/Gateway device name.
     */
    readonly friendlyName?: pulumi.Input<string>;
    /**
     * The location of the device. This is a supported and registered Azure geographical region (for example, West US, East US, or Southeast Asia). The geographical region of a device cannot be changed once it is created, but if an identical geographical region is specified on update, the request will succeed.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The description of the Data Box Edge/Gateway device model.
     */
    readonly modelDescription?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU type.
     */
    readonly sku?: pulumi.Input<inputs.databoxedge.v20190801.Sku>;
    /**
     * The list of tags that describe the device. These tags can be used to view and group this device (across resource groups).
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
