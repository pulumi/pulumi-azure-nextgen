import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * P2SVpnServerConfiguration Resource.
 */
export declare class P2sVpnServerConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing P2sVpnServerConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): P2sVpnServerConfiguration;
    /**
     * Returns true if the given object is an instance of P2sVpnServerConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is P2sVpnServerConfiguration;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The name of the P2SVpnServerConfiguration that is unique within a VirtualWan in a resource group. This name can be used to access the resource along with Paren VirtualWan resource name.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * List of references to P2SVpnGateways.
     */
    readonly p2SVpnGateways: pulumi.Output<outputs.network.v20190401.SubResourceResponse[]>;
    /**
     * Radius client root certificate of P2SVpnServerConfiguration.
     */
    readonly p2SVpnServerConfigRadiusClientRootCertificates: pulumi.Output<outputs.network.v20190401.P2SVpnServerConfigRadiusClientRootCertificateResponse[] | undefined>;
    /**
     * Radius Server root certificate of P2SVpnServerConfiguration.
     */
    readonly p2SVpnServerConfigRadiusServerRootCertificates: pulumi.Output<outputs.network.v20190401.P2SVpnServerConfigRadiusServerRootCertificateResponse[] | undefined>;
    /**
     * VPN client revoked certificate of P2SVpnServerConfiguration.
     */
    readonly p2SVpnServerConfigVpnClientRevokedCertificates: pulumi.Output<outputs.network.v20190401.P2SVpnServerConfigVpnClientRevokedCertificateResponse[] | undefined>;
    /**
     * VPN client root certificate of P2SVpnServerConfiguration.
     */
    readonly p2SVpnServerConfigVpnClientRootCertificates: pulumi.Output<outputs.network.v20190401.P2SVpnServerConfigVpnClientRootCertificateResponse[] | undefined>;
    /**
     * The provisioning state of the P2SVpnServerConfiguration resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The radius server address property of the P2SVpnServerConfiguration resource for point to site client connection.
     */
    readonly radiusServerAddress: pulumi.Output<string | undefined>;
    /**
     * The radius secret property of the P2SVpnServerConfiguration resource for point to site client connection.
     */
    readonly radiusServerSecret: pulumi.Output<string | undefined>;
    /**
     * VpnClientIpsecPolicies for P2SVpnServerConfiguration.
     */
    readonly vpnClientIpsecPolicies: pulumi.Output<outputs.network.v20190401.IpsecPolicyResponse[] | undefined>;
    /**
     * VPN protocols for the P2SVpnServerConfiguration.
     */
    readonly vpnProtocols: pulumi.Output<string[] | undefined>;
    /**
     * Create a P2sVpnServerConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: P2sVpnServerConfigurationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a P2sVpnServerConfiguration resource.
 */
export interface P2sVpnServerConfigurationArgs {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the P2SVpnServerConfiguration that is unique within a VirtualWan in a resource group. This name can be used to access the resource along with Paren VirtualWan resource name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Radius client root certificate of P2SVpnServerConfiguration.
     */
    readonly p2SVpnServerConfigRadiusClientRootCertificates?: pulumi.Input<pulumi.Input<inputs.network.v20190401.P2SVpnServerConfigRadiusClientRootCertificate>[]>;
    /**
     * Radius Server root certificate of P2SVpnServerConfiguration.
     */
    readonly p2SVpnServerConfigRadiusServerRootCertificates?: pulumi.Input<pulumi.Input<inputs.network.v20190401.P2SVpnServerConfigRadiusServerRootCertificate>[]>;
    /**
     * VPN client revoked certificate of P2SVpnServerConfiguration.
     */
    readonly p2SVpnServerConfigVpnClientRevokedCertificates?: pulumi.Input<pulumi.Input<inputs.network.v20190401.P2SVpnServerConfigVpnClientRevokedCertificate>[]>;
    /**
     * VPN client root certificate of P2SVpnServerConfiguration.
     */
    readonly p2SVpnServerConfigVpnClientRootCertificates?: pulumi.Input<pulumi.Input<inputs.network.v20190401.P2SVpnServerConfigVpnClientRootCertificate>[]>;
    /**
     * The name of the P2SVpnServerConfiguration.
     */
    readonly p2SVpnServerConfigurationName: pulumi.Input<string>;
    /**
     * The radius server address property of the P2SVpnServerConfiguration resource for point to site client connection.
     */
    readonly radiusServerAddress?: pulumi.Input<string>;
    /**
     * The radius secret property of the P2SVpnServerConfiguration resource for point to site client connection.
     */
    readonly radiusServerSecret?: pulumi.Input<string>;
    /**
     * The resource group name of the VirtualWan.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VirtualWan.
     */
    readonly virtualWanName: pulumi.Input<string>;
    /**
     * VpnClientIpsecPolicies for P2SVpnServerConfiguration.
     */
    readonly vpnClientIpsecPolicies?: pulumi.Input<pulumi.Input<inputs.network.v20190401.IpsecPolicy>[]>;
    /**
     * VPN protocols for the P2SVpnServerConfiguration.
     */
    readonly vpnProtocols?: pulumi.Input<pulumi.Input<string>[]>;
}
