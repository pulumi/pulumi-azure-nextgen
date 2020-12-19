// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160601

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// ApplicationGateways resource
type ApplicationGateway struct {
	pulumi.CustomResourceState

	// Authentication certificates of application gateway resource
	AuthenticationCertificates ApplicationGatewayAuthenticationCertificateResponseArrayOutput `pulumi:"authenticationCertificates"`
	// Backend address pool of application gateway resource
	BackendAddressPools ApplicationGatewayBackendAddressPoolResponseArrayOutput `pulumi:"backendAddressPools"`
	// Backend http settings of application gateway resource
	BackendHttpSettingsCollection ApplicationGatewayBackendHttpSettingsResponseArrayOutput `pulumi:"backendHttpSettingsCollection"`
	// A unique read-only string that changes whenever the resource is updated
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// Frontend IP addresses of application gateway resource
	FrontendIPConfigurations ApplicationGatewayFrontendIPConfigurationResponseArrayOutput `pulumi:"frontendIPConfigurations"`
	// Frontend ports of application gateway resource
	FrontendPorts ApplicationGatewayFrontendPortResponseArrayOutput `pulumi:"frontendPorts"`
	// Subnets of application gateway resource
	GatewayIPConfigurations ApplicationGatewayIPConfigurationResponseArrayOutput `pulumi:"gatewayIPConfigurations"`
	// HTTP listeners of application gateway resource
	HttpListeners ApplicationGatewayHttpListenerResponseArrayOutput `pulumi:"httpListeners"`
	// Resource location
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Operational state of application gateway resource
	OperationalState pulumi.StringOutput `pulumi:"operationalState"`
	// Probes of application gateway resource
	Probes ApplicationGatewayProbeResponseArrayOutput `pulumi:"probes"`
	// Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// Request routing rules of application gateway resource
	RequestRoutingRules ApplicationGatewayRequestRoutingRuleResponseArrayOutput `pulumi:"requestRoutingRules"`
	// Resource guid property of the ApplicationGateway resource
	ResourceGuid pulumi.StringPtrOutput `pulumi:"resourceGuid"`
	// Sku of application gateway resource
	Sku ApplicationGatewaySkuResponsePtrOutput `pulumi:"sku"`
	// SSL certificates of application gateway resource
	SslCertificates ApplicationGatewaySslCertificateResponseArrayOutput `pulumi:"sslCertificates"`
	// SSL policy of application gateway resource
	SslPolicy ApplicationGatewaySslPolicyResponsePtrOutput `pulumi:"sslPolicy"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// URL path map of application gateway resource
	UrlPathMaps ApplicationGatewayUrlPathMapResponseArrayOutput `pulumi:"urlPathMaps"`
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
			Type: pulumi.String("azure-nextgen:network/v20200501:ApplicationGateway"),
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
	err := ctx.RegisterResource("azure-nextgen:network/v20160601:ApplicationGateway", name, args, &resource, opts...)
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
	err := ctx.ReadResource("azure-nextgen:network/v20160601:ApplicationGateway", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ApplicationGateway resources.
type applicationGatewayState struct {
	// Authentication certificates of application gateway resource
	AuthenticationCertificates []ApplicationGatewayAuthenticationCertificateResponse `pulumi:"authenticationCertificates"`
	// Backend address pool of application gateway resource
	BackendAddressPools []ApplicationGatewayBackendAddressPoolResponse `pulumi:"backendAddressPools"`
	// Backend http settings of application gateway resource
	BackendHttpSettingsCollection []ApplicationGatewayBackendHttpSettingsResponse `pulumi:"backendHttpSettingsCollection"`
	// A unique read-only string that changes whenever the resource is updated
	Etag *string `pulumi:"etag"`
	// Frontend IP addresses of application gateway resource
	FrontendIPConfigurations []ApplicationGatewayFrontendIPConfigurationResponse `pulumi:"frontendIPConfigurations"`
	// Frontend ports of application gateway resource
	FrontendPorts []ApplicationGatewayFrontendPortResponse `pulumi:"frontendPorts"`
	// Subnets of application gateway resource
	GatewayIPConfigurations []ApplicationGatewayIPConfigurationResponse `pulumi:"gatewayIPConfigurations"`
	// HTTP listeners of application gateway resource
	HttpListeners []ApplicationGatewayHttpListenerResponse `pulumi:"httpListeners"`
	// Resource location
	Location *string `pulumi:"location"`
	// Resource name
	Name *string `pulumi:"name"`
	// Operational state of application gateway resource
	OperationalState *string `pulumi:"operationalState"`
	// Probes of application gateway resource
	Probes []ApplicationGatewayProbeResponse `pulumi:"probes"`
	// Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed
	ProvisioningState *string `pulumi:"provisioningState"`
	// Request routing rules of application gateway resource
	RequestRoutingRules []ApplicationGatewayRequestRoutingRuleResponse `pulumi:"requestRoutingRules"`
	// Resource guid property of the ApplicationGateway resource
	ResourceGuid *string `pulumi:"resourceGuid"`
	// Sku of application gateway resource
	Sku *ApplicationGatewaySkuResponse `pulumi:"sku"`
	// SSL certificates of application gateway resource
	SslCertificates []ApplicationGatewaySslCertificateResponse `pulumi:"sslCertificates"`
	// SSL policy of application gateway resource
	SslPolicy *ApplicationGatewaySslPolicyResponse `pulumi:"sslPolicy"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
	// URL path map of application gateway resource
	UrlPathMaps []ApplicationGatewayUrlPathMapResponse `pulumi:"urlPathMaps"`
}

type ApplicationGatewayState struct {
	// Authentication certificates of application gateway resource
	AuthenticationCertificates ApplicationGatewayAuthenticationCertificateResponseArrayInput
	// Backend address pool of application gateway resource
	BackendAddressPools ApplicationGatewayBackendAddressPoolResponseArrayInput
	// Backend http settings of application gateway resource
	BackendHttpSettingsCollection ApplicationGatewayBackendHttpSettingsResponseArrayInput
	// A unique read-only string that changes whenever the resource is updated
	Etag pulumi.StringPtrInput
	// Frontend IP addresses of application gateway resource
	FrontendIPConfigurations ApplicationGatewayFrontendIPConfigurationResponseArrayInput
	// Frontend ports of application gateway resource
	FrontendPorts ApplicationGatewayFrontendPortResponseArrayInput
	// Subnets of application gateway resource
	GatewayIPConfigurations ApplicationGatewayIPConfigurationResponseArrayInput
	// HTTP listeners of application gateway resource
	HttpListeners ApplicationGatewayHttpListenerResponseArrayInput
	// Resource location
	Location pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// Operational state of application gateway resource
	OperationalState pulumi.StringPtrInput
	// Probes of application gateway resource
	Probes ApplicationGatewayProbeResponseArrayInput
	// Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed
	ProvisioningState pulumi.StringPtrInput
	// Request routing rules of application gateway resource
	RequestRoutingRules ApplicationGatewayRequestRoutingRuleResponseArrayInput
	// Resource guid property of the ApplicationGateway resource
	ResourceGuid pulumi.StringPtrInput
	// Sku of application gateway resource
	Sku ApplicationGatewaySkuResponsePtrInput
	// SSL certificates of application gateway resource
	SslCertificates ApplicationGatewaySslCertificateResponseArrayInput
	// SSL policy of application gateway resource
	SslPolicy ApplicationGatewaySslPolicyResponsePtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
	// URL path map of application gateway resource
	UrlPathMaps ApplicationGatewayUrlPathMapResponseArrayInput
}

func (ApplicationGatewayState) ElementType() reflect.Type {
	return reflect.TypeOf((*applicationGatewayState)(nil)).Elem()
}

type applicationGatewayArgs struct {
	// The name of the ApplicationGateway.
	ApplicationGatewayName string `pulumi:"applicationGatewayName"`
	// Authentication certificates of application gateway resource
	AuthenticationCertificates []ApplicationGatewayAuthenticationCertificate `pulumi:"authenticationCertificates"`
	// Backend address pool of application gateway resource
	BackendAddressPools []ApplicationGatewayBackendAddressPool `pulumi:"backendAddressPools"`
	// Backend http settings of application gateway resource
	BackendHttpSettingsCollection []ApplicationGatewayBackendHttpSettings `pulumi:"backendHttpSettingsCollection"`
	// A unique read-only string that changes whenever the resource is updated
	Etag *string `pulumi:"etag"`
	// Frontend IP addresses of application gateway resource
	FrontendIPConfigurations []ApplicationGatewayFrontendIPConfiguration `pulumi:"frontendIPConfigurations"`
	// Frontend ports of application gateway resource
	FrontendPorts []ApplicationGatewayFrontendPort `pulumi:"frontendPorts"`
	// Subnets of application gateway resource
	GatewayIPConfigurations []ApplicationGatewayIPConfiguration `pulumi:"gatewayIPConfigurations"`
	// HTTP listeners of application gateway resource
	HttpListeners []ApplicationGatewayHttpListener `pulumi:"httpListeners"`
	// Resource Id
	Id *string `pulumi:"id"`
	// Resource location
	Location *string `pulumi:"location"`
	// Probes of application gateway resource
	Probes []ApplicationGatewayProbe `pulumi:"probes"`
	// Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed
	ProvisioningState *string `pulumi:"provisioningState"`
	// Request routing rules of application gateway resource
	RequestRoutingRules []ApplicationGatewayRequestRoutingRule `pulumi:"requestRoutingRules"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource guid property of the ApplicationGateway resource
	ResourceGuid *string `pulumi:"resourceGuid"`
	// Sku of application gateway resource
	Sku *ApplicationGatewaySku `pulumi:"sku"`
	// SSL certificates of application gateway resource
	SslCertificates []ApplicationGatewaySslCertificate `pulumi:"sslCertificates"`
	// SSL policy of application gateway resource
	SslPolicy *ApplicationGatewaySslPolicy `pulumi:"sslPolicy"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// URL path map of application gateway resource
	UrlPathMaps []ApplicationGatewayUrlPathMap `pulumi:"urlPathMaps"`
}

// The set of arguments for constructing a ApplicationGateway resource.
type ApplicationGatewayArgs struct {
	// The name of the ApplicationGateway.
	ApplicationGatewayName pulumi.StringInput
	// Authentication certificates of application gateway resource
	AuthenticationCertificates ApplicationGatewayAuthenticationCertificateArrayInput
	// Backend address pool of application gateway resource
	BackendAddressPools ApplicationGatewayBackendAddressPoolArrayInput
	// Backend http settings of application gateway resource
	BackendHttpSettingsCollection ApplicationGatewayBackendHttpSettingsArrayInput
	// A unique read-only string that changes whenever the resource is updated
	Etag pulumi.StringPtrInput
	// Frontend IP addresses of application gateway resource
	FrontendIPConfigurations ApplicationGatewayFrontendIPConfigurationArrayInput
	// Frontend ports of application gateway resource
	FrontendPorts ApplicationGatewayFrontendPortArrayInput
	// Subnets of application gateway resource
	GatewayIPConfigurations ApplicationGatewayIPConfigurationArrayInput
	// HTTP listeners of application gateway resource
	HttpListeners ApplicationGatewayHttpListenerArrayInput
	// Resource Id
	Id pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// Probes of application gateway resource
	Probes ApplicationGatewayProbeArrayInput
	// Provisioning state of the ApplicationGateway resource Updating/Deleting/Failed
	ProvisioningState pulumi.StringPtrInput
	// Request routing rules of application gateway resource
	RequestRoutingRules ApplicationGatewayRequestRoutingRuleArrayInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Resource guid property of the ApplicationGateway resource
	ResourceGuid pulumi.StringPtrInput
	// Sku of application gateway resource
	Sku ApplicationGatewaySkuPtrInput
	// SSL certificates of application gateway resource
	SslCertificates ApplicationGatewaySslCertificateArrayInput
	// SSL policy of application gateway resource
	SslPolicy ApplicationGatewaySslPolicyPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// URL path map of application gateway resource
	UrlPathMaps ApplicationGatewayUrlPathMapArrayInput
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
