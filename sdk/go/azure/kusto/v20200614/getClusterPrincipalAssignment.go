// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200614

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupClusterPrincipalAssignment(ctx *pulumi.Context, args *LookupClusterPrincipalAssignmentArgs, opts ...pulumi.InvokeOption) (*LookupClusterPrincipalAssignmentResult, error) {
	var rv LookupClusterPrincipalAssignmentResult
	err := ctx.Invoke("azure-nextgen:kusto/v20200614:getClusterPrincipalAssignment", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupClusterPrincipalAssignmentArgs struct {
	// The name of the Kusto cluster.
	ClusterName string `pulumi:"clusterName"`
	// The name of the Kusto principalAssignment.
	PrincipalAssignmentName string `pulumi:"principalAssignmentName"`
	// The name of the resource group containing the Kusto cluster.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Class representing a cluster principal assignment.
type LookupClusterPrincipalAssignmentResult struct {
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name.
	PrincipalId string `pulumi:"principalId"`
	// The principal name
	PrincipalName string `pulumi:"principalName"`
	// Principal type.
	PrincipalType string `pulumi:"principalType"`
	// The provisioned state of the resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// Cluster principal role.
	Role string `pulumi:"role"`
	// The tenant id of the principal
	TenantId *string `pulumi:"tenantId"`
	// The tenant name of the principal
	TenantName string `pulumi:"tenantName"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
