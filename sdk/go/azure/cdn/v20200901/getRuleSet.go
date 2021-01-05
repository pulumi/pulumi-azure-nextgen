// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupRuleSet(ctx *pulumi.Context, args *LookupRuleSetArgs, opts ...pulumi.InvokeOption) (*LookupRuleSetResult, error) {
	var rv LookupRuleSetResult
	err := ctx.Invoke("azure-nextgen:cdn/v20200901:getRuleSet", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupRuleSetArgs struct {
	// Name of the CDN profile which is unique within the resource group.
	ProfileName string `pulumi:"profileName"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the rule set under the profile which is unique globally.
	RuleSetName string `pulumi:"ruleSetName"`
}

// Friendly RuleSet name mapping to the any RuleSet or secret related information.
type LookupRuleSetResult struct {
	DeploymentStatus string `pulumi:"deploymentStatus"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource name.
	Name string `pulumi:"name"`
	// Provisioning status
	ProvisioningState string `pulumi:"provisioningState"`
	// Read only system data
	SystemData SystemDataResponse `pulumi:"systemData"`
	// Resource type.
	Type string `pulumi:"type"`
}