// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190601

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The policy definition.
type PolicyDefinitionAtManagementGroup struct {
	pulumi.CustomResourceState

	// The policy definition description.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// The display name of the policy definition.
	DisplayName pulumi.StringPtrOutput `pulumi:"displayName"`
	// The policy definition metadata.
	Metadata pulumi.AnyOutput `pulumi:"metadata"`
	// The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
	Mode pulumi.StringPtrOutput `pulumi:"mode"`
	// The name of the policy definition.
	Name pulumi.StringOutput `pulumi:"name"`
	// Required if a parameter is used in policy rule.
	Parameters pulumi.AnyOutput `pulumi:"parameters"`
	// The policy rule.
	PolicyRule pulumi.AnyOutput `pulumi:"policyRule"`
	// The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
	PolicyType pulumi.StringPtrOutput `pulumi:"policyType"`
	// The type of the resource (Microsoft.Authorization/policyDefinitions).
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewPolicyDefinitionAtManagementGroup registers a new resource with the given unique name, arguments, and options.
func NewPolicyDefinitionAtManagementGroup(ctx *pulumi.Context,
	name string, args *PolicyDefinitionAtManagementGroupArgs, opts ...pulumi.ResourceOption) (*PolicyDefinitionAtManagementGroup, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ManagementGroupId == nil {
		return nil, errors.New("invalid value for required argument 'ManagementGroupId'")
	}
	if args.PolicyDefinitionName == nil {
		return nil, errors.New("invalid value for required argument 'PolicyDefinitionName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:management/latest:PolicyDefinitionAtManagementGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:management/v20161201:PolicyDefinitionAtManagementGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:management/v20180301:PolicyDefinitionAtManagementGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:management/v20180501:PolicyDefinitionAtManagementGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:management/v20190101:PolicyDefinitionAtManagementGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:management/v20190901:PolicyDefinitionAtManagementGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:management/v20200301:PolicyDefinitionAtManagementGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:management/v20200901:PolicyDefinitionAtManagementGroup"),
		},
	})
	opts = append(opts, aliases)
	var resource PolicyDefinitionAtManagementGroup
	err := ctx.RegisterResource("azure-nextgen:management/v20190601:PolicyDefinitionAtManagementGroup", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPolicyDefinitionAtManagementGroup gets an existing PolicyDefinitionAtManagementGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPolicyDefinitionAtManagementGroup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PolicyDefinitionAtManagementGroupState, opts ...pulumi.ResourceOption) (*PolicyDefinitionAtManagementGroup, error) {
	var resource PolicyDefinitionAtManagementGroup
	err := ctx.ReadResource("azure-nextgen:management/v20190601:PolicyDefinitionAtManagementGroup", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering PolicyDefinitionAtManagementGroup resources.
type policyDefinitionAtManagementGroupState struct {
	// The policy definition description.
	Description *string `pulumi:"description"`
	// The display name of the policy definition.
	DisplayName *string `pulumi:"displayName"`
	// The policy definition metadata.
	Metadata interface{} `pulumi:"metadata"`
	// The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
	Mode *string `pulumi:"mode"`
	// The name of the policy definition.
	Name *string `pulumi:"name"`
	// Required if a parameter is used in policy rule.
	Parameters interface{} `pulumi:"parameters"`
	// The policy rule.
	PolicyRule interface{} `pulumi:"policyRule"`
	// The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
	PolicyType *string `pulumi:"policyType"`
	// The type of the resource (Microsoft.Authorization/policyDefinitions).
	Type *string `pulumi:"type"`
}

type PolicyDefinitionAtManagementGroupState struct {
	// The policy definition description.
	Description pulumi.StringPtrInput
	// The display name of the policy definition.
	DisplayName pulumi.StringPtrInput
	// The policy definition metadata.
	Metadata pulumi.Input
	// The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
	Mode pulumi.StringPtrInput
	// The name of the policy definition.
	Name pulumi.StringPtrInput
	// Required if a parameter is used in policy rule.
	Parameters pulumi.Input
	// The policy rule.
	PolicyRule pulumi.Input
	// The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
	PolicyType pulumi.StringPtrInput
	// The type of the resource (Microsoft.Authorization/policyDefinitions).
	Type pulumi.StringPtrInput
}

func (PolicyDefinitionAtManagementGroupState) ElementType() reflect.Type {
	return reflect.TypeOf((*policyDefinitionAtManagementGroupState)(nil)).Elem()
}

type policyDefinitionAtManagementGroupArgs struct {
	// The policy definition description.
	Description *string `pulumi:"description"`
	// The display name of the policy definition.
	DisplayName *string `pulumi:"displayName"`
	// The ID of the management group.
	ManagementGroupId string `pulumi:"managementGroupId"`
	// The policy definition metadata.
	Metadata interface{} `pulumi:"metadata"`
	// The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
	Mode *string `pulumi:"mode"`
	// Required if a parameter is used in policy rule.
	Parameters interface{} `pulumi:"parameters"`
	// The name of the policy definition to create.
	PolicyDefinitionName string `pulumi:"policyDefinitionName"`
	// The policy rule.
	PolicyRule interface{} `pulumi:"policyRule"`
	// The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
	PolicyType *string `pulumi:"policyType"`
}

// The set of arguments for constructing a PolicyDefinitionAtManagementGroup resource.
type PolicyDefinitionAtManagementGroupArgs struct {
	// The policy definition description.
	Description pulumi.StringPtrInput
	// The display name of the policy definition.
	DisplayName pulumi.StringPtrInput
	// The ID of the management group.
	ManagementGroupId pulumi.StringInput
	// The policy definition metadata.
	Metadata pulumi.Input
	// The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
	Mode pulumi.StringPtrInput
	// Required if a parameter is used in policy rule.
	Parameters pulumi.Input
	// The name of the policy definition to create.
	PolicyDefinitionName pulumi.StringInput
	// The policy rule.
	PolicyRule pulumi.Input
	// The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
	PolicyType pulumi.StringPtrInput
}

func (PolicyDefinitionAtManagementGroupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*policyDefinitionAtManagementGroupArgs)(nil)).Elem()
}

type PolicyDefinitionAtManagementGroupInput interface {
	pulumi.Input

	ToPolicyDefinitionAtManagementGroupOutput() PolicyDefinitionAtManagementGroupOutput
	ToPolicyDefinitionAtManagementGroupOutputWithContext(ctx context.Context) PolicyDefinitionAtManagementGroupOutput
}

func (*PolicyDefinitionAtManagementGroup) ElementType() reflect.Type {
	return reflect.TypeOf((*PolicyDefinitionAtManagementGroup)(nil))
}

func (i *PolicyDefinitionAtManagementGroup) ToPolicyDefinitionAtManagementGroupOutput() PolicyDefinitionAtManagementGroupOutput {
	return i.ToPolicyDefinitionAtManagementGroupOutputWithContext(context.Background())
}

func (i *PolicyDefinitionAtManagementGroup) ToPolicyDefinitionAtManagementGroupOutputWithContext(ctx context.Context) PolicyDefinitionAtManagementGroupOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PolicyDefinitionAtManagementGroupOutput)
}

type PolicyDefinitionAtManagementGroupOutput struct {
	*pulumi.OutputState
}

func (PolicyDefinitionAtManagementGroupOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PolicyDefinitionAtManagementGroup)(nil))
}

func (o PolicyDefinitionAtManagementGroupOutput) ToPolicyDefinitionAtManagementGroupOutput() PolicyDefinitionAtManagementGroupOutput {
	return o
}

func (o PolicyDefinitionAtManagementGroupOutput) ToPolicyDefinitionAtManagementGroupOutputWithContext(ctx context.Context) PolicyDefinitionAtManagementGroupOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(PolicyDefinitionAtManagementGroupOutput{})
}
