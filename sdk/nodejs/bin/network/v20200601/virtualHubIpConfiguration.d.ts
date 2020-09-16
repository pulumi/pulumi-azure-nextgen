import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * IpConfigurations.
 */
export declare class VirtualHubIpConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing VirtualHubIpConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualHubIpConfiguration;
    /**
     * Returns true if the given object is an instance of VirtualHubIpConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualHubIpConfiguration;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Name of the Ip Configuration.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The private IP address of the IP configuration.
     */
    readonly privateIPAddress: pulumi.Output<string | undefined>;
    /**
     * The private IP address allocation method.
     */
    readonly privateIPAllocationMethod: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the IP configuration resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The reference to the public IP resource.
     */
    readonly publicIPAddress: pulumi.Output<outputs.network.v20200601.PublicIPAddressResponse | undefined>;
    /**
     * The reference to the subnet resource.
     */
    readonly subnet: pulumi.Output<outputs.network.v20200601.SubnetResponse | undefined>;
    /**
     * Ipconfiguration type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a VirtualHubIpConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualHubIpConfigurationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualHubIpConfiguration resource.
 */
export interface VirtualHubIpConfigurationArgs {
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the ipconfig.
     */
    readonly ipConfigName: pulumi.Input<string>;
    /**
     * Name of the Ip Configuration.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The private IP address of the IP configuration.
     */
    readonly privateIPAddress?: pulumi.Input<string>;
    /**
     * The private IP address allocation method.
     */
    readonly privateIPAllocationMethod?: pulumi.Input<string>;
    /**
     * The reference to the public IP resource.
     */
    readonly publicIPAddress?: pulumi.Input<inputs.network.v20200601.PublicIPAddress>;
    /**
     * The resource group name of the VirtualHub.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The reference to the subnet resource.
     */
    readonly subnet?: pulumi.Input<inputs.network.v20200601.Subnet>;
    /**
     * The name of the VirtualHub.
     */
    readonly virtualHubName: pulumi.Input<string>;
}
