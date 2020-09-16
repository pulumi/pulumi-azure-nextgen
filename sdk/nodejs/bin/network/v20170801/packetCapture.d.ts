import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Information about packet capture session.
 */
export declare class PacketCapture extends pulumi.CustomResource {
    /**
     * Get an existing PacketCapture resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PacketCapture;
    /**
     * Returns true if the given object is an instance of PacketCapture.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PacketCapture;
    /**
     * Number of bytes captured per packet, the remaining bytes are truncated.
     */
    readonly bytesToCapturePerPacket: pulumi.Output<number | undefined>;
    readonly etag: pulumi.Output<string | undefined>;
    readonly filters: pulumi.Output<outputs.network.v20170801.PacketCaptureFilterResponse[] | undefined>;
    /**
     * Name of the packet capture session.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the packet capture session.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Describes the storage location for a packet capture session.
     */
    readonly storageLocation: pulumi.Output<outputs.network.v20170801.PacketCaptureStorageLocationResponse>;
    /**
     * The ID of the targeted resource, only VM is currently supported.
     */
    readonly target: pulumi.Output<string>;
    /**
     * Maximum duration of the capture session in seconds.
     */
    readonly timeLimitInSeconds: pulumi.Output<number | undefined>;
    /**
     * Maximum size of the capture output.
     */
    readonly totalBytesPerSession: pulumi.Output<number | undefined>;
    /**
     * Create a PacketCapture resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PacketCaptureArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PacketCapture resource.
 */
export interface PacketCaptureArgs {
    /**
     * Number of bytes captured per packet, the remaining bytes are truncated.
     */
    readonly bytesToCapturePerPacket?: pulumi.Input<number>;
    readonly filters?: pulumi.Input<pulumi.Input<inputs.network.v20170801.PacketCaptureFilter>[]>;
    /**
     * The name of the network watcher.
     */
    readonly networkWatcherName: pulumi.Input<string>;
    /**
     * The name of the packet capture session.
     */
    readonly packetCaptureName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Describes the storage location for a packet capture session.
     */
    readonly storageLocation: pulumi.Input<inputs.network.v20170801.PacketCaptureStorageLocation>;
    /**
     * The ID of the targeted resource, only VM is currently supported.
     */
    readonly target: pulumi.Input<string>;
    /**
     * Maximum duration of the capture session in seconds.
     */
    readonly timeLimitInSeconds?: pulumi.Input<number>;
    /**
     * Maximum size of the capture output.
     */
    readonly totalBytesPerSession?: pulumi.Input<number>;
}
