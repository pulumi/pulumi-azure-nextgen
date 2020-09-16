import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Subnet in a VirtualNetwork resource
 */
export declare class Subnet extends pulumi.CustomResource {
    /**
     * Get an existing Subnet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Subnet;
    /**
     * Returns true if the given object is an instance of Subnet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Subnet;
    /**
     * Gets or sets Address prefix for the subnet.
     */
    readonly addressPrefix: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Gets array of references to the network interface IP configurations using subnet
     */
    readonly ipConfigurations: pulumi.Output<outputs.network.v20160601.IPConfigurationResponse[]>;
    /**
     * Gets or sets the name of the resource that is unique within a resource group. This name can be used to access the resource
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the reference of the NetworkSecurityGroup resource
     */
    readonly networkSecurityGroup: pulumi.Output<outputs.network.v20160601.NetworkSecurityGroupResponse | undefined>;
    /**
     * Gets provisioning state of the resource
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Gets array of references to the external resources using subnet
     */
    readonly resourceNavigationLinks: pulumi.Output<outputs.network.v20160601.ResourceNavigationLinkResponse[] | undefined>;
    /**
     * Gets or sets the reference of the RouteTable resource
     */
    readonly routeTable: pulumi.Output<outputs.network.v20160601.RouteTableResponse | undefined>;
    /**
     * Create a Subnet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubnetArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Subnet resource.
 */
export interface SubnetArgs {
    /**
     * Gets or sets Address prefix for the subnet.
     */
    readonly addressPrefix?: pulumi.Input<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Gets or sets the name of the resource that is unique within a resource group. This name can be used to access the resource
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Gets or sets the reference of the NetworkSecurityGroup resource
     */
    readonly networkSecurityGroup?: pulumi.Input<inputs.network.v20160601.NetworkSecurityGroup>;
    /**
     * Gets provisioning state of the resource
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets array of references to the external resources using subnet
     */
    readonly resourceNavigationLinks?: pulumi.Input<pulumi.Input<inputs.network.v20160601.ResourceNavigationLink>[]>;
    /**
     * Gets or sets the reference of the RouteTable resource
     */
    readonly routeTable?: pulumi.Input<inputs.network.v20160601.RouteTable>;
    /**
     * The name of the subnet.
     */
    readonly subnetName: pulumi.Input<string>;
    /**
     * The name of the virtual network.
     */
    readonly virtualNetworkName: pulumi.Input<string>;
}
