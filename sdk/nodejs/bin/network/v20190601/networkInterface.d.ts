import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A network interface in a resource group.
 */
export declare class NetworkInterface extends pulumi.CustomResource {
    /**
     * Get an existing NetworkInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkInterface;
    /**
     * Returns true if the given object is an instance of NetworkInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NetworkInterface;
    /**
     * The DNS settings in network interface.
     */
    readonly dnsSettings: pulumi.Output<outputs.network.v20190601.NetworkInterfaceDnsSettingsResponse | undefined>;
    /**
     * If the network interface is accelerated networking enabled.
     */
    readonly enableAcceleratedNetworking: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether IP forwarding is enabled on this network interface.
     */
    readonly enableIPForwarding: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * A list of references to linked BareMetal resources.
     */
    readonly hostedWorkloads: pulumi.Output<string[]>;
    /**
     * A list of IPConfigurations of the network interface.
     */
    readonly ipConfigurations: pulumi.Output<outputs.network.v20190601.NetworkInterfaceIPConfigurationResponse[] | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The MAC address of the network interface.
     */
    readonly macAddress: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The reference of the NetworkSecurityGroup resource.
     */
    readonly networkSecurityGroup: pulumi.Output<outputs.network.v20190601.NetworkSecurityGroupResponse | undefined>;
    /**
     * Gets whether this is a primary network interface on a virtual machine.
     */
    readonly primary: pulumi.Output<boolean | undefined>;
    /**
     * A reference to the private endpoint to which the network interface is linked.
     */
    readonly privateEndpoint: pulumi.Output<outputs.network.v20190601.PrivateEndpointResponse>;
    /**
     * The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The resource GUID property of the network interface resource.
     */
    readonly resourceGuid: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A list of TapConfigurations of the network interface.
     */
    readonly tapConfigurations: pulumi.Output<outputs.network.v20190601.NetworkInterfaceTapConfigurationResponse[] | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The reference of a virtual machine.
     */
    readonly virtualMachine: pulumi.Output<outputs.network.v20190601.SubResourceResponse>;
    /**
     * Create a NetworkInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkInterfaceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a NetworkInterface resource.
 */
export interface NetworkInterfaceArgs {
    /**
     * The DNS settings in network interface.
     */
    readonly dnsSettings?: pulumi.Input<inputs.network.v20190601.NetworkInterfaceDnsSettings>;
    /**
     * If the network interface is accelerated networking enabled.
     */
    readonly enableAcceleratedNetworking?: pulumi.Input<boolean>;
    /**
     * Indicates whether IP forwarding is enabled on this network interface.
     */
    readonly enableIPForwarding?: pulumi.Input<boolean>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * A list of IPConfigurations of the network interface.
     */
    readonly ipConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20190601.NetworkInterfaceIPConfiguration>[]>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The MAC address of the network interface.
     */
    readonly macAddress?: pulumi.Input<string>;
    /**
     * The name of the network interface.
     */
    readonly networkInterfaceName: pulumi.Input<string>;
    /**
     * The reference of the NetworkSecurityGroup resource.
     */
    readonly networkSecurityGroup?: pulumi.Input<inputs.network.v20190601.NetworkSecurityGroup>;
    /**
     * Gets whether this is a primary network interface on a virtual machine.
     */
    readonly primary?: pulumi.Input<boolean>;
    /**
     * The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The resource GUID property of the network interface resource.
     */
    readonly resourceGuid?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of TapConfigurations of the network interface.
     */
    readonly tapConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20190601.NetworkInterfaceTapConfiguration>[]>;
}
