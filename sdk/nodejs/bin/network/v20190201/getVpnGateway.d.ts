import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getVpnGateway(args: GetVpnGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnGatewayResult>;
export interface GetVpnGatewayArgs {
    /**
     * The name of the gateway.
     */
    readonly gatewayName: string;
    /**
     * The resource group name of the VpnGateway.
     */
    readonly resourceGroupName: string;
}
/**
 * VpnGateway Resource.
 */
export interface GetVpnGatewayResult {
    /**
     * Local network gateway's BGP speaker settings.
     */
    readonly bgpSettings?: outputs.network.v20190201.BgpSettingsResponse;
    /**
     * List of all vpn connections to the gateway.
     */
    readonly connections?: outputs.network.v20190201.VpnConnectionResponse[];
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState?: string;
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
    /**
     * The VirtualHub to which the gateway belongs
     */
    readonly virtualHub?: outputs.network.v20190201.SubResourceResponse;
    /**
     * The scale unit for this vpn gateway.
     */
    readonly vpnGatewayScaleUnit?: number;
}
