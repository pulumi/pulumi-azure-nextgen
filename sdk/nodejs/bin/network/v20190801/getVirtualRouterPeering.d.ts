import * as pulumi from "@pulumi/pulumi";
export declare function getVirtualRouterPeering(args: GetVirtualRouterPeeringArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualRouterPeeringResult>;
export interface GetVirtualRouterPeeringArgs {
    /**
     * The name of the Virtual Router Peering.
     */
    readonly peeringName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Virtual Router.
     */
    readonly virtualRouterName: string;
}
/**
 * Virtual Router Peering resource
 */
export interface GetVirtualRouterPeeringResult {
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Gets name of the peering unique to VirtualRouter. This name can be used to access the resource.
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
     * Peering type.
     */
    readonly type: string;
}
