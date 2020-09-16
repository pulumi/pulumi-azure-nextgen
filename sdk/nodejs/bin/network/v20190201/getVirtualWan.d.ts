import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getVirtualWan(args: GetVirtualWanArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualWanResult>;
export interface GetVirtualWanArgs {
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
export interface GetVirtualWanResult {
    /**
     * True if branch to branch traffic is allowed.
     */
    readonly allowBranchToBranchTraffic?: boolean;
    /**
     * True if Vnet to Vnet traffic is allowed.
     */
    readonly allowVnetToVnetTraffic?: boolean;
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
     * The office local breakout category.
     */
    readonly office365LocalBreakoutCategory?: string;
    /**
     * List of all P2SVpnServerConfigurations associated with the virtual wan.
     */
    readonly p2SVpnServerConfigurations?: outputs.network.v20190201.P2SVpnServerConfigurationResponse[];
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState?: string;
    /**
     * The Security Provider name.
     */
    readonly securityProviderName?: string;
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
    readonly virtualHubs: outputs.network.v20190201.SubResourceResponse[];
    /**
     * List of VpnSites in the VirtualWAN.
     */
    readonly vpnSites: outputs.network.v20190201.SubResourceResponse[];
}
