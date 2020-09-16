import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getLocalNetworkGateway(args: GetLocalNetworkGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetLocalNetworkGatewayResult>;
export interface GetLocalNetworkGatewayArgs {
    /**
     * The name of the local network gateway.
     */
    readonly localNetworkGatewayName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * A common class for general resource information
 */
export interface GetLocalNetworkGatewayResult {
    /**
     * Local network gateway's BGP speaker settings
     */
    readonly bgpSettings?: outputs.network.v20160601.BgpSettingsResponse;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: string;
    /**
     * IP address of local network gateway.
     */
    readonly gatewayIpAddress?: string;
    /**
     * Local network site Address space
     */
    readonly localNetworkAddressSpace?: outputs.network.v20160601.AddressSpaceResponse;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Gets provisioning state of the LocalNetworkGateway resource Updating/Deleting/Failed
     */
    readonly provisioningState?: string;
    /**
     * Gets or sets resource guid property of the LocalNetworkGateway resource
     */
    readonly resourceGuid?: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
}
