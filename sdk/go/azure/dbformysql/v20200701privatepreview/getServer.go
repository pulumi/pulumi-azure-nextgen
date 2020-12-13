// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200701privatepreview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupServer(ctx *pulumi.Context, args *LookupServerArgs, opts ...pulumi.InvokeOption) (*LookupServerResult, error) {
	var rv LookupServerResult
	err := ctx.Invoke("azure-nextgen:dbformysql/v20200701privatepreview:getServer", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupServerArgs struct {
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
}

// Represents a server.
type LookupServerResult struct {
	// The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation).
	AdministratorLogin *string `pulumi:"administratorLogin"`
	// The password of the administrator login (required for server creation).
	AdministratorLoginPassword *string `pulumi:"administratorLoginPassword"`
	// availability Zone information of the server.
	AvailabilityZone *string `pulumi:"availabilityZone"`
	// Status showing whether the data encryption is enabled with customer-managed keys.
	ByokEnforcement string `pulumi:"byokEnforcement"`
	// The mode to create a new MySQL server.
	CreateMode *string `pulumi:"createMode"`
	// Delegated subnet arguments.
	DelegatedSubnetArguments *DelegatedSubnetArgumentsResponse `pulumi:"delegatedSubnetArguments"`
	// Earliest restore point creation time (ISO8601 format)
	EarliestRestoreDate string `pulumi:"earliestRestoreDate"`
	// The fully qualified domain name of a server.
	FullyQualifiedDomainName string `pulumi:"fullyQualifiedDomainName"`
	// Enable HA or not for a server.
	HaEnabled *string `pulumi:"haEnabled"`
	// The state of a HA server.
	HaState string `pulumi:"haState"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The Azure Active Directory identity of the server.
	Identity *IdentityResponse `pulumi:"identity"`
	// Status showing whether the server enabled infrastructure encryption.
	InfrastructureEncryption *string `pulumi:"infrastructureEncryption"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// Maintenance window of a server.
	MaintenanceWindow *MaintenanceWindowResponse `pulumi:"maintenanceWindow"`
	// The name of the resource
	Name string `pulumi:"name"`
	// Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled'
	PublicNetworkAccess string `pulumi:"publicNetworkAccess"`
	// The maximum number of replicas that a primary server can have.
	ReplicaCapacity int `pulumi:"replicaCapacity"`
	// The replication role.
	ReplicationRole *string `pulumi:"replicationRole"`
	// Restore point creation time (ISO8601 format), specifying the time to restore from.
	RestorePointInTime *string `pulumi:"restorePointInTime"`
	// The SKU (pricing tier) of the server.
	Sku *SkuResponse `pulumi:"sku"`
	// The source MySQL server id.
	SourceServerId *string `pulumi:"sourceServerId"`
	// Enable ssl enforcement or not when connect to server.
	SslEnforcement *string `pulumi:"sslEnforcement"`
	// availability Zone information of the server.
	StandbyAvailabilityZone string `pulumi:"standbyAvailabilityZone"`
	// The state of a server.
	State string `pulumi:"state"`
	// Storage profile of a server.
	StorageProfile *StorageProfileResponse `pulumi:"storageProfile"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
	// Server version.
	Version *string `pulumi:"version"`
}
