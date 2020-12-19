// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170601preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The policy set definition.
type PolicySetDefinitionAtManagementGroup struct {
	pulumi.CustomResourceState

	// The policy set definition description.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// The display name of the policy set definition.
	DisplayName pulumi.StringPtrOutput `pulumi:"displayName"`
	// The policy set definition metadata.
	Metadata pulumi.AnyOutput `pulumi:"metadata"`
	// The name of the policy set definition.
	Name pulumi.StringOutput `pulumi:"name"`
	// The policy set definition parameters that can be used in policy definition references.
	Parameters pulumi.AnyOutput `pulumi:"parameters"`
	// An array of policy definition references.
	PolicyDefinitions PolicyDefinitionReferenceResponseArrayOutput `pulumi:"policyDefinitions"`
	// The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
	PolicyType pulumi.StringPtrOutput `pulumi:"policyType"`
	// The type of the resource (Microsoft.Authorization/policySetDefinitions).
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewPolicySetDefinitionAtManagementGroup registers a new resource with the given unique name, arguments, and options.
func NewPolicySetDefinitionAtManagementGroup(ctx *pulumi.Context,
	name string, args *PolicySetDefinitionAtManagementGroupArgs, opts ...pulumi.ResourceOption) (*PolicySetDefinitionAtManagementGroup, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ManagementGroupId == nil {
		return nil, errors.New("invalid value for required argument 'ManagementGroupId'")
	}
	if args.PolicyDefinitions == nil {
		return nil, errors.New("invalid value for required argument 'PolicyDefinitions'")
	}
	if args.PolicySetDefinitionName == nil {
		return nil, errors.New("invalid value for required argument 'PolicySetDefinitionName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:management/latest:PolicySetDefinitionAtManagementGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:management/v20180301:PolicySetDefinitionAtManagementGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:management/v20180501:PolicySetDefinitionAtManagementGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:management/v20190101:PolicySetDefinitionAtManagementGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:management/v20190601:PolicySetDefinitionAtManagementGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:management/v20190901:PolicySetDefinitionAtManagementGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:management/v20200301:PolicySetDefinitionAtManagementGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:management/v20200901:PolicySetDefinitionAtManagementGroup"),
		},
	})
	opts = append(opts, aliases)
	var resource PolicySetDefinitionAtManagementGroup
	err := ctx.RegisterResource("azure-nextgen:management/v20170601preview:PolicySetDefinitionAtManagementGroup", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPolicySetDefinitionAtManagementGroup gets an existing PolicySetDefinitionAtManagementGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPolicySetDefinitionAtManagementGroup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PolicySetDefinitionAtManagementGroupState, opts ...pulumi.ResourceOption) (*PolicySetDefinitionAtManagementGroup, error) {
	var resource PolicySetDefinitionAtManagementGroup
	err := ctx.ReadResource("azure-nextgen:management/v20170601preview:PolicySetDefinitionAtManagementGroup", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering PolicySetDefinitionAtManagementGroup resources.
type policySetDefinitionAtManagementGroupState struct {
	// The policy set definition description.
	Description *string `pulumi:"description"`
	// The display name of the policy set definition.
	DisplayName *string `pulumi:"displayName"`
	// The policy set definition metadata.
	Metadata interface{} `pulumi:"metadata"`
	// The name of the policy set definition.
	Name *string `pulumi:"name"`
	// The policy set definition parameters that can be used in policy definition references.
	Parameters interface{} `pulumi:"parameters"`
	// An array of policy definition references.
	PolicyDefinitions []PolicyDefinitionReferenceResponse `pulumi:"policyDefinitions"`
	// The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
	PolicyType *string `pulumi:"policyType"`
	// The type of the resource (Microsoft.Authorization/policySetDefinitions).
	Type *string `pulumi:"type"`
}

type PolicySetDefinitionAtManagementGroupState struct {
	// The policy set definition description.
	Description pulumi.StringPtrInput
	// The display name of the policy set definition.
	DisplayName pulumi.StringPtrInput
	// The policy set definition metadata.
	Metadata pulumi.Input
	// The name of the policy set definition.
	Name pulumi.StringPtrInput
	// The policy set definition parameters that can be used in policy definition references.
	Parameters pulumi.Input
	// An array of policy definition references.
	PolicyDefinitions PolicyDefinitionReferenceResponseArrayInput
	// The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
	PolicyType pulumi.StringPtrInput
	// The type of the resource (Microsoft.Authorization/policySetDefinitions).
	Type pulumi.StringPtrInput
}

func (PolicySetDefinitionAtManagementGroupState) ElementType() reflect.Type {
	return reflect.TypeOf((*policySetDefinitionAtManagementGroupState)(nil)).Elem()
}

type policySetDefinitionAtManagementGroupArgs struct {
	// The policy set definition description.
	Description *string `pulumi:"description"`
	// The display name of the policy set definition.
	DisplayName *string `pulumi:"displayName"`
	// The ID of the management group.
	ManagementGroupId string `pulumi:"managementGroupId"`
	// The policy set definition metadata.
	Metadata interface{} `pulumi:"metadata"`
	// The policy set definition parameters that can be used in policy definition references.
	Parameters interface{} `pulumi:"parameters"`
	// An array of policy definition references.
	PolicyDefinitions []PolicyDefinitionReference `pulumi:"policyDefinitions"`
	// The name of the policy set definition to create.
	PolicySetDefinitionName string `pulumi:"policySetDefinitionName"`
	// The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
	PolicyType *string `pulumi:"policyType"`
}

// The set of arguments for constructing a PolicySetDefinitionAtManagementGroup resource.
type PolicySetDefinitionAtManagementGroupArgs struct {
	// The policy set definition description.
	Description pulumi.StringPtrInput
	// The display name of the policy set definition.
	DisplayName pulumi.StringPtrInput
	// The ID of the management group.
	ManagementGroupId pulumi.StringInput
	// The policy set definition metadata.
	Metadata pulumi.Input
	// The policy set definition parameters that can be used in policy definition references.
	Parameters pulumi.Input
	// An array of policy definition references.
	PolicyDefinitions PolicyDefinitionReferenceArrayInput
	// The name of the policy set definition to create.
	PolicySetDefinitionName pulumi.StringInput
	// The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
	PolicyType pulumi.StringPtrInput
}

func (PolicySetDefinitionAtManagementGroupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*policySetDefinitionAtManagementGroupArgs)(nil)).Elem()
}

type PolicySetDefinitionAtManagementGroupInput interface {
	pulumi.Input

	ToPolicySetDefinitionAtManagementGroupOutput() PolicySetDefinitionAtManagementGroupOutput
	ToPolicySetDefinitionAtManagementGroupOutputWithContext(ctx context.Context) PolicySetDefinitionAtManagementGroupOutput
}

func (*PolicySetDefinitionAtManagementGroup) ElementType() reflect.Type {
	return reflect.TypeOf((*PolicySetDefinitionAtManagementGroup)(nil))
}

func (i *PolicySetDefinitionAtManagementGroup) ToPolicySetDefinitionAtManagementGroupOutput() PolicySetDefinitionAtManagementGroupOutput {
	return i.ToPolicySetDefinitionAtManagementGroupOutputWithContext(context.Background())
}

func (i *PolicySetDefinitionAtManagementGroup) ToPolicySetDefinitionAtManagementGroupOutputWithContext(ctx context.Context) PolicySetDefinitionAtManagementGroupOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PolicySetDefinitionAtManagementGroupOutput)
}

type PolicySetDefinitionAtManagementGroupOutput struct {
	*pulumi.OutputState
}

func (PolicySetDefinitionAtManagementGroupOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PolicySetDefinitionAtManagementGroup)(nil))
}

func (o PolicySetDefinitionAtManagementGroupOutput) ToPolicySetDefinitionAtManagementGroupOutput() PolicySetDefinitionAtManagementGroupOutput {
	return o
}

func (o PolicySetDefinitionAtManagementGroupOutput) ToPolicySetDefinitionAtManagementGroupOutputWithContext(ctx context.Context) PolicySetDefinitionAtManagementGroupOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(PolicySetDefinitionAtManagementGroupOutput{})
}
