import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A common class for general resource information
 */
export declare class VirtualNetworkGatewayConnection extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkGatewayConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetworkGatewayConnection;
    /**
     * Returns true if the given object is an instance of VirtualNetworkGatewayConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualNetworkGatewayConnection;
    /**
     * The authorizationKey.
     */
    readonly authorizationKey: pulumi.Output<string | undefined>;
    /**
     * Virtual network Gateway connection status
     */
    readonly connectionStatus: pulumi.Output<string | undefined>;
    /**
     * Gateway connection type IPsec/Dedicated/VpnClient/Vnet2Vnet
     */
    readonly connectionType: pulumi.Output<string | undefined>;
    /**
     * The Egress Bytes Transferred in this connection
     */
    readonly egressBytesTransferred: pulumi.Output<number | undefined>;
    /**
     * EnableBgp Flag
     */
    readonly enableBgp: pulumi.Output<boolean | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The Ingress Bytes Transferred in this connection
     */
    readonly ingressBytesTransferred: pulumi.Output<number | undefined>;
    /**
     * A common class for general resource information
     */
    readonly localNetworkGateway2: pulumi.Output<outputs.network.v20160601.LocalNetworkGatewayResponse | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * The reference to peerings resource.
     */
    readonly peer: pulumi.Output<outputs.network.v20160601.SubResourceResponse | undefined>;
    /**
     * Gets provisioning state of the VirtualNetworkGatewayConnection resource Updating/Deleting/Failed
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Gets or sets resource guid property of the VirtualNetworkGatewayConnection resource
     */
    readonly resourceGuid: pulumi.Output<string | undefined>;
    /**
     * The Routing weight.
     */
    readonly routingWeight: pulumi.Output<number | undefined>;
    /**
     * The IPsec share key.
     */
    readonly sharedKey: pulumi.Output<string | undefined>;
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
     * A common class for general resource information
     */
    readonly virtualNetworkGateway1: pulumi.Output<outputs.network.v20160601.VirtualNetworkGatewayResponse | undefined>;
    /**
     * A common class for general resource information
     */
    readonly virtualNetworkGateway2: pulumi.Output<outputs.network.v20160601.VirtualNetworkGatewayResponse | undefined>;
    /**
     * Create a VirtualNetworkGatewayConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkGatewayConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualNetworkGatewayConnection resource.
 */
export interface VirtualNetworkGatewayConnectionArgs {
    /**
     * The authorizationKey.
     */
    readonly authorizationKey?: pulumi.Input<string>;
    /**
     * Virtual network Gateway connection status
     */
    readonly connectionStatus?: pulumi.Input<string>;
    /**
     * Gateway connection type IPsec/Dedicated/VpnClient/Vnet2Vnet
     */
    readonly connectionType?: pulumi.Input<string>;
    /**
     * The Egress Bytes Transferred in this connection
     */
    readonly egressBytesTransferred?: pulumi.Input<number>;
    /**
     * EnableBgp Flag
     */
    readonly enableBgp?: pulumi.Input<boolean>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The Ingress Bytes Transferred in this connection
     */
    readonly ingressBytesTransferred?: pulumi.Input<number>;
    /**
     * A common class for general resource information
     */
    readonly localNetworkGateway2?: pulumi.Input<inputs.network.v20160601.LocalNetworkGateway>;
    /**
     * Resource location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The reference to peerings resource.
     */
    readonly peer?: pulumi.Input<inputs.network.v20160601.SubResource>;
    /**
     * Gets provisioning state of the VirtualNetworkGatewayConnection resource Updating/Deleting/Failed
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets resource guid property of the VirtualNetworkGatewayConnection resource
     */
    readonly resourceGuid?: pulumi.Input<string>;
    /**
     * The Routing weight.
     */
    readonly routingWeight?: pulumi.Input<number>;
    /**
     * The IPsec share key.
     */
    readonly sharedKey?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A common class for general resource information
     */
    readonly virtualNetworkGateway1?: pulumi.Input<inputs.network.v20160601.VirtualNetworkGateway>;
    /**
     * A common class for general resource information
     */
    readonly virtualNetworkGateway2?: pulumi.Input<inputs.network.v20160601.VirtualNetworkGateway>;
    /**
     * The name of the virtual network gateway connection.
     */
    readonly virtualNetworkGatewayConnectionName: pulumi.Input<string>;
}
