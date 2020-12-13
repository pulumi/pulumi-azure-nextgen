// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180601

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupApplication(ctx *pulumi.Context, args *LookupApplicationArgs, opts ...pulumi.InvokeOption) (*LookupApplicationResult, error) {
	var rv LookupApplicationResult
	err := ctx.Invoke("azure-nextgen:solutions/v20180601:getApplication", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupApplicationArgs struct {
	// The name of the managed application.
	ApplicationName string `pulumi:"applicationName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Information about managed application.
type LookupApplicationResult struct {
	// The fully qualified path of managed application definition Id.
	ApplicationDefinitionId *string `pulumi:"applicationDefinitionId"`
	// Resource ID
	Id string `pulumi:"id"`
	// The identity of the resource.
	Identity *IdentityResponse `pulumi:"identity"`
	// The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
	Kind string `pulumi:"kind"`
	// Resource location
	Location *string `pulumi:"location"`
	// ID of the resource that manages this resource.
	ManagedBy *string `pulumi:"managedBy"`
	// The managed resource group Id.
	ManagedResourceGroupId string `pulumi:"managedResourceGroupId"`
	// Resource name
	Name string `pulumi:"name"`
	// Name and value pairs that define the managed application outputs.
	Outputs interface{} `pulumi:"outputs"`
	// Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
	Parameters interface{} `pulumi:"parameters"`
	// The plan information.
	Plan *PlanResponse `pulumi:"plan"`
	// The managed application provisioning state.
	ProvisioningState string `pulumi:"provisioningState"`
	// The SKU of the resource.
	Sku *SkuResponse `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
}
