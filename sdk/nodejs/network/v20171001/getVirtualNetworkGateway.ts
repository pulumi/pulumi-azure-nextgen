// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getVirtualNetworkGateway(args: GetVirtualNetworkGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20171001:getVirtualNetworkGateway", {
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkGatewayName": args.virtualNetworkGatewayName,
    }, opts);
}

export interface GetVirtualNetworkGatewayArgs {
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
 * A common class for general resource information
 */
export interface GetVirtualNetworkGatewayResult {
    /**
     * ActiveActive flag
     */
    readonly activeActive?: boolean;
    /**
     * Virtual network gateway's BGP speaker settings.
     */
    readonly bgpSettings?: outputs.network.v20171001.BgpSettingsResponse;
    /**
     * Whether BGP is enabled for this virtual network gateway or not.
     */
    readonly enableBgp?: boolean;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * The reference of the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
     */
    readonly gatewayDefaultSite?: outputs.network.v20171001.SubResourceResponse;
    /**
     * The type of this virtual network gateway. Possible values are: 'Vpn' and 'ExpressRoute'.
     */
    readonly gatewayType?: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * IP configurations for virtual network gateway.
     */
    readonly ipConfigurations?: outputs.network.v20171001.VirtualNetworkGatewayIPConfigurationResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the VirtualNetworkGateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the VirtualNetworkGateway resource.
     */
    readonly resourceGuid?: string;
    /**
     * The reference of the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
     */
    readonly sku?: outputs.network.v20171001.VirtualNetworkGatewaySkuResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The reference of the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
     */
    readonly vpnClientConfiguration?: outputs.network.v20171001.VpnClientConfigurationResponse;
    /**
     * The type of this virtual network gateway. Possible values are: 'PolicyBased' and 'RouteBased'.
     */
    readonly vpnType?: string;
}
