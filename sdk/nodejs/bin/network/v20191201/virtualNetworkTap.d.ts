import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Virtual Network Tap resource.
 */
export declare class VirtualNetworkTap extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkTap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetworkTap;
    /**
     * Returns true if the given object is an instance of VirtualNetworkTap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualNetworkTap;
    /**
     * The reference to the private IP address on the internal Load Balancer that will receive the tap.
     */
    readonly destinationLoadBalancerFrontEndIPConfiguration: pulumi.Output<outputs.network.v20191201.FrontendIPConfigurationResponse | undefined>;
    /**
     * The reference to the private IP Address of the collector nic that will receive the tap.
     */
    readonly destinationNetworkInterfaceIPConfiguration: pulumi.Output<outputs.network.v20191201.NetworkInterfaceIPConfigurationResponse | undefined>;
    /**
     * The VXLAN destination port that will receive the tapped traffic.
     */
    readonly destinationPort: pulumi.Output<number | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
     */
    readonly networkInterfaceTapConfigurations: pulumi.Output<outputs.network.v20191201.NetworkInterfaceTapConfigurationResponse[]>;
    /**
     * The provisioning state of the virtual network tap resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The resource GUID property of the virtual network tap resource.
     */
    readonly resourceGuid: pulumi.Output<string>;
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
     * Create a VirtualNetworkTap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkTapArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualNetworkTap resource.
 */
export interface VirtualNetworkTapArgs {
    /**
     * The reference to the private IP address on the internal Load Balancer that will receive the tap.
     */
    readonly destinationLoadBalancerFrontEndIPConfiguration?: pulumi.Input<inputs.network.v20191201.FrontendIPConfiguration>;
    /**
     * The reference to the private IP Address of the collector nic that will receive the tap.
     */
    readonly destinationNetworkInterfaceIPConfiguration?: pulumi.Input<inputs.network.v20191201.NetworkInterfaceIPConfiguration>;
    /**
     * The VXLAN destination port that will receive the tapped traffic.
     */
    readonly destinationPort?: pulumi.Input<number>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the virtual network tap.
     */
    readonly tapName: pulumi.Input<string>;
}
