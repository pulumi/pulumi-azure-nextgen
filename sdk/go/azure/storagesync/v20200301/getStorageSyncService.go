// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200301

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupStorageSyncService(ctx *pulumi.Context, args *LookupStorageSyncServiceArgs, opts ...pulumi.InvokeOption) (*LookupStorageSyncServiceResult, error) {
	var rv LookupStorageSyncServiceResult
	err := ctx.Invoke("azure-nextgen:storagesync/v20200301:getStorageSyncService", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupStorageSyncServiceArgs struct {
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of Storage Sync Service resource.
	StorageSyncServiceName string `pulumi:"storageSyncServiceName"`
}

// Storage Sync Service object.
type LookupStorageSyncServiceResult struct {
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// Incoming Traffic Policy
	IncomingTrafficPolicy *string `pulumi:"incomingTrafficPolicy"`
	// Resource Last Operation Name
	LastOperationName string `pulumi:"lastOperationName"`
	// StorageSyncService lastWorkflowId
	LastWorkflowId string `pulumi:"lastWorkflowId"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource
	Name string `pulumi:"name"`
	// List of private endpoint connection associated with the specified storage sync service
	PrivateEndpointConnections []PrivateEndpointConnectionResponse `pulumi:"privateEndpointConnections"`
	// StorageSyncService Provisioning State
	ProvisioningState string `pulumi:"provisioningState"`
	// Storage Sync service status.
	StorageSyncServiceStatus int `pulumi:"storageSyncServiceStatus"`
	// Storage Sync service Uid
	StorageSyncServiceUid string `pulumi:"storageSyncServiceUid"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
