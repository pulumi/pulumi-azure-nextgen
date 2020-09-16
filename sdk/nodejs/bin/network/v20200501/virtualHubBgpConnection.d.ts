import * as pulumi from "@pulumi/pulumi";
/**
 * Virtual Appliance Site resource.
 */
export declare class VirtualHubBgpConnection extends pulumi.CustomResource {
    /**
     * Get an existing VirtualHubBgpConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualHubBgpConnection;
    /**
     * Returns true if the given object is an instance of VirtualHubBgpConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualHubBgpConnection;
    /**
     * The current state of the VirtualHub to Peer.
     */
    readonly connectionState: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Name of the connection.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Peer ASN.
     */
    readonly peerAsn: pulumi.Output<number | undefined>;
    /**
     * Peer IP.
     */
    readonly peerIp: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Connection type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a VirtualHubBgpConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualHubBgpConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualHubBgpConnection resource.
 */
export interface VirtualHubBgpConnectionArgs {
    /**
     * The name of the connection.
     */
    readonly connectionName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Name of the connection.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Peer ASN.
     */
    readonly peerAsn?: pulumi.Input<number>;
    /**
     * Peer IP.
     */
    readonly peerIp?: pulumi.Input<string>;
    /**
     * The resource group name of the VirtualHub.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VirtualHub.
     */
    readonly virtualHubName: pulumi.Input<string>;
}
