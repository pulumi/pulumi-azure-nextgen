// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180601preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Registration definition.
type RegistrationDefinition struct {
	pulumi.CustomResourceState

	// Name of the registration definition.
	Name pulumi.StringOutput `pulumi:"name"`
	// Plan details for the managed services.
	Plan PlanResponsePtrOutput `pulumi:"plan"`
	// Properties of a registration definition.
	Properties RegistrationDefinitionPropertiesResponseOutput `pulumi:"properties"`
	// Type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewRegistrationDefinition registers a new resource with the given unique name, arguments, and options.
func NewRegistrationDefinition(ctx *pulumi.Context,
	name string, args *RegistrationDefinitionArgs, opts ...pulumi.ResourceOption) (*RegistrationDefinition, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.RegistrationDefinitionId == nil {
		return nil, errors.New("invalid value for required argument 'RegistrationDefinitionId'")
	}
	if args.Scope == nil {
		return nil, errors.New("invalid value for required argument 'Scope'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:managedservices/latest:RegistrationDefinition"),
		},
		{
			Type: pulumi.String("azure-nextgen:managedservices/v20190401preview:RegistrationDefinition"),
		},
		{
			Type: pulumi.String("azure-nextgen:managedservices/v20190601:RegistrationDefinition"),
		},
		{
			Type: pulumi.String("azure-nextgen:managedservices/v20190901:RegistrationDefinition"),
		},
		{
			Type: pulumi.String("azure-nextgen:managedservices/v20200201preview:RegistrationDefinition"),
		},
	})
	opts = append(opts, aliases)
	var resource RegistrationDefinition
	err := ctx.RegisterResource("azure-nextgen:managedservices/v20180601preview:RegistrationDefinition", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetRegistrationDefinition gets an existing RegistrationDefinition resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRegistrationDefinition(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *RegistrationDefinitionState, opts ...pulumi.ResourceOption) (*RegistrationDefinition, error) {
	var resource RegistrationDefinition
	err := ctx.ReadResource("azure-nextgen:managedservices/v20180601preview:RegistrationDefinition", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering RegistrationDefinition resources.
type registrationDefinitionState struct {
	// Name of the registration definition.
	Name *string `pulumi:"name"`
	// Plan details for the managed services.
	Plan *PlanResponse `pulumi:"plan"`
	// Properties of a registration definition.
	Properties *RegistrationDefinitionPropertiesResponse `pulumi:"properties"`
	// Type of the resource.
	Type *string `pulumi:"type"`
}

type RegistrationDefinitionState struct {
	// Name of the registration definition.
	Name pulumi.StringPtrInput
	// Plan details for the managed services.
	Plan PlanResponsePtrInput
	// Properties of a registration definition.
	Properties RegistrationDefinitionPropertiesResponsePtrInput
	// Type of the resource.
	Type pulumi.StringPtrInput
}

func (RegistrationDefinitionState) ElementType() reflect.Type {
	return reflect.TypeOf((*registrationDefinitionState)(nil)).Elem()
}

type registrationDefinitionArgs struct {
	// Plan details for the managed services.
	Plan *Plan `pulumi:"plan"`
	// Properties of a registration definition.
	Properties *RegistrationDefinitionProperties `pulumi:"properties"`
	// Guid of the registration definition.
	RegistrationDefinitionId string `pulumi:"registrationDefinitionId"`
	// Scope of the resource.
	Scope string `pulumi:"scope"`
}

// The set of arguments for constructing a RegistrationDefinition resource.
type RegistrationDefinitionArgs struct {
	// Plan details for the managed services.
	Plan PlanPtrInput
	// Properties of a registration definition.
	Properties RegistrationDefinitionPropertiesPtrInput
	// Guid of the registration definition.
	RegistrationDefinitionId pulumi.StringInput
	// Scope of the resource.
	Scope pulumi.StringInput
}

func (RegistrationDefinitionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*registrationDefinitionArgs)(nil)).Elem()
}

type RegistrationDefinitionInput interface {
	pulumi.Input

	ToRegistrationDefinitionOutput() RegistrationDefinitionOutput
	ToRegistrationDefinitionOutputWithContext(ctx context.Context) RegistrationDefinitionOutput
}

func (*RegistrationDefinition) ElementType() reflect.Type {
	return reflect.TypeOf((*RegistrationDefinition)(nil))
}

func (i *RegistrationDefinition) ToRegistrationDefinitionOutput() RegistrationDefinitionOutput {
	return i.ToRegistrationDefinitionOutputWithContext(context.Background())
}

func (i *RegistrationDefinition) ToRegistrationDefinitionOutputWithContext(ctx context.Context) RegistrationDefinitionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RegistrationDefinitionOutput)
}

type RegistrationDefinitionOutput struct {
	*pulumi.OutputState
}

func (RegistrationDefinitionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*RegistrationDefinition)(nil))
}

func (o RegistrationDefinitionOutput) ToRegistrationDefinitionOutput() RegistrationDefinitionOutput {
	return o
}

func (o RegistrationDefinitionOutput) ToRegistrationDefinitionOutputWithContext(ctx context.Context) RegistrationDefinitionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(RegistrationDefinitionOutput{})
}
