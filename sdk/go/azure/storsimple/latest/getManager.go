// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupManager(ctx *pulumi.Context, args *LookupManagerArgs, opts ...pulumi.InvokeOption) (*LookupManagerResult, error) {
	var rv LookupManagerResult
	err := ctx.Invoke("azure-nextgen:storsimple/latest:getManager", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupManagerArgs struct {
	// The manager name
	ManagerName string `pulumi:"managerName"`
	// The resource group name
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The StorSimple Manager.
type LookupManagerResult struct {
	// Represents the type of StorSimple Manager.
	CisIntrinsicSettings *ManagerIntrinsicSettingsResponse `pulumi:"cisIntrinsicSettings"`
	// The etag of the manager.
	Etag *string `pulumi:"etag"`
	// The resource ID.
	Id string `pulumi:"id"`
	// The geo location of the resource.
	Location string `pulumi:"location"`
	// The resource name.
	Name string `pulumi:"name"`
	// Specifies the state of the resource as it is getting provisioned. Value of "Succeeded" means the Manager was successfully created.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Specifies the Sku.
	Sku *ManagerSkuResponse `pulumi:"sku"`
	// The tags attached to the resource.
	Tags map[string]string `pulumi:"tags"`
	// The resource type.
	Type string `pulumi:"type"`
}
