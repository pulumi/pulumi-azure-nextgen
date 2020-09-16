import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getNetworkInterface(args: GetNetworkInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkInterfaceResult>;
export interface GetNetworkInterfaceArgs {
    /**
     * expand references resources.
     */
    readonly expand?: string;
    /**
     * The name of the network interface.
     */
    readonly networkInterfaceName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * A NetworkInterface in a resource group
 */
export interface GetNetworkInterfaceResult {
    /**
     * Gets or sets DNS Settings in  NetworkInterface
     */
    readonly dnsSettings?: outputs.network.v20160330.NetworkInterfaceDnsSettingsResponse;
    /**
     * Gets or sets whether IPForwarding is enabled on the NIC
     */
    readonly enableIPForwarding?: boolean;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: string;
    /**
     * Gets or sets list of IPConfigurations of the NetworkInterface
     */
    readonly ipConfigurations?: outputs.network.v20160330.NetworkInterfaceIPConfigurationResponse[];
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Gets the MAC Address of the network interface
     */
    readonly macAddress?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Gets or sets the reference of the NetworkSecurityGroup resource
     */
    readonly networkSecurityGroup?: outputs.network.v20160330.NetworkSecurityGroupResponse;
    /**
     * Gets whether this is a primary NIC on a virtual machine
     */
    readonly primary?: boolean;
    /**
     * Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState?: string;
    /**
     * Gets or sets resource GUID property of the network interface resource
     */
    readonly resourceGuid?: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Gets or sets the reference of a VirtualMachine
     */
    readonly virtualMachine?: outputs.network.v20160330.SubResourceResponse;
}
