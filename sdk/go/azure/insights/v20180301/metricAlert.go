// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180301

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The metric alert resource.
type MetricAlert struct {
	pulumi.CustomResourceState

	// the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
	Actions MetricAlertActionResponseArrayOutput `pulumi:"actions"`
	// the flag that indicates whether the alert should be auto resolved or not. The default is true.
	AutoMitigate pulumi.BoolPtrOutput `pulumi:"autoMitigate"`
	// defines the specific alert criteria information.
	Criteria pulumi.AnyOutput `pulumi:"criteria"`
	// the description of the metric alert that will be included in the alert email.
	Description pulumi.StringOutput `pulumi:"description"`
	// the flag that indicates whether the metric alert is enabled.
	Enabled pulumi.BoolOutput `pulumi:"enabled"`
	// how often the metric alert is evaluated represented in ISO 8601 duration format.
	EvaluationFrequency pulumi.StringOutput `pulumi:"evaluationFrequency"`
	// Last time the rule was updated in ISO8601 format.
	LastUpdatedTime pulumi.StringOutput `pulumi:"lastUpdatedTime"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// Azure resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// the list of resource id's that this metric alert is scoped to.
	Scopes pulumi.StringArrayOutput `pulumi:"scopes"`
	// Alert severity {0, 1, 2, 3, 4}
	Severity pulumi.IntOutput `pulumi:"severity"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// the region of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria.
	TargetResourceRegion pulumi.StringPtrOutput `pulumi:"targetResourceRegion"`
	// the resource type of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria.
	TargetResourceType pulumi.StringPtrOutput `pulumi:"targetResourceType"`
	// Azure resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.
	WindowSize pulumi.StringOutput `pulumi:"windowSize"`
}

// NewMetricAlert registers a new resource with the given unique name, arguments, and options.
func NewMetricAlert(ctx *pulumi.Context,
	name string, args *MetricAlertArgs, opts ...pulumi.ResourceOption) (*MetricAlert, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Criteria == nil {
		return nil, errors.New("invalid value for required argument 'Criteria'")
	}
	if args.Description == nil {
		return nil, errors.New("invalid value for required argument 'Description'")
	}
	if args.Enabled == nil {
		return nil, errors.New("invalid value for required argument 'Enabled'")
	}
	if args.EvaluationFrequency == nil {
		return nil, errors.New("invalid value for required argument 'EvaluationFrequency'")
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
	if args.Severity == nil {
		return nil, errors.New("invalid value for required argument 'Severity'")
	}
	if args.WindowSize == nil {
		return nil, errors.New("invalid value for required argument 'WindowSize'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:insights/latest:MetricAlert"),
		},
	})
	opts = append(opts, aliases)
	var resource MetricAlert
	err := ctx.RegisterResource("azure-nextgen:insights/v20180301:MetricAlert", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetMetricAlert gets an existing MetricAlert resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetMetricAlert(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *MetricAlertState, opts ...pulumi.ResourceOption) (*MetricAlert, error) {
	var resource MetricAlert
	err := ctx.ReadResource("azure-nextgen:insights/v20180301:MetricAlert", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering MetricAlert resources.
type metricAlertState struct {
	// the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
	Actions []MetricAlertActionResponse `pulumi:"actions"`
	// the flag that indicates whether the alert should be auto resolved or not. The default is true.
	AutoMitigate *bool `pulumi:"autoMitigate"`
	// defines the specific alert criteria information.
	Criteria interface{} `pulumi:"criteria"`
	// the description of the metric alert that will be included in the alert email.
	Description *string `pulumi:"description"`
	// the flag that indicates whether the metric alert is enabled.
	Enabled *bool `pulumi:"enabled"`
	// how often the metric alert is evaluated represented in ISO 8601 duration format.
	EvaluationFrequency *string `pulumi:"evaluationFrequency"`
	// Last time the rule was updated in ISO8601 format.
	LastUpdatedTime *string `pulumi:"lastUpdatedTime"`
	// Resource location
	Location *string `pulumi:"location"`
	// Azure resource name
	Name *string `pulumi:"name"`
	// the list of resource id's that this metric alert is scoped to.
	Scopes []string `pulumi:"scopes"`
	// Alert severity {0, 1, 2, 3, 4}
	Severity *int `pulumi:"severity"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// the region of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria.
	TargetResourceRegion *string `pulumi:"targetResourceRegion"`
	// the resource type of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria.
	TargetResourceType *string `pulumi:"targetResourceType"`
	// Azure resource type
	Type *string `pulumi:"type"`
	// the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.
	WindowSize *string `pulumi:"windowSize"`
}

type MetricAlertState struct {
	// the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
	Actions MetricAlertActionResponseArrayInput
	// the flag that indicates whether the alert should be auto resolved or not. The default is true.
	AutoMitigate pulumi.BoolPtrInput
	// defines the specific alert criteria information.
	Criteria pulumi.Input
	// the description of the metric alert that will be included in the alert email.
	Description pulumi.StringPtrInput
	// the flag that indicates whether the metric alert is enabled.
	Enabled pulumi.BoolPtrInput
	// how often the metric alert is evaluated represented in ISO 8601 duration format.
	EvaluationFrequency pulumi.StringPtrInput
	// Last time the rule was updated in ISO8601 format.
	LastUpdatedTime pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// Azure resource name
	Name pulumi.StringPtrInput
	// the list of resource id's that this metric alert is scoped to.
	Scopes pulumi.StringArrayInput
	// Alert severity {0, 1, 2, 3, 4}
	Severity pulumi.IntPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// the region of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria.
	TargetResourceRegion pulumi.StringPtrInput
	// the resource type of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria.
	TargetResourceType pulumi.StringPtrInput
	// Azure resource type
	Type pulumi.StringPtrInput
	// the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.
	WindowSize pulumi.StringPtrInput
}

func (MetricAlertState) ElementType() reflect.Type {
	return reflect.TypeOf((*metricAlertState)(nil)).Elem()
}

type metricAlertArgs struct {
	// the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
	Actions []MetricAlertAction `pulumi:"actions"`
	// the flag that indicates whether the alert should be auto resolved or not. The default is true.
	AutoMitigate *bool `pulumi:"autoMitigate"`
	// defines the specific alert criteria information.
	Criteria interface{} `pulumi:"criteria"`
	// the description of the metric alert that will be included in the alert email.
	Description string `pulumi:"description"`
	// the flag that indicates whether the metric alert is enabled.
	Enabled bool `pulumi:"enabled"`
	// how often the metric alert is evaluated represented in ISO 8601 duration format.
	EvaluationFrequency string `pulumi:"evaluationFrequency"`
	// Resource location
	Location string `pulumi:"location"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the rule.
	RuleName string `pulumi:"ruleName"`
	// the list of resource id's that this metric alert is scoped to.
	Scopes []string `pulumi:"scopes"`
	// Alert severity {0, 1, 2, 3, 4}
	Severity int `pulumi:"severity"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// the region of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria.
	TargetResourceRegion *string `pulumi:"targetResourceRegion"`
	// the resource type of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria.
	TargetResourceType *string `pulumi:"targetResourceType"`
	// the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.
	WindowSize string `pulumi:"windowSize"`
}

// The set of arguments for constructing a MetricAlert resource.
type MetricAlertArgs struct {
	// the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
	Actions MetricAlertActionArrayInput
	// the flag that indicates whether the alert should be auto resolved or not. The default is true.
	AutoMitigate pulumi.BoolPtrInput
	// defines the specific alert criteria information.
	Criteria pulumi.Input
	// the description of the metric alert that will be included in the alert email.
	Description pulumi.StringInput
	// the flag that indicates whether the metric alert is enabled.
	Enabled pulumi.BoolInput
	// how often the metric alert is evaluated represented in ISO 8601 duration format.
	EvaluationFrequency pulumi.StringInput
	// Resource location
	Location pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the rule.
	RuleName pulumi.StringInput
	// the list of resource id's that this metric alert is scoped to.
	Scopes pulumi.StringArrayInput
	// Alert severity {0, 1, 2, 3, 4}
	Severity pulumi.IntInput
	// Resource tags
	Tags pulumi.StringMapInput
	// the region of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria.
	TargetResourceRegion pulumi.StringPtrInput
	// the resource type of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria.
	TargetResourceType pulumi.StringPtrInput
	// the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.
	WindowSize pulumi.StringInput
}

func (MetricAlertArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*metricAlertArgs)(nil)).Elem()
}

type MetricAlertInput interface {
	pulumi.Input

	ToMetricAlertOutput() MetricAlertOutput
	ToMetricAlertOutputWithContext(ctx context.Context) MetricAlertOutput
}

func (*MetricAlert) ElementType() reflect.Type {
	return reflect.TypeOf((*MetricAlert)(nil))
}

func (i *MetricAlert) ToMetricAlertOutput() MetricAlertOutput {
	return i.ToMetricAlertOutputWithContext(context.Background())
}

func (i *MetricAlert) ToMetricAlertOutputWithContext(ctx context.Context) MetricAlertOutput {
	return pulumi.ToOutputWithContext(ctx, i).(MetricAlertOutput)
}

type MetricAlertOutput struct {
	*pulumi.OutputState
}

func (MetricAlertOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*MetricAlert)(nil))
}

func (o MetricAlertOutput) ToMetricAlertOutput() MetricAlertOutput {
	return o
}

func (o MetricAlertOutput) ToMetricAlertOutputWithContext(ctx context.Context) MetricAlertOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(MetricAlertOutput{})
}
