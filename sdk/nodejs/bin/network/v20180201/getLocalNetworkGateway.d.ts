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
     * Local network gateway's BGP speaker settings.
     */
    readonly bgpSettings?: outputs.network.v20180201.BgpSettingsResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * IP address of local network gateway.
     */
    readonly gatewayIpAddress?: string;
    /**
     * Local network site address space.
     */
    readonly localNetworkAddressSpace?: outputs.network.v20180201.AddressSpaceResponse;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the LocalNetworkGateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the LocalNetworkGateway resource.
     */
    readonly resourceGuid?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
}
