// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Trigger resource type.
type Trigger struct {
	pulumi.CustomResourceState

	// Etag identifies change in the resource.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Properties of the trigger.
	Properties pulumi.AnyOutput `pulumi:"properties"`
	// The resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewTrigger registers a new resource with the given unique name, arguments, and options.
func NewTrigger(ctx *pulumi.Context,
	name string, args *TriggerArgs, opts ...pulumi.ResourceOption) (*Trigger, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.FactoryName == nil {
		return nil, errors.New("invalid value for required argument 'FactoryName'")
	}
	if args.Properties == nil {
		return nil, errors.New("invalid value for required argument 'Properties'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.TriggerName == nil {
		return nil, errors.New("invalid value for required argument 'TriggerName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:datafactory/v20170901preview:Trigger"),
		},
		{
			Type: pulumi.String("azure-nextgen:datafactory/v20180601:Trigger"),
		},
	})
	opts = append(opts, aliases)
	var resource Trigger
	err := ctx.RegisterResource("azure-nextgen:datafactory/latest:Trigger", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetTrigger gets an existing Trigger resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTrigger(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *TriggerState, opts ...pulumi.ResourceOption) (*Trigger, error) {
	var resource Trigger
	err := ctx.ReadResource("azure-nextgen:datafactory/latest:Trigger", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Trigger resources.
type triggerState struct {
	// Etag identifies change in the resource.
	Etag *string `pulumi:"etag"`
	// The resource name.
	Name *string `pulumi:"name"`
	// Properties of the trigger.
	Properties interface{} `pulumi:"properties"`
	// The resource type.
	Type *string `pulumi:"type"`
}

type TriggerState struct {
	// Etag identifies change in the resource.
	Etag pulumi.StringPtrInput
	// The resource name.
	Name pulumi.StringPtrInput
	// Properties of the trigger.
	Properties pulumi.Input
	// The resource type.
	Type pulumi.StringPtrInput
}

func (TriggerState) ElementType() reflect.Type {
	return reflect.TypeOf((*triggerState)(nil)).Elem()
}

type triggerArgs struct {
	// The factory name.
	FactoryName string `pulumi:"factoryName"`
	// Properties of the trigger.
	Properties interface{} `pulumi:"properties"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The trigger name.
	TriggerName string `pulumi:"triggerName"`
}

// The set of arguments for constructing a Trigger resource.
type TriggerArgs struct {
	// The factory name.
	FactoryName pulumi.StringInput
	// Properties of the trigger.
	Properties pulumi.Input
	// The resource group name.
	ResourceGroupName pulumi.StringInput
	// The trigger name.
	TriggerName pulumi.StringInput
}

func (TriggerArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*triggerArgs)(nil)).Elem()
}

type TriggerInput interface {
	pulumi.Input

	ToTriggerOutput() TriggerOutput
	ToTriggerOutputWithContext(ctx context.Context) TriggerOutput
}

func (Trigger) ElementType() reflect.Type {
	return reflect.TypeOf((*Trigger)(nil)).Elem()
}

func (i Trigger) ToTriggerOutput() TriggerOutput {
	return i.ToTriggerOutputWithContext(context.Background())
}

func (i Trigger) ToTriggerOutputWithContext(ctx context.Context) TriggerOutput {
	return pulumi.ToOutputWithContext(ctx, i).(TriggerOutput)
}

type TriggerOutput struct {
	*pulumi.OutputState
}

func (TriggerOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*TriggerOutput)(nil)).Elem()
}

func (o TriggerOutput) ToTriggerOutput() TriggerOutput {
	return o
}

func (o TriggerOutput) ToTriggerOutputWithContext(ctx context.Context) TriggerOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(TriggerOutput{})
}
