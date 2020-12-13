// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190801

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupWebAppSwiftVirtualNetworkConnection(ctx *pulumi.Context, args *LookupWebAppSwiftVirtualNetworkConnectionArgs, opts ...pulumi.InvokeOption) (*LookupWebAppSwiftVirtualNetworkConnectionResult, error) {
	var rv LookupWebAppSwiftVirtualNetworkConnectionResult
	err := ctx.Invoke("azure-nextgen:web/v20190801:getWebAppSwiftVirtualNetworkConnection", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupWebAppSwiftVirtualNetworkConnectionArgs struct {
	// Name of the app.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Swift Virtual Network Contract. This is used to enable the new Swift way of doing virtual network integration.
type LookupWebAppSwiftVirtualNetworkConnectionResult struct {
	// Resource Id.
	Id string `pulumi:"id"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name string `pulumi:"name"`
	// The Virtual Network subnet's resource ID. This is the subnet that this Web App will join. This subnet must have a delegation to Microsoft.Web/serverFarms defined first.
	SubnetResourceId *string `pulumi:"subnetResourceId"`
	// A flag that specifies if the scale unit this Web App is on supports Swift integration.
	SwiftSupported *bool `pulumi:"swiftSupported"`
	// Resource type.
	Type string `pulumi:"type"`
}
