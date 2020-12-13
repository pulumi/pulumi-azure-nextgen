// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190101preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupProductSetting(ctx *pulumi.Context, args *LookupProductSettingArgs, opts ...pulumi.InvokeOption) (*LookupProductSettingResult, error) {
	var rv LookupProductSettingResult
	err := ctx.Invoke("azure-nextgen:securityinsights/v20190101preview:getProductSetting", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupProductSettingArgs struct {
	// The namespace of workspaces resource provider- Microsoft.OperationalInsights.
	OperationalInsightsResourceProvider string `pulumi:"operationalInsightsResourceProvider"`
	// The name of the resource group within the user's subscription. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The setting name. Supports - EyesOn, EntityAnalytics, Ueba
	SettingsName string `pulumi:"settingsName"`
	// The name of the workspace.
	WorkspaceName string `pulumi:"workspaceName"`
}

// The Setting.
type LookupProductSettingResult struct {
	// Etag of the azure resource
	Etag *string `pulumi:"etag"`
	// Azure resource Id
	Id string `pulumi:"id"`
	// The kind of the setting
	Kind string `pulumi:"kind"`
	// Azure resource name
	Name string `pulumi:"name"`
	// Azure resource type
	Type string `pulumi:"type"`
}
