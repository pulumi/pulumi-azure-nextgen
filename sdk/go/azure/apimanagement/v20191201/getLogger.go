// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupLogger(ctx *pulumi.Context, args *LookupLoggerArgs, opts ...pulumi.InvokeOption) (*LookupLoggerResult, error) {
	var rv LookupLoggerResult
	err := ctx.Invoke("azure-nextgen:apimanagement/v20191201:getLogger", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupLoggerArgs struct {
	// Logger identifier. Must be unique in the API Management service instance.
	LoggerId string `pulumi:"loggerId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
}

// Logger details.
type LookupLoggerResult struct {
	// The name and SendRule connection string of the event hub for azureEventHub logger.
	// Instrumentation key for applicationInsights logger.
	Credentials map[string]string `pulumi:"credentials"`
	// Logger description.
	Description *string `pulumi:"description"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Whether records are buffered in the logger before publishing. Default is assumed to be true.
	IsBuffered *bool `pulumi:"isBuffered"`
	// Logger type.
	LoggerType string `pulumi:"loggerType"`
	// Resource name.
	Name string `pulumi:"name"`
	// Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
	ResourceId *string `pulumi:"resourceId"`
	// Resource type for API Management resource.
	Type string `pulumi:"type"`
}
