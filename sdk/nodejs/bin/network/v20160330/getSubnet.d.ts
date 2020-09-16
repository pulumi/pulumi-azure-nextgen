import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getSubnet(args: GetSubnetArgs, opts?: pulumi.InvokeOptions): Promise<GetSubnetResult>;
export interface GetSubnetArgs {
    /**
     * expand references resources.
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
 * Subnet in a VirtualNetwork resource
 */
export interface GetSubnetResult {
    /**
     * Gets or sets Address prefix for the subnet.
     */
    readonly addressPrefix?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: string;
    /**
     * Gets array of references to the network interface IP configurations using subnet
     */
    readonly ipConfigurations?: outputs.network.v20160330.IPConfigurationResponse[];
    /**
     * Gets name of the resource that is unique within a resource group. This name can be used to access the resource
     */
    readonly name?: string;
    /**
     * Gets or sets the reference of the NetworkSecurityGroup resource
     */
    readonly networkSecurityGroup?: outputs.network.v20160330.NetworkSecurityGroupResponse;
    /**
     * Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState?: string;
    /**
     * Gets or sets the reference of the RouteTable resource
     */
    readonly routeTable?: outputs.network.v20160330.RouteTableResponse;
}
