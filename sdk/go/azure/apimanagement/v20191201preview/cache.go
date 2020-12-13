// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Cache details.
type Cache struct {
	pulumi.CustomResourceState

	// Runtime connection string to cache
	ConnectionString pulumi.StringOutput `pulumi:"connectionString"`
	// Cache description
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Original uri of entity in external system cache points to
	ResourceId pulumi.StringPtrOutput `pulumi:"resourceId"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewCache registers a new resource with the given unique name, arguments, and options.
func NewCache(ctx *pulumi.Context,
	name string, args *CacheArgs, opts ...pulumi.ResourceOption) (*Cache, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.CacheId == nil {
		return nil, errors.New("invalid value for required argument 'CacheId'")
	}
	if args.ConnectionString == nil {
		return nil, errors.New("invalid value for required argument 'ConnectionString'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServiceName == nil {
		return nil, errors.New("invalid value for required argument 'ServiceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:apimanagement/latest:Cache"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:Cache"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20190101:Cache"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201:Cache"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20200601preview:Cache"),
		},
	})
	opts = append(opts, aliases)
	var resource Cache
	err := ctx.RegisterResource("azure-nextgen:apimanagement/v20191201preview:Cache", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCache gets an existing Cache resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCache(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CacheState, opts ...pulumi.ResourceOption) (*Cache, error) {
	var resource Cache
	err := ctx.ReadResource("azure-nextgen:apimanagement/v20191201preview:Cache", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Cache resources.
type cacheState struct {
	// Runtime connection string to cache
	ConnectionString *string `pulumi:"connectionString"`
	// Cache description
	Description *string `pulumi:"description"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Original uri of entity in external system cache points to
	ResourceId *string `pulumi:"resourceId"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
}

type CacheState struct {
	// Runtime connection string to cache
	ConnectionString pulumi.StringPtrInput
	// Cache description
	Description pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Original uri of entity in external system cache points to
	ResourceId pulumi.StringPtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
}

func (CacheState) ElementType() reflect.Type {
	return reflect.TypeOf((*cacheState)(nil)).Elem()
}

type cacheArgs struct {
	// Identifier of the Cache entity. Cache identifier (should be either 'default' or valid Azure region identifier).
	CacheId string `pulumi:"cacheId"`
	// Runtime connection string to cache
	ConnectionString string `pulumi:"connectionString"`
	// Cache description
	Description *string `pulumi:"description"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Original uri of entity in external system cache points to
	ResourceId *string `pulumi:"resourceId"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
}

// The set of arguments for constructing a Cache resource.
type CacheArgs struct {
	// Identifier of the Cache entity. Cache identifier (should be either 'default' or valid Azure region identifier).
	CacheId pulumi.StringInput
	// Runtime connection string to cache
	ConnectionString pulumi.StringInput
	// Cache description
	Description pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Original uri of entity in external system cache points to
	ResourceId pulumi.StringPtrInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
}

func (CacheArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*cacheArgs)(nil)).Elem()
}

type CacheInput interface {
	pulumi.Input

	ToCacheOutput() CacheOutput
	ToCacheOutputWithContext(ctx context.Context) CacheOutput
}

func (Cache) ElementType() reflect.Type {
	return reflect.TypeOf((*Cache)(nil)).Elem()
}

func (i Cache) ToCacheOutput() CacheOutput {
	return i.ToCacheOutputWithContext(context.Background())
}

func (i Cache) ToCacheOutputWithContext(ctx context.Context) CacheOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CacheOutput)
}

type CacheOutput struct {
	*pulumi.OutputState
}

func (CacheOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*CacheOutput)(nil)).Elem()
}

func (o CacheOutput) ToCacheOutput() CacheOutput {
	return o
}

func (o CacheOutput) ToCacheOutputWithContext(ctx context.Context) CacheOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(CacheOutput{})
}
