// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180701preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupApplication(ctx *pulumi.Context, args *LookupApplicationArgs, opts ...pulumi.InvokeOption) (*LookupApplicationResult, error) {
	var rv LookupApplicationResult
	err := ctx.Invoke("azure-nextgen:servicefabricmesh/v20180701preview:getApplication", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupApplicationArgs struct {
	// The identity of the application.
	ApplicationName string `pulumi:"applicationName"`
	// Azure resource group name
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// This type describes an application resource.
type LookupApplicationResult struct {
	// Internal use.
	DebugParams *string `pulumi:"debugParams"`
	// User readable description of the application.
	Description *string `pulumi:"description"`
	// Describes the diagnostics definition and usage for an application resource.
	Diagnostics *DiagnosticsDescriptionResponse `pulumi:"diagnostics"`
	// Describes the health state of an application resource.
	HealthState string `pulumi:"healthState"`
	// Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource
	Name string `pulumi:"name"`
	// State of the resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// Names of the services in the application.
	ServiceNames []string `pulumi:"serviceNames"`
	// describes the services in the application.
	Services []ServiceResourceDescriptionResponse `pulumi:"services"`
	// Status of the application resource.
	Status string `pulumi:"status"`
	// Gives additional information about the current status of the application deployment.
	StatusDetails string `pulumi:"statusDetails"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type string `pulumi:"type"`
	// When the application's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the application is marked unhealthy.
	UnhealthyEvaluation string `pulumi:"unhealthyEvaluation"`
}
