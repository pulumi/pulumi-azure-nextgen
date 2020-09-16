import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getVirtualHubIpConfiguration(args: GetVirtualHubIpConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualHubIpConfigurationResult>;
export interface GetVirtualHubIpConfigurationArgs {
    /**
     * The name of the ipconfig.
     */
    readonly ipConfigName: string;
    /**
     * The resource group name of the VirtualHub.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the VirtualHub.
     */
    readonly virtualHubName: string;
}
/**
 * IpConfigurations.
 */
export interface GetVirtualHubIpConfigurationResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Name of the Ip Configuration.
     */
    readonly name?: string;
    /**
     * The private IP address of the IP configuration.
     */
    readonly privateIPAddress?: string;
    /**
     * The private IP address allocation method.
     */
    readonly privateIPAllocationMethod?: string;
    /**
     * The provisioning state of the IP configuration resource.
     */
    readonly provisioningState: string;
    /**
     * The reference to the public IP resource.
     */
    readonly publicIPAddress?: outputs.network.v20200601.PublicIPAddressResponse;
    /**
     * The reference to the subnet resource.
     */
    readonly subnet?: outputs.network.v20200601.SubnetResponse;
    /**
     * Ipconfiguration type.
     */
    readonly type: string;
}
