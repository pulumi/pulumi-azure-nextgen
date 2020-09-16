import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getVirtualNetworkLink(args: GetVirtualNetworkLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkLinkResult>;
export interface GetVirtualNetworkLinkArgs {
    /**
     * The name of the Private DNS zone (without a terminating dot).
     */
    readonly privateZoneName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the virtual network link.
     */
    readonly virtualNetworkLinkName: string;
}
/**
 * Describes a link to virtual network for a Private DNS zone.
 */
export interface GetVirtualNetworkLinkResult {
    /**
     * The ETag of the virtual network link.
     */
    readonly etag?: string;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly provisioningState: string;
    /**
     * Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled?
     */
    readonly registrationEnabled?: boolean;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
     */
    readonly type: string;
    /**
     * The reference of the virtual network.
     */
    readonly virtualNetwork?: outputs.network.v20180901.SubResourceResponse;
    /**
     * The status of the virtual network link to the Private DNS zone. Possible values are 'InProgress' and 'Done'. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly virtualNetworkLinkState: string;
}
