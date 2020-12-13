// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200301
{
    public static class GetVpnServerConfiguration
    {
        public static Task<GetVpnServerConfigurationResult> InvokeAsync(GetVpnServerConfigurationArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVpnServerConfigurationResult>("azure-nextgen:network/v20200301:getVpnServerConfiguration", args ?? new GetVpnServerConfigurationArgs(), options.WithVersion());
    }


    public sealed class GetVpnServerConfigurationArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The resource group name of the VpnServerConfiguration.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the VpnServerConfiguration being retrieved.
        /// </summary>
        [Input("vpnServerConfigurationName", required: true)]
        public string VpnServerConfigurationName { get; set; } = null!;

        public GetVpnServerConfigurationArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetVpnServerConfigurationResult
    {
        /// <summary>
        /// The set of aad vpn authentication parameters.
        /// </summary>
        public readonly Outputs.AadAuthenticationParametersResponse? AadAuthenticationParameters;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// List of references to P2SVpnGateways.
        /// </summary>
        public readonly ImmutableArray<Outputs.P2SVpnGatewayResponse> P2SVpnGateways;
        /// <summary>
        /// The provisioning state of the VpnServerConfiguration resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Radius client root certificate of VpnServerConfiguration.
        /// </summary>
        public readonly ImmutableArray<Outputs.VpnServerConfigRadiusClientRootCertificateResponse> RadiusClientRootCertificates;
        /// <summary>
        /// The radius server address property of the VpnServerConfiguration resource for point to site client connection.
        /// </summary>
        public readonly string? RadiusServerAddress;
        /// <summary>
        /// Radius Server root certificate of VpnServerConfiguration.
        /// </summary>
        public readonly ImmutableArray<Outputs.VpnServerConfigRadiusServerRootCertificateResponse> RadiusServerRootCertificates;
        /// <summary>
        /// The radius secret property of the VpnServerConfiguration resource for point to site client connection.
        /// </summary>
        public readonly string? RadiusServerSecret;
        /// <summary>
        /// Multiple Radius Server configuration for VpnServerConfiguration.
        /// </summary>
        public readonly ImmutableArray<Outputs.RadiusServerResponse> RadiusServers;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// VPN authentication types for the VpnServerConfiguration.
        /// </summary>
        public readonly ImmutableArray<string> VpnAuthenticationTypes;
        /// <summary>
        /// VpnClientIpsecPolicies for VpnServerConfiguration.
        /// </summary>
        public readonly ImmutableArray<Outputs.IpsecPolicyResponse> VpnClientIpsecPolicies;
        /// <summary>
        /// VPN client revoked certificate of VpnServerConfiguration.
        /// </summary>
        public readonly ImmutableArray<Outputs.VpnServerConfigVpnClientRevokedCertificateResponse> VpnClientRevokedCertificates;
        /// <summary>
        /// VPN client root certificate of VpnServerConfiguration.
        /// </summary>
        public readonly ImmutableArray<Outputs.VpnServerConfigVpnClientRootCertificateResponse> VpnClientRootCertificates;
        /// <summary>
        /// VPN protocols for the VpnServerConfiguration.
        /// </summary>
        public readonly ImmutableArray<string> VpnProtocols;

        [OutputConstructor]
        private GetVpnServerConfigurationResult(
            Outputs.AadAuthenticationParametersResponse? aadAuthenticationParameters,

            string etag,

            string? id,

            string? location,

            string name,

            ImmutableArray<Outputs.P2SVpnGatewayResponse> p2SVpnGateways,

            string provisioningState,

            ImmutableArray<Outputs.VpnServerConfigRadiusClientRootCertificateResponse> radiusClientRootCertificates,

            string? radiusServerAddress,

            ImmutableArray<Outputs.VpnServerConfigRadiusServerRootCertificateResponse> radiusServerRootCertificates,

            string? radiusServerSecret,

            ImmutableArray<Outputs.RadiusServerResponse> radiusServers,

            ImmutableDictionary<string, string>? tags,

            string type,

            ImmutableArray<string> vpnAuthenticationTypes,

            ImmutableArray<Outputs.IpsecPolicyResponse> vpnClientIpsecPolicies,

            ImmutableArray<Outputs.VpnServerConfigVpnClientRevokedCertificateResponse> vpnClientRevokedCertificates,

            ImmutableArray<Outputs.VpnServerConfigVpnClientRootCertificateResponse> vpnClientRootCertificates,

            ImmutableArray<string> vpnProtocols)
        {
            AadAuthenticationParameters = aadAuthenticationParameters;
            Etag = etag;
            Id = id;
            Location = location;
            Name = name;
            P2SVpnGateways = p2SVpnGateways;
            ProvisioningState = provisioningState;
            RadiusClientRootCertificates = radiusClientRootCertificates;
            RadiusServerAddress = radiusServerAddress;
            RadiusServerRootCertificates = radiusServerRootCertificates;
            RadiusServerSecret = radiusServerSecret;
            RadiusServers = radiusServers;
            Tags = tags;
            Type = type;
            VpnAuthenticationTypes = vpnAuthenticationTypes;
            VpnClientIpsecPolicies = vpnClientIpsecPolicies;
            VpnClientRevokedCertificates = vpnClientRevokedCertificates;
            VpnClientRootCertificates = vpnClientRootCertificates;
            VpnProtocols = vpnProtocols;
        }
    }
}
