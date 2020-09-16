import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getVirtualWAN(args: GetVirtualWANArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualWANResult>;
export interface GetVirtualWANArgs {
    /**
     * The resource group name of the VirtualWan.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the VirtualWAN being retrieved.
     */
    readonly virtualWANName: string;
}
/**
 * VirtualWAN Resource.
 */
export interface GetVirtualWANResult {
    /**
     * Vpn encryption to be disabled or not.
     */
    readonly disableVpnEncryption?: boolean;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * List of VirtualHubs in the VirtualWAN.
     */
    readonly virtualHubs: outputs.network.v20180601.SubResourceResponse[];
    readonly vpnSites: outputs.network.v20180601.SubResourceResponse[];
}
