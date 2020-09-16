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
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Gets an array of references to the network interface IP configurations using subnet.
     */
    readonly ipConfigurations: outputs.network.v20160901.IPConfigurationResponse[];
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The reference of the NetworkSecurityGroup resource.
     */
    readonly networkSecurityGroup?: outputs.network.v20160901.NetworkSecurityGroupResponse;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState?: string;
    /**
     * Gets an array of references to the external resources using subnet.
     */
    readonly resourceNavigationLinks?: outputs.network.v20160901.ResourceNavigationLinkResponse[];
    /**
     * The reference of the RouteTable resource.
     */
    readonly routeTable?: outputs.network.v20160901.RouteTableResponse;
}
