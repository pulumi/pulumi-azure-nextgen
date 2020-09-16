import * as pulumi from "@pulumi/pulumi";
export declare function getVirtualHubBgpConnection(args: GetVirtualHubBgpConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualHubBgpConnectionResult>;
export interface GetVirtualHubBgpConnectionArgs {
    /**
     * The name of the connection.
     */
    readonly connectionName: string;
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
 * Virtual Appliance Site resource.
 */
export interface GetVirtualHubBgpConnectionResult {
    /**
     * The current state of the VirtualHub to Peer.
     */
    readonly connectionState: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Name of the connection.
     */
    readonly name?: string;
    /**
     * Peer ASN.
     */
    readonly peerAsn?: number;
    /**
     * Peer IP.
     */
    readonly peerIp?: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Connection type.
     */
    readonly type: string;
}
