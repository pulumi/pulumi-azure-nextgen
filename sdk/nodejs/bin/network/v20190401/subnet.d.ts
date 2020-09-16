import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Subnet in a virtual network resource.
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
     * The address prefix for the subnet.
     */
    readonly addressPrefix: pulumi.Output<string | undefined>;
    /**
     * List of address prefixes for the subnet.
     */
    readonly addressPrefixes: pulumi.Output<string[] | undefined>;
    /**
     * Gets an array of references to the delegations on the subnet.
     */
    readonly delegations: pulumi.Output<outputs.network.v20190401.DelegationResponse[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Array of IP configuration profiles which reference this subnet.
     */
    readonly ipConfigurationProfiles: pulumi.Output<outputs.network.v20190401.IPConfigurationProfileResponse[]>;
    /**
     * Gets an array of references to the network interface IP configurations using subnet.
     */
    readonly ipConfigurations: pulumi.Output<outputs.network.v20190401.IPConfigurationResponse[]>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Nat gateway associated with this subnet.
     */
    readonly natGateway: pulumi.Output<outputs.network.v20190401.SubResourceResponse | undefined>;
    /**
     * The reference of the NetworkSecurityGroup resource.
     */
    readonly networkSecurityGroup: pulumi.Output<outputs.network.v20190401.NetworkSecurityGroupResponse | undefined>;
    /**
     * Enable or Disable private end point on the subnet.
     */
    readonly privateEndpointNetworkPolicies: pulumi.Output<string | undefined>;
    /**
     * An array of references to private endpoints.
     */
    readonly privateEndpoints: pulumi.Output<outputs.network.v20190401.PrivateEndpointResponse[]>;
    /**
     * Enable or Disable private link service on the subnet.
     */
    readonly privateLinkServiceNetworkPolicies: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
     */
    readonly purpose: pulumi.Output<string>;
    /**
     * Gets an array of references to the external resources using subnet.
     */
    readonly resourceNavigationLinks: pulumi.Output<outputs.network.v20190401.ResourceNavigationLinkResponse[] | undefined>;
    /**
     * The reference of the RouteTable resource.
     */
    readonly routeTable: pulumi.Output<outputs.network.v20190401.RouteTableResponse | undefined>;
    /**
     * Gets an array of references to services injecting into this subnet.
     */
    readonly serviceAssociationLinks: pulumi.Output<outputs.network.v20190401.ServiceAssociationLinkResponse[] | undefined>;
    /**
     * An array of service endpoint policies.
     */
    readonly serviceEndpointPolicies: pulumi.Output<outputs.network.v20190401.ServiceEndpointPolicyResponse[] | undefined>;
    /**
     * An array of service endpoints.
     */
    readonly serviceEndpoints: pulumi.Output<outputs.network.v20190401.ServiceEndpointPropertiesFormatResponse[] | undefined>;
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
     * The address prefix for the subnet.
     */
    readonly addressPrefix?: pulumi.Input<string>;
    /**
     * List of address prefixes for the subnet.
     */
    readonly addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Gets an array of references to the delegations on the subnet.
     */
    readonly delegations?: pulumi.Input<pulumi.Input<inputs.network.v20190401.Delegation>[]>;
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
     * Nat gateway associated with this subnet.
     */
    readonly natGateway?: pulumi.Input<inputs.network.v20190401.SubResource>;
    /**
     * The reference of the NetworkSecurityGroup resource.
     */
    readonly networkSecurityGroup?: pulumi.Input<inputs.network.v20190401.NetworkSecurityGroup>;
    /**
     * Enable or Disable private end point on the subnet.
     */
    readonly privateEndpointNetworkPolicies?: pulumi.Input<string>;
    /**
     * Enable or Disable private link service on the subnet.
     */
    readonly privateLinkServiceNetworkPolicies?: pulumi.Input<string>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets an array of references to the external resources using subnet.
     */
    readonly resourceNavigationLinks?: pulumi.Input<pulumi.Input<inputs.network.v20190401.ResourceNavigationLink>[]>;
    /**
     * The reference of the RouteTable resource.
     */
    readonly routeTable?: pulumi.Input<inputs.network.v20190401.RouteTable>;
    /**
     * Gets an array of references to services injecting into this subnet.
     */
    readonly serviceAssociationLinks?: pulumi.Input<pulumi.Input<inputs.network.v20190401.ServiceAssociationLink>[]>;
    /**
     * An array of service endpoint policies.
     */
    readonly serviceEndpointPolicies?: pulumi.Input<pulumi.Input<inputs.network.v20190401.ServiceEndpointPolicy>[]>;
    /**
     * An array of service endpoints.
     */
    readonly serviceEndpoints?: pulumi.Input<pulumi.Input<inputs.network.v20190401.ServiceEndpointPropertiesFormat>[]>;
    /**
     * The name of the subnet.
     */
    readonly subnetName: pulumi.Input<string>;
    /**
     * The name of the virtual network.
     */
    readonly virtualNetworkName: pulumi.Input<string>;
}
