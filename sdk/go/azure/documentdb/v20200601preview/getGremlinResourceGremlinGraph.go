// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200601preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupGremlinResourceGremlinGraph(ctx *pulumi.Context, args *LookupGremlinResourceGremlinGraphArgs, opts ...pulumi.InvokeOption) (*LookupGremlinResourceGremlinGraphResult, error) {
	var rv LookupGremlinResourceGremlinGraphResult
	err := ctx.Invoke("azure-nextgen:documentdb/v20200601preview:getGremlinResourceGremlinGraph", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupGremlinResourceGremlinGraphArgs struct {
	// Cosmos DB database account name.
	AccountName string `pulumi:"accountName"`
	// Cosmos DB database name.
	DatabaseName string `pulumi:"databaseName"`
	// Cosmos DB graph name.
	GraphName string `pulumi:"graphName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// An Azure Cosmos DB Gremlin graph.
type LookupGremlinResourceGremlinGraphResult struct {
	// The unique resource identifier of the ARM resource.
	Id string `pulumi:"id"`
	// Identity for the resource.
	Identity *ManagedServiceIdentityResponse `pulumi:"identity"`
	// The location of the resource group to which the resource belongs.
	Location *string `pulumi:"location"`
	// The name of the ARM resource.
	Name     string                                     `pulumi:"name"`
	Options  *GremlinGraphGetPropertiesResponseOptions  `pulumi:"options"`
	Resource *GremlinGraphGetPropertiesResponseResource `pulumi:"resource"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags map[string]string `pulumi:"tags"`
	// The type of Azure resource.
	Type string `pulumi:"type"`
}
