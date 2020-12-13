// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190501

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupResource(ctx *pulumi.Context, args *LookupResourceArgs, opts ...pulumi.InvokeOption) (*LookupResourceResult, error) {
	var rv LookupResourceResult
	err := ctx.Invoke("azure-nextgen:resources/v20190501:getResource", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupResourceArgs struct {
	// The parent resource identity.
	ParentResourcePath string `pulumi:"parentResourcePath"`
	// The name of the resource group containing the resource to get. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the resource to get.
	ResourceName string `pulumi:"resourceName"`
	// The namespace of the resource provider.
	ResourceProviderNamespace string `pulumi:"resourceProviderNamespace"`
	// The resource type of the resource.
	ResourceType string `pulumi:"resourceType"`
}

// Resource information.
type LookupResourceResult struct {
	// Resource ID
	Id string `pulumi:"id"`
	// The identity of the resource.
	Identity *IdentityResponse `pulumi:"identity"`
	// The kind of the resource.
	Kind *string `pulumi:"kind"`
	// Resource location
	Location *string `pulumi:"location"`
	// ID of the resource that manages this resource.
	ManagedBy *string `pulumi:"managedBy"`
	// Resource name
	Name string `pulumi:"name"`
	// The plan of the resource.
	Plan *PlanResponse `pulumi:"plan"`
	// The resource properties.
	Properties interface{} `pulumi:"properties"`
	// The SKU of the resource.
	Sku *SkuResponse `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
}
