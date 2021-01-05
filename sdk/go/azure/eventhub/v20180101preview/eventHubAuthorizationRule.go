// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180101preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Single item in a List or Get AuthorizationRule operation
type EventHubAuthorizationRule struct {
	pulumi.CustomResourceState

	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The rights associated with the rule.
	Rights pulumi.StringArrayOutput `pulumi:"rights"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewEventHubAuthorizationRule registers a new resource with the given unique name, arguments, and options.
func NewEventHubAuthorizationRule(ctx *pulumi.Context,
	name string, args *EventHubAuthorizationRuleArgs, opts ...pulumi.ResourceOption) (*EventHubAuthorizationRule, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AuthorizationRuleName == nil {
		return nil, errors.New("invalid value for required argument 'AuthorizationRuleName'")
	}
	if args.EventHubName == nil {
		return nil, errors.New("invalid value for required argument 'EventHubName'")
	}
	if args.NamespaceName == nil {
		return nil, errors.New("invalid value for required argument 'NamespaceName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.Rights == nil {
		return nil, errors.New("invalid value for required argument 'Rights'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:eventhub/latest:EventHubAuthorizationRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:eventhub/v20140901:EventHubAuthorizationRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:eventhub/v20150801:EventHubAuthorizationRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:eventhub/v20170401:EventHubAuthorizationRule"),
		},
	})
	opts = append(opts, aliases)
	var resource EventHubAuthorizationRule
	err := ctx.RegisterResource("azure-nextgen:eventhub/v20180101preview:EventHubAuthorizationRule", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetEventHubAuthorizationRule gets an existing EventHubAuthorizationRule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEventHubAuthorizationRule(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *EventHubAuthorizationRuleState, opts ...pulumi.ResourceOption) (*EventHubAuthorizationRule, error) {
	var resource EventHubAuthorizationRule
	err := ctx.ReadResource("azure-nextgen:eventhub/v20180101preview:EventHubAuthorizationRule", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering EventHubAuthorizationRule resources.
type eventHubAuthorizationRuleState struct {
	// Resource name.
	Name *string `pulumi:"name"`
	// The rights associated with the rule.
	Rights []string `pulumi:"rights"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type EventHubAuthorizationRuleState struct {
	// Resource name.
	Name pulumi.StringPtrInput
	// The rights associated with the rule.
	Rights pulumi.StringArrayInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (EventHubAuthorizationRuleState) ElementType() reflect.Type {
	return reflect.TypeOf((*eventHubAuthorizationRuleState)(nil)).Elem()
}

type eventHubAuthorizationRuleArgs struct {
	// The authorization rule name.
	AuthorizationRuleName string `pulumi:"authorizationRuleName"`
	// The Event Hub name
	EventHubName string `pulumi:"eventHubName"`
	// The Namespace name
	NamespaceName string `pulumi:"namespaceName"`
	// Name of the resource group within the azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The rights associated with the rule.
	Rights []string `pulumi:"rights"`
}

// The set of arguments for constructing a EventHubAuthorizationRule resource.
type EventHubAuthorizationRuleArgs struct {
	// The authorization rule name.
	AuthorizationRuleName pulumi.StringInput
	// The Event Hub name
	EventHubName pulumi.StringInput
	// The Namespace name
	NamespaceName pulumi.StringInput
	// Name of the resource group within the azure subscription.
	ResourceGroupName pulumi.StringInput
	// The rights associated with the rule.
	Rights pulumi.StringArrayInput
}

func (EventHubAuthorizationRuleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*eventHubAuthorizationRuleArgs)(nil)).Elem()
}

type EventHubAuthorizationRuleInput interface {
	pulumi.Input

	ToEventHubAuthorizationRuleOutput() EventHubAuthorizationRuleOutput
	ToEventHubAuthorizationRuleOutputWithContext(ctx context.Context) EventHubAuthorizationRuleOutput
}

func (*EventHubAuthorizationRule) ElementType() reflect.Type {
	return reflect.TypeOf((*EventHubAuthorizationRule)(nil))
}

func (i *EventHubAuthorizationRule) ToEventHubAuthorizationRuleOutput() EventHubAuthorizationRuleOutput {
	return i.ToEventHubAuthorizationRuleOutputWithContext(context.Background())
}

func (i *EventHubAuthorizationRule) ToEventHubAuthorizationRuleOutputWithContext(ctx context.Context) EventHubAuthorizationRuleOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EventHubAuthorizationRuleOutput)
}

type EventHubAuthorizationRuleOutput struct {
	*pulumi.OutputState
}

func (EventHubAuthorizationRuleOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*EventHubAuthorizationRule)(nil))
}

func (o EventHubAuthorizationRuleOutput) ToEventHubAuthorizationRuleOutput() EventHubAuthorizationRuleOutput {
	return o
}

func (o EventHubAuthorizationRuleOutput) ToEventHubAuthorizationRuleOutputWithContext(ctx context.Context) EventHubAuthorizationRuleOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(EventHubAuthorizationRuleOutput{})
}