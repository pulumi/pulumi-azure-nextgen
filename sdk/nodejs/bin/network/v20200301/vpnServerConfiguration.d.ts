import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * VpnServerConfiguration Resource.
 */
export declare class VpnServerConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing VpnServerConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VpnServerConfiguration;
    /**
     * Returns true if the given object is an instance of VpnServerConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VpnServerConfiguration;
    /**
     * The set of aad vpn authentication parameters.
     */
    readonly aadAuthenticationParameters: pulumi.Output<outputs.network.v20200301.AadAuthenticationParametersResponse | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * List of references to P2SVpnGateways.
     */
    readonly p2SVpnGateways: pulumi.Output<outputs.network.v20200301.P2SVpnGatewayResponse[]>;
    /**
     * The provisioning state of the VpnServerConfiguration resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Radius client root certificate of VpnServerConfiguration.
     */
    readonly radiusClientRootCertificates: pulumi.Output<outputs.network.v20200301.VpnServerConfigRadiusClientRootCertificateResponse[] | undefined>;
    /**
     * The radius server address property of the VpnServerConfiguration resource for point to site client connection.
     */
    readonly radiusServerAddress: pulumi.Output<string | undefined>;
    /**
     * Radius Server root certificate of VpnServerConfiguration.
     */
    readonly radiusServerRootCertificates: pulumi.Output<outputs.network.v20200301.VpnServerConfigRadiusServerRootCertificateResponse[] | undefined>;
    /**
     * The radius secret property of the VpnServerConfiguration resource for point to site client connection.
     */
    readonly radiusServerSecret: pulumi.Output<string | undefined>;
    /**
     * Multiple Radius Server configuration for VpnServerConfiguration.
     */
    readonly radiusServers: pulumi.Output<outputs.network.v20200301.RadiusServerResponse[] | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * VPN authentication types for the VpnServerConfiguration.
     */
    readonly vpnAuthenticationTypes: pulumi.Output<string[] | undefined>;
    /**
     * VpnClientIpsecPolicies for VpnServerConfiguration.
     */
    readonly vpnClientIpsecPolicies: pulumi.Output<outputs.network.v20200301.IpsecPolicyResponse[] | undefined>;
    /**
     * VPN client revoked certificate of VpnServerConfiguration.
     */
    readonly vpnClientRevokedCertificates: pulumi.Output<outputs.network.v20200301.VpnServerConfigVpnClientRevokedCertificateResponse[] | undefined>;
    /**
     * VPN client root certificate of VpnServerConfiguration.
     */
    readonly vpnClientRootCertificates: pulumi.Output<outputs.network.v20200301.VpnServerConfigVpnClientRootCertificateResponse[] | undefined>;
    /**
     * VPN protocols for the VpnServerConfiguration.
     */
    readonly vpnProtocols: pulumi.Output<string[] | undefined>;
    /**
     * Create a VpnServerConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnServerConfigurationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VpnServerConfiguration resource.
 */
export interface VpnServerConfigurationArgs {
    /**
     * The set of aad vpn authentication parameters.
     */
    readonly aadAuthenticationParameters?: pulumi.Input<inputs.network.v20200301.AadAuthenticationParameters>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the VpnServerConfiguration that is unique within a resource group.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Radius client root certificate of VpnServerConfiguration.
     */
    readonly radiusClientRootCertificates?: pulumi.Input<pulumi.Input<inputs.network.v20200301.VpnServerConfigRadiusClientRootCertificate>[]>;
    /**
     * The radius server address property of the VpnServerConfiguration resource for point to site client connection.
     */
    readonly radiusServerAddress?: pulumi.Input<string>;
    /**
     * Radius Server root certificate of VpnServerConfiguration.
     */
    readonly radiusServerRootCertificates?: pulumi.Input<pulumi.Input<inputs.network.v20200301.VpnServerConfigRadiusServerRootCertificate>[]>;
    /**
     * The radius secret property of the VpnServerConfiguration resource for point to site client connection.
     */
    readonly radiusServerSecret?: pulumi.Input<string>;
    /**
     * Multiple Radius Server configuration for VpnServerConfiguration.
     */
    readonly radiusServers?: pulumi.Input<pulumi.Input<inputs.network.v20200301.RadiusServer>[]>;
    /**
     * The resource group name of the VpnServerConfiguration.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * VPN authentication types for the VpnServerConfiguration.
     */
    readonly vpnAuthenticationTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * VpnClientIpsecPolicies for VpnServerConfiguration.
     */
    readonly vpnClientIpsecPolicies?: pulumi.Input<pulumi.Input<inputs.network.v20200301.IpsecPolicy>[]>;
    /**
     * VPN client revoked certificate of VpnServerConfiguration.
     */
    readonly vpnClientRevokedCertificates?: pulumi.Input<pulumi.Input<inputs.network.v20200301.VpnServerConfigVpnClientRevokedCertificate>[]>;
    /**
     * VPN client root certificate of VpnServerConfiguration.
     */
    readonly vpnClientRootCertificates?: pulumi.Input<pulumi.Input<inputs.network.v20200301.VpnServerConfigVpnClientRootCertificate>[]>;
    /**
     * VPN protocols for the VpnServerConfiguration.
     */
    readonly vpnProtocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the VpnServerConfiguration being created or updated.
     */
    readonly vpnServerConfigurationName: pulumi.Input<string>;
}
