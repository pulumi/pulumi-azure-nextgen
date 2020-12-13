// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupManagedPrivateEndpoint(ctx *pulumi.Context, args *LookupManagedPrivateEndpointArgs, opts ...pulumi.InvokeOption) (*LookupManagedPrivateEndpointResult, error) {
	var rv LookupManagedPrivateEndpointResult
	err := ctx.Invoke("azure-nextgen:datafactory/latest:getManagedPrivateEndpoint", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupManagedPrivateEndpointArgs struct {
	// The factory name.
	FactoryName string `pulumi:"factoryName"`
	// Managed private endpoint name
	ManagedPrivateEndpointName string `pulumi:"managedPrivateEndpointName"`
	// Managed virtual network name
	ManagedVirtualNetworkName string `pulumi:"managedVirtualNetworkName"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Managed private endpoint resource type.
type LookupManagedPrivateEndpointResult struct {
	// Etag identifies change in the resource.
	Etag string `pulumi:"etag"`
	// The resource identifier.
	Id string `pulumi:"id"`
	// The resource name.
	Name string `pulumi:"name"`
	// Managed private endpoint properties.
	Properties ManagedPrivateEndpointResponse `pulumi:"properties"`
	// The resource type.
	Type string `pulumi:"type"`
}
