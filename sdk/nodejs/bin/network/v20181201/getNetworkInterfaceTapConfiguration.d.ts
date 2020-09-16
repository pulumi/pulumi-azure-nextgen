import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getNetworkInterfaceTapConfiguration(args: GetNetworkInterfaceTapConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkInterfaceTapConfigurationResult>;
export interface GetNetworkInterfaceTapConfigurationArgs {
    /**
     * The name of the network interface.
     */
    readonly networkInterfaceName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the tap configuration.
     */
    readonly tapConfigurationName: string;
}
/**
 * Tap configuration in a Network Interface
 */
export interface GetNetworkInterfaceTapConfigurationResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the network interface tap configuration. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string;
    /**
     * Sub Resource type.
     */
    readonly type: string;
    /**
     * The reference of the Virtual Network Tap resource.
     */
    readonly virtualNetworkTap?: outputs.network.v20181201.VirtualNetworkTapResponse;
}
