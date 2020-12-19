// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191101preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The resource representation of a service in a service topology.
type Service struct {
	pulumi.CustomResourceState

	// The geo-location where the resource lives
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The Azure location to which the resources in the service belong to or should be deployed to.
	TargetLocation pulumi.StringOutput `pulumi:"targetLocation"`
	// The subscription to which the resources in the service belong to or should be deployed to.
	TargetSubscriptionId pulumi.StringOutput `pulumi:"targetSubscriptionId"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewService registers a new resource with the given unique name, arguments, and options.
func NewService(ctx *pulumi.Context,
	name string, args *ServiceArgs, opts ...pulumi.ResourceOption) (*Service, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServiceName == nil {
		return nil, errors.New("invalid value for required argument 'ServiceName'")
	}
	if args.ServiceTopologyName == nil {
		return nil, errors.New("invalid value for required argument 'ServiceTopologyName'")
	}
	if args.TargetLocation == nil {
		return nil, errors.New("invalid value for required argument 'TargetLocation'")
	}
	if args.TargetSubscriptionId == nil {
		return nil, errors.New("invalid value for required argument 'TargetSubscriptionId'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:deploymentmanager/v20180901preview:Service"),
		},
	})
	opts = append(opts, aliases)
	var resource Service
	err := ctx.RegisterResource("azure-nextgen:deploymentmanager/v20191101preview:Service", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetService gets an existing Service resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetService(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ServiceState, opts ...pulumi.ResourceOption) (*Service, error) {
	var resource Service
	err := ctx.ReadResource("azure-nextgen:deploymentmanager/v20191101preview:Service", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Service resources.
type serviceState struct {
	// The geo-location where the resource lives
	Location *string `pulumi:"location"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The Azure location to which the resources in the service belong to or should be deployed to.
	TargetLocation *string `pulumi:"targetLocation"`
	// The subscription to which the resources in the service belong to or should be deployed to.
	TargetSubscriptionId *string `pulumi:"targetSubscriptionId"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
}

type ServiceState struct {
	// The geo-location where the resource lives
	Location pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The Azure location to which the resources in the service belong to or should be deployed to.
	TargetLocation pulumi.StringPtrInput
	// The subscription to which the resources in the service belong to or should be deployed to.
	TargetSubscriptionId pulumi.StringPtrInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
}

func (ServiceState) ElementType() reflect.Type {
	return reflect.TypeOf((*serviceState)(nil)).Elem()
}

type serviceArgs struct {
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the service resource.
	ServiceName string `pulumi:"serviceName"`
	// The name of the service topology .
	ServiceTopologyName string `pulumi:"serviceTopologyName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The Azure location to which the resources in the service belong to or should be deployed to.
	TargetLocation string `pulumi:"targetLocation"`
	// The subscription to which the resources in the service belong to or should be deployed to.
	TargetSubscriptionId string `pulumi:"targetSubscriptionId"`
}

// The set of arguments for constructing a Service resource.
type ServiceArgs struct {
	// The geo-location where the resource lives
	Location pulumi.StringInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// The name of the service resource.
	ServiceName pulumi.StringInput
	// The name of the service topology .
	ServiceTopologyName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The Azure location to which the resources in the service belong to or should be deployed to.
	TargetLocation pulumi.StringInput
	// The subscription to which the resources in the service belong to or should be deployed to.
	TargetSubscriptionId pulumi.StringInput
}

func (ServiceArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*serviceArgs)(nil)).Elem()
}

type ServiceInput interface {
	pulumi.Input

	ToServiceOutput() ServiceOutput
	ToServiceOutputWithContext(ctx context.Context) ServiceOutput
}

func (*Service) ElementType() reflect.Type {
	return reflect.TypeOf((*Service)(nil))
}

func (i *Service) ToServiceOutput() ServiceOutput {
	return i.ToServiceOutputWithContext(context.Background())
}

func (i *Service) ToServiceOutputWithContext(ctx context.Context) ServiceOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServiceOutput)
}

type ServiceOutput struct {
	*pulumi.OutputState
}

func (ServiceOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Service)(nil))
}

func (o ServiceOutput) ToServiceOutput() ServiceOutput {
	return o
}

func (o ServiceOutput) ToServiceOutputWithContext(ctx context.Context) ServiceOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ServiceOutput{})
}
