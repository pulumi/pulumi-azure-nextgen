// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150501preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// LoadBalancer resource
type LoadBalancer struct {
	pulumi.CustomResourceState

	// Gets or sets Pools of backend IP addresses
	BackendAddressPools BackendAddressPoolResponseArrayOutput `pulumi:"backendAddressPools"`
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// Gets or sets frontend IP addresses of the load balancer
	FrontendIPConfigurations FrontendIpConfigurationResponseArrayOutput `pulumi:"frontendIPConfigurations"`
	// Gets or sets inbound NAT pools
	InboundNatPools InboundNatPoolResponseArrayOutput `pulumi:"inboundNatPools"`
	// Gets or sets list of inbound rules
	InboundNatRules InboundNatRuleResponseArrayOutput `pulumi:"inboundNatRules"`
	// Gets or sets load balancing rules
	LoadBalancingRules LoadBalancingRuleResponseArrayOutput `pulumi:"loadBalancingRules"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Gets or sets outbound NAT rules
	OutboundNatRules OutboundNatRuleResponseArrayOutput `pulumi:"outboundNatRules"`
	// Gets or sets list of Load balancer probes
	Probes ProbeResponseArrayOutput `pulumi:"probes"`
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// Gets or sets resource guid property of the Load balancer resource
	ResourceGuid pulumi.StringPtrOutput `pulumi:"resourceGuid"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewLoadBalancer registers a new resource with the given unique name, arguments, and options.
func NewLoadBalancer(ctx *pulumi.Context,
	name string, args *LoadBalancerArgs, opts ...pulumi.ResourceOption) (*LoadBalancer, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.LoadBalancerName == nil {
		return nil, errors.New("invalid value for required argument 'LoadBalancerName'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20150615:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160330:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160601:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160901:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20161201:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170301:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170601:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170801:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170901:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171001:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171101:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180101:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180201:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:LoadBalancer"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:LoadBalancer"),
		},
	})
	opts = append(opts, aliases)
	var resource LoadBalancer
	err := ctx.RegisterResource("azure-nextgen:network/v20150501preview:LoadBalancer", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetLoadBalancer gets an existing LoadBalancer resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetLoadBalancer(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *LoadBalancerState, opts ...pulumi.ResourceOption) (*LoadBalancer, error) {
	var resource LoadBalancer
	err := ctx.ReadResource("azure-nextgen:network/v20150501preview:LoadBalancer", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering LoadBalancer resources.
type loadBalancerState struct {
	// Gets or sets Pools of backend IP addresses
	BackendAddressPools []BackendAddressPoolResponse `pulumi:"backendAddressPools"`
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag *string `pulumi:"etag"`
	// Gets or sets frontend IP addresses of the load balancer
	FrontendIPConfigurations []FrontendIpConfigurationResponse `pulumi:"frontendIPConfigurations"`
	// Gets or sets inbound NAT pools
	InboundNatPools []InboundNatPoolResponse `pulumi:"inboundNatPools"`
	// Gets or sets list of inbound rules
	InboundNatRules []InboundNatRuleResponse `pulumi:"inboundNatRules"`
	// Gets or sets load balancing rules
	LoadBalancingRules []LoadBalancingRuleResponse `pulumi:"loadBalancingRules"`
	// Resource location
	Location *string `pulumi:"location"`
	// Resource name
	Name *string `pulumi:"name"`
	// Gets or sets outbound NAT rules
	OutboundNatRules []OutboundNatRuleResponse `pulumi:"outboundNatRules"`
	// Gets or sets list of Load balancer probes
	Probes []ProbeResponse `pulumi:"probes"`
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState *string `pulumi:"provisioningState"`
	// Gets or sets resource guid property of the Load balancer resource
	ResourceGuid *string `pulumi:"resourceGuid"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
}

type LoadBalancerState struct {
	// Gets or sets Pools of backend IP addresses
	BackendAddressPools BackendAddressPoolResponseArrayInput
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag pulumi.StringPtrInput
	// Gets or sets frontend IP addresses of the load balancer
	FrontendIPConfigurations FrontendIpConfigurationResponseArrayInput
	// Gets or sets inbound NAT pools
	InboundNatPools InboundNatPoolResponseArrayInput
	// Gets or sets list of inbound rules
	InboundNatRules InboundNatRuleResponseArrayInput
	// Gets or sets load balancing rules
	LoadBalancingRules LoadBalancingRuleResponseArrayInput
	// Resource location
	Location pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// Gets or sets outbound NAT rules
	OutboundNatRules OutboundNatRuleResponseArrayInput
	// Gets or sets list of Load balancer probes
	Probes ProbeResponseArrayInput
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState pulumi.StringPtrInput
	// Gets or sets resource guid property of the Load balancer resource
	ResourceGuid pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (LoadBalancerState) ElementType() reflect.Type {
	return reflect.TypeOf((*loadBalancerState)(nil)).Elem()
}

type loadBalancerArgs struct {
	// Gets or sets Pools of backend IP addresses
	BackendAddressPools []BackendAddressPool `pulumi:"backendAddressPools"`
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag *string `pulumi:"etag"`
	// Gets or sets frontend IP addresses of the load balancer
	FrontendIPConfigurations []FrontendIpConfiguration `pulumi:"frontendIPConfigurations"`
	// Gets or sets inbound NAT pools
	InboundNatPools []InboundNatPool `pulumi:"inboundNatPools"`
	// Gets or sets list of inbound rules
	InboundNatRules []InboundNatRule `pulumi:"inboundNatRules"`
	// The name of the loadBalancer.
	LoadBalancerName string `pulumi:"loadBalancerName"`
	// Gets or sets load balancing rules
	LoadBalancingRules []LoadBalancingRule `pulumi:"loadBalancingRules"`
	// Resource location
	Location string `pulumi:"location"`
	// Gets or sets outbound NAT rules
	OutboundNatRules []OutboundNatRule `pulumi:"outboundNatRules"`
	// Gets or sets list of Load balancer probes
	Probes []Probe `pulumi:"probes"`
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState *string `pulumi:"provisioningState"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Gets or sets resource guid property of the Load balancer resource
	ResourceGuid *string `pulumi:"resourceGuid"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a LoadBalancer resource.
type LoadBalancerArgs struct {
	// Gets or sets Pools of backend IP addresses
	BackendAddressPools BackendAddressPoolArrayInput
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag pulumi.StringPtrInput
	// Gets or sets frontend IP addresses of the load balancer
	FrontendIPConfigurations FrontendIpConfigurationArrayInput
	// Gets or sets inbound NAT pools
	InboundNatPools InboundNatPoolArrayInput
	// Gets or sets list of inbound rules
	InboundNatRules InboundNatRuleArrayInput
	// The name of the loadBalancer.
	LoadBalancerName pulumi.StringInput
	// Gets or sets load balancing rules
	LoadBalancingRules LoadBalancingRuleArrayInput
	// Resource location
	Location pulumi.StringInput
	// Gets or sets outbound NAT rules
	OutboundNatRules OutboundNatRuleArrayInput
	// Gets or sets list of Load balancer probes
	Probes ProbeArrayInput
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Gets or sets resource guid property of the Load balancer resource
	ResourceGuid pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
}

func (LoadBalancerArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*loadBalancerArgs)(nil)).Elem()
}

type LoadBalancerInput interface {
	pulumi.Input

	ToLoadBalancerOutput() LoadBalancerOutput
	ToLoadBalancerOutputWithContext(ctx context.Context) LoadBalancerOutput
}

func (LoadBalancer) ElementType() reflect.Type {
	return reflect.TypeOf((*LoadBalancer)(nil)).Elem()
}

func (i LoadBalancer) ToLoadBalancerOutput() LoadBalancerOutput {
	return i.ToLoadBalancerOutputWithContext(context.Background())
}

func (i LoadBalancer) ToLoadBalancerOutputWithContext(ctx context.Context) LoadBalancerOutput {
	return pulumi.ToOutputWithContext(ctx, i).(LoadBalancerOutput)
}

type LoadBalancerOutput struct {
	*pulumi.OutputState
}

func (LoadBalancerOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*LoadBalancerOutput)(nil)).Elem()
}

func (o LoadBalancerOutput) ToLoadBalancerOutput() LoadBalancerOutput {
	return o
}

func (o LoadBalancerOutput) ToLoadBalancerOutputWithContext(ctx context.Context) LoadBalancerOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(LoadBalancerOutput{})
}
