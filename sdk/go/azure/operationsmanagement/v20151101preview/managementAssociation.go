// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20151101preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The container for solution.
type ManagementAssociation struct {
	pulumi.CustomResourceState

	// Resource location
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Properties for ManagementAssociation object supported by the OperationsManagement resource provider.
	Properties ManagementAssociationPropertiesResponseOutput `pulumi:"properties"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewManagementAssociation registers a new resource with the given unique name, arguments, and options.
func NewManagementAssociation(ctx *pulumi.Context,
	name string, args *ManagementAssociationArgs, opts ...pulumi.ResourceOption) (*ManagementAssociation, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ManagementAssociationName == nil {
		return nil, errors.New("invalid value for required argument 'ManagementAssociationName'")
	}
	if args.ProviderName == nil {
		return nil, errors.New("invalid value for required argument 'ProviderName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ResourceName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceName'")
	}
	if args.ResourceType == nil {
		return nil, errors.New("invalid value for required argument 'ResourceType'")
	}
	var resource ManagementAssociation
	err := ctx.RegisterResource("azure-nextgen:operationsmanagement/v20151101preview:ManagementAssociation", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetManagementAssociation gets an existing ManagementAssociation resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetManagementAssociation(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ManagementAssociationState, opts ...pulumi.ResourceOption) (*ManagementAssociation, error) {
	var resource ManagementAssociation
	err := ctx.ReadResource("azure-nextgen:operationsmanagement/v20151101preview:ManagementAssociation", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ManagementAssociation resources.
type managementAssociationState struct {
	// Resource location
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Properties for ManagementAssociation object supported by the OperationsManagement resource provider.
	Properties *ManagementAssociationPropertiesResponse `pulumi:"properties"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type ManagementAssociationState struct {
	// Resource location
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Properties for ManagementAssociation object supported by the OperationsManagement resource provider.
	Properties ManagementAssociationPropertiesResponsePtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (ManagementAssociationState) ElementType() reflect.Type {
	return reflect.TypeOf((*managementAssociationState)(nil)).Elem()
}

type managementAssociationArgs struct {
	// Resource location
	Location *string `pulumi:"location"`
	// User ManagementAssociation Name.
	ManagementAssociationName string `pulumi:"managementAssociationName"`
	// Properties for ManagementAssociation object supported by the OperationsManagement resource provider.
	Properties *ManagementAssociationProperties `pulumi:"properties"`
	// Provider name for the parent resource.
	ProviderName string `pulumi:"providerName"`
	// The name of the resource group to get. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Parent resource name.
	ResourceName string `pulumi:"resourceName"`
	// Resource type for the parent resource
	ResourceType string `pulumi:"resourceType"`
}

// The set of arguments for constructing a ManagementAssociation resource.
type ManagementAssociationArgs struct {
	// Resource location
	Location pulumi.StringPtrInput
	// User ManagementAssociation Name.
	ManagementAssociationName pulumi.StringInput
	// Properties for ManagementAssociation object supported by the OperationsManagement resource provider.
	Properties ManagementAssociationPropertiesPtrInput
	// Provider name for the parent resource.
	ProviderName pulumi.StringInput
	// The name of the resource group to get. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// Parent resource name.
	ResourceName pulumi.StringInput
	// Resource type for the parent resource
	ResourceType pulumi.StringInput
}

func (ManagementAssociationArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*managementAssociationArgs)(nil)).Elem()
}

type ManagementAssociationInput interface {
	pulumi.Input

	ToManagementAssociationOutput() ManagementAssociationOutput
	ToManagementAssociationOutputWithContext(ctx context.Context) ManagementAssociationOutput
}

func (*ManagementAssociation) ElementType() reflect.Type {
	return reflect.TypeOf((*ManagementAssociation)(nil))
}

func (i *ManagementAssociation) ToManagementAssociationOutput() ManagementAssociationOutput {
	return i.ToManagementAssociationOutputWithContext(context.Background())
}

func (i *ManagementAssociation) ToManagementAssociationOutputWithContext(ctx context.Context) ManagementAssociationOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ManagementAssociationOutput)
}

type ManagementAssociationOutput struct {
	*pulumi.OutputState
}

func (ManagementAssociationOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ManagementAssociation)(nil))
}

func (o ManagementAssociationOutput) ToManagementAssociationOutput() ManagementAssociationOutput {
	return o
}

func (o ManagementAssociationOutput) ToManagementAssociationOutputWithContext(ctx context.Context) ManagementAssociationOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ManagementAssociationOutput{})
}
