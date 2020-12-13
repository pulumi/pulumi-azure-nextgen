// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180601

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupIntegrationRuntime(ctx *pulumi.Context, args *LookupIntegrationRuntimeArgs, opts ...pulumi.InvokeOption) (*LookupIntegrationRuntimeResult, error) {
	var rv LookupIntegrationRuntimeResult
	err := ctx.Invoke("azure-nextgen:datafactory/v20180601:getIntegrationRuntime", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupIntegrationRuntimeArgs struct {
	// The factory name.
	FactoryName string `pulumi:"factoryName"`
	// The integration runtime name.
	IntegrationRuntimeName string `pulumi:"integrationRuntimeName"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Integration runtime resource type.
type LookupIntegrationRuntimeResult struct {
	// Etag identifies change in the resource.
	Etag string `pulumi:"etag"`
	// The resource identifier.
	Id string `pulumi:"id"`
	// The resource name.
	Name string `pulumi:"name"`
	// Integration runtime properties.
	Properties interface{} `pulumi:"properties"`
	// The resource type.
	Type string `pulumi:"type"`
}
