import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getVpnServerConfiguration(args: GetVpnServerConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnServerConfigurationResult>;
export interface GetVpnServerConfigurationArgs {
    /**
     * The resource group name of the VpnServerConfiguration.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the VpnServerConfiguration being retrieved.
     */
    readonly vpnServerConfigurationName: string;
}
/**
 * VpnServerConfiguration Resource.
 */
export interface GetVpnServerConfigurationResult {
    /**
     * The set of aad vpn authentication parameters.
     */
    readonly aadAuthenticationParameters?: outputs.network.v20190801.AadAuthenticationParametersResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * List of references to P2SVpnGateways.
     */
    readonly p2SVpnGateways: outputs.network.v20190801.P2SVpnGatewayResponse[];
    /**
     * The provisioning state of the VpnServerConfiguration resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string;
    /**
     * Radius client root certificate of VpnServerConfiguration.
     */
    readonly radiusClientRootCertificates?: outputs.network.v20190801.VpnServerConfigRadiusClientRootCertificateResponse[];
    /**
     * The radius server address property of the VpnServerConfiguration resource for point to site client connection.
     */
    readonly radiusServerAddress?: string;
    /**
     * Radius Server root certificate of VpnServerConfiguration.
     */
    readonly radiusServerRootCertificates?: outputs.network.v20190801.VpnServerConfigRadiusServerRootCertificateResponse[];
    /**
     * The radius secret property of the VpnServerConfiguration resource for point to site client connection.
     */
    readonly radiusServerSecret?: string;
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
     * VPN authentication types for the VpnServerConfiguration.
     */
    readonly vpnAuthenticationTypes?: string[];
    /**
     * VpnClientIpsecPolicies for VpnServerConfiguration.
     */
    readonly vpnClientIpsecPolicies?: outputs.network.v20190801.IpsecPolicyResponse[];
    /**
     * VPN client revoked certificate of VpnServerConfiguration.
     */
    readonly vpnClientRevokedCertificates?: outputs.network.v20190801.VpnServerConfigVpnClientRevokedCertificateResponse[];
    /**
     * VPN client root certificate of VpnServerConfiguration.
     */
    readonly vpnClientRootCertificates?: outputs.network.v20190801.VpnServerConfigVpnClientRootCertificateResponse[];
    /**
     * VPN protocols for the VpnServerConfiguration.
     */
    readonly vpnProtocols?: string[];
}
