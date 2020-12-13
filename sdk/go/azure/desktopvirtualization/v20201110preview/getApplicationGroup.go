// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20201110preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupApplicationGroup(ctx *pulumi.Context, args *LookupApplicationGroupArgs, opts ...pulumi.InvokeOption) (*LookupApplicationGroupResult, error) {
	var rv LookupApplicationGroupResult
	err := ctx.Invoke("azure-nextgen:desktopvirtualization/v20201110preview:getApplicationGroup", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupApplicationGroupArgs struct {
	// The name of the application group
	ApplicationGroupName string `pulumi:"applicationGroupName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Represents a ApplicationGroup definition.
type LookupApplicationGroupResult struct {
	// Resource Type of ApplicationGroup.
	ApplicationGroupType string `pulumi:"applicationGroupType"`
	// Description of ApplicationGroup.
	Description *string `pulumi:"description"`
	// Friendly name of ApplicationGroup.
	FriendlyName *string `pulumi:"friendlyName"`
	// HostPool arm path of ApplicationGroup.
	HostPoolArmPath string `pulumi:"hostPoolArmPath"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource
	Name string `pulumi:"name"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
	// Workspace arm path of ApplicationGroup.
	WorkspaceArmPath string `pulumi:"workspaceArmPath"`
}
