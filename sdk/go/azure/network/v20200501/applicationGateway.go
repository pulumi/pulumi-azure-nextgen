// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200501

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Application gateway resource.
type ApplicationGateway struct {
	pulumi.CustomResourceState

	// Authentication certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	AuthenticationCertificates ApplicationGatewayAuthenticationCertificateResponseArrayOutput `pulumi:"authenticationCertificates"`
	// Autoscale Configuration.
	AutoscaleConfiguration ApplicationGatewayAutoscaleConfigurationResponsePtrOutput `pulumi:"autoscaleConfiguration"`
	// Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	BackendAddressPools ApplicationGatewayBackendAddressPoolResponseArrayOutput `pulumi:"backendAddressPools"`
	// Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	BackendHttpSettingsCollection ApplicationGatewayBackendHttpSettingsResponseArrayOutput `pulumi:"backendHttpSettingsCollection"`
	// Custom error configurations of the application gateway resource.
	CustomErrorConfigurations ApplicationGatewayCustomErrorResponseArrayOutput `pulumi:"customErrorConfigurations"`
	// Whether FIPS is enabled on the application gateway resource.
	EnableFips pulumi.BoolPtrOutput `pulumi:"enableFips"`
	// Whether HTTP2 is enabled on the application gateway resource.
	EnableHttp2 pulumi.BoolPtrOutput `pulumi:"enableHttp2"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// Reference to the FirewallPolicy resource.
	FirewallPolicy SubResourceResponsePtrOutput `pulumi:"firewallPolicy"`
	// If true, associates a firewall policy with an application gateway regardless whether the policy differs from the WAF Config.
	ForceFirewallPolicyAssociation pulumi.BoolPtrOutput `pulumi:"forceFirewallPolicyAssociation"`
	// Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	FrontendIPConfigurations ApplicationGatewayFrontendIPConfigurationResponseArrayOutput `pulumi:"frontendIPConfigurations"`
	// Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	FrontendPorts ApplicationGatewayFrontendPortResponseArrayOutput `pulumi:"frontendPorts"`
	// Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	GatewayIPConfigurations ApplicationGatewayIPConfigurationResponseArrayOutput `pulumi:"gatewayIPConfigurations"`
	// Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	HttpListeners ApplicationGatewayHttpListenerResponseArrayOutput `pulumi:"httpListeners"`
	// The identity of the application gateway, if configured.
	Identity ManagedServiceIdentityResponsePtrOutput `pulumi:"identity"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Operational state of the application gateway resource.
	OperationalState pulumi.StringOutput `pulumi:"operationalState"`
	// Private Endpoint connections on application gateway.
	PrivateEndpointConnections ApplicationGatewayPrivateEndpointConnectionResponseArrayOutput `pulumi:"privateEndpointConnections"`
	// PrivateLink configurations on application gateway.
	PrivateLinkConfigurations ApplicationGatewayPrivateLinkConfigurationResponseArrayOutput `pulumi:"privateLinkConfigurations"`
	// Probes of the application gateway resource.
	Probes ApplicationGatewayProbeResponseArrayOutput `pulumi:"probes"`
	// The provisioning state of the application gateway resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	RedirectConfigurations ApplicationGatewayRedirectConfigurationResponseArrayOutput `pulumi:"redirectConfigurations"`
	// Request routing rules of the application gateway resource.
	RequestRoutingRules ApplicationGatewayRequestRoutingRuleResponseArrayOutput `pulumi:"requestRoutingRules"`
	// The resource GUID property of the application gateway resource.
	ResourceGuid pulumi.StringOutput `pulumi:"resourceGuid"`
	// Rewrite rules for the application gateway resource.
	RewriteRuleSets ApplicationGatewayRewriteRuleSetResponseArrayOutput `pulumi:"rewriteRuleSets"`
	// SKU of the application gateway resource.
	Sku ApplicationGatewaySkuResponsePtrOutput `pulumi:"sku"`
	// SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	SslCertificates ApplicationGatewaySslCertificateResponseArrayOutput `pulumi:"sslCertificates"`
	// SSL policy of the application gateway resource.
	SslPolicy ApplicationGatewaySslPolicyResponsePtrOutput `pulumi:"sslPolicy"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	TrustedRootCertificates ApplicationGatewayTrustedRootCertificateResponseArrayOutput `pulumi:"trustedRootCertificates"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	UrlPathMaps ApplicationGatewayUrlPathMapResponseArrayOutput `pulumi:"urlPathMaps"`
	// Web application firewall configuration.
	WebApplicationFirewallConfiguration ApplicationGatewayWebApplicationFirewallConfigurationResponsePtrOutput `pulumi:"webApplicationFirewallConfiguration"`
	// A list of availability zones denoting where the resource needs to come from.
	Zones pulumi.StringArrayOutput `pulumi:"zones"`
}

// NewApplicationGateway registers a new resource with the given unique name, arguments, and options.
func NewApplicationGateway(ctx *pulumi.Context,
	name string, args *ApplicationGatewayArgs, opts ...pulumi.ResourceOption) (*ApplicationGateway, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ApplicationGatewayName == nil {
		return nil, errors.New("invalid value for required argument 'ApplicationGatewayName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20150501preview:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20150615:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160330:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160601:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160901:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20161201:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170301:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170601:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170801:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170901:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171001:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171101:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180101:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180201:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:ApplicationGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:ApplicationGateway"),
		},
	})
	opts = append(opts, aliases)
	var resource ApplicationGateway
	err := ctx.RegisterResource("azure-nextgen:network/v20200501:ApplicationGateway", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetApplicationGateway gets an existing ApplicationGateway resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetApplicationGateway(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ApplicationGatewayState, opts ...pulumi.ResourceOption) (*ApplicationGateway, error) {
	var resource ApplicationGateway
	err := ctx.ReadResource("azure-nextgen:network/v20200501:ApplicationGateway", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ApplicationGateway resources.
type applicationGatewayState struct {
	// Authentication certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	AuthenticationCertificates []ApplicationGatewayAuthenticationCertificateResponse `pulumi:"authenticationCertificates"`
	// Autoscale Configuration.
	AutoscaleConfiguration *ApplicationGatewayAutoscaleConfigurationResponse `pulumi:"autoscaleConfiguration"`
	// Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	BackendAddressPools []ApplicationGatewayBackendAddressPoolResponse `pulumi:"backendAddressPools"`
	// Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	BackendHttpSettingsCollection []ApplicationGatewayBackendHttpSettingsResponse `pulumi:"backendHttpSettingsCollection"`
	// Custom error configurations of the application gateway resource.
	CustomErrorConfigurations []ApplicationGatewayCustomErrorResponse `pulumi:"customErrorConfigurations"`
	// Whether FIPS is enabled on the application gateway resource.
	EnableFips *bool `pulumi:"enableFips"`
	// Whether HTTP2 is enabled on the application gateway resource.
	EnableHttp2 *bool `pulumi:"enableHttp2"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Reference to the FirewallPolicy resource.
	FirewallPolicy *SubResourceResponse `pulumi:"firewallPolicy"`
	// If true, associates a firewall policy with an application gateway regardless whether the policy differs from the WAF Config.
	ForceFirewallPolicyAssociation *bool `pulumi:"forceFirewallPolicyAssociation"`
	// Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	FrontendIPConfigurations []ApplicationGatewayFrontendIPConfigurationResponse `pulumi:"frontendIPConfigurations"`
	// Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	FrontendPorts []ApplicationGatewayFrontendPortResponse `pulumi:"frontendPorts"`
	// Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	GatewayIPConfigurations []ApplicationGatewayIPConfigurationResponse `pulumi:"gatewayIPConfigurations"`
	// Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	HttpListeners []ApplicationGatewayHttpListenerResponse `pulumi:"httpListeners"`
	// The identity of the application gateway, if configured.
	Identity *ManagedServiceIdentityResponse `pulumi:"identity"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Operational state of the application gateway resource.
	OperationalState *string `pulumi:"operationalState"`
	// Private Endpoint connections on application gateway.
	PrivateEndpointConnections []ApplicationGatewayPrivateEndpointConnectionResponse `pulumi:"privateEndpointConnections"`
	// PrivateLink configurations on application gateway.
	PrivateLinkConfigurations []ApplicationGatewayPrivateLinkConfigurationResponse `pulumi:"privateLinkConfigurations"`
	// Probes of the application gateway resource.
	Probes []ApplicationGatewayProbeResponse `pulumi:"probes"`
	// The provisioning state of the application gateway resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	RedirectConfigurations []ApplicationGatewayRedirectConfigurationResponse `pulumi:"redirectConfigurations"`
	// Request routing rules of the application gateway resource.
	RequestRoutingRules []ApplicationGatewayRequestRoutingRuleResponse `pulumi:"requestRoutingRules"`
	// The resource GUID property of the application gateway resource.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// Rewrite rules for the application gateway resource.
	RewriteRuleSets []ApplicationGatewayRewriteRuleSetResponse `pulumi:"rewriteRuleSets"`
	// SKU of the application gateway resource.
	Sku *ApplicationGatewaySkuResponse `pulumi:"sku"`
	// SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	SslCertificates []ApplicationGatewaySslCertificateResponse `pulumi:"sslCertificates"`
	// SSL policy of the application gateway resource.
	SslPolicy *ApplicationGatewaySslPolicyResponse `pulumi:"sslPolicy"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	TrustedRootCertificates []ApplicationGatewayTrustedRootCertificateResponse `pulumi:"trustedRootCertificates"`
	// Resource type.
	Type *string `pulumi:"type"`
	// URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	UrlPathMaps []ApplicationGatewayUrlPathMapResponse `pulumi:"urlPathMaps"`
	// Web application firewall configuration.
	WebApplicationFirewallConfiguration *ApplicationGatewayWebApplicationFirewallConfigurationResponse `pulumi:"webApplicationFirewallConfiguration"`
	// A list of availability zones denoting where the resource needs to come from.
	Zones []string `pulumi:"zones"`
}

type ApplicationGatewayState struct {
	// Authentication certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	AuthenticationCertificates ApplicationGatewayAuthenticationCertificateResponseArrayInput
	// Autoscale Configuration.
	AutoscaleConfiguration ApplicationGatewayAutoscaleConfigurationResponsePtrInput
	// Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	BackendAddressPools ApplicationGatewayBackendAddressPoolResponseArrayInput
	// Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	BackendHttpSettingsCollection ApplicationGatewayBackendHttpSettingsResponseArrayInput
	// Custom error configurations of the application gateway resource.
	CustomErrorConfigurations ApplicationGatewayCustomErrorResponseArrayInput
	// Whether FIPS is enabled on the application gateway resource.
	EnableFips pulumi.BoolPtrInput
	// Whether HTTP2 is enabled on the application gateway resource.
	EnableHttp2 pulumi.BoolPtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Reference to the FirewallPolicy resource.
	FirewallPolicy SubResourceResponsePtrInput
	// If true, associates a firewall policy with an application gateway regardless whether the policy differs from the WAF Config.
	ForceFirewallPolicyAssociation pulumi.BoolPtrInput
	// Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	FrontendIPConfigurations ApplicationGatewayFrontendIPConfigurationResponseArrayInput
	// Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	FrontendPorts ApplicationGatewayFrontendPortResponseArrayInput
	// Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	GatewayIPConfigurations ApplicationGatewayIPConfigurationResponseArrayInput
	// Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	HttpListeners ApplicationGatewayHttpListenerResponseArrayInput
	// The identity of the application gateway, if configured.
	Identity ManagedServiceIdentityResponsePtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Operational state of the application gateway resource.
	OperationalState pulumi.StringPtrInput
	// Private Endpoint connections on application gateway.
	PrivateEndpointConnections ApplicationGatewayPrivateEndpointConnectionResponseArrayInput
	// PrivateLink configurations on application gateway.
	PrivateLinkConfigurations ApplicationGatewayPrivateLinkConfigurationResponseArrayInput
	// Probes of the application gateway resource.
	Probes ApplicationGatewayProbeResponseArrayInput
	// The provisioning state of the application gateway resource.
	ProvisioningState pulumi.StringPtrInput
	// Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	RedirectConfigurations ApplicationGatewayRedirectConfigurationResponseArrayInput
	// Request routing rules of the application gateway resource.
	RequestRoutingRules ApplicationGatewayRequestRoutingRuleResponseArrayInput
	// The resource GUID property of the application gateway resource.
	ResourceGuid pulumi.StringPtrInput
	// Rewrite rules for the application gateway resource.
	RewriteRuleSets ApplicationGatewayRewriteRuleSetResponseArrayInput
	// SKU of the application gateway resource.
	Sku ApplicationGatewaySkuResponsePtrInput
	// SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	SslCertificates ApplicationGatewaySslCertificateResponseArrayInput
	// SSL policy of the application gateway resource.
	SslPolicy ApplicationGatewaySslPolicyResponsePtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	TrustedRootCertificates ApplicationGatewayTrustedRootCertificateResponseArrayInput
	// Resource type.
	Type pulumi.StringPtrInput
	// URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	UrlPathMaps ApplicationGatewayUrlPathMapResponseArrayInput
	// Web application firewall configuration.
	WebApplicationFirewallConfiguration ApplicationGatewayWebApplicationFirewallConfigurationResponsePtrInput
	// A list of availability zones denoting where the resource needs to come from.
	Zones pulumi.StringArrayInput
}

func (ApplicationGatewayState) ElementType() reflect.Type {
	return reflect.TypeOf((*applicationGatewayState)(nil)).Elem()
}

type applicationGatewayArgs struct {
	// The name of the application gateway.
	ApplicationGatewayName string `pulumi:"applicationGatewayName"`
	// Authentication certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	AuthenticationCertificates []ApplicationGatewayAuthenticationCertificate `pulumi:"authenticationCertificates"`
	// Autoscale Configuration.
	AutoscaleConfiguration *ApplicationGatewayAutoscaleConfiguration `pulumi:"autoscaleConfiguration"`
	// Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	BackendAddressPools []ApplicationGatewayBackendAddressPool `pulumi:"backendAddressPools"`
	// Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	BackendHttpSettingsCollection []ApplicationGatewayBackendHttpSettings `pulumi:"backendHttpSettingsCollection"`
	// Custom error configurations of the application gateway resource.
	CustomErrorConfigurations []ApplicationGatewayCustomError `pulumi:"customErrorConfigurations"`
	// Whether FIPS is enabled on the application gateway resource.
	EnableFips *bool `pulumi:"enableFips"`
	// Whether HTTP2 is enabled on the application gateway resource.
	EnableHttp2 *bool `pulumi:"enableHttp2"`
	// Reference to the FirewallPolicy resource.
	FirewallPolicy *SubResource `pulumi:"firewallPolicy"`
	// If true, associates a firewall policy with an application gateway regardless whether the policy differs from the WAF Config.
	ForceFirewallPolicyAssociation *bool `pulumi:"forceFirewallPolicyAssociation"`
	// Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	FrontendIPConfigurations []ApplicationGatewayFrontendIPConfiguration `pulumi:"frontendIPConfigurations"`
	// Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	FrontendPorts []ApplicationGatewayFrontendPort `pulumi:"frontendPorts"`
	// Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	GatewayIPConfigurations []ApplicationGatewayIPConfiguration `pulumi:"gatewayIPConfigurations"`
	// Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	HttpListeners []ApplicationGatewayHttpListener `pulumi:"httpListeners"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The identity of the application gateway, if configured.
	Identity *ManagedServiceIdentity `pulumi:"identity"`
	// Resource location.
	Location *string `pulumi:"location"`
	// PrivateLink configurations on application gateway.
	PrivateLinkConfigurations []ApplicationGatewayPrivateLinkConfiguration `pulumi:"privateLinkConfigurations"`
	// Probes of the application gateway resource.
	Probes []ApplicationGatewayProbe `pulumi:"probes"`
	// Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	RedirectConfigurations []ApplicationGatewayRedirectConfiguration `pulumi:"redirectConfigurations"`
	// Request routing rules of the application gateway resource.
	RequestRoutingRules []ApplicationGatewayRequestRoutingRule `pulumi:"requestRoutingRules"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Rewrite rules for the application gateway resource.
	RewriteRuleSets []ApplicationGatewayRewriteRuleSet `pulumi:"rewriteRuleSets"`
	// SKU of the application gateway resource.
	Sku *ApplicationGatewaySku `pulumi:"sku"`
	// SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	SslCertificates []ApplicationGatewaySslCertificate `pulumi:"sslCertificates"`
	// SSL policy of the application gateway resource.
	SslPolicy *ApplicationGatewaySslPolicy `pulumi:"sslPolicy"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	TrustedRootCertificates []ApplicationGatewayTrustedRootCertificate `pulumi:"trustedRootCertificates"`
	// URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	UrlPathMaps []ApplicationGatewayUrlPathMap `pulumi:"urlPathMaps"`
	// Web application firewall configuration.
	WebApplicationFirewallConfiguration *ApplicationGatewayWebApplicationFirewallConfiguration `pulumi:"webApplicationFirewallConfiguration"`
	// A list of availability zones denoting where the resource needs to come from.
	Zones []string `pulumi:"zones"`
}

// The set of arguments for constructing a ApplicationGateway resource.
type ApplicationGatewayArgs struct {
	// The name of the application gateway.
	ApplicationGatewayName pulumi.StringInput
	// Authentication certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	AuthenticationCertificates ApplicationGatewayAuthenticationCertificateArrayInput
	// Autoscale Configuration.
	AutoscaleConfiguration ApplicationGatewayAutoscaleConfigurationPtrInput
	// Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	BackendAddressPools ApplicationGatewayBackendAddressPoolArrayInput
	// Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	BackendHttpSettingsCollection ApplicationGatewayBackendHttpSettingsArrayInput
	// Custom error configurations of the application gateway resource.
	CustomErrorConfigurations ApplicationGatewayCustomErrorArrayInput
	// Whether FIPS is enabled on the application gateway resource.
	EnableFips pulumi.BoolPtrInput
	// Whether HTTP2 is enabled on the application gateway resource.
	EnableHttp2 pulumi.BoolPtrInput
	// Reference to the FirewallPolicy resource.
	FirewallPolicy SubResourcePtrInput
	// If true, associates a firewall policy with an application gateway regardless whether the policy differs from the WAF Config.
	ForceFirewallPolicyAssociation pulumi.BoolPtrInput
	// Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	FrontendIPConfigurations ApplicationGatewayFrontendIPConfigurationArrayInput
	// Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	FrontendPorts ApplicationGatewayFrontendPortArrayInput
	// Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	GatewayIPConfigurations ApplicationGatewayIPConfigurationArrayInput
	// Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	HttpListeners ApplicationGatewayHttpListenerArrayInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// The identity of the application gateway, if configured.
	Identity ManagedServiceIdentityPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// PrivateLink configurations on application gateway.
	PrivateLinkConfigurations ApplicationGatewayPrivateLinkConfigurationArrayInput
	// Probes of the application gateway resource.
	Probes ApplicationGatewayProbeArrayInput
	// Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	RedirectConfigurations ApplicationGatewayRedirectConfigurationArrayInput
	// Request routing rules of the application gateway resource.
	RequestRoutingRules ApplicationGatewayRequestRoutingRuleArrayInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Rewrite rules for the application gateway resource.
	RewriteRuleSets ApplicationGatewayRewriteRuleSetArrayInput
	// SKU of the application gateway resource.
	Sku ApplicationGatewaySkuPtrInput
	// SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	SslCertificates ApplicationGatewaySslCertificateArrayInput
	// SSL policy of the application gateway resource.
	SslPolicy ApplicationGatewaySslPolicyPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	TrustedRootCertificates ApplicationGatewayTrustedRootCertificateArrayInput
	// URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits).
	UrlPathMaps ApplicationGatewayUrlPathMapArrayInput
	// Web application firewall configuration.
	WebApplicationFirewallConfiguration ApplicationGatewayWebApplicationFirewallConfigurationPtrInput
	// A list of availability zones denoting where the resource needs to come from.
	Zones pulumi.StringArrayInput
}

func (ApplicationGatewayArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*applicationGatewayArgs)(nil)).Elem()
}

type ApplicationGatewayInput interface {
	pulumi.Input

	ToApplicationGatewayOutput() ApplicationGatewayOutput
	ToApplicationGatewayOutputWithContext(ctx context.Context) ApplicationGatewayOutput
}

func (*ApplicationGateway) ElementType() reflect.Type {
	return reflect.TypeOf((*ApplicationGateway)(nil))
}

func (i *ApplicationGateway) ToApplicationGatewayOutput() ApplicationGatewayOutput {
	return i.ToApplicationGatewayOutputWithContext(context.Background())
}

func (i *ApplicationGateway) ToApplicationGatewayOutputWithContext(ctx context.Context) ApplicationGatewayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ApplicationGatewayOutput)
}

type ApplicationGatewayOutput struct {
	*pulumi.OutputState
}

func (ApplicationGatewayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ApplicationGateway)(nil))
}

func (o ApplicationGatewayOutput) ToApplicationGatewayOutput() ApplicationGatewayOutput {
	return o
}

func (o ApplicationGatewayOutput) ToApplicationGatewayOutputWithContext(ctx context.Context) ApplicationGatewayOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ApplicationGatewayOutput{})
}
