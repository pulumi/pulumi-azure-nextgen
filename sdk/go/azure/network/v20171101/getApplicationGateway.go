// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20171101

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupApplicationGateway(ctx *pulumi.Context, args *LookupApplicationGatewayArgs, opts ...pulumi.InvokeOption) (*LookupApplicationGatewayResult, error) {
	var rv LookupApplicationGatewayResult
	err := ctx.Invoke("azure-nextgen:network/v20171101:getApplicationGateway", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupApplicationGatewayArgs struct {
	// The name of the application gateway.
	ApplicationGatewayName string `pulumi:"applicationGatewayName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Application gateway resource
type LookupApplicationGatewayResult struct {
	// Authentication certificates of the application gateway resource.
	AuthenticationCertificates []ApplicationGatewayAuthenticationCertificateResponse `pulumi:"authenticationCertificates"`
	// Backend address pool of the application gateway resource.
	BackendAddressPools []ApplicationGatewayBackendAddressPoolResponse `pulumi:"backendAddressPools"`
	// Backend http settings of the application gateway resource.
	BackendHttpSettingsCollection []ApplicationGatewayBackendHttpSettingsResponse `pulumi:"backendHttpSettingsCollection"`
	// Whether HTTP2 is enabled on the application gateway resource.
	EnableHttp2 *bool `pulumi:"enableHttp2"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Frontend IP addresses of the application gateway resource.
	FrontendIPConfigurations []ApplicationGatewayFrontendIPConfigurationResponse `pulumi:"frontendIPConfigurations"`
	// Frontend ports of the application gateway resource.
	FrontendPorts []ApplicationGatewayFrontendPortResponse `pulumi:"frontendPorts"`
	// Subnets of application the gateway resource.
	GatewayIPConfigurations []ApplicationGatewayIPConfigurationResponse `pulumi:"gatewayIPConfigurations"`
	// Http listeners of the application gateway resource.
	HttpListeners []ApplicationGatewayHttpListenerResponse `pulumi:"httpListeners"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// Operational state of the application gateway resource.
	OperationalState string `pulumi:"operationalState"`
	// Probes of the application gateway resource.
	Probes []ApplicationGatewayProbeResponse `pulumi:"probes"`
	// Provisioning state of the application gateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Redirect configurations of the application gateway resource.
	RedirectConfigurations []ApplicationGatewayRedirectConfigurationResponse `pulumi:"redirectConfigurations"`
	// Request routing rules of the application gateway resource.
	RequestRoutingRules []ApplicationGatewayRequestRoutingRuleResponse `pulumi:"requestRoutingRules"`
	// Resource GUID property of the application gateway resource.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// SKU of the application gateway resource.
	Sku *ApplicationGatewaySkuResponse `pulumi:"sku"`
	// SSL certificates of the application gateway resource.
	SslCertificates []ApplicationGatewaySslCertificateResponse `pulumi:"sslCertificates"`
	// SSL policy of the application gateway resource.
	SslPolicy *ApplicationGatewaySslPolicyResponse `pulumi:"sslPolicy"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
	// URL path map of the application gateway resource.
	UrlPathMaps []ApplicationGatewayUrlPathMapResponse `pulumi:"urlPathMaps"`
	// Web application firewall configuration.
	WebApplicationFirewallConfiguration *ApplicationGatewayWebApplicationFirewallConfigurationResponse `pulumi:"webApplicationFirewallConfiguration"`
}
