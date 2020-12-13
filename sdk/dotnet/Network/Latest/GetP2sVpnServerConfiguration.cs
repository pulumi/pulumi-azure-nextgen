// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.Latest
{
    public static class GetP2sVpnServerConfiguration
    {
        public static Task<GetP2sVpnServerConfigurationResult> InvokeAsync(GetP2sVpnServerConfigurationArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetP2sVpnServerConfigurationResult>("azure-nextgen:network/latest:getP2sVpnServerConfiguration", args ?? new GetP2sVpnServerConfigurationArgs(), options.WithVersion());
    }


    public sealed class GetP2sVpnServerConfigurationArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the P2SVpnServerConfiguration.
        /// </summary>
        [Input("p2SVpnServerConfigurationName", required: true)]
        public string P2SVpnServerConfigurationName { get; set; } = null!;

        /// <summary>
        /// The resource group name of the P2SVpnServerConfiguration.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the VirtualWan.
        /// </summary>
        [Input("virtualWanName", required: true)]
        public string VirtualWanName { get; set; } = null!;

        public GetP2sVpnServerConfigurationArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetP2sVpnServerConfigurationResult
    {
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// The name of the P2SVpnServerConfiguration that is unique within a VirtualWan in a resource group. This name can be used to access the resource along with Paren VirtualWan resource name.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// List of references to P2SVpnGateways.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubResourceResponse> P2SVpnGateways;
        /// <summary>
        /// Radius client root certificate of P2SVpnServerConfiguration.
        /// </summary>
        public readonly ImmutableArray<Outputs.P2SVpnServerConfigRadiusClientRootCertificateResponse> P2SVpnServerConfigRadiusClientRootCertificates;
        /// <summary>
        /// Radius Server root certificate of P2SVpnServerConfiguration.
        /// </summary>
        public readonly ImmutableArray<Outputs.P2SVpnServerConfigRadiusServerRootCertificateResponse> P2SVpnServerConfigRadiusServerRootCertificates;
        /// <summary>
        /// VPN client revoked certificate of P2SVpnServerConfiguration.
        /// </summary>
        public readonly ImmutableArray<Outputs.P2SVpnServerConfigVpnClientRevokedCertificateResponse> P2SVpnServerConfigVpnClientRevokedCertificates;
        /// <summary>
        /// VPN client root certificate of P2SVpnServerConfiguration.
        /// </summary>
        public readonly ImmutableArray<Outputs.P2SVpnServerConfigVpnClientRootCertificateResponse> P2SVpnServerConfigVpnClientRootCertificates;
        /// <summary>
        /// The provisioning state of the P2S VPN server configuration resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The radius server address property of the P2SVpnServerConfiguration resource for point to site client connection.
        /// </summary>
        public readonly string? RadiusServerAddress;
        /// <summary>
        /// The radius secret property of the P2SVpnServerConfiguration resource for point to site client connection.
        /// </summary>
        public readonly string? RadiusServerSecret;
        /// <summary>
        /// VpnClientIpsecPolicies for P2SVpnServerConfiguration.
        /// </summary>
        public readonly ImmutableArray<Outputs.IpsecPolicyResponse> VpnClientIpsecPolicies;
        /// <summary>
        /// VPN protocols for the P2SVpnServerConfiguration.
        /// </summary>
        public readonly ImmutableArray<string> VpnProtocols;

        [OutputConstructor]
        private GetP2sVpnServerConfigurationResult(
            string etag,

            string? id,

            string? name,

            ImmutableArray<Outputs.SubResourceResponse> p2SVpnGateways,

            ImmutableArray<Outputs.P2SVpnServerConfigRadiusClientRootCertificateResponse> p2SVpnServerConfigRadiusClientRootCertificates,

            ImmutableArray<Outputs.P2SVpnServerConfigRadiusServerRootCertificateResponse> p2SVpnServerConfigRadiusServerRootCertificates,

            ImmutableArray<Outputs.P2SVpnServerConfigVpnClientRevokedCertificateResponse> p2SVpnServerConfigVpnClientRevokedCertificates,

            ImmutableArray<Outputs.P2SVpnServerConfigVpnClientRootCertificateResponse> p2SVpnServerConfigVpnClientRootCertificates,

            string provisioningState,

            string? radiusServerAddress,

            string? radiusServerSecret,

            ImmutableArray<Outputs.IpsecPolicyResponse> vpnClientIpsecPolicies,

            ImmutableArray<string> vpnProtocols)
        {
            Etag = etag;
            Id = id;
            Name = name;
            P2SVpnGateways = p2SVpnGateways;
            P2SVpnServerConfigRadiusClientRootCertificates = p2SVpnServerConfigRadiusClientRootCertificates;
            P2SVpnServerConfigRadiusServerRootCertificates = p2SVpnServerConfigRadiusServerRootCertificates;
            P2SVpnServerConfigVpnClientRevokedCertificates = p2SVpnServerConfigVpnClientRevokedCertificates;
            P2SVpnServerConfigVpnClientRootCertificates = p2SVpnServerConfigVpnClientRootCertificates;
            ProvisioningState = provisioningState;
            RadiusServerAddress = radiusServerAddress;
            RadiusServerSecret = radiusServerSecret;
            VpnClientIpsecPolicies = vpnClientIpsecPolicies;
            VpnProtocols = vpnProtocols;
        }
    }
}
