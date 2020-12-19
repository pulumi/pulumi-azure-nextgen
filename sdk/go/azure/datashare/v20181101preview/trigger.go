// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181101preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A Trigger data transfer object.
type Trigger struct {
	pulumi.CustomResourceState

	// Kind of synchronization
	Kind pulumi.StringOutput `pulumi:"kind"`
	// Name of the azure resource
	Name pulumi.StringOutput `pulumi:"name"`
	// Type of the azure resource
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewTrigger registers a new resource with the given unique name, arguments, and options.
func NewTrigger(ctx *pulumi.Context,
	name string, args *TriggerArgs, opts ...pulumi.ResourceOption) (*Trigger, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountName == nil {
		return nil, errors.New("invalid value for required argument 'AccountName'")
	}
	if args.Kind == nil {
		return nil, errors.New("invalid value for required argument 'Kind'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ShareSubscriptionName == nil {
		return nil, errors.New("invalid value for required argument 'ShareSubscriptionName'")
	}
	if args.TriggerName == nil {
		return nil, errors.New("invalid value for required argument 'TriggerName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:datashare/latest:Trigger"),
		},
		{
			Type: pulumi.String("azure-nextgen:datashare/v20191101:Trigger"),
		},
	})
	opts = append(opts, aliases)
	var resource Trigger
	err := ctx.RegisterResource("azure-nextgen:datashare/v20181101preview:Trigger", name, args, &resource, opts...)
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
	err := ctx.ReadResource("azure-nextgen:datashare/v20181101preview:Trigger", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Trigger resources.
type triggerState struct {
	// Kind of synchronization
	Kind *string `pulumi:"kind"`
	// Name of the azure resource
	Name *string `pulumi:"name"`
	// Type of the azure resource
	Type *string `pulumi:"type"`
}

type TriggerState struct {
	// Kind of synchronization
	Kind pulumi.StringPtrInput
	// Name of the azure resource
	Name pulumi.StringPtrInput
	// Type of the azure resource
	Type pulumi.StringPtrInput
}

func (TriggerState) ElementType() reflect.Type {
	return reflect.TypeOf((*triggerState)(nil)).Elem()
}

type triggerArgs struct {
	// The name of the share account.
	AccountName string `pulumi:"accountName"`
	// Kind of synchronization
	Kind string `pulumi:"kind"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the share subscription which will hold the data set sink.
	ShareSubscriptionName string `pulumi:"shareSubscriptionName"`
	// The name of the trigger.
	TriggerName string `pulumi:"triggerName"`
}

// The set of arguments for constructing a Trigger resource.
type TriggerArgs struct {
	// The name of the share account.
	AccountName pulumi.StringInput
	// Kind of synchronization
	Kind pulumi.StringInput
	// The resource group name.
	ResourceGroupName pulumi.StringInput
	// The name of the share subscription which will hold the data set sink.
	ShareSubscriptionName pulumi.StringInput
	// The name of the trigger.
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

func (*Trigger) ElementType() reflect.Type {
	return reflect.TypeOf((*Trigger)(nil))
}

func (i *Trigger) ToTriggerOutput() TriggerOutput {
	return i.ToTriggerOutputWithContext(context.Background())
}

func (i *Trigger) ToTriggerOutputWithContext(ctx context.Context) TriggerOutput {
	return pulumi.ToOutputWithContext(ctx, i).(TriggerOutput)
}

type TriggerOutput struct {
	*pulumi.OutputState
}

func (TriggerOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Trigger)(nil))
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
