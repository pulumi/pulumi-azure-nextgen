// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupDatabaseAccountCassandraKeyspace(ctx *pulumi.Context, args *LookupDatabaseAccountCassandraKeyspaceArgs, opts ...pulumi.InvokeOption) (*LookupDatabaseAccountCassandraKeyspaceResult, error) {
	var rv LookupDatabaseAccountCassandraKeyspaceResult
	err := ctx.Invoke("azure-nextgen:documentdb/latest:getDatabaseAccountCassandraKeyspace", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupDatabaseAccountCassandraKeyspaceArgs struct {
	// Cosmos DB database account name.
	AccountName string `pulumi:"accountName"`
	// Cosmos DB keyspace name.
	KeyspaceName string `pulumi:"keyspaceName"`
	// Name of an Azure resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// An Azure Cosmos DB Cassandra keyspace.
type LookupDatabaseAccountCassandraKeyspaceResult struct {
	// The unique resource identifier of the database account.
	Id string `pulumi:"id"`
	// The location of the resource group to which the resource belongs.
	Location *string `pulumi:"location"`
	// The name of the database account.
	Name string `pulumi:"name"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags map[string]string `pulumi:"tags"`
	// The type of Azure resource.
	Type string `pulumi:"type"`
}
