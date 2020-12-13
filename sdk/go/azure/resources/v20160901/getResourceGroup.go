// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160901

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupResourceGroup(ctx *pulumi.Context, args *LookupResourceGroupArgs, opts ...pulumi.InvokeOption) (*LookupResourceGroupResult, error) {
	var rv LookupResourceGroupResult
	err := ctx.Invoke("azure-nextgen:resources/v20160901:getResourceGroup", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupResourceGroupArgs struct {
	// The name of the resource group to get. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Resource group information.
type LookupResourceGroupResult struct {
	// The ID of the resource group.
	Id string `pulumi:"id"`
	// The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
	Location string `pulumi:"location"`
	// The ID of the resource that manages this resource group.
	ManagedBy *string `pulumi:"managedBy"`
	// The name of the resource group.
	Name *string `pulumi:"name"`
	// The resource group properties.
	Properties ResourceGroupPropertiesResponse `pulumi:"properties"`
	// The tags attached to the resource group.
	Tags map[string]string `pulumi:"tags"`
}
