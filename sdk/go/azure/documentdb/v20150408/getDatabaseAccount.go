// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150408

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupDatabaseAccount(ctx *pulumi.Context, args *LookupDatabaseAccountArgs, opts ...pulumi.InvokeOption) (*LookupDatabaseAccountResult, error) {
	var rv LookupDatabaseAccountResult
	err := ctx.Invoke("azure-nextgen:documentdb/v20150408:getDatabaseAccount", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupDatabaseAccountArgs struct {
	// Cosmos DB database account name.
	AccountName string `pulumi:"accountName"`
	// Name of an Azure resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// An Azure Cosmos DB database account.
type LookupDatabaseAccountResult struct {
	// List of Cosmos DB capabilities for the account
	Capabilities []CapabilityResponse `pulumi:"capabilities"`
	// The cassandra connector offer type for the Cosmos DB database C* account.
	ConnectorOffer *string `pulumi:"connectorOffer"`
	// The consistency policy for the Cosmos DB database account.
	ConsistencyPolicy *ConsistencyPolicyResponse `pulumi:"consistencyPolicy"`
	// The offer type for the Cosmos DB database account. Default value: Standard.
	DatabaseAccountOfferType string `pulumi:"databaseAccountOfferType"`
	// The connection endpoint for the Cosmos DB database account.
	DocumentEndpoint string `pulumi:"documentEndpoint"`
	// Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
	EnableAutomaticFailover *bool `pulumi:"enableAutomaticFailover"`
	// Enables the cassandra connector on the Cosmos DB C* account
	EnableCassandraConnector *bool `pulumi:"enableCassandraConnector"`
	// Enables the account to write in multiple locations
	EnableMultipleWriteLocations *bool `pulumi:"enableMultipleWriteLocations"`
	// An array that contains the regions ordered by their failover priorities.
	FailoverPolicies []FailoverPolicyResponse `pulumi:"failoverPolicies"`
	// The unique resource identifier of the database account.
	Id string `pulumi:"id"`
	// Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.
	IpRangeFilter *string `pulumi:"ipRangeFilter"`
	// Flag to indicate whether to enable/disable Virtual Network ACL rules.
	IsVirtualNetworkFilterEnabled *bool `pulumi:"isVirtualNetworkFilterEnabled"`
	// Indicates the type of database account. This can only be set at database account creation.
	Kind *string `pulumi:"kind"`
	// The location of the resource group to which the resource belongs.
	Location *string `pulumi:"location"`
	// The name of the database account.
	Name string `pulumi:"name"`
	// The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. 'Offline' - the Cosmos DB account is not active. 'DeletionFailed' – the Cosmos DB account deletion failed.
	ProvisioningState string `pulumi:"provisioningState"`
	// An array that contains of the read locations enabled for the Cosmos DB account.
	ReadLocations []LocationResponse `pulumi:"readLocations"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags map[string]string `pulumi:"tags"`
	// The type of Azure resource.
	Type string `pulumi:"type"`
	// List of Virtual Network ACL rules configured for the Cosmos DB account.
	VirtualNetworkRules []VirtualNetworkRuleResponse `pulumi:"virtualNetworkRules"`
	// An array that contains the write location for the Cosmos DB account.
	WriteLocations []LocationResponse `pulumi:"writeLocations"`
}
