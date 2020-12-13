// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupReplication(ctx *pulumi.Context, args *LookupReplicationArgs, opts ...pulumi.InvokeOption) (*LookupReplicationResult, error) {
	var rv LookupReplicationResult
	err := ctx.Invoke("azure-nextgen:containerregistry/latest:getReplication", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupReplicationArgs struct {
	// The name of the container registry.
	RegistryName string `pulumi:"registryName"`
	// The name of the replication.
	ReplicationName string `pulumi:"replicationName"`
	// The name of the resource group to which the container registry belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// An object that represents a replication for a container registry.
type LookupReplicationResult struct {
	// The resource ID.
	Id string `pulumi:"id"`
	// The location of the resource. This cannot be changed after the resource is created.
	Location string `pulumi:"location"`
	// The name of the resource.
	Name string `pulumi:"name"`
	// The provisioning state of the replication at the time the operation was called.
	ProvisioningState string `pulumi:"provisioningState"`
	// The status of the replication at the time the operation was called.
	Status StatusResponse `pulumi:"status"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource.
	Type string `pulumi:"type"`
}
