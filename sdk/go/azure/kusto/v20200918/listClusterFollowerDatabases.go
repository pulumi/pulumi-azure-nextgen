// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200918

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func ListClusterFollowerDatabases(ctx *pulumi.Context, args *ListClusterFollowerDatabasesArgs, opts ...pulumi.InvokeOption) (*ListClusterFollowerDatabasesResult, error) {
	var rv ListClusterFollowerDatabasesResult
	err := ctx.Invoke("azure-nextgen:kusto/v20200918:listClusterFollowerDatabases", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type ListClusterFollowerDatabasesArgs struct {
	// The name of the Kusto cluster.
	ClusterName string `pulumi:"clusterName"`
	// The name of the resource group containing the Kusto cluster.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The list Kusto database principals operation response.
type ListClusterFollowerDatabasesResult struct {
	// The list of follower database result.
	Value []FollowerDatabaseDefinitionResponse `pulumi:"value"`
}
