// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Description of a namespace authorization rule.
type TopicAuthorizationRule struct {
	pulumi.CustomResourceState

	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// The rights associated with the rule.
	Rights pulumi.StringArrayOutput `pulumi:"rights"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewTopicAuthorizationRule registers a new resource with the given unique name, arguments, and options.
func NewTopicAuthorizationRule(ctx *pulumi.Context,
	name string, args *TopicAuthorizationRuleArgs, opts ...pulumi.ResourceOption) (*TopicAuthorizationRule, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AuthorizationRuleName == nil {
		return nil, errors.New("invalid value for required argument 'AuthorizationRuleName'")
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
	if args.TopicName == nil {
		return nil, errors.New("invalid value for required argument 'TopicName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:servicebus/v20140901:TopicAuthorizationRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicebus/v20150801:TopicAuthorizationRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:servicebus/v20170401:TopicAuthorizationRule"),
		},
	})
	opts = append(opts, aliases)
	var resource TopicAuthorizationRule
	err := ctx.RegisterResource("azure-nextgen:servicebus/latest:TopicAuthorizationRule", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetTopicAuthorizationRule gets an existing TopicAuthorizationRule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTopicAuthorizationRule(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *TopicAuthorizationRuleState, opts ...pulumi.ResourceOption) (*TopicAuthorizationRule, error) {
	var resource TopicAuthorizationRule
	err := ctx.ReadResource("azure-nextgen:servicebus/latest:TopicAuthorizationRule", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering TopicAuthorizationRule resources.
type topicAuthorizationRuleState struct {
	// Resource name
	Name *string `pulumi:"name"`
	// The rights associated with the rule.
	Rights []string `pulumi:"rights"`
	// Resource type
	Type *string `pulumi:"type"`
}

type TopicAuthorizationRuleState struct {
	// Resource name
	Name pulumi.StringPtrInput
	// The rights associated with the rule.
	Rights pulumi.StringArrayInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (TopicAuthorizationRuleState) ElementType() reflect.Type {
	return reflect.TypeOf((*topicAuthorizationRuleState)(nil)).Elem()
}

type topicAuthorizationRuleArgs struct {
	// The authorization rule name.
	AuthorizationRuleName string `pulumi:"authorizationRuleName"`
	// The namespace name
	NamespaceName string `pulumi:"namespaceName"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The rights associated with the rule.
	Rights []string `pulumi:"rights"`
	// The topic name.
	TopicName string `pulumi:"topicName"`
}

// The set of arguments for constructing a TopicAuthorizationRule resource.
type TopicAuthorizationRuleArgs struct {
	// The authorization rule name.
	AuthorizationRuleName pulumi.StringInput
	// The namespace name
	NamespaceName pulumi.StringInput
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName pulumi.StringInput
	// The rights associated with the rule.
	Rights AccessRightsArrayInput
	// The topic name.
	TopicName pulumi.StringInput
}

func (TopicAuthorizationRuleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*topicAuthorizationRuleArgs)(nil)).Elem()
}

type TopicAuthorizationRuleInput interface {
	pulumi.Input

	ToTopicAuthorizationRuleOutput() TopicAuthorizationRuleOutput
	ToTopicAuthorizationRuleOutputWithContext(ctx context.Context) TopicAuthorizationRuleOutput
}

func (TopicAuthorizationRule) ElementType() reflect.Type {
	return reflect.TypeOf((*TopicAuthorizationRule)(nil)).Elem()
}

func (i TopicAuthorizationRule) ToTopicAuthorizationRuleOutput() TopicAuthorizationRuleOutput {
	return i.ToTopicAuthorizationRuleOutputWithContext(context.Background())
}

func (i TopicAuthorizationRule) ToTopicAuthorizationRuleOutputWithContext(ctx context.Context) TopicAuthorizationRuleOutput {
	return pulumi.ToOutputWithContext(ctx, i).(TopicAuthorizationRuleOutput)
}

type TopicAuthorizationRuleOutput struct {
	*pulumi.OutputState
}

func (TopicAuthorizationRuleOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*TopicAuthorizationRuleOutput)(nil)).Elem()
}

func (o TopicAuthorizationRuleOutput) ToTopicAuthorizationRuleOutput() TopicAuthorizationRuleOutput {
	return o
}

func (o TopicAuthorizationRuleOutput) ToTopicAuthorizationRuleOutputWithContext(ctx context.Context) TopicAuthorizationRuleOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(TopicAuthorizationRuleOutput{})
}
