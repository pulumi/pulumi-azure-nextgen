// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160701

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Description of a Namespace AuthorizationRules.
type HybridConnectionAuthorizationRule struct {
	pulumi.CustomResourceState

	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// The rights associated with the rule.
	Rights pulumi.StringArrayOutput `pulumi:"rights"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewHybridConnectionAuthorizationRule registers a new resource with the given unique name, arguments, and options.
func NewHybridConnectionAuthorizationRule(ctx *pulumi.Context,
	name string, args *HybridConnectionAuthorizationRuleArgs, opts ...pulumi.ResourceOption) (*HybridConnectionAuthorizationRule, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AuthorizationRuleName == nil {
		return nil, errors.New("invalid value for required argument 'AuthorizationRuleName'")
	}
	if args.HybridConnectionName == nil {
		return nil, errors.New("invalid value for required argument 'HybridConnectionName'")
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
			Type: pulumi.String("azure-nextgen:relay/latest:HybridConnectionAuthorizationRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:relay/v20170401:HybridConnectionAuthorizationRule"),
		},
	})
	opts = append(opts, aliases)
	var resource HybridConnectionAuthorizationRule
	err := ctx.RegisterResource("azure-nextgen:relay/v20160701:HybridConnectionAuthorizationRule", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetHybridConnectionAuthorizationRule gets an existing HybridConnectionAuthorizationRule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetHybridConnectionAuthorizationRule(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *HybridConnectionAuthorizationRuleState, opts ...pulumi.ResourceOption) (*HybridConnectionAuthorizationRule, error) {
	var resource HybridConnectionAuthorizationRule
	err := ctx.ReadResource("azure-nextgen:relay/v20160701:HybridConnectionAuthorizationRule", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering HybridConnectionAuthorizationRule resources.
type hybridConnectionAuthorizationRuleState struct {
	// Resource name
	Name *string `pulumi:"name"`
	// The rights associated with the rule.
	Rights []string `pulumi:"rights"`
	// Resource type
	Type *string `pulumi:"type"`
}

type HybridConnectionAuthorizationRuleState struct {
	// Resource name
	Name pulumi.StringPtrInput
	// The rights associated with the rule.
	Rights pulumi.StringArrayInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (HybridConnectionAuthorizationRuleState) ElementType() reflect.Type {
	return reflect.TypeOf((*hybridConnectionAuthorizationRuleState)(nil)).Elem()
}

type hybridConnectionAuthorizationRuleArgs struct {
	// The authorizationRule name.
	AuthorizationRuleName string `pulumi:"authorizationRuleName"`
	// The hybrid connection name.
	HybridConnectionName string `pulumi:"hybridConnectionName"`
	// The Namespace Name
	NamespaceName string `pulumi:"namespaceName"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The rights associated with the rule.
	Rights []string `pulumi:"rights"`
}

// The set of arguments for constructing a HybridConnectionAuthorizationRule resource.
type HybridConnectionAuthorizationRuleArgs struct {
	// The authorizationRule name.
	AuthorizationRuleName pulumi.StringInput
	// The hybrid connection name.
	HybridConnectionName pulumi.StringInput
	// The Namespace Name
	NamespaceName pulumi.StringInput
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName pulumi.StringInput
	// The rights associated with the rule.
	Rights pulumi.StringArrayInput
}

func (HybridConnectionAuthorizationRuleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*hybridConnectionAuthorizationRuleArgs)(nil)).Elem()
}

type HybridConnectionAuthorizationRuleInput interface {
	pulumi.Input

	ToHybridConnectionAuthorizationRuleOutput() HybridConnectionAuthorizationRuleOutput
	ToHybridConnectionAuthorizationRuleOutputWithContext(ctx context.Context) HybridConnectionAuthorizationRuleOutput
}

func (*HybridConnectionAuthorizationRule) ElementType() reflect.Type {
	return reflect.TypeOf((*HybridConnectionAuthorizationRule)(nil))
}

func (i *HybridConnectionAuthorizationRule) ToHybridConnectionAuthorizationRuleOutput() HybridConnectionAuthorizationRuleOutput {
	return i.ToHybridConnectionAuthorizationRuleOutputWithContext(context.Background())
}

func (i *HybridConnectionAuthorizationRule) ToHybridConnectionAuthorizationRuleOutputWithContext(ctx context.Context) HybridConnectionAuthorizationRuleOutput {
	return pulumi.ToOutputWithContext(ctx, i).(HybridConnectionAuthorizationRuleOutput)
}

type HybridConnectionAuthorizationRuleOutput struct {
	*pulumi.OutputState
}

func (HybridConnectionAuthorizationRuleOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*HybridConnectionAuthorizationRule)(nil))
}

func (o HybridConnectionAuthorizationRuleOutput) ToHybridConnectionAuthorizationRuleOutput() HybridConnectionAuthorizationRuleOutput {
	return o
}

func (o HybridConnectionAuthorizationRuleOutput) ToHybridConnectionAuthorizationRuleOutputWithContext(ctx context.Context) HybridConnectionAuthorizationRuleOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(HybridConnectionAuthorizationRuleOutput{})
}
