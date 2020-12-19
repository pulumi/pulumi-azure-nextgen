// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190401

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Dedicated cloud service model
type DedicatedCloudService struct {
	pulumi.CustomResourceState

	// gateway Subnet for the account. It will collect the subnet address and always treat it as /28
	GatewaySubnet pulumi.StringOutput `pulumi:"gatewaySubnet"`
	// indicates whether account onboarded or not in a given region
	IsAccountOnboarded pulumi.StringOutput `pulumi:"isAccountOnboarded"`
	// Azure region
	Location pulumi.StringOutput `pulumi:"location"`
	// {dedicatedCloudServiceName}
	Name pulumi.StringOutput `pulumi:"name"`
	// total nodes purchased
	Nodes pulumi.IntOutput `pulumi:"nodes"`
	// link to a service management web portal
	ServiceURL pulumi.StringOutput `pulumi:"serviceURL"`
	// The list of tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// {resourceProviderNamespace}/{resourceType}
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewDedicatedCloudService registers a new resource with the given unique name, arguments, and options.
func NewDedicatedCloudService(ctx *pulumi.Context,
	name string, args *DedicatedCloudServiceArgs, opts ...pulumi.ResourceOption) (*DedicatedCloudService, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.DedicatedCloudServiceName == nil {
		return nil, errors.New("invalid value for required argument 'DedicatedCloudServiceName'")
	}
	if args.GatewaySubnet == nil {
		return nil, errors.New("invalid value for required argument 'GatewaySubnet'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:vmwarecloudsimple/latest:DedicatedCloudService"),
		},
	})
	opts = append(opts, aliases)
	var resource DedicatedCloudService
	err := ctx.RegisterResource("azure-nextgen:vmwarecloudsimple/v20190401:DedicatedCloudService", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDedicatedCloudService gets an existing DedicatedCloudService resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDedicatedCloudService(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DedicatedCloudServiceState, opts ...pulumi.ResourceOption) (*DedicatedCloudService, error) {
	var resource DedicatedCloudService
	err := ctx.ReadResource("azure-nextgen:vmwarecloudsimple/v20190401:DedicatedCloudService", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DedicatedCloudService resources.
type dedicatedCloudServiceState struct {
	// gateway Subnet for the account. It will collect the subnet address and always treat it as /28
	GatewaySubnet *string `pulumi:"gatewaySubnet"`
	// indicates whether account onboarded or not in a given region
	IsAccountOnboarded *string `pulumi:"isAccountOnboarded"`
	// Azure region
	Location *string `pulumi:"location"`
	// {dedicatedCloudServiceName}
	Name *string `pulumi:"name"`
	// total nodes purchased
	Nodes *int `pulumi:"nodes"`
	// link to a service management web portal
	ServiceURL *string `pulumi:"serviceURL"`
	// The list of tags
	Tags map[string]string `pulumi:"tags"`
	// {resourceProviderNamespace}/{resourceType}
	Type *string `pulumi:"type"`
}

type DedicatedCloudServiceState struct {
	// gateway Subnet for the account. It will collect the subnet address and always treat it as /28
	GatewaySubnet pulumi.StringPtrInput
	// indicates whether account onboarded or not in a given region
	IsAccountOnboarded pulumi.StringPtrInput
	// Azure region
	Location pulumi.StringPtrInput
	// {dedicatedCloudServiceName}
	Name pulumi.StringPtrInput
	// total nodes purchased
	Nodes pulumi.IntPtrInput
	// link to a service management web portal
	ServiceURL pulumi.StringPtrInput
	// The list of tags
	Tags pulumi.StringMapInput
	// {resourceProviderNamespace}/{resourceType}
	Type pulumi.StringPtrInput
}

func (DedicatedCloudServiceState) ElementType() reflect.Type {
	return reflect.TypeOf((*dedicatedCloudServiceState)(nil)).Elem()
}

type dedicatedCloudServiceArgs struct {
	// dedicated cloud Service name
	DedicatedCloudServiceName string `pulumi:"dedicatedCloudServiceName"`
	// gateway Subnet for the account. It will collect the subnet address and always treat it as /28
	GatewaySubnet string `pulumi:"gatewaySubnet"`
	// Azure region
	Location string `pulumi:"location"`
	// The name of the resource group
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The list of tags
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a DedicatedCloudService resource.
type DedicatedCloudServiceArgs struct {
	// dedicated cloud Service name
	DedicatedCloudServiceName pulumi.StringInput
	// gateway Subnet for the account. It will collect the subnet address and always treat it as /28
	GatewaySubnet pulumi.StringInput
	// Azure region
	Location pulumi.StringInput
	// The name of the resource group
	ResourceGroupName pulumi.StringInput
	// The list of tags
	Tags pulumi.StringMapInput
}

func (DedicatedCloudServiceArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*dedicatedCloudServiceArgs)(nil)).Elem()
}

type DedicatedCloudServiceInput interface {
	pulumi.Input

	ToDedicatedCloudServiceOutput() DedicatedCloudServiceOutput
	ToDedicatedCloudServiceOutputWithContext(ctx context.Context) DedicatedCloudServiceOutput
}

func (*DedicatedCloudService) ElementType() reflect.Type {
	return reflect.TypeOf((*DedicatedCloudService)(nil))
}

func (i *DedicatedCloudService) ToDedicatedCloudServiceOutput() DedicatedCloudServiceOutput {
	return i.ToDedicatedCloudServiceOutputWithContext(context.Background())
}

func (i *DedicatedCloudService) ToDedicatedCloudServiceOutputWithContext(ctx context.Context) DedicatedCloudServiceOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DedicatedCloudServiceOutput)
}

type DedicatedCloudServiceOutput struct {
	*pulumi.OutputState
}

func (DedicatedCloudServiceOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DedicatedCloudService)(nil))
}

func (o DedicatedCloudServiceOutput) ToDedicatedCloudServiceOutput() DedicatedCloudServiceOutput {
	return o
}

func (o DedicatedCloudServiceOutput) ToDedicatedCloudServiceOutputWithContext(ctx context.Context) DedicatedCloudServiceOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DedicatedCloudServiceOutput{})
}
