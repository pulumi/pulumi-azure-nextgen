// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180201

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupWebAppInstanceFunctionSlot(ctx *pulumi.Context, args *LookupWebAppInstanceFunctionSlotArgs, opts ...pulumi.InvokeOption) (*LookupWebAppInstanceFunctionSlotResult, error) {
	var rv LookupWebAppInstanceFunctionSlotResult
	err := ctx.Invoke("azure-nextgen:web/v20180201:getWebAppInstanceFunctionSlot", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupWebAppInstanceFunctionSlotArgs struct {
	// Function name.
	FunctionName string `pulumi:"functionName"`
	// Site name.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the deployment slot.
	Slot string `pulumi:"slot"`
}

// Function information.
type LookupWebAppInstanceFunctionSlotResult struct {
	// Config information.
	Config interface{} `pulumi:"config"`
	// Config URI.
	ConfigHref *string `pulumi:"configHref"`
	// File list.
	Files map[string]string `pulumi:"files"`
	// Function App ID.
	FunctionAppId *string `pulumi:"functionAppId"`
	// Function URI.
	Href *string `pulumi:"href"`
	// Resource Id.
	Id string `pulumi:"id"`
	// The invocation URL
	InvokeUrlTemplate *string `pulumi:"invokeUrlTemplate"`
	// Value indicating whether the function is disabled
	IsDisabled *bool `pulumi:"isDisabled"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// The function language
	Language *string `pulumi:"language"`
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
	// Test data URI.
	TestDataHref *string `pulumi:"testDataHref"`
	// Resource type.
	Type string `pulumi:"type"`
}
