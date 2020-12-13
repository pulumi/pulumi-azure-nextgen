// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20180601
{
    public static class GetApplicationGateway
    {
        public static Task<GetApplicationGatewayResult> InvokeAsync(GetApplicationGatewayArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetApplicationGatewayResult>("azure-nextgen:network/v20180601:getApplicationGateway", args ?? new GetApplicationGatewayArgs(), options.WithVersion());
    }


    public sealed class GetApplicationGatewayArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the application gateway.
        /// </summary>
        [Input("applicationGatewayName", required: true)]
        public string ApplicationGatewayName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetApplicationGatewayArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetApplicationGatewayResult
    {
        /// <summary>
        /// Authentication certificates of the application gateway resource.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationGatewayAuthenticationCertificateResponse> AuthenticationCertificates;
        /// <summary>
        /// Autoscale Configuration.
        /// </summary>
        public readonly Outputs.ApplicationGatewayAutoscaleConfigurationResponse? AutoscaleConfiguration;
        /// <summary>
        /// Backend address pool of the application gateway resource.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationGatewayBackendAddressPoolResponse> BackendAddressPools;
        /// <summary>
        /// Backend http settings of the application gateway resource.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationGatewayBackendHttpSettingsResponse> BackendHttpSettingsCollection;
        /// <summary>
        /// Whether FIPS is enabled on the application gateway resource.
        /// </summary>
        public readonly bool? EnableFips;
        /// <summary>
        /// Whether HTTP2 is enabled on the application gateway resource.
        /// </summary>
        public readonly bool? EnableHttp2;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// Frontend IP addresses of the application gateway resource.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationGatewayFrontendIPConfigurationResponse> FrontendIPConfigurations;
        /// <summary>
        /// Frontend ports of the application gateway resource.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationGatewayFrontendPortResponse> FrontendPorts;
        /// <summary>
        /// Subnets of application the gateway resource.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationGatewayIPConfigurationResponse> GatewayIPConfigurations;
        /// <summary>
        /// Http listeners of the application gateway resource.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationGatewayHttpListenerResponse> HttpListeners;
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
        /// Operational state of the application gateway resource.
        /// </summary>
        public readonly string OperationalState;
        /// <summary>
        /// Probes of the application gateway resource.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationGatewayProbeResponse> Probes;
        /// <summary>
        /// Provisioning state of the application gateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// Redirect configurations of the application gateway resource.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationGatewayRedirectConfigurationResponse> RedirectConfigurations;
        /// <summary>
        /// Request routing rules of the application gateway resource.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationGatewayRequestRoutingRuleResponse> RequestRoutingRules;
        /// <summary>
        /// Resource GUID property of the application gateway resource.
        /// </summary>
        public readonly string? ResourceGuid;
        /// <summary>
        /// SKU of the application gateway resource.
        /// </summary>
        public readonly Outputs.ApplicationGatewaySkuResponse? Sku;
        /// <summary>
        /// SSL certificates of the application gateway resource.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationGatewaySslCertificateResponse> SslCertificates;
        /// <summary>
        /// SSL policy of the application gateway resource.
        /// </summary>
        public readonly Outputs.ApplicationGatewaySslPolicyResponse? SslPolicy;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// URL path map of the application gateway resource.
        /// </summary>
        public readonly ImmutableArray<Outputs.ApplicationGatewayUrlPathMapResponse> UrlPathMaps;
        /// <summary>
        /// Web application firewall configuration.
        /// </summary>
        public readonly Outputs.ApplicationGatewayWebApplicationFirewallConfigurationResponse? WebApplicationFirewallConfiguration;
        /// <summary>
        /// A list of availability zones denoting where the resource needs to come from.
        /// </summary>
        public readonly ImmutableArray<string> Zones;

        [OutputConstructor]
        private GetApplicationGatewayResult(
            ImmutableArray<Outputs.ApplicationGatewayAuthenticationCertificateResponse> authenticationCertificates,

            Outputs.ApplicationGatewayAutoscaleConfigurationResponse? autoscaleConfiguration,

            ImmutableArray<Outputs.ApplicationGatewayBackendAddressPoolResponse> backendAddressPools,

            ImmutableArray<Outputs.ApplicationGatewayBackendHttpSettingsResponse> backendHttpSettingsCollection,

            bool? enableFips,

            bool? enableHttp2,

            string? etag,

            ImmutableArray<Outputs.ApplicationGatewayFrontendIPConfigurationResponse> frontendIPConfigurations,

            ImmutableArray<Outputs.ApplicationGatewayFrontendPortResponse> frontendPorts,

            ImmutableArray<Outputs.ApplicationGatewayIPConfigurationResponse> gatewayIPConfigurations,

            ImmutableArray<Outputs.ApplicationGatewayHttpListenerResponse> httpListeners,

            string? id,

            string? location,

            string name,

            string operationalState,

            ImmutableArray<Outputs.ApplicationGatewayProbeResponse> probes,

            string? provisioningState,

            ImmutableArray<Outputs.ApplicationGatewayRedirectConfigurationResponse> redirectConfigurations,

            ImmutableArray<Outputs.ApplicationGatewayRequestRoutingRuleResponse> requestRoutingRules,

            string? resourceGuid,

            Outputs.ApplicationGatewaySkuResponse? sku,

            ImmutableArray<Outputs.ApplicationGatewaySslCertificateResponse> sslCertificates,

            Outputs.ApplicationGatewaySslPolicyResponse? sslPolicy,

            ImmutableDictionary<string, string>? tags,

            string type,

            ImmutableArray<Outputs.ApplicationGatewayUrlPathMapResponse> urlPathMaps,

            Outputs.ApplicationGatewayWebApplicationFirewallConfigurationResponse? webApplicationFirewallConfiguration,

            ImmutableArray<string> zones)
        {
            AuthenticationCertificates = authenticationCertificates;
            AutoscaleConfiguration = autoscaleConfiguration;
            BackendAddressPools = backendAddressPools;
            BackendHttpSettingsCollection = backendHttpSettingsCollection;
            EnableFips = enableFips;
            EnableHttp2 = enableHttp2;
            Etag = etag;
            FrontendIPConfigurations = frontendIPConfigurations;
            FrontendPorts = frontendPorts;
            GatewayIPConfigurations = gatewayIPConfigurations;
            HttpListeners = httpListeners;
            Id = id;
            Location = location;
            Name = name;
            OperationalState = operationalState;
            Probes = probes;
            ProvisioningState = provisioningState;
            RedirectConfigurations = redirectConfigurations;
            RequestRoutingRules = requestRoutingRules;
            ResourceGuid = resourceGuid;
            Sku = sku;
            SslCertificates = sslCertificates;
            SslPolicy = sslPolicy;
            Tags = tags;
            Type = type;
            UrlPathMaps = urlPathMaps;
            WebApplicationFirewallConfiguration = webApplicationFirewallConfiguration;
            Zones = zones;
        }
    }
}
