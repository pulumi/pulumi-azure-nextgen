import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getSubnet(args: GetSubnetArgs, opts?: pulumi.InvokeOptions): Promise<GetSubnetResult>;
export interface GetSubnetArgs {
    /**
     * Expands referenced resources.
     */
    readonly expand?: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the subnet.
     */
    readonly subnetName: string;
    /**
     * The name of the virtual network.
     */
    readonly virtualNetworkName: string;
}
/**
 * Subnet in a virtual network resource.
 */
export interface GetSubnetResult {
    /**
     * The address prefix for the subnet.
     */
    readonly addressPrefix?: string;
    /**
     * List of address prefixes for the subnet.
     */
    readonly addressPrefixes?: string[];
    /**
     * An array of references to the delegations on the subnet.
     */
    readonly delegations?: outputs.network.v20191101.DelegationResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Array of IP configuration profiles which reference this subnet.
     */
    readonly ipConfigurationProfiles: outputs.network.v20191101.IPConfigurationProfileResponse[];
    /**
     * An array of references to the network interface IP configurations using subnet.
     */
    readonly ipConfigurations: outputs.network.v20191101.IPConfigurationResponse[];
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * Nat gateway associated with this subnet.
     */
    readonly natGateway?: outputs.network.v20191101.SubResourceResponse;
    /**
     * The reference to the NetworkSecurityGroup resource.
     */
    readonly networkSecurityGroup?: outputs.network.v20191101.NetworkSecurityGroupResponse;
    /**
     * Enable or Disable apply network policies on private end point in the subnet.
     */
    readonly privateEndpointNetworkPolicies?: string;
    /**
     * An array of references to private endpoints.
     */
    readonly privateEndpoints: outputs.network.v20191101.PrivateEndpointResponse[];
    /**
     * Enable or Disable apply network policies on private link service in the subnet.
     */
    readonly privateLinkServiceNetworkPolicies?: string;
    /**
     * The provisioning state of the subnet resource.
     */
    readonly provisioningState: string;
    /**
     * A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
     */
    readonly purpose: string;
    /**
     * An array of references to the external resources using subnet.
     */
    readonly resourceNavigationLinks: outputs.network.v20191101.ResourceNavigationLinkResponse[];
    /**
     * The reference to the RouteTable resource.
     */
    readonly routeTable?: outputs.network.v20191101.RouteTableResponse;
    /**
     * An array of references to services injecting into this subnet.
     */
    readonly serviceAssociationLinks: outputs.network.v20191101.ServiceAssociationLinkResponse[];
    /**
     * An array of service endpoint policies.
     */
    readonly serviceEndpointPolicies?: outputs.network.v20191101.ServiceEndpointPolicyResponse[];
    /**
     * An array of service endpoints.
     */
    readonly serviceEndpoints?: outputs.network.v20191101.ServiceEndpointPropertiesFormatResponse[];
}
