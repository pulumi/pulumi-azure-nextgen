// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180416

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupScheduledQueryRule(ctx *pulumi.Context, args *LookupScheduledQueryRuleArgs, opts ...pulumi.InvokeOption) (*LookupScheduledQueryRuleResult, error) {
	var rv LookupScheduledQueryRuleResult
	err := ctx.Invoke("azure-nextgen:insights/v20180416:getScheduledQueryRule", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupScheduledQueryRuleArgs struct {
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the rule.
	RuleName string `pulumi:"ruleName"`
}

// The Log Search Rule resource.
type LookupScheduledQueryRuleResult struct {
	// Action needs to be taken on rule execution.
	Action interface{} `pulumi:"action"`
	// The description of the Log Search rule.
	Description *string `pulumi:"description"`
	// The display name of the alert rule
	DisplayName *string `pulumi:"displayName"`
	// The flag which indicates whether the Log Search rule is enabled. Value should be true or false
	Enabled *string `pulumi:"enabled"`
	// The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
	Etag string `pulumi:"etag"`
	// Azure resource Id
	Id string `pulumi:"id"`
	// Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
	Kind string `pulumi:"kind"`
	// Last time the rule was updated in IS08601 format.
	LastUpdatedTime string `pulumi:"lastUpdatedTime"`
	// Resource location
	Location string `pulumi:"location"`
	// Azure resource name
	Name string `pulumi:"name"`
	// Provisioning state of the scheduled query rule
	ProvisioningState string `pulumi:"provisioningState"`
	// Schedule (Frequency, Time Window) for rule. Required for action type - AlertingAction
	Schedule *ScheduleResponse `pulumi:"schedule"`
	// Data Source against which rule will Query Data
	Source SourceResponse `pulumi:"source"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Azure resource type
	Type string `pulumi:"type"`
}
