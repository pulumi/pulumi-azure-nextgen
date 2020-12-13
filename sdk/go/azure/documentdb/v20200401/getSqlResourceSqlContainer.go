// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200401

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupSqlResourceSqlContainer(ctx *pulumi.Context, args *LookupSqlResourceSqlContainerArgs, opts ...pulumi.InvokeOption) (*LookupSqlResourceSqlContainerResult, error) {
	var rv LookupSqlResourceSqlContainerResult
	err := ctx.Invoke("azure-nextgen:documentdb/v20200401:getSqlResourceSqlContainer", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupSqlResourceSqlContainerArgs struct {
	// Cosmos DB database account name.
	AccountName string `pulumi:"accountName"`
	// Cosmos DB container name.
	ContainerName string `pulumi:"containerName"`
	// Cosmos DB database name.
	DatabaseName string `pulumi:"databaseName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// An Azure Cosmos DB container.
type LookupSqlResourceSqlContainerResult struct {
	// The unique resource identifier of the ARM resource.
	Id string `pulumi:"id"`
	// The location of the resource group to which the resource belongs.
	Location *string `pulumi:"location"`
	// The name of the ARM resource.
	Name     string                                     `pulumi:"name"`
	Options  *SqlContainerGetPropertiesResponseOptions  `pulumi:"options"`
	Resource *SqlContainerGetPropertiesResponseResource `pulumi:"resource"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags map[string]string `pulumi:"tags"`
	// The type of Azure resource.
	Type string `pulumi:"type"`
}
