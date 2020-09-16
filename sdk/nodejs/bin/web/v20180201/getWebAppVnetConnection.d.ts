import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getWebAppVnetConnection(args: GetWebAppVnetConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppVnetConnectionResult>;
export interface GetWebAppVnetConnectionArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the virtual network.
     */
    readonly vnetName: string;
}
/**
 * Virtual Network information contract.
 */
export interface GetWebAppVnetConnectionResult {
    /**
     * A certificate file (.cer) blob containing the public key of the private key used to authenticate a
     * Point-To-Site VPN connection.
     */
    readonly certBlob?: string;
    /**
     * The client certificate thumbprint.
     */
    readonly certThumbprint: string;
    /**
     * DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
     */
    readonly dnsServers?: string;
    /**
     * Flag that is used to denote if this is VNET injection
     */
    readonly isSwift?: boolean;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * <code>true</code> if a resync is required; otherwise, <code>false</code>.
     */
    readonly resyncRequired: boolean;
    /**
     * The routes that this Virtual Network connection uses.
     */
    readonly routes: outputs.web.v20180201.VnetRouteResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The Virtual Network's resource ID.
     */
    readonly vnetResourceId?: string;
}
