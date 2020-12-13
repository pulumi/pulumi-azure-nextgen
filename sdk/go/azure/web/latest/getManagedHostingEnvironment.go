// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupManagedHostingEnvironment(ctx *pulumi.Context, args *LookupManagedHostingEnvironmentArgs, opts ...pulumi.InvokeOption) (*LookupManagedHostingEnvironmentResult, error) {
	var rv LookupManagedHostingEnvironmentResult
	err := ctx.Invoke("azure-nextgen:web/latest:getManagedHostingEnvironment", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupManagedHostingEnvironmentArgs struct {
	// Name of managed hosting environment
	Name string `pulumi:"name"`
	// Name of resource group
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Description of a managed hosting environment
type LookupManagedHostingEnvironmentResult struct {
	// Resource id of the api management account associated with this managed hosting environment (read only)
	ApiManagementAccount *string `pulumi:"apiManagementAccount"`
	// DNS suffix of the managed hosting environment
	DnsSuffix *string `pulumi:"dnsSuffix"`
	// True/false indicating whether the managed hosting environment is healthy
	EnvironmentIsHealthy *bool `pulumi:"environmentIsHealthy"`
	// Detailed message about with results of the last check of the managed hosting environment
	EnvironmentStatus *string `pulumi:"environmentStatus"`
	// Resource Id
	Id *string `pulumi:"id"`
	// Number of ip ssl addresses reserved for the managed hosting environment
	IpsslAddressCount *int `pulumi:"ipsslAddressCount"`
	// Kind of resource
	Kind *string `pulumi:"kind"`
	// Resource Location
	Location string `pulumi:"location"`
	// Resource Name
	Name *string `pulumi:"name"`
	// Resource group of the managed hosting environment (read only)
	ResourceGroup *string `pulumi:"resourceGroup"`
	// Current status of the managed hosting environment
	Status string `pulumi:"status"`
	// Subscription of the managed hosting environment (read only)
	SubscriptionId *string `pulumi:"subscriptionId"`
	// True/false indicating whether the managed hosting environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
	//             (most likely because NSG blocked the incoming traffic)
	Suspended *bool `pulumi:"suspended"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
	// Description of the managed hosting environment's virtual network
	VirtualNetwork *VirtualNetworkProfileResponse `pulumi:"virtualNetwork"`
}
