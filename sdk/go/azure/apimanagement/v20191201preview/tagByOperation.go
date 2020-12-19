// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Tag Contract details.
type TagByOperation struct {
	pulumi.CustomResourceState

	// Tag name.
	DisplayName pulumi.StringOutput `pulumi:"displayName"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewTagByOperation registers a new resource with the given unique name, arguments, and options.
func NewTagByOperation(ctx *pulumi.Context,
	name string, args *TagByOperationArgs, opts ...pulumi.ResourceOption) (*TagByOperation, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ApiId == nil {
		return nil, errors.New("invalid value for required argument 'ApiId'")
	}
	if args.OperationId == nil {
		return nil, errors.New("invalid value for required argument 'OperationId'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServiceName == nil {
		return nil, errors.New("invalid value for required argument 'ServiceName'")
	}
	if args.TagId == nil {
		return nil, errors.New("invalid value for required argument 'TagId'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:apimanagement/latest:TagByOperation"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20170301:TagByOperation"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180101:TagByOperation"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:TagByOperation"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20190101:TagByOperation"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201:TagByOperation"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20200601preview:TagByOperation"),
		},
	})
	opts = append(opts, aliases)
	var resource TagByOperation
	err := ctx.RegisterResource("azure-nextgen:apimanagement/v20191201preview:TagByOperation", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetTagByOperation gets an existing TagByOperation resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTagByOperation(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *TagByOperationState, opts ...pulumi.ResourceOption) (*TagByOperation, error) {
	var resource TagByOperation
	err := ctx.ReadResource("azure-nextgen:apimanagement/v20191201preview:TagByOperation", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering TagByOperation resources.
type tagByOperationState struct {
	// Tag name.
	DisplayName *string `pulumi:"displayName"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
}

type TagByOperationState struct {
	// Tag name.
	DisplayName pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
}

func (TagByOperationState) ElementType() reflect.Type {
	return reflect.TypeOf((*tagByOperationState)(nil)).Elem()
}

type tagByOperationArgs struct {
	// API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
	ApiId string `pulumi:"apiId"`
	// Operation identifier within an API. Must be unique in the current API Management service instance.
	OperationId string `pulumi:"operationId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
	// Tag identifier. Must be unique in the current API Management service instance.
	TagId string `pulumi:"tagId"`
}

// The set of arguments for constructing a TagByOperation resource.
type TagByOperationArgs struct {
	// API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
	ApiId pulumi.StringInput
	// Operation identifier within an API. Must be unique in the current API Management service instance.
	OperationId pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
	// Tag identifier. Must be unique in the current API Management service instance.
	TagId pulumi.StringInput
}

func (TagByOperationArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*tagByOperationArgs)(nil)).Elem()
}

type TagByOperationInput interface {
	pulumi.Input

	ToTagByOperationOutput() TagByOperationOutput
	ToTagByOperationOutputWithContext(ctx context.Context) TagByOperationOutput
}

func (*TagByOperation) ElementType() reflect.Type {
	return reflect.TypeOf((*TagByOperation)(nil))
}

func (i *TagByOperation) ToTagByOperationOutput() TagByOperationOutput {
	return i.ToTagByOperationOutputWithContext(context.Background())
}

func (i *TagByOperation) ToTagByOperationOutputWithContext(ctx context.Context) TagByOperationOutput {
	return pulumi.ToOutputWithContext(ctx, i).(TagByOperationOutput)
}

type TagByOperationOutput struct {
	*pulumi.OutputState
}

func (TagByOperationOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*TagByOperation)(nil))
}

func (o TagByOperationOutput) ToTagByOperationOutput() TagByOperationOutput {
	return o
}

func (o TagByOperationOutput) ToTagByOperationOutputWithContext(ctx context.Context) TagByOperationOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(TagByOperationOutput{})
}
