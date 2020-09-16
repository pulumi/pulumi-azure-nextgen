import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getP2sVpnGateway(args: GetP2sVpnGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetP2sVpnGatewayResult>;
export interface GetP2sVpnGatewayArgs {
    /**
     * The name of the gateway.
     */
    readonly gatewayName: string;
    /**
     * The resource group name of the P2SVpnGateway.
     */
    readonly resourceGroupName: string;
}
/**
 * P2SVpnGateway Resource.
 */
export interface GetP2sVpnGatewayResult {
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
     * The P2SVpnServerConfiguration to which the p2sVpnGateway is attached to.
     */
    readonly p2SVpnServerConfiguration?: outputs.network.v20181001.SubResourceResponse;
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
    readonly virtualHub?: outputs.network.v20181001.SubResourceResponse;
    /**
     * The reference of the address space resource which represents Address space for P2S VpnClient.
     */
    readonly vpnClientAddressPool?: outputs.network.v20181001.AddressSpaceResponse;
    /**
     * All P2S VPN clients' connection health status.
     */
    readonly vpnClientConnectionHealth: outputs.network.v20181001.VpnClientConnectionHealthResponse;
    /**
     * The scale unit for this p2s vpn gateway.
     */
    readonly vpnGatewayScaleUnit?: number;
}
