// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190501preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An object that represents a scope map for a container registry.
type ScopeMap struct {
	pulumi.CustomResourceState

	// The list of scoped permissions for registry artifacts.
	// E.g. repositories/repository-name/content/read,
	// repositories/repository-name/metadata/write
	Actions pulumi.StringArrayOutput `pulumi:"actions"`
	// The creation date of scope map.
	CreationDate pulumi.StringOutput `pulumi:"creationDate"`
	// The user friendly description of the scope map.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// Provisioning state of the resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Metadata pertaining to creation and last modification of the resource.
	SystemData SystemDataResponseOutput `pulumi:"systemData"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewScopeMap registers a new resource with the given unique name, arguments, and options.
func NewScopeMap(ctx *pulumi.Context,
	name string, args *ScopeMapArgs, opts ...pulumi.ResourceOption) (*ScopeMap, error) {
	if args == nil || args.Actions == nil {
		return nil, errors.New("missing required argument 'Actions'")
	}
	if args == nil || args.RegistryName == nil {
		return nil, errors.New("missing required argument 'RegistryName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.ScopeMapName == nil {
		return nil, errors.New("missing required argument 'ScopeMapName'")
	}
	if args == nil {
		args = &ScopeMapArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:containerregistry/v20201101preview:ScopeMap"),
		},
	})
	opts = append(opts, aliases)
	var resource ScopeMap
	err := ctx.RegisterResource("azure-nextgen:containerregistry/v20190501preview:ScopeMap", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetScopeMap gets an existing ScopeMap resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetScopeMap(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ScopeMapState, opts ...pulumi.ResourceOption) (*ScopeMap, error) {
	var resource ScopeMap
	err := ctx.ReadResource("azure-nextgen:containerregistry/v20190501preview:ScopeMap", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ScopeMap resources.
type scopeMapState struct {
	// The list of scoped permissions for registry artifacts.
	// E.g. repositories/repository-name/content/read,
	// repositories/repository-name/metadata/write
	Actions []string `pulumi:"actions"`
	// The creation date of scope map.
	CreationDate *string `pulumi:"creationDate"`
	// The user friendly description of the scope map.
	Description *string `pulumi:"description"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// Provisioning state of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Metadata pertaining to creation and last modification of the resource.
	SystemData *SystemDataResponse `pulumi:"systemData"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type ScopeMapState struct {
	// The list of scoped permissions for registry artifacts.
	// E.g. repositories/repository-name/content/read,
	// repositories/repository-name/metadata/write
	Actions pulumi.StringArrayInput
	// The creation date of scope map.
	CreationDate pulumi.StringPtrInput
	// The user friendly description of the scope map.
	Description pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// Provisioning state of the resource.
	ProvisioningState pulumi.StringPtrInput
	// Metadata pertaining to creation and last modification of the resource.
	SystemData SystemDataResponsePtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (ScopeMapState) ElementType() reflect.Type {
	return reflect.TypeOf((*scopeMapState)(nil)).Elem()
}

type scopeMapArgs struct {
	// The list of scoped permissions for registry artifacts.
	// E.g. repositories/repository-name/content/read,
	// repositories/repository-name/metadata/write
	Actions []string `pulumi:"actions"`
	// The user friendly description of the scope map.
	Description *string `pulumi:"description"`
	// The name of the container registry.
	RegistryName string `pulumi:"registryName"`
	// The name of the resource group to which the container registry belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the scope map.
	ScopeMapName string `pulumi:"scopeMapName"`
}

// The set of arguments for constructing a ScopeMap resource.
type ScopeMapArgs struct {
	// The list of scoped permissions for registry artifacts.
	// E.g. repositories/repository-name/content/read,
	// repositories/repository-name/metadata/write
	Actions pulumi.StringArrayInput
	// The user friendly description of the scope map.
	Description pulumi.StringPtrInput
	// The name of the container registry.
	RegistryName pulumi.StringInput
	// The name of the resource group to which the container registry belongs.
	ResourceGroupName pulumi.StringInput
	// The name of the scope map.
	ScopeMapName pulumi.StringInput
}

func (ScopeMapArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*scopeMapArgs)(nil)).Elem()
}

type ScopeMapInput interface {
	pulumi.Input

	ToScopeMapOutput() ScopeMapOutput
	ToScopeMapOutputWithContext(ctx context.Context) ScopeMapOutput
}

func (ScopeMap) ElementType() reflect.Type {
	return reflect.TypeOf((*ScopeMap)(nil)).Elem()
}

func (i ScopeMap) ToScopeMapOutput() ScopeMapOutput {
	return i.ToScopeMapOutputWithContext(context.Background())
}

func (i ScopeMap) ToScopeMapOutputWithContext(ctx context.Context) ScopeMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ScopeMapOutput)
}

type ScopeMapOutput struct {
	*pulumi.OutputState
}

func (ScopeMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ScopeMapOutput)(nil)).Elem()
}

func (o ScopeMapOutput) ToScopeMapOutput() ScopeMapOutput {
	return o
}

func (o ScopeMapOutput) ToScopeMapOutputWithContext(ctx context.Context) ScopeMapOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ScopeMapOutput{})
}
