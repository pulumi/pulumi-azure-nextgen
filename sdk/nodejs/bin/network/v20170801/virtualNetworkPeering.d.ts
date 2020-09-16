import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Peerings in a virtual network resource.
 */
export declare class VirtualNetworkPeering extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkPeering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetworkPeering;
    /**
     * Returns true if the given object is an instance of VirtualNetworkPeering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualNetworkPeering;
    /**
     * Whether the forwarded traffic from the VMs in the remote virtual network will be allowed/disallowed.
     */
    readonly allowForwardedTraffic: pulumi.Output<boolean | undefined>;
    /**
     * If gateway links can be used in remote virtual networking to link to this virtual network.
     */
    readonly allowGatewayTransit: pulumi.Output<boolean | undefined>;
    /**
     * Whether the VMs in the linked virtual network space would be able to access all the VMs in local Virtual network space.
     */
    readonly allowVirtualNetworkAccess: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The status of the virtual network peering. Possible values are 'Initiated', 'Connected', and 'Disconnected'.
     */
    readonly peeringState: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The reference of the remote virtual network.
     */
    readonly remoteVirtualNetwork: pulumi.Output<outputs.network.v20170801.SubResourceResponse | undefined>;
    /**
     * If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
     */
    readonly useRemoteGateways: pulumi.Output<boolean | undefined>;
    /**
     * Create a VirtualNetworkPeering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkPeeringArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualNetworkPeering resource.
 */
export interface VirtualNetworkPeeringArgs {
    /**
     * Whether the forwarded traffic from the VMs in the remote virtual network will be allowed/disallowed.
     */
    readonly allowForwardedTraffic?: pulumi.Input<boolean>;
    /**
     * If gateway links can be used in remote virtual networking to link to this virtual network.
     */
    readonly allowGatewayTransit?: pulumi.Input<boolean>;
    /**
     * Whether the VMs in the linked virtual network space would be able to access all the VMs in local Virtual network space.
     */
    readonly allowVirtualNetworkAccess?: pulumi.Input<boolean>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The status of the virtual network peering. Possible values are 'Initiated', 'Connected', and 'Disconnected'.
     */
    readonly peeringState?: pulumi.Input<string>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The reference of the remote virtual network.
     */
    readonly remoteVirtualNetwork?: pulumi.Input<inputs.network.v20170801.SubResource>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
     */
    readonly useRemoteGateways?: pulumi.Input<boolean>;
    /**
     * The name of the virtual network.
     */
    readonly virtualNetworkName: pulumi.Input<string>;
    /**
     * The name of the peering.
     */
    readonly virtualNetworkPeeringName: pulumi.Input<string>;
}
