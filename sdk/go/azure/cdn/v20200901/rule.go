// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Friendly Rules name mapping to the any Rules or secret related information.
type Rule struct {
	pulumi.CustomResourceState

	// A list of actions that are executed when all the conditions of a rule are satisfied.
	Actions pulumi.ArrayOutput `pulumi:"actions"`
	// A list of conditions that must be matched for the actions to be executed
	Conditions       pulumi.ArrayOutput  `pulumi:"conditions"`
	DeploymentStatus pulumi.StringOutput `pulumi:"deploymentStatus"`
	// If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
	MatchProcessingBehavior pulumi.StringPtrOutput `pulumi:"matchProcessingBehavior"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.
	Order pulumi.IntOutput `pulumi:"order"`
	// Provisioning status
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Read only system data
	SystemData SystemDataResponseOutput `pulumi:"systemData"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewRule registers a new resource with the given unique name, arguments, and options.
func NewRule(ctx *pulumi.Context,
	name string, args *RuleArgs, opts ...pulumi.ResourceOption) (*Rule, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Actions == nil {
		return nil, errors.New("invalid value for required argument 'Actions'")
	}
	if args.Order == nil {
		return nil, errors.New("invalid value for required argument 'Order'")
	}
	if args.ProfileName == nil {
		return nil, errors.New("invalid value for required argument 'ProfileName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.RuleName == nil {
		return nil, errors.New("invalid value for required argument 'RuleName'")
	}
	if args.RuleSetName == nil {
		return nil, errors.New("invalid value for required argument 'RuleSetName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:cdn/latest:Rule"),
		},
	})
	opts = append(opts, aliases)
	var resource Rule
	err := ctx.RegisterResource("azure-nextgen:cdn/v20200901:Rule", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetRule gets an existing Rule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRule(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *RuleState, opts ...pulumi.ResourceOption) (*Rule, error) {
	var resource Rule
	err := ctx.ReadResource("azure-nextgen:cdn/v20200901:Rule", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Rule resources.
type ruleState struct {
	// A list of actions that are executed when all the conditions of a rule are satisfied.
	Actions []interface{} `pulumi:"actions"`
	// A list of conditions that must be matched for the actions to be executed
	Conditions       []interface{} `pulumi:"conditions"`
	DeploymentStatus *string       `pulumi:"deploymentStatus"`
	// If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
	MatchProcessingBehavior *string `pulumi:"matchProcessingBehavior"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.
	Order *int `pulumi:"order"`
	// Provisioning status
	ProvisioningState *string `pulumi:"provisioningState"`
	// Read only system data
	SystemData *SystemDataResponse `pulumi:"systemData"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type RuleState struct {
	// A list of actions that are executed when all the conditions of a rule are satisfied.
	Actions pulumi.ArrayInput
	// A list of conditions that must be matched for the actions to be executed
	Conditions       pulumi.ArrayInput
	DeploymentStatus pulumi.StringPtrInput
	// If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
	MatchProcessingBehavior pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.
	Order pulumi.IntPtrInput
	// Provisioning status
	ProvisioningState pulumi.StringPtrInput
	// Read only system data
	SystemData SystemDataResponsePtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (RuleState) ElementType() reflect.Type {
	return reflect.TypeOf((*ruleState)(nil)).Elem()
}

type ruleArgs struct {
	// A list of actions that are executed when all the conditions of a rule are satisfied.
	Actions []interface{} `pulumi:"actions"`
	// A list of conditions that must be matched for the actions to be executed
	Conditions []interface{} `pulumi:"conditions"`
	// If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
	MatchProcessingBehavior *string `pulumi:"matchProcessingBehavior"`
	// The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.
	Order int `pulumi:"order"`
	// Name of the CDN profile which is unique within the resource group.
	ProfileName string `pulumi:"profileName"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the delivery rule which is unique within the endpoint.
	RuleName string `pulumi:"ruleName"`
	// Name of the rule set under the profile.
	RuleSetName string `pulumi:"ruleSetName"`
}

// The set of arguments for constructing a Rule resource.
type RuleArgs struct {
	// A list of actions that are executed when all the conditions of a rule are satisfied.
	Actions pulumi.ArrayInput
	// A list of conditions that must be matched for the actions to be executed
	Conditions pulumi.ArrayInput
	// If this rule is a match should the rules engine continue running the remaining rules or stop. If not present, defaults to Continue.
	MatchProcessingBehavior pulumi.StringPtrInput
	// The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lesser order will be applied before a rule with a greater order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied.
	Order pulumi.IntInput
	// Name of the CDN profile which is unique within the resource group.
	ProfileName pulumi.StringInput
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName pulumi.StringInput
	// Name of the delivery rule which is unique within the endpoint.
	RuleName pulumi.StringInput
	// Name of the rule set under the profile.
	RuleSetName pulumi.StringInput
}

func (RuleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ruleArgs)(nil)).Elem()
}

type RuleInput interface {
	pulumi.Input

	ToRuleOutput() RuleOutput
	ToRuleOutputWithContext(ctx context.Context) RuleOutput
}

func (*Rule) ElementType() reflect.Type {
	return reflect.TypeOf((*Rule)(nil))
}

func (i *Rule) ToRuleOutput() RuleOutput {
	return i.ToRuleOutputWithContext(context.Background())
}

func (i *Rule) ToRuleOutputWithContext(ctx context.Context) RuleOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RuleOutput)
}

type RuleOutput struct {
	*pulumi.OutputState
}

func (RuleOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Rule)(nil))
}

func (o RuleOutput) ToRuleOutput() RuleOutput {
	return o
}

func (o RuleOutput) ToRuleOutputWithContext(ctx context.Context) RuleOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(RuleOutput{})
}
