// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Subscription Information with the alias.
// Latest API Version: 2020-09-01.
type Alias struct {
	pulumi.CustomResourceState

	// Alias ID.
	Name pulumi.StringOutput `pulumi:"name"`
	// Put Alias response properties.
	Properties PutAliasResponsePropertiesResponseOutput `pulumi:"properties"`
	// Resource type, Microsoft.Subscription/aliases.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewAlias registers a new resource with the given unique name, arguments, and options.
func NewAlias(ctx *pulumi.Context,
	name string, args *AliasArgs, opts ...pulumi.ResourceOption) (*Alias, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AliasName == nil {
		return nil, errors.New("invalid value for required argument 'AliasName'")
	}
	if args.Properties == nil {
		return nil, errors.New("invalid value for required argument 'Properties'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:subscription/v20191001preview:Alias"),
		},
		{
			Type: pulumi.String("azure-nextgen:subscription/v20200901:Alias"),
		},
	})
	opts = append(opts, aliases)
	var resource Alias
	err := ctx.RegisterResource("azure-nextgen:subscription/latest:Alias", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetAlias gets an existing Alias resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAlias(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *AliasState, opts ...pulumi.ResourceOption) (*Alias, error) {
	var resource Alias
	err := ctx.ReadResource("azure-nextgen:subscription/latest:Alias", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Alias resources.
type aliasState struct {
	// Alias ID.
	Name *string `pulumi:"name"`
	// Put Alias response properties.
	Properties *PutAliasResponsePropertiesResponse `pulumi:"properties"`
	// Resource type, Microsoft.Subscription/aliases.
	Type *string `pulumi:"type"`
}

type AliasState struct {
	// Alias ID.
	Name pulumi.StringPtrInput
	// Put Alias response properties.
	Properties PutAliasResponsePropertiesResponsePtrInput
	// Resource type, Microsoft.Subscription/aliases.
	Type pulumi.StringPtrInput
}

func (AliasState) ElementType() reflect.Type {
	return reflect.TypeOf((*aliasState)(nil)).Elem()
}

type aliasArgs struct {
	// Alias Name
	AliasName string `pulumi:"aliasName"`
	// Put alias request properties.
	Properties PutAliasRequestProperties `pulumi:"properties"`
}

// The set of arguments for constructing a Alias resource.
type AliasArgs struct {
	// Alias Name
	AliasName pulumi.StringInput
	// Put alias request properties.
	Properties PutAliasRequestPropertiesInput
}

func (AliasArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*aliasArgs)(nil)).Elem()
}

type AliasInput interface {
	pulumi.Input

	ToAliasOutput() AliasOutput
	ToAliasOutputWithContext(ctx context.Context) AliasOutput
}

func (*Alias) ElementType() reflect.Type {
	return reflect.TypeOf((*Alias)(nil))
}

func (i *Alias) ToAliasOutput() AliasOutput {
	return i.ToAliasOutputWithContext(context.Background())
}

func (i *Alias) ToAliasOutputWithContext(ctx context.Context) AliasOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AliasOutput)
}

type AliasOutput struct {
	*pulumi.OutputState
}

func (AliasOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Alias)(nil))
}

func (o AliasOutput) ToAliasOutput() AliasOutput {
	return o
}

func (o AliasOutput) ToAliasOutputWithContext(ctx context.Context) AliasOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(AliasOutput{})
}
