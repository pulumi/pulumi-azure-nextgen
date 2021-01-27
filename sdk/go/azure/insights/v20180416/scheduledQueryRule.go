// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180416

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The Log Search Rule resource.
type ScheduledQueryRule struct {
	pulumi.CustomResourceState

	// Action needs to be taken on rule execution.
	Action pulumi.AnyOutput `pulumi:"action"`
	// The description of the Log Search rule.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// The display name of the alert rule
	DisplayName pulumi.StringPtrOutput `pulumi:"displayName"`
	// The flag which indicates whether the Log Search rule is enabled. Value should be true or false
	Enabled pulumi.StringPtrOutput `pulumi:"enabled"`
	// The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
	Kind pulumi.StringOutput `pulumi:"kind"`
	// Last time the rule was updated in IS08601 format.
	LastUpdatedTime pulumi.StringOutput `pulumi:"lastUpdatedTime"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// Azure resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Provisioning state of the scheduled query rule
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Schedule (Frequency, Time Window) for rule. Required for action type - AlertingAction
	Schedule ScheduleResponsePtrOutput `pulumi:"schedule"`
	// Data Source against which rule will Query Data
	Source SourceResponseOutput `pulumi:"source"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Azure resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewScheduledQueryRule registers a new resource with the given unique name, arguments, and options.
func NewScheduledQueryRule(ctx *pulumi.Context,
	name string, args *ScheduledQueryRuleArgs, opts ...pulumi.ResourceOption) (*ScheduledQueryRule, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Action == nil {
		return nil, errors.New("invalid value for required argument 'Action'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.RuleName == nil {
		return nil, errors.New("invalid value for required argument 'RuleName'")
	}
	if args.Source == nil {
		return nil, errors.New("invalid value for required argument 'Source'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:insights/latest:ScheduledQueryRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:insights/v20200501preview:ScheduledQueryRule"),
		},
	})
	opts = append(opts, aliases)
	var resource ScheduledQueryRule
	err := ctx.RegisterResource("azure-nextgen:insights/v20180416:ScheduledQueryRule", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetScheduledQueryRule gets an existing ScheduledQueryRule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetScheduledQueryRule(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ScheduledQueryRuleState, opts ...pulumi.ResourceOption) (*ScheduledQueryRule, error) {
	var resource ScheduledQueryRule
	err := ctx.ReadResource("azure-nextgen:insights/v20180416:ScheduledQueryRule", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ScheduledQueryRule resources.
type scheduledQueryRuleState struct {
	// Action needs to be taken on rule execution.
	Action interface{} `pulumi:"action"`
	// The description of the Log Search rule.
	Description *string `pulumi:"description"`
	// The display name of the alert rule
	DisplayName *string `pulumi:"displayName"`
	// The flag which indicates whether the Log Search rule is enabled. Value should be true or false
	Enabled *string `pulumi:"enabled"`
	// The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
	Etag *string `pulumi:"etag"`
	// Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
	Kind *string `pulumi:"kind"`
	// Last time the rule was updated in IS08601 format.
	LastUpdatedTime *string `pulumi:"lastUpdatedTime"`
	// Resource location
	Location *string `pulumi:"location"`
	// Azure resource name
	Name *string `pulumi:"name"`
	// Provisioning state of the scheduled query rule
	ProvisioningState *string `pulumi:"provisioningState"`
	// Schedule (Frequency, Time Window) for rule. Required for action type - AlertingAction
	Schedule *ScheduleResponse `pulumi:"schedule"`
	// Data Source against which rule will Query Data
	Source *SourceResponse `pulumi:"source"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Azure resource type
	Type *string `pulumi:"type"`
}

type ScheduledQueryRuleState struct {
	// Action needs to be taken on rule execution.
	Action pulumi.Input
	// The description of the Log Search rule.
	Description pulumi.StringPtrInput
	// The display name of the alert rule
	DisplayName pulumi.StringPtrInput
	// The flag which indicates whether the Log Search rule is enabled. Value should be true or false
	Enabled pulumi.StringPtrInput
	// The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
	Etag pulumi.StringPtrInput
	// Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
	Kind pulumi.StringPtrInput
	// Last time the rule was updated in IS08601 format.
	LastUpdatedTime pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// Azure resource name
	Name pulumi.StringPtrInput
	// Provisioning state of the scheduled query rule
	ProvisioningState pulumi.StringPtrInput
	// Schedule (Frequency, Time Window) for rule. Required for action type - AlertingAction
	Schedule ScheduleResponsePtrInput
	// Data Source against which rule will Query Data
	Source SourceResponsePtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Azure resource type
	Type pulumi.StringPtrInput
}

func (ScheduledQueryRuleState) ElementType() reflect.Type {
	return reflect.TypeOf((*scheduledQueryRuleState)(nil)).Elem()
}

type scheduledQueryRuleArgs struct {
	// Action needs to be taken on rule execution.
	Action interface{} `pulumi:"action"`
	// The description of the Log Search rule.
	Description *string `pulumi:"description"`
	// The display name of the alert rule
	DisplayName *string `pulumi:"displayName"`
	// The flag which indicates whether the Log Search rule is enabled. Value should be true or false
	Enabled *string `pulumi:"enabled"`
	// Resource location
	Location string `pulumi:"location"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the rule.
	RuleName string `pulumi:"ruleName"`
	// Schedule (Frequency, Time Window) for rule. Required for action type - AlertingAction
	Schedule *Schedule `pulumi:"schedule"`
	// Data Source against which rule will Query Data
	Source Source `pulumi:"source"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a ScheduledQueryRule resource.
type ScheduledQueryRuleArgs struct {
	// Action needs to be taken on rule execution.
	Action pulumi.Input
	// The description of the Log Search rule.
	Description pulumi.StringPtrInput
	// The display name of the alert rule
	DisplayName pulumi.StringPtrInput
	// The flag which indicates whether the Log Search rule is enabled. Value should be true or false
	Enabled pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the rule.
	RuleName pulumi.StringInput
	// Schedule (Frequency, Time Window) for rule. Required for action type - AlertingAction
	Schedule SchedulePtrInput
	// Data Source against which rule will Query Data
	Source SourceInput
	// Resource tags
	Tags pulumi.StringMapInput
}

func (ScheduledQueryRuleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*scheduledQueryRuleArgs)(nil)).Elem()
}

type ScheduledQueryRuleInput interface {
	pulumi.Input

	ToScheduledQueryRuleOutput() ScheduledQueryRuleOutput
	ToScheduledQueryRuleOutputWithContext(ctx context.Context) ScheduledQueryRuleOutput
}

func (*ScheduledQueryRule) ElementType() reflect.Type {
	return reflect.TypeOf((*ScheduledQueryRule)(nil))
}

func (i *ScheduledQueryRule) ToScheduledQueryRuleOutput() ScheduledQueryRuleOutput {
	return i.ToScheduledQueryRuleOutputWithContext(context.Background())
}

func (i *ScheduledQueryRule) ToScheduledQueryRuleOutputWithContext(ctx context.Context) ScheduledQueryRuleOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ScheduledQueryRuleOutput)
}

type ScheduledQueryRuleOutput struct {
	*pulumi.OutputState
}

func (ScheduledQueryRuleOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ScheduledQueryRule)(nil))
}

func (o ScheduledQueryRuleOutput) ToScheduledQueryRuleOutput() ScheduledQueryRuleOutput {
	return o
}

func (o ScheduledQueryRuleOutput) ToScheduledQueryRuleOutputWithContext(ctx context.Context) ScheduledQueryRuleOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ScheduledQueryRuleOutput{})
}
