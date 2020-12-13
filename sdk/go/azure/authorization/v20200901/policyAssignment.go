// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The policy assignment.
type PolicyAssignment struct {
	pulumi.CustomResourceState

	// This message will be part of response in case of policy violation.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// The display name of the policy assignment.
	DisplayName pulumi.StringPtrOutput `pulumi:"displayName"`
	// The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
	EnforcementMode pulumi.StringPtrOutput `pulumi:"enforcementMode"`
	// The managed identity associated with the policy assignment.
	Identity IdentityResponsePtrOutput `pulumi:"identity"`
	// The location of the policy assignment. Only required when utilizing managed identity.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
	Metadata pulumi.AnyOutput `pulumi:"metadata"`
	// The name of the policy assignment.
	Name pulumi.StringOutput `pulumi:"name"`
	// The messages that describe why a resource is non-compliant with the policy.
	NonComplianceMessages NonComplianceMessageResponseArrayOutput `pulumi:"nonComplianceMessages"`
	// The policy's excluded scopes.
	NotScopes pulumi.StringArrayOutput `pulumi:"notScopes"`
	// The parameter values for the assigned policy rule. The keys are the parameter names.
	Parameters ParameterValuesValueResponseMapOutput `pulumi:"parameters"`
	// The ID of the policy definition or policy set definition being assigned.
	PolicyDefinitionId pulumi.StringPtrOutput `pulumi:"policyDefinitionId"`
	// The scope for the policy assignment.
	Scope pulumi.StringOutput `pulumi:"scope"`
	// The type of the policy assignment.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewPolicyAssignment registers a new resource with the given unique name, arguments, and options.
func NewPolicyAssignment(ctx *pulumi.Context,
	name string, args *PolicyAssignmentArgs, opts ...pulumi.ResourceOption) (*PolicyAssignment, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.PolicyAssignmentName == nil {
		return nil, errors.New("invalid value for required argument 'PolicyAssignmentName'")
	}
	if args.Scope == nil {
		return nil, errors.New("invalid value for required argument 'Scope'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:authorization/latest:PolicyAssignment"),
		},
		{
			Type: pulumi.String("azure-nextgen:authorization/v20151001preview:PolicyAssignment"),
		},
		{
			Type: pulumi.String("azure-nextgen:authorization/v20151101:PolicyAssignment"),
		},
		{
			Type: pulumi.String("azure-nextgen:authorization/v20160401:PolicyAssignment"),
		},
		{
			Type: pulumi.String("azure-nextgen:authorization/v20161201:PolicyAssignment"),
		},
		{
			Type: pulumi.String("azure-nextgen:authorization/v20170601preview:PolicyAssignment"),
		},
		{
			Type: pulumi.String("azure-nextgen:authorization/v20180301:PolicyAssignment"),
		},
		{
			Type: pulumi.String("azure-nextgen:authorization/v20180501:PolicyAssignment"),
		},
		{
			Type: pulumi.String("azure-nextgen:authorization/v20190101:PolicyAssignment"),
		},
		{
			Type: pulumi.String("azure-nextgen:authorization/v20190601:PolicyAssignment"),
		},
		{
			Type: pulumi.String("azure-nextgen:authorization/v20190901:PolicyAssignment"),
		},
		{
			Type: pulumi.String("azure-nextgen:authorization/v20200301:PolicyAssignment"),
		},
	})
	opts = append(opts, aliases)
	var resource PolicyAssignment
	err := ctx.RegisterResource("azure-nextgen:authorization/v20200901:PolicyAssignment", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPolicyAssignment gets an existing PolicyAssignment resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPolicyAssignment(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PolicyAssignmentState, opts ...pulumi.ResourceOption) (*PolicyAssignment, error) {
	var resource PolicyAssignment
	err := ctx.ReadResource("azure-nextgen:authorization/v20200901:PolicyAssignment", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering PolicyAssignment resources.
type policyAssignmentState struct {
	// This message will be part of response in case of policy violation.
	Description *string `pulumi:"description"`
	// The display name of the policy assignment.
	DisplayName *string `pulumi:"displayName"`
	// The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
	EnforcementMode *string `pulumi:"enforcementMode"`
	// The managed identity associated with the policy assignment.
	Identity *IdentityResponse `pulumi:"identity"`
	// The location of the policy assignment. Only required when utilizing managed identity.
	Location *string `pulumi:"location"`
	// The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
	Metadata interface{} `pulumi:"metadata"`
	// The name of the policy assignment.
	Name *string `pulumi:"name"`
	// The messages that describe why a resource is non-compliant with the policy.
	NonComplianceMessages []NonComplianceMessageResponse `pulumi:"nonComplianceMessages"`
	// The policy's excluded scopes.
	NotScopes []string `pulumi:"notScopes"`
	// The parameter values for the assigned policy rule. The keys are the parameter names.
	Parameters map[string]ParameterValuesValueResponse `pulumi:"parameters"`
	// The ID of the policy definition or policy set definition being assigned.
	PolicyDefinitionId *string `pulumi:"policyDefinitionId"`
	// The scope for the policy assignment.
	Scope *string `pulumi:"scope"`
	// The type of the policy assignment.
	Type *string `pulumi:"type"`
}

type PolicyAssignmentState struct {
	// This message will be part of response in case of policy violation.
	Description pulumi.StringPtrInput
	// The display name of the policy assignment.
	DisplayName pulumi.StringPtrInput
	// The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
	EnforcementMode pulumi.StringPtrInput
	// The managed identity associated with the policy assignment.
	Identity IdentityResponsePtrInput
	// The location of the policy assignment. Only required when utilizing managed identity.
	Location pulumi.StringPtrInput
	// The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
	Metadata pulumi.Input
	// The name of the policy assignment.
	Name pulumi.StringPtrInput
	// The messages that describe why a resource is non-compliant with the policy.
	NonComplianceMessages NonComplianceMessageResponseArrayInput
	// The policy's excluded scopes.
	NotScopes pulumi.StringArrayInput
	// The parameter values for the assigned policy rule. The keys are the parameter names.
	Parameters ParameterValuesValueResponseMapInput
	// The ID of the policy definition or policy set definition being assigned.
	PolicyDefinitionId pulumi.StringPtrInput
	// The scope for the policy assignment.
	Scope pulumi.StringPtrInput
	// The type of the policy assignment.
	Type pulumi.StringPtrInput
}

func (PolicyAssignmentState) ElementType() reflect.Type {
	return reflect.TypeOf((*policyAssignmentState)(nil)).Elem()
}

type policyAssignmentArgs struct {
	// This message will be part of response in case of policy violation.
	Description *string `pulumi:"description"`
	// The display name of the policy assignment.
	DisplayName *string `pulumi:"displayName"`
	// The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
	EnforcementMode *string `pulumi:"enforcementMode"`
	// The managed identity associated with the policy assignment.
	Identity *Identity `pulumi:"identity"`
	// The location of the policy assignment. Only required when utilizing managed identity.
	Location *string `pulumi:"location"`
	// The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
	Metadata interface{} `pulumi:"metadata"`
	// The messages that describe why a resource is non-compliant with the policy.
	NonComplianceMessages []NonComplianceMessage `pulumi:"nonComplianceMessages"`
	// The policy's excluded scopes.
	NotScopes []string `pulumi:"notScopes"`
	// The parameter values for the assigned policy rule. The keys are the parameter names.
	Parameters map[string]ParameterValuesValue `pulumi:"parameters"`
	// The name of the policy assignment.
	PolicyAssignmentName string `pulumi:"policyAssignmentName"`
	// The ID of the policy definition or policy set definition being assigned.
	PolicyDefinitionId *string `pulumi:"policyDefinitionId"`
	// The scope of the policy assignment. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
	Scope string `pulumi:"scope"`
}

// The set of arguments for constructing a PolicyAssignment resource.
type PolicyAssignmentArgs struct {
	// This message will be part of response in case of policy violation.
	Description pulumi.StringPtrInput
	// The display name of the policy assignment.
	DisplayName pulumi.StringPtrInput
	// The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
	EnforcementMode pulumi.StringPtrInput
	// The managed identity associated with the policy assignment.
	Identity IdentityPtrInput
	// The location of the policy assignment. Only required when utilizing managed identity.
	Location pulumi.StringPtrInput
	// The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
	Metadata pulumi.Input
	// The messages that describe why a resource is non-compliant with the policy.
	NonComplianceMessages NonComplianceMessageArrayInput
	// The policy's excluded scopes.
	NotScopes pulumi.StringArrayInput
	// The parameter values for the assigned policy rule. The keys are the parameter names.
	Parameters ParameterValuesValueMapInput
	// The name of the policy assignment.
	PolicyAssignmentName pulumi.StringInput
	// The ID of the policy definition or policy set definition being assigned.
	PolicyDefinitionId pulumi.StringPtrInput
	// The scope of the policy assignment. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
	Scope pulumi.StringInput
}

func (PolicyAssignmentArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*policyAssignmentArgs)(nil)).Elem()
}

type PolicyAssignmentInput interface {
	pulumi.Input

	ToPolicyAssignmentOutput() PolicyAssignmentOutput
	ToPolicyAssignmentOutputWithContext(ctx context.Context) PolicyAssignmentOutput
}

func (PolicyAssignment) ElementType() reflect.Type {
	return reflect.TypeOf((*PolicyAssignment)(nil)).Elem()
}

func (i PolicyAssignment) ToPolicyAssignmentOutput() PolicyAssignmentOutput {
	return i.ToPolicyAssignmentOutputWithContext(context.Background())
}

func (i PolicyAssignment) ToPolicyAssignmentOutputWithContext(ctx context.Context) PolicyAssignmentOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PolicyAssignmentOutput)
}

type PolicyAssignmentOutput struct {
	*pulumi.OutputState
}

func (PolicyAssignmentOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PolicyAssignmentOutput)(nil)).Elem()
}

func (o PolicyAssignmentOutput) ToPolicyAssignmentOutput() PolicyAssignmentOutput {
	return o
}

func (o PolicyAssignmentOutput) ToPolicyAssignmentOutputWithContext(ctx context.Context) PolicyAssignmentOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(PolicyAssignmentOutput{})
}
