// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200301

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupPrivateLinkServicePrivateEndpointConnection(ctx *pulumi.Context, args *LookupPrivateLinkServicePrivateEndpointConnectionArgs, opts ...pulumi.InvokeOption) (*LookupPrivateLinkServicePrivateEndpointConnectionResult, error) {
	var rv LookupPrivateLinkServicePrivateEndpointConnectionResult
	err := ctx.Invoke("azure-nextgen:network/v20200301:getPrivateLinkServicePrivateEndpointConnection", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupPrivateLinkServicePrivateEndpointConnectionArgs struct {
	// Expands referenced resources.
	Expand *string `pulumi:"expand"`
	// The name of the private end point connection.
	PeConnectionName string `pulumi:"peConnectionName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the private link service.
	ServiceName string `pulumi:"serviceName"`
}

// PrivateEndpointConnection resource.
type LookupPrivateLinkServicePrivateEndpointConnectionResult struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The consumer link id.
	LinkIdentifier string `pulumi:"linkIdentifier"`
	// The name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// The resource of private end point.
	PrivateEndpoint PrivateEndpointResponse `pulumi:"privateEndpoint"`
	// A collection of information about the state of the connection between service consumer and provider.
	PrivateLinkServiceConnectionState *PrivateLinkServiceConnectionStateResponse `pulumi:"privateLinkServiceConnectionState"`
	// The provisioning state of the private endpoint connection resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// The resource type.
	Type string `pulumi:"type"`
}
