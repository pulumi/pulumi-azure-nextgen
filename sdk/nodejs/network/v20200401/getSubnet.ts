// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getSubnet(args: GetSubnetArgs, opts?: pulumi.InvokeOptions): Promise<GetSubnetResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20200401:getSubnet", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "subnetName": args.subnetName,
        "virtualNetworkName": args.virtualNetworkName,
    }, opts);
}

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
    readonly delegations?: outputs.network.v20200401.DelegationResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Array of IpAllocation which reference this subnet.
     */
    readonly ipAllocations?: outputs.network.v20200401.SubResourceResponse[];
    /**
     * Array of IP configuration profiles which reference this subnet.
     */
    readonly ipConfigurationProfiles: outputs.network.v20200401.IPConfigurationProfileResponse[];
    /**
     * An array of references to the network interface IP configurations using subnet.
     */
    readonly ipConfigurations: outputs.network.v20200401.IPConfigurationResponse[];
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * Nat gateway associated with this subnet.
     */
    readonly natGateway?: outputs.network.v20200401.SubResourceResponse;
    /**
     * The reference to the NetworkSecurityGroup resource.
     */
    readonly networkSecurityGroup?: outputs.network.v20200401.NetworkSecurityGroupResponse;
    /**
     * Enable or Disable apply network policies on private end point in the subnet.
     */
    readonly privateEndpointNetworkPolicies?: string;
    /**
     * An array of references to private endpoints.
     */
    readonly privateEndpoints: outputs.network.v20200401.PrivateEndpointResponse[];
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
    readonly resourceNavigationLinks: outputs.network.v20200401.ResourceNavigationLinkResponse[];
    /**
     * The reference to the RouteTable resource.
     */
    readonly routeTable?: outputs.network.v20200401.RouteTableResponse;
    /**
     * An array of references to services injecting into this subnet.
     */
    readonly serviceAssociationLinks: outputs.network.v20200401.ServiceAssociationLinkResponse[];
    /**
     * An array of service endpoint policies.
     */
    readonly serviceEndpointPolicies?: outputs.network.v20200401.ServiceEndpointPolicyResponse[];
    /**
     * An array of service endpoints.
     */
    readonly serviceEndpoints?: outputs.network.v20200401.ServiceEndpointPropertiesFormatResponse[];
}
