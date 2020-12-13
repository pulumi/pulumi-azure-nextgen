// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200804preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupHealthAlert(ctx *pulumi.Context, args *LookupHealthAlertArgs, opts ...pulumi.InvokeOption) (*LookupHealthAlertResult, error) {
	var rv LookupHealthAlertResult
	err := ctx.Invoke("azure-nextgen:alertsmanagement/v20200804preview:getHealthAlert", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupHealthAlertArgs struct {
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the rule.
	RuleName string `pulumi:"ruleName"`
}

// The health alert resource.
type LookupHealthAlertResult struct {
	// the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
	Actions []HealthAlertActionResponse `pulumi:"actions"`
	// defines the specific alert criteria information.
	Criteria HealthAlertCriteriaResponse `pulumi:"criteria"`
	// the description of the health alert that will be included in the alert email.
	Description string `pulumi:"description"`
	// the flag that indicates whether the health alert is enabled.
	Enabled bool `pulumi:"enabled"`
	// Azure resource Id
	Id string `pulumi:"id"`
	// Last time the rule was updated in ISO8601 format.
	LastUpdatedTime string `pulumi:"lastUpdatedTime"`
	// Resource location
	Location string `pulumi:"location"`
	// Azure resource name
	Name string `pulumi:"name"`
	// the list of resource id's that this health alert is scoped to.
	Scopes []string `pulumi:"scopes"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Azure resource type
	Type string `pulumi:"type"`
}
