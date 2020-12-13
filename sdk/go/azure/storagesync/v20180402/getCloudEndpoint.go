// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180402

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupCloudEndpoint(ctx *pulumi.Context, args *LookupCloudEndpointArgs, opts ...pulumi.InvokeOption) (*LookupCloudEndpointResult, error) {
	var rv LookupCloudEndpointResult
	err := ctx.Invoke("azure-nextgen:storagesync/v20180402:getCloudEndpoint", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupCloudEndpointArgs struct {
	// Name of Cloud Endpoint object.
	CloudEndpointName string `pulumi:"cloudEndpointName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of Storage Sync Service resource.
	StorageSyncServiceName string `pulumi:"storageSyncServiceName"`
	// Name of Sync Group resource.
	SyncGroupName string `pulumi:"syncGroupName"`
}

// Cloud Endpoint object.
type LookupCloudEndpointResult struct {
	// Backup Enabled
	BackupEnabled bool `pulumi:"backupEnabled"`
	// Friendly Name
	FriendlyName *string `pulumi:"friendlyName"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// Resource Last Operation Name
	LastOperationName *string `pulumi:"lastOperationName"`
	// CloudEndpoint lastWorkflowId
	LastWorkflowId *string `pulumi:"lastWorkflowId"`
	// The name of the resource
	Name string `pulumi:"name"`
	// Partnership Id
	PartnershipId *string `pulumi:"partnershipId"`
	// CloudEndpoint Provisioning State
	ProvisioningState *string `pulumi:"provisioningState"`
	// Storage Account Resource Id
	StorageAccountResourceId *string `pulumi:"storageAccountResourceId"`
	// Storage Account Share name
	StorageAccountShareName *string `pulumi:"storageAccountShareName"`
	// Storage Account Tenant Id
	StorageAccountTenantId *string `pulumi:"storageAccountTenantId"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
