// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getHubVirtualNetworkConnection(args: GetHubVirtualNetworkConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetHubVirtualNetworkConnectionResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20200701:getHubVirtualNetworkConnection", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
        "virtualHubName": args.virtualHubName,
    }, opts);
}

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
     * Resource ID.
     */
    readonly id?: string;
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
    readonly remoteVirtualNetwork?: outputs.network.v20200701.SubResourceResponse;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    readonly routingConfiguration?: outputs.network.v20200701.RoutingConfigurationResponse;
}
