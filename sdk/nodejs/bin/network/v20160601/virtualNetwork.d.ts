import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Virtual Network resource
 */
export declare class VirtualNetwork extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetwork;
    /**
     * Returns true if the given object is an instance of VirtualNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualNetwork;
    /**
     * Gets or sets AddressSpace that contains an array of IP address ranges that can be used by subnets
     */
    readonly addressSpace: pulumi.Output<outputs.network.v20160601.AddressSpaceResponse | undefined>;
    /**
     * Gets or sets DHCPOptions that contains an array of DNS servers available to VMs deployed in the virtual network
     */
    readonly dhcpOptions: pulumi.Output<outputs.network.v20160601.DhcpOptionsResponse | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Gets or sets resource guid property of the VirtualNetwork resource
     */
    readonly resourceGuid: pulumi.Output<string | undefined>;
    /**
     * Gets or sets list of subnets in a VirtualNetwork
     */
    readonly subnets: pulumi.Output<outputs.network.v20160601.SubnetResponse[] | undefined>;
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
     * Gets or sets list of peerings in a VirtualNetwork
     */
    readonly virtualNetworkPeerings: pulumi.Output<outputs.network.v20160601.VirtualNetworkPeeringResponse[] | undefined>;
    /**
     * Create a VirtualNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualNetwork resource.
 */
export interface VirtualNetworkArgs {
    /**
     * Gets or sets AddressSpace that contains an array of IP address ranges that can be used by subnets
     */
    readonly addressSpace?: pulumi.Input<inputs.network.v20160601.AddressSpace>;
    /**
     * Gets or sets DHCPOptions that contains an array of DNS servers available to VMs deployed in the virtual network
     */
    readonly dhcpOptions?: pulumi.Input<inputs.network.v20160601.DhcpOptions>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets resource guid property of the VirtualNetwork resource
     */
    readonly resourceGuid?: pulumi.Input<string>;
    /**
     * Gets or sets list of subnets in a VirtualNetwork
     */
    readonly subnets?: pulumi.Input<pulumi.Input<inputs.network.v20160601.Subnet>[]>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the virtual network.
     */
    readonly virtualNetworkName: pulumi.Input<string>;
    /**
     * Gets or sets list of peerings in a VirtualNetwork
     */
    readonly virtualNetworkPeerings?: pulumi.Input<pulumi.Input<inputs.network.v20160601.VirtualNetworkPeering>[]>;
}
