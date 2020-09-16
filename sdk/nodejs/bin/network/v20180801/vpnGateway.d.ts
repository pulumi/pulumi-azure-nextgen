import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * VpnGateway Resource.
 */
export declare class VpnGateway extends pulumi.CustomResource {
    /**
     * Get an existing VpnGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VpnGateway;
    /**
     * Returns true if the given object is an instance of VpnGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VpnGateway;
    /**
     * Local network gateway's BGP speaker settings.
     */
    readonly bgpSettings: pulumi.Output<outputs.network.v20180801.BgpSettingsResponse | undefined>;
    /**
     * list of all vpn connections to the gateway.
     */
    readonly connections: pulumi.Output<outputs.network.v20180801.VpnConnectionResponse[] | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The VirtualHub to which the gateway belongs
     */
    readonly virtualHub: pulumi.Output<outputs.network.v20180801.SubResourceResponse | undefined>;
    /**
     * The scale unit for this vpn gateway.
     */
    readonly vpnGatewayScaleUnit: pulumi.Output<number | undefined>;
    /**
     * Create a VpnGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnGatewayArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VpnGateway resource.
 */
export interface VpnGatewayArgs {
    /**
     * Local network gateway's BGP speaker settings.
     */
    readonly bgpSettings?: pulumi.Input<inputs.network.v20180801.BgpSettings>;
    /**
     * list of all vpn connections to the gateway.
     */
    readonly connections?: pulumi.Input<pulumi.Input<inputs.network.v20180801.VpnConnection>[]>;
    /**
     * The name of the gateway.
     */
    readonly gatewayName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The resource group name of the VpnGateway.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The VirtualHub to which the gateway belongs
     */
    readonly virtualHub?: pulumi.Input<inputs.network.v20180801.SubResource>;
    /**
     * The scale unit for this vpn gateway.
     */
    readonly vpnGatewayScaleUnit?: pulumi.Input<number>;
}
