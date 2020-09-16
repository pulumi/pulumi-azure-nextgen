import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getHubVirtualNetworkConnection(args: GetHubVirtualNetworkConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetHubVirtualNetworkConnectionResult>;
export interface GetHubVirtualNetworkConnectionArgs {
    /**
     * The name of the vpn connection.
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
 * HubVirtualNetworkConnection Resource.
 */
export interface GetHubVirtualNetworkConnectionResult {
    /**
     * Deprecated: VirtualHub to RemoteVnet transit to enabled or not.
     */
    readonly allowHubToRemoteVnetTransit?: boolean;
    /**
     * Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.
     */
    readonly allowRemoteVnetToUseHubVnetGateways?: boolean;
    /**
     * Enable internet security.
     */
    readonly enableInternetSecurity?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the hub virtual network connection resource.
     */
    readonly provisioningState: string;
    /**
     * Reference to the remote virtual network.
     */
    readonly remoteVirtualNetwork?: outputs.network.v20200501.SubResourceResponse;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    readonly routingConfiguration?: outputs.network.v20200501.RoutingConfigurationResponse;
}
