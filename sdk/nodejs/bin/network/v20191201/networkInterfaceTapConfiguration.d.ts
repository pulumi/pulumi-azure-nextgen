import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Tap configuration in a Network Interface.
 */
export declare class NetworkInterfaceTapConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing NetworkInterfaceTapConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkInterfaceTapConfiguration;
    /**
     * Returns true if the given object is an instance of NetworkInterfaceTapConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NetworkInterfaceTapConfiguration;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the network interface tap configuration resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Sub Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The reference to the Virtual Network Tap resource.
     */
    readonly virtualNetworkTap: pulumi.Output<outputs.network.v20191201.VirtualNetworkTapResponse | undefined>;
    /**
     * Create a NetworkInterfaceTapConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkInterfaceTapConfigurationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a NetworkInterfaceTapConfiguration resource.
 */
export interface NetworkInterfaceTapConfigurationArgs {
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The name of the network interface.
     */
    readonly networkInterfaceName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the tap configuration.
     */
    readonly tapConfigurationName: pulumi.Input<string>;
    /**
     * The reference to the Virtual Network Tap resource.
     */
    readonly virtualNetworkTap?: pulumi.Input<inputs.network.v20191201.VirtualNetworkTap>;
}
