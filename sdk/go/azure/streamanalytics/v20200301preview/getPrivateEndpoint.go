// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200301preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupPrivateEndpoint(ctx *pulumi.Context, args *LookupPrivateEndpointArgs, opts ...pulumi.InvokeOption) (*LookupPrivateEndpointResult, error) {
	var rv LookupPrivateEndpointResult
	err := ctx.Invoke("azure-nextgen:streamanalytics/v20200301preview:getPrivateEndpoint", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupPrivateEndpointArgs struct {
	// The name of the cluster.
	ClusterName string `pulumi:"clusterName"`
	// The name of the private endpoint.
	PrivateEndpointName string `pulumi:"privateEndpointName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Complete information about the private endpoint.
type LookupPrivateEndpointResult struct {
	// Unique opaque string (generally a GUID) that represents the metadata state of the resource (private endpoint) and changes whenever the resource is updated. Required on PUT (CreateOrUpdate) requests.
	Etag string `pulumi:"etag"`
	// Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The properties associated with a private endpoint.
	Properties PrivateEndpointPropertiesResponse `pulumi:"properties"`
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type string `pulumi:"type"`
}
