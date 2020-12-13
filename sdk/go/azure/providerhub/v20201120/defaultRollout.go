// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20201120

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Default rollout definition.
type DefaultRollout struct {
	pulumi.CustomResourceState

	// The name of the resource
	Name              pulumi.StringOutput                                    `pulumi:"name"`
	ProvisioningState pulumi.StringPtrOutput                                 `pulumi:"provisioningState"`
	Specification     DefaultRolloutPropertiesResponseSpecificationPtrOutput `pulumi:"specification"`
	Status            DefaultRolloutPropertiesResponseStatusPtrOutput        `pulumi:"status"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewDefaultRollout registers a new resource with the given unique name, arguments, and options.
func NewDefaultRollout(ctx *pulumi.Context,
	name string, args *DefaultRolloutArgs, opts ...pulumi.ResourceOption) (*DefaultRollout, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ProviderNamespace == nil {
		return nil, errors.New("invalid value for required argument 'ProviderNamespace'")
	}
	if args.RolloutName == nil {
		return nil, errors.New("invalid value for required argument 'RolloutName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:providerhub/latest:DefaultRollout"),
		},
	})
	opts = append(opts, aliases)
	var resource DefaultRollout
	err := ctx.RegisterResource("azure-nextgen:providerhub/v20201120:DefaultRollout", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDefaultRollout gets an existing DefaultRollout resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDefaultRollout(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DefaultRolloutState, opts ...pulumi.ResourceOption) (*DefaultRollout, error) {
	var resource DefaultRollout
	err := ctx.ReadResource("azure-nextgen:providerhub/v20201120:DefaultRollout", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DefaultRollout resources.
type defaultRolloutState struct {
	// The name of the resource
	Name              *string                                        `pulumi:"name"`
	ProvisioningState *string                                        `pulumi:"provisioningState"`
	Specification     *DefaultRolloutPropertiesResponseSpecification `pulumi:"specification"`
	Status            *DefaultRolloutPropertiesResponseStatus        `pulumi:"status"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
}

type DefaultRolloutState struct {
	// The name of the resource
	Name              pulumi.StringPtrInput
	ProvisioningState pulumi.StringPtrInput
	Specification     DefaultRolloutPropertiesResponseSpecificationPtrInput
	Status            DefaultRolloutPropertiesResponseStatusPtrInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
}

func (DefaultRolloutState) ElementType() reflect.Type {
	return reflect.TypeOf((*defaultRolloutState)(nil)).Elem()
}

type defaultRolloutArgs struct {
	// The name of the resource provider hosted within ProviderHub.
	ProviderNamespace string `pulumi:"providerNamespace"`
	// The rollout name.
	RolloutName string `pulumi:"rolloutName"`
}

// The set of arguments for constructing a DefaultRollout resource.
type DefaultRolloutArgs struct {
	// The name of the resource provider hosted within ProviderHub.
	ProviderNamespace pulumi.StringInput
	// The rollout name.
	RolloutName pulumi.StringInput
}

func (DefaultRolloutArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*defaultRolloutArgs)(nil)).Elem()
}

type DefaultRolloutInput interface {
	pulumi.Input

	ToDefaultRolloutOutput() DefaultRolloutOutput
	ToDefaultRolloutOutputWithContext(ctx context.Context) DefaultRolloutOutput
}

func (DefaultRollout) ElementType() reflect.Type {
	return reflect.TypeOf((*DefaultRollout)(nil)).Elem()
}

func (i DefaultRollout) ToDefaultRolloutOutput() DefaultRolloutOutput {
	return i.ToDefaultRolloutOutputWithContext(context.Background())
}

func (i DefaultRollout) ToDefaultRolloutOutputWithContext(ctx context.Context) DefaultRolloutOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DefaultRolloutOutput)
}

type DefaultRolloutOutput struct {
	*pulumi.OutputState
}

func (DefaultRolloutOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DefaultRolloutOutput)(nil)).Elem()
}

func (o DefaultRolloutOutput) ToDefaultRolloutOutput() DefaultRolloutOutput {
	return o
}

func (o DefaultRolloutOutput) ToDefaultRolloutOutputWithContext(ctx context.Context) DefaultRolloutOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DefaultRolloutOutput{})
}
