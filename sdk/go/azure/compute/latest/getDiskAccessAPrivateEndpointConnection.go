// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupDiskAccessAPrivateEndpointConnection(ctx *pulumi.Context, args *LookupDiskAccessAPrivateEndpointConnectionArgs, opts ...pulumi.InvokeOption) (*LookupDiskAccessAPrivateEndpointConnectionResult, error) {
	var rv LookupDiskAccessAPrivateEndpointConnectionResult
	err := ctx.Invoke("azure-nextgen:compute/latest:getDiskAccessAPrivateEndpointConnection", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupDiskAccessAPrivateEndpointConnectionArgs struct {
	// The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
	DiskAccessName string `pulumi:"diskAccessName"`
	// The name of the private endpoint connection
	PrivateEndpointConnectionName string `pulumi:"privateEndpointConnectionName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The Private Endpoint Connection resource.
type LookupDiskAccessAPrivateEndpointConnectionResult struct {
	// private endpoint connection Id
	Id string `pulumi:"id"`
	// private endpoint connection name
	Name string `pulumi:"name"`
	// The resource of private end point.
	PrivateEndpoint *PrivateEndpointResponse `pulumi:"privateEndpoint"`
	// A collection of information about the state of the connection between DiskAccess and Virtual Network.
	PrivateLinkServiceConnectionState PrivateLinkServiceConnectionStateResponse `pulumi:"privateLinkServiceConnectionState"`
	// The provisioning state of the private endpoint connection resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// private endpoint connection type
	Type string `pulumi:"type"`
}
