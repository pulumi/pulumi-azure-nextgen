// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200801preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupHybridLink(ctx *pulumi.Context, args *LookupHybridLinkArgs, opts ...pulumi.InvokeOption) (*LookupHybridLinkResult, error) {
	var rv LookupHybridLinkResult
	err := ctx.Invoke("azure-nextgen:sql/v20200801preview:getHybridLink", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupHybridLinkArgs struct {
	// The distributed availability group name.
	DistributedAvailabilityGroupName string `pulumi:"distributedAvailabilityGroupName"`
	// The name of the managed instance.
	ManagedInstanceName string `pulumi:"managedInstanceName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Hybrid link between box and Sql Managed Instance.
type LookupHybridLinkResult struct {
	// The distributed availability group id
	DistributedAvailabilityGroupId string `pulumi:"distributedAvailabilityGroupId"`
	// Resource name.
	Name string `pulumi:"name"`
	// The primary availability group name
	PrimaryAvailabilityGroupName *string `pulumi:"primaryAvailabilityGroupName"`
	// The replication mode of hybrid link. Parameter will be ignored during link creation.
	ReplicationMode *string `pulumi:"replicationMode"`
	// The secondary availability group name
	SecondaryAvailabilityGroupName *string `pulumi:"secondaryAvailabilityGroupName"`
	// The source endpoint
	SourceEndpoint *string `pulumi:"sourceEndpoint"`
	// The source replica id
	SourceReplicaId string `pulumi:"sourceReplicaId"`
	// The name of the target database
	TargetDatabase *string `pulumi:"targetDatabase"`
	// The target replica id
	TargetReplicaId string `pulumi:"targetReplicaId"`
	// Resource type.
	Type string `pulumi:"type"`
}
