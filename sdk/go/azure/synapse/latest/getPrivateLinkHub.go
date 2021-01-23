// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupPrivateLinkHub(ctx *pulumi.Context, args *LookupPrivateLinkHubArgs, opts ...pulumi.InvokeOption) (*LookupPrivateLinkHubResult, error) {
	var rv LookupPrivateLinkHubResult
	err := ctx.Invoke("azure-nextgen:synapse/latest:getPrivateLinkHub", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupPrivateLinkHubArgs struct {
	// Name of the privateLinkHub
	PrivateLinkHubName string `pulumi:"privateLinkHubName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// A privateLinkHub
type LookupPrivateLinkHubResult struct {
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource
	Name string `pulumi:"name"`
	// List of private endpoint connections
	PrivateEndpointConnections []PrivateEndpointConnectionForPrivateLinkHubBasicResponse `pulumi:"privateEndpointConnections"`
	// PrivateLinkHub provisioning state
	ProvisioningState *string `pulumi:"provisioningState"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
