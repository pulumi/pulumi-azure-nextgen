// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180301

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupMetricAlert(ctx *pulumi.Context, args *LookupMetricAlertArgs, opts ...pulumi.InvokeOption) (*LookupMetricAlertResult, error) {
	var rv LookupMetricAlertResult
	err := ctx.Invoke("azure-nextgen:insights/v20180301:getMetricAlert", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupMetricAlertArgs struct {
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the rule.
	RuleName string `pulumi:"ruleName"`
}

// The metric alert resource.
type LookupMetricAlertResult struct {
	// the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
	Actions []MetricAlertActionResponse `pulumi:"actions"`
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
	// Azure resource Id
	Id string `pulumi:"id"`
	// Last time the rule was updated in ISO8601 format.
	LastUpdatedTime string `pulumi:"lastUpdatedTime"`
	// Resource location
	Location string `pulumi:"location"`
	// Azure resource name
	Name string `pulumi:"name"`
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
	// Azure resource type
	Type string `pulumi:"type"`
	// the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.
	WindowSize string `pulumi:"windowSize"`
}
