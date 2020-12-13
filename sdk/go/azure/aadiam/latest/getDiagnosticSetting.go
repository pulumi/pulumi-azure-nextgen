// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupDiagnosticSetting(ctx *pulumi.Context, args *LookupDiagnosticSettingArgs, opts ...pulumi.InvokeOption) (*LookupDiagnosticSettingResult, error) {
	var rv LookupDiagnosticSettingResult
	err := ctx.Invoke("azure-nextgen:aadiam/latest:getDiagnosticSetting", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupDiagnosticSettingArgs struct {
	// The name of the diagnostic setting.
	Name string `pulumi:"name"`
}

// The diagnostic setting resource.
type LookupDiagnosticSettingResult struct {
	// The resource Id for the event hub authorization rule.
	EventHubAuthorizationRuleId *string `pulumi:"eventHubAuthorizationRuleId"`
	// The name of the event hub. If none is specified, the default event hub will be selected.
	EventHubName *string `pulumi:"eventHubName"`
	// Azure resource Id
	Id string `pulumi:"id"`
	// The list of logs settings.
	Logs []LogSettingsResponse `pulumi:"logs"`
	// Azure resource name
	Name string `pulumi:"name"`
	// The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility.
	ServiceBusRuleId *string `pulumi:"serviceBusRuleId"`
	// The resource ID of the storage account to which you would like to send Diagnostic Logs.
	StorageAccountId *string `pulumi:"storageAccountId"`
	// Azure resource type
	Type string `pulumi:"type"`
	// The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2
	WorkspaceId *string `pulumi:"workspaceId"`
}
