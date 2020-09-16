import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getSiteVNETConnection(args: GetSiteVNETConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetSiteVNETConnectionResult>;
export interface GetSiteVNETConnectionArgs {
    /**
     * The name of the web app
     */
    readonly name: string;
    /**
     * The resource group name
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Virtual Network
     */
    readonly vnetName: string;
}
/**
 * VNETInfo contract. This contract is public and is a stripped down version of VNETInfoInternal
 */
export interface GetSiteVNETConnectionResult {
    /**
     * A certificate file (.cer) blob containing the public key of the private key used to authenticate a
     *             Point-To-Site VPN connection.
     */
    readonly certBlob?: string;
    /**
     * The client certificate thumbprint
     */
    readonly certThumbprint?: string;
    /**
     * Dns servers to be used by this VNET. This should be a comma-separated list of IP addresses.
     */
    readonly dnsServers?: string;
    /**
     * Kind of resource
     */
    readonly kind?: string;
    /**
     * Resource Location
     */
    readonly location: string;
    /**
     * Resource Name
     */
    readonly name?: string;
    /**
     * Flag to determine if a resync is required
     */
    readonly resyncRequired?: boolean;
    /**
     * The routes that this virtual network connection uses.
     */
    readonly routes?: outputs.web.v20150801.VnetRouteResponse[];
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type?: string;
    /**
     * The vnet resource id
     */
    readonly vnetResourceId?: string;
}
