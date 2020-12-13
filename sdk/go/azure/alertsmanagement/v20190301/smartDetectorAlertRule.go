// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190301

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The alert rule information
type SmartDetectorAlertRule struct {
	pulumi.CustomResourceState

	// The alert rule actions.
	ActionGroups ActionGroupsInformationResponseOutput `pulumi:"actionGroups"`
	// The alert rule description.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// The alert rule's detector.
	Detector DetectorResponseOutput `pulumi:"detector"`
	// The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
	Frequency pulumi.StringOutput `pulumi:"frequency"`
	// The resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The alert rule resources scope.
	Scope pulumi.StringArrayOutput `pulumi:"scope"`
	// The alert rule severity.
	Severity pulumi.StringOutput `pulumi:"severity"`
	// The alert rule state.
	State pulumi.StringOutput `pulumi:"state"`
	// The alert rule throttling information.
	Throttling ThrottlingInformationResponsePtrOutput `pulumi:"throttling"`
	// The resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewSmartDetectorAlertRule registers a new resource with the given unique name, arguments, and options.
func NewSmartDetectorAlertRule(ctx *pulumi.Context,
	name string, args *SmartDetectorAlertRuleArgs, opts ...pulumi.ResourceOption) (*SmartDetectorAlertRule, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ActionGroups == nil {
		return nil, errors.New("invalid value for required argument 'ActionGroups'")
	}
	if args.AlertRuleName == nil {
		return nil, errors.New("invalid value for required argument 'AlertRuleName'")
	}
	if args.Detector == nil {
		return nil, errors.New("invalid value for required argument 'Detector'")
	}
	if args.Frequency == nil {
		return nil, errors.New("invalid value for required argument 'Frequency'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.Scope == nil {
		return nil, errors.New("invalid value for required argument 'Scope'")
	}
	if args.Severity == nil {
		return nil, errors.New("invalid value for required argument 'Severity'")
	}
	if args.State == nil {
		return nil, errors.New("invalid value for required argument 'State'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:alertsmanagement/latest:SmartDetectorAlertRule"),
		},
		{
			Type: pulumi.String("azure-nextgen:alertsmanagement/v20190601:SmartDetectorAlertRule"),
		},
	})
	opts = append(opts, aliases)
	var resource SmartDetectorAlertRule
	err := ctx.RegisterResource("azure-nextgen:alertsmanagement/v20190301:SmartDetectorAlertRule", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSmartDetectorAlertRule gets an existing SmartDetectorAlertRule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSmartDetectorAlertRule(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SmartDetectorAlertRuleState, opts ...pulumi.ResourceOption) (*SmartDetectorAlertRule, error) {
	var resource SmartDetectorAlertRule
	err := ctx.ReadResource("azure-nextgen:alertsmanagement/v20190301:SmartDetectorAlertRule", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SmartDetectorAlertRule resources.
type smartDetectorAlertRuleState struct {
	// The alert rule actions.
	ActionGroups *ActionGroupsInformationResponse `pulumi:"actionGroups"`
	// The alert rule description.
	Description *string `pulumi:"description"`
	// The alert rule's detector.
	Detector *DetectorResponse `pulumi:"detector"`
	// The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
	Frequency *string `pulumi:"frequency"`
	// The resource name.
	Name *string `pulumi:"name"`
	// The alert rule resources scope.
	Scope []string `pulumi:"scope"`
	// The alert rule severity.
	Severity *string `pulumi:"severity"`
	// The alert rule state.
	State *string `pulumi:"state"`
	// The alert rule throttling information.
	Throttling *ThrottlingInformationResponse `pulumi:"throttling"`
	// The resource type.
	Type *string `pulumi:"type"`
}

type SmartDetectorAlertRuleState struct {
	// The alert rule actions.
	ActionGroups ActionGroupsInformationResponsePtrInput
	// The alert rule description.
	Description pulumi.StringPtrInput
	// The alert rule's detector.
	Detector DetectorResponsePtrInput
	// The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
	Frequency pulumi.StringPtrInput
	// The resource name.
	Name pulumi.StringPtrInput
	// The alert rule resources scope.
	Scope pulumi.StringArrayInput
	// The alert rule severity.
	Severity pulumi.StringPtrInput
	// The alert rule state.
	State pulumi.StringPtrInput
	// The alert rule throttling information.
	Throttling ThrottlingInformationResponsePtrInput
	// The resource type.
	Type pulumi.StringPtrInput
}

func (SmartDetectorAlertRuleState) ElementType() reflect.Type {
	return reflect.TypeOf((*smartDetectorAlertRuleState)(nil)).Elem()
}

type smartDetectorAlertRuleArgs struct {
	// The alert rule actions.
	ActionGroups ActionGroupsInformation `pulumi:"actionGroups"`
	// The name of the alert rule.
	AlertRuleName string `pulumi:"alertRuleName"`
	// The alert rule description.
	Description *string `pulumi:"description"`
	// The alert rule's detector.
	Detector Detector `pulumi:"detector"`
	// The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
	Frequency string `pulumi:"frequency"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The alert rule resources scope.
	Scope []string `pulumi:"scope"`
	// The alert rule severity.
	Severity string `pulumi:"severity"`
	// The alert rule state.
	State string `pulumi:"state"`
	// The alert rule throttling information.
	Throttling *ThrottlingInformation `pulumi:"throttling"`
}

// The set of arguments for constructing a SmartDetectorAlertRule resource.
type SmartDetectorAlertRuleArgs struct {
	// The alert rule actions.
	ActionGroups ActionGroupsInformationInput
	// The name of the alert rule.
	AlertRuleName pulumi.StringInput
	// The alert rule description.
	Description pulumi.StringPtrInput
	// The alert rule's detector.
	Detector DetectorInput
	// The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
	Frequency pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The alert rule resources scope.
	Scope pulumi.StringArrayInput
	// The alert rule severity.
	Severity pulumi.StringInput
	// The alert rule state.
	State pulumi.StringInput
	// The alert rule throttling information.
	Throttling ThrottlingInformationPtrInput
}

func (SmartDetectorAlertRuleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*smartDetectorAlertRuleArgs)(nil)).Elem()
}

type SmartDetectorAlertRuleInput interface {
	pulumi.Input

	ToSmartDetectorAlertRuleOutput() SmartDetectorAlertRuleOutput
	ToSmartDetectorAlertRuleOutputWithContext(ctx context.Context) SmartDetectorAlertRuleOutput
}

func (SmartDetectorAlertRule) ElementType() reflect.Type {
	return reflect.TypeOf((*SmartDetectorAlertRule)(nil)).Elem()
}

func (i SmartDetectorAlertRule) ToSmartDetectorAlertRuleOutput() SmartDetectorAlertRuleOutput {
	return i.ToSmartDetectorAlertRuleOutputWithContext(context.Background())
}

func (i SmartDetectorAlertRule) ToSmartDetectorAlertRuleOutputWithContext(ctx context.Context) SmartDetectorAlertRuleOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SmartDetectorAlertRuleOutput)
}

type SmartDetectorAlertRuleOutput struct {
	*pulumi.OutputState
}

func (SmartDetectorAlertRuleOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*SmartDetectorAlertRuleOutput)(nil)).Elem()
}

func (o SmartDetectorAlertRuleOutput) ToSmartDetectorAlertRuleOutput() SmartDetectorAlertRuleOutput {
	return o
}

func (o SmartDetectorAlertRuleOutput) ToSmartDetectorAlertRuleOutputWithContext(ctx context.Context) SmartDetectorAlertRuleOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(SmartDetectorAlertRuleOutput{})
}
