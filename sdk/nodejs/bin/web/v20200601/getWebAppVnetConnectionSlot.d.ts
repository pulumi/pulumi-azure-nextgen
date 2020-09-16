import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getWebAppVnetConnectionSlot(args: GetWebAppVnetConnectionSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppVnetConnectionSlotResult>;
export interface GetWebAppVnetConnectionSlotArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the named virtual network for the production slot.
     */
    readonly slot: string;
    /**
     * Name of the virtual network.
     */
    readonly vnetName: string;
}
/**
 * Virtual Network information contract.
 */
export interface GetWebAppVnetConnectionSlotResult {
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
    readonly routes: outputs.web.v20200601.VnetRouteResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The Virtual Network's resource ID.
     */
    readonly vnetResourceId?: string;
}
