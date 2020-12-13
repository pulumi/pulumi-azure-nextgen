// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190101preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupAutomation(ctx *pulumi.Context, args *LookupAutomationArgs, opts ...pulumi.InvokeOption) (*LookupAutomationResult, error) {
	var rv LookupAutomationResult
	err := ctx.Invoke("azure-nextgen:security/v20190101preview:getAutomation", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupAutomationArgs struct {
	// The security automation name.
	AutomationName string `pulumi:"automationName"`
	// The name of the resource group within the user's subscription. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The security automation resource.
type LookupAutomationResult struct {
	// A collection of the actions which are triggered if all the configured rules evaluations, within at least one rule set, are true.
	Actions []interface{} `pulumi:"actions"`
	// The security automation description.
	Description *string `pulumi:"description"`
	// Entity tag is used for comparing two or more entities from the same requested resource.
	Etag *string `pulumi:"etag"`
	// Resource Id
	Id string `pulumi:"id"`
	// Indicates whether the security automation is enabled.
	IsEnabled *bool `pulumi:"isEnabled"`
	// Kind of the resource
	Kind *string `pulumi:"kind"`
	// Location where the resource is stored
	Location *string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// A collection of scopes on which the security automations logic is applied. Supported scopes are the subscription itself or a resource group under that subscription. The automation will only apply on defined scopes.
	Scopes []AutomationScopeResponse `pulumi:"scopes"`
	// A collection of the source event types which evaluate the security automation set of rules.
	Sources []AutomationSourceResponse `pulumi:"sources"`
	// A list of key value pairs that describe the resource.
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
}
