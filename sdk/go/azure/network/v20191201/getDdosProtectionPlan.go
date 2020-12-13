// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupDdosProtectionPlan(ctx *pulumi.Context, args *LookupDdosProtectionPlanArgs, opts ...pulumi.InvokeOption) (*LookupDdosProtectionPlanResult, error) {
	var rv LookupDdosProtectionPlanResult
	err := ctx.Invoke("azure-nextgen:network/v20191201:getDdosProtectionPlan", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupDdosProtectionPlanArgs struct {
	// The name of the DDoS protection plan.
	DdosProtectionPlanName string `pulumi:"ddosProtectionPlanName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// A DDoS protection plan in a resource group.
type LookupDdosProtectionPlanResult struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// The provisioning state of the DDoS protection plan resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
	ResourceGuid string `pulumi:"resourceGuid"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
	// The list of virtual networks associated with the DDoS protection plan resource. This list is read-only.
	VirtualNetworks []SubResourceResponse `pulumi:"virtualNetworks"`
}
