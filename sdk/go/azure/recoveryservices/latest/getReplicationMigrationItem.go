// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupReplicationMigrationItem(ctx *pulumi.Context, args *LookupReplicationMigrationItemArgs, opts ...pulumi.InvokeOption) (*LookupReplicationMigrationItemResult, error) {
	var rv LookupReplicationMigrationItemResult
	err := ctx.Invoke("azure-nextgen:recoveryservices/latest:getReplicationMigrationItem", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupReplicationMigrationItemArgs struct {
	// Fabric unique name.
	FabricName string `pulumi:"fabricName"`
	// Migration item name.
	MigrationItemName string `pulumi:"migrationItemName"`
	// Protection container name.
	ProtectionContainerName string `pulumi:"protectionContainerName"`
	// The name of the resource group where the recovery services vault is present.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the recovery services vault.
	ResourceName string `pulumi:"resourceName"`
}

// Migration item.
type LookupReplicationMigrationItemResult struct {
	// Resource Id
	Id string `pulumi:"id"`
	// Resource Location
	Location *string `pulumi:"location"`
	// Resource Name
	Name string `pulumi:"name"`
	// The migration item properties.
	Properties MigrationItemPropertiesResponse `pulumi:"properties"`
	// Resource Type
	Type string `pulumi:"type"`
}
