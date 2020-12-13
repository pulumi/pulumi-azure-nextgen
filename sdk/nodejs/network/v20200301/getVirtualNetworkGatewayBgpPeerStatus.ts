// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getVirtualNetworkGatewayBgpPeerStatus(args: GetVirtualNetworkGatewayBgpPeerStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayBgpPeerStatusResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20200301:getVirtualNetworkGatewayBgpPeerStatus", {
        "peer": args.peer,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
}

export interface GetVirtualNetworkGatewayBgpPeerStatusArgs {
    /**
     * The IP address of the peer to retrieve the status of.
     */
    readonly peer?: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the virtual network gateway.
     */
    readonly virtualNetworkGatewayName: string;
}

/**
 * Response for list BGP peer status API service call.
 */
export interface GetVirtualNetworkGatewayBgpPeerStatusResult {
    /**
     * List of BGP peers.
     */
    readonly value?: outputs.network.v20200301.BgpPeerStatusResponse[];
}
