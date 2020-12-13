// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160801

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupWebAppFunction(ctx *pulumi.Context, args *LookupWebAppFunctionArgs, opts ...pulumi.InvokeOption) (*LookupWebAppFunctionResult, error) {
	var rv LookupWebAppFunctionResult
	err := ctx.Invoke("azure-nextgen:web/v20160801:getWebAppFunction", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupWebAppFunctionArgs struct {
	// Function name.
	FunctionName string `pulumi:"functionName"`
	// Site name.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Web Job Information.
type LookupWebAppFunctionResult struct {
	// Config information.
	Config interface{} `pulumi:"config"`
	// Config URI.
	ConfigHref *string `pulumi:"configHref"`
	// File list.
	Files map[string]string `pulumi:"files"`
	// Function App ID.
	FunctionAppId string `pulumi:"functionAppId"`
	// Function URI.
	Href *string `pulumi:"href"`
	// Resource Id.
	Id string `pulumi:"id"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name string `pulumi:"name"`
	// Script URI.
	ScriptHref *string `pulumi:"scriptHref"`
	// Script root path URI.
	ScriptRootPathHref *string `pulumi:"scriptRootPathHref"`
	// Secrets file URI.
	SecretsFileHref *string `pulumi:"secretsFileHref"`
	// Test data used when testing via the Azure Portal.
	TestData *string `pulumi:"testData"`
	// Resource type.
	Type string `pulumi:"type"`
}
