// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180201

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Inbound NAT rule of the load balancer.
type InboundNatRule struct {
	pulumi.CustomResourceState

	// A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backend IP.
	BackendIPConfiguration NetworkInterfaceIPConfigurationResponseOutput `pulumi:"backendIPConfiguration"`
	// The port used for the internal endpoint. Acceptable values range from 1 to 65535.
	BackendPort pulumi.IntPtrOutput `pulumi:"backendPort"`
	// Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
	EnableFloatingIP pulumi.BoolPtrOutput `pulumi:"enableFloatingIP"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// A reference to frontend IP addresses.
	FrontendIPConfiguration SubResourceResponsePtrOutput `pulumi:"frontendIPConfiguration"`
	// The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
	FrontendPort pulumi.IntPtrOutput `pulumi:"frontendPort"`
	// The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
	IdleTimeoutInMinutes pulumi.IntPtrOutput `pulumi:"idleTimeoutInMinutes"`
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrOutput `pulumi:"name"`
	// The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All'.
	Protocol pulumi.StringPtrOutput `pulumi:"protocol"`
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
}

// NewInboundNatRule registers a new resource with the given unique name, arguments, and options.
func NewInboundNatRule(ctx *pulumi.Context,
	name string, args *InboundNatRuleArgs, opts ...pulumi.ResourceOption) (*InboundNatRule, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.InboundNatRuleName == nil {
		return nil, errors.New("invalid value for required argument 'InboundNatRuleName'")
	}
	if args.LoadBalancerName == nil {
		return nil, errors.New("invalid value for required argument 'LoadBalancerName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170601:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170801:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170901:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171001:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171101:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180101:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:InboundNatRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:InboundNatRule"),
		},
	})
	opts = append(opts, aliases)
	var resource InboundNatRule
	err := ctx.RegisterResource("azure-nextgen:network/v20180201:InboundNatRule", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetInboundNatRule gets an existing InboundNatRule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetInboundNatRule(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *InboundNatRuleState, opts ...pulumi.ResourceOption) (*InboundNatRule, error) {
	var resource InboundNatRule
	err := ctx.ReadResource("azure-nextgen:network/v20180201:InboundNatRule", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering InboundNatRule resources.
type inboundNatRuleState struct {
	// A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backend IP.
	BackendIPConfiguration *NetworkInterfaceIPConfigurationResponse `pulumi:"backendIPConfiguration"`
	// The port used for the internal endpoint. Acceptable values range from 1 to 65535.
	BackendPort *int `pulumi:"backendPort"`
	// Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
	EnableFloatingIP *bool `pulumi:"enableFloatingIP"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// A reference to frontend IP addresses.
	FrontendIPConfiguration *SubResourceResponse `pulumi:"frontendIPConfiguration"`
	// The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
	FrontendPort *int `pulumi:"frontendPort"`
	// The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
	IdleTimeoutInMinutes *int `pulumi:"idleTimeoutInMinutes"`
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All'.
	Protocol *string `pulumi:"protocol"`
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
}

type InboundNatRuleState struct {
	// A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backend IP.
	BackendIPConfiguration NetworkInterfaceIPConfigurationResponsePtrInput
	// The port used for the internal endpoint. Acceptable values range from 1 to 65535.
	BackendPort pulumi.IntPtrInput
	// Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
	EnableFloatingIP pulumi.BoolPtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// A reference to frontend IP addresses.
	FrontendIPConfiguration SubResourceResponsePtrInput
	// The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
	FrontendPort pulumi.IntPtrInput
	// The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
	IdleTimeoutInMinutes pulumi.IntPtrInput
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrInput
	// The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All'.
	Protocol pulumi.StringPtrInput
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrInput
}

func (InboundNatRuleState) ElementType() reflect.Type {
	return reflect.TypeOf((*inboundNatRuleState)(nil)).Elem()
}

type inboundNatRuleArgs struct {
	// The port used for the internal endpoint. Acceptable values range from 1 to 65535.
	BackendPort *int `pulumi:"backendPort"`
	// Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
	EnableFloatingIP *bool `pulumi:"enableFloatingIP"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// A reference to frontend IP addresses.
	FrontendIPConfiguration *SubResource `pulumi:"frontendIPConfiguration"`
	// The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
	FrontendPort *int `pulumi:"frontendPort"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
	IdleTimeoutInMinutes *int `pulumi:"idleTimeoutInMinutes"`
	// The name of the inbound nat rule.
	InboundNatRuleName string `pulumi:"inboundNatRuleName"`
	// The name of the load balancer.
	LoadBalancerName string `pulumi:"loadBalancerName"`
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All'.
	Protocol *string `pulumi:"protocol"`
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a InboundNatRule resource.
type InboundNatRuleArgs struct {
	// The port used for the internal endpoint. Acceptable values range from 1 to 65535.
	BackendPort pulumi.IntPtrInput
	// Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
	EnableFloatingIP pulumi.BoolPtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// A reference to frontend IP addresses.
	FrontendIPConfiguration SubResourcePtrInput
	// The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
	FrontendPort pulumi.IntPtrInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
	IdleTimeoutInMinutes pulumi.IntPtrInput
	// The name of the inbound nat rule.
	InboundNatRuleName pulumi.StringInput
	// The name of the load balancer.
	LoadBalancerName pulumi.StringInput
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrInput
	// The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All'.
	Protocol pulumi.StringPtrInput
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
}

func (InboundNatRuleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*inboundNatRuleArgs)(nil)).Elem()
}

type InboundNatRuleInput interface {
	pulumi.Input

	ToInboundNatRuleOutput() InboundNatRuleOutput
	ToInboundNatRuleOutputWithContext(ctx context.Context) InboundNatRuleOutput
}

func (*InboundNatRule) ElementType() reflect.Type {
	return reflect.TypeOf((*InboundNatRule)(nil))
}

func (i *InboundNatRule) ToInboundNatRuleOutput() InboundNatRuleOutput {
	return i.ToInboundNatRuleOutputWithContext(context.Background())
}

func (i *InboundNatRule) ToInboundNatRuleOutputWithContext(ctx context.Context) InboundNatRuleOutput {
	return pulumi.ToOutputWithContext(ctx, i).(InboundNatRuleOutput)
}

type InboundNatRuleOutput struct {
	*pulumi.OutputState
}

func (InboundNatRuleOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*InboundNatRule)(nil))
}

func (o InboundNatRuleOutput) ToInboundNatRuleOutput() InboundNatRuleOutput {
	return o
}

func (o InboundNatRuleOutput) ToInboundNatRuleOutputWithContext(ctx context.Context) InboundNatRuleOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(InboundNatRuleOutput{})
}
