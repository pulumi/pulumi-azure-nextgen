// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupReplicationProtectedItem(ctx *pulumi.Context, args *LookupReplicationProtectedItemArgs, opts ...pulumi.InvokeOption) (*LookupReplicationProtectedItemResult, error) {
	var rv LookupReplicationProtectedItemResult
	err := ctx.Invoke("azure-nextgen:recoveryservices/latest:getReplicationProtectedItem", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupReplicationProtectedItemArgs struct {
	// Fabric unique name.
	FabricName string `pulumi:"fabricName"`
	// Protection container name.
	ProtectionContainerName string `pulumi:"protectionContainerName"`
	// Replication protected item name.
	ReplicatedProtectedItemName string `pulumi:"replicatedProtectedItemName"`
	// The name of the resource group where the recovery services vault is present.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the recovery services vault.
	ResourceName string `pulumi:"resourceName"`
}

// Replication protected item.
type LookupReplicationProtectedItemResult struct {
	// Resource Id
	Id string `pulumi:"id"`
	// Resource Location
	Location *string `pulumi:"location"`
	// Resource Name
	Name string `pulumi:"name"`
	// The custom data.
	Properties ReplicationProtectedItemPropertiesResponse `pulumi:"properties"`
	// Resource Type
	Type string `pulumi:"type"`
}
