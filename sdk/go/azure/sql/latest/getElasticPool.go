// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupElasticPool(ctx *pulumi.Context, args *LookupElasticPoolArgs, opts ...pulumi.InvokeOption) (*LookupElasticPoolResult, error) {
	var rv LookupElasticPoolResult
	err := ctx.Invoke("azure-nextgen:sql/latest:getElasticPool", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupElasticPoolArgs struct {
	// The name of the elastic pool to be retrieved.
	ElasticPoolName string `pulumi:"elasticPoolName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
}

// Represents a database elastic pool.
type LookupElasticPoolResult struct {
	// The creation date of the elastic pool (ISO8601 format).
	CreationDate string `pulumi:"creationDate"`
	// The maximum DTU any one database can consume.
	DatabaseDtuMax *int `pulumi:"databaseDtuMax"`
	// The minimum DTU all databases are guaranteed.
	DatabaseDtuMin *int `pulumi:"databaseDtuMin"`
	// The total shared DTU for the database elastic pool.
	Dtu *int `pulumi:"dtu"`
	// The edition of the elastic pool.
	Edition *string `pulumi:"edition"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Kind of elastic pool.  This is metadata used for the Azure portal experience.
	Kind string `pulumi:"kind"`
	// Resource location.
	Location string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// The state of the elastic pool.
	State string `pulumi:"state"`
	// Gets storage limit for the database elastic pool in MB.
	StorageMB *int `pulumi:"storageMB"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
	// Whether or not this database elastic pool is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
	ZoneRedundant *bool `pulumi:"zoneRedundant"`
}
