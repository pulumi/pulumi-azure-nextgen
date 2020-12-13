// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180601preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupApiDiagnostic(ctx *pulumi.Context, args *LookupApiDiagnosticArgs, opts ...pulumi.InvokeOption) (*LookupApiDiagnosticResult, error) {
	var rv LookupApiDiagnosticResult
	err := ctx.Invoke("azure-nextgen:apimanagement/v20180601preview:getApiDiagnostic", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupApiDiagnosticArgs struct {
	// API identifier. Must be unique in the current API Management service instance.
	ApiId string `pulumi:"apiId"`
	// Diagnostic identifier. Must be unique in the current API Management service instance.
	DiagnosticId string `pulumi:"diagnosticId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
}

// Diagnostic details.
type LookupApiDiagnosticResult struct {
	// Specifies for what type of messages sampling settings should not apply.
	AlwaysLog *string `pulumi:"alwaysLog"`
	// Diagnostic settings for incoming/outgoing HTTP messages to the Backend
	Backend *PipelineDiagnosticSettingsResponse `pulumi:"backend"`
	// Whether to process Correlation Headers coming to Api Management Service. Only applicable to Application Insights diagnostics. Default is true.
	EnableHttpCorrelationHeaders *bool `pulumi:"enableHttpCorrelationHeaders"`
	// Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
	Frontend *PipelineDiagnosticSettingsResponse `pulumi:"frontend"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource Id of a target logger.
	LoggerId string `pulumi:"loggerId"`
	// Resource name.
	Name string `pulumi:"name"`
	// Sampling settings for Diagnostic.
	Sampling *SamplingSettingsResponse `pulumi:"sampling"`
	// Resource type for API Management resource.
	Type string `pulumi:"type"`
}
