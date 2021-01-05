// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupWebAppDiagnosticLogsConfiguration(ctx *pulumi.Context, args *LookupWebAppDiagnosticLogsConfigurationArgs, opts ...pulumi.InvokeOption) (*LookupWebAppDiagnosticLogsConfigurationResult, error) {
	var rv LookupWebAppDiagnosticLogsConfigurationResult
	err := ctx.Invoke("azure-nextgen:web/v20200901:getWebAppDiagnosticLogsConfiguration", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupWebAppDiagnosticLogsConfigurationArgs struct {
	// Name of the app.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Configuration of App Service site logs.
type LookupWebAppDiagnosticLogsConfigurationResult struct {
	// Application logs configuration.
	ApplicationLogs *ApplicationLogsConfigResponse `pulumi:"applicationLogs"`
	// Detailed error messages configuration.
	DetailedErrorMessages *EnabledConfigResponse `pulumi:"detailedErrorMessages"`
	// Failed requests tracing configuration.
	FailedRequestsTracing *EnabledConfigResponse `pulumi:"failedRequestsTracing"`
	// HTTP logs configuration.
	HttpLogs *HttpLogsConfigResponse `pulumi:"httpLogs"`
	// Resource Id.
	Id string `pulumi:"id"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name string `pulumi:"name"`
	// The system metadata relating to this resource.
	SystemData SystemDataResponse `pulumi:"systemData"`
	// Resource type.
	Type string `pulumi:"type"`
}