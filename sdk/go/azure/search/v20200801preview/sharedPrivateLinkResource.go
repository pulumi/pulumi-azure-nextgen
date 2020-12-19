// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200801preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Describes a Shared Private Link Resource managed by the Azure Cognitive Search service.
type SharedPrivateLinkResource struct {
	pulumi.CustomResourceState

	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// Describes the properties of a Shared Private Link Resource managed by the Azure Cognitive Search service.
	Properties SharedPrivateLinkResourcePropertiesResponseOutput `pulumi:"properties"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewSharedPrivateLinkResource registers a new resource with the given unique name, arguments, and options.
func NewSharedPrivateLinkResource(ctx *pulumi.Context,
	name string, args *SharedPrivateLinkResourceArgs, opts ...pulumi.ResourceOption) (*SharedPrivateLinkResource, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.SearchServiceName == nil {
		return nil, errors.New("invalid value for required argument 'SearchServiceName'")
	}
	if args.SharedPrivateLinkResourceName == nil {
		return nil, errors.New("invalid value for required argument 'SharedPrivateLinkResourceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:search/latest:SharedPrivateLinkResource"),
		},
		{
			Type: pulumi.String("azure-nextgen:search/v20200801:SharedPrivateLinkResource"),
		},
	})
	opts = append(opts, aliases)
	var resource SharedPrivateLinkResource
	err := ctx.RegisterResource("azure-nextgen:search/v20200801preview:SharedPrivateLinkResource", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSharedPrivateLinkResource gets an existing SharedPrivateLinkResource resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSharedPrivateLinkResource(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SharedPrivateLinkResourceState, opts ...pulumi.ResourceOption) (*SharedPrivateLinkResource, error) {
	var resource SharedPrivateLinkResource
	err := ctx.ReadResource("azure-nextgen:search/v20200801preview:SharedPrivateLinkResource", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SharedPrivateLinkResource resources.
type sharedPrivateLinkResourceState struct {
	// The name of the resource
	Name *string `pulumi:"name"`
	// Describes the properties of a Shared Private Link Resource managed by the Azure Cognitive Search service.
	Properties *SharedPrivateLinkResourcePropertiesResponse `pulumi:"properties"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
}

type SharedPrivateLinkResourceState struct {
	// The name of the resource
	Name pulumi.StringPtrInput
	// Describes the properties of a Shared Private Link Resource managed by the Azure Cognitive Search service.
	Properties SharedPrivateLinkResourcePropertiesResponsePtrInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
}

func (SharedPrivateLinkResourceState) ElementType() reflect.Type {
	return reflect.TypeOf((*sharedPrivateLinkResourceState)(nil)).Elem()
}

type sharedPrivateLinkResourceArgs struct {
	// Describes the properties of a Shared Private Link Resource managed by the Azure Cognitive Search service.
	Properties *SharedPrivateLinkResourceProperties `pulumi:"properties"`
	// The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the Azure Cognitive Search service associated with the specified resource group.
	SearchServiceName string `pulumi:"searchServiceName"`
	// The name of the shared private link resource managed by the Azure Cognitive Search service within the specified resource group.
	SharedPrivateLinkResourceName string `pulumi:"sharedPrivateLinkResourceName"`
}

// The set of arguments for constructing a SharedPrivateLinkResource resource.
type SharedPrivateLinkResourceArgs struct {
	// Describes the properties of a Shared Private Link Resource managed by the Azure Cognitive Search service.
	Properties SharedPrivateLinkResourcePropertiesPtrInput
	// The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
	// The name of the Azure Cognitive Search service associated with the specified resource group.
	SearchServiceName pulumi.StringInput
	// The name of the shared private link resource managed by the Azure Cognitive Search service within the specified resource group.
	SharedPrivateLinkResourceName pulumi.StringInput
}

func (SharedPrivateLinkResourceArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*sharedPrivateLinkResourceArgs)(nil)).Elem()
}

type SharedPrivateLinkResourceInput interface {
	pulumi.Input

	ToSharedPrivateLinkResourceOutput() SharedPrivateLinkResourceOutput
	ToSharedPrivateLinkResourceOutputWithContext(ctx context.Context) SharedPrivateLinkResourceOutput
}

func (*SharedPrivateLinkResource) ElementType() reflect.Type {
	return reflect.TypeOf((*SharedPrivateLinkResource)(nil))
}

func (i *SharedPrivateLinkResource) ToSharedPrivateLinkResourceOutput() SharedPrivateLinkResourceOutput {
	return i.ToSharedPrivateLinkResourceOutputWithContext(context.Background())
}

func (i *SharedPrivateLinkResource) ToSharedPrivateLinkResourceOutputWithContext(ctx context.Context) SharedPrivateLinkResourceOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SharedPrivateLinkResourceOutput)
}

type SharedPrivateLinkResourceOutput struct {
	*pulumi.OutputState
}

func (SharedPrivateLinkResourceOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*SharedPrivateLinkResource)(nil))
}

func (o SharedPrivateLinkResourceOutput) ToSharedPrivateLinkResourceOutput() SharedPrivateLinkResourceOutput {
	return o
}

func (o SharedPrivateLinkResourceOutput) ToSharedPrivateLinkResourceOutputWithContext(ctx context.Context) SharedPrivateLinkResourceOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(SharedPrivateLinkResourceOutput{})
}
