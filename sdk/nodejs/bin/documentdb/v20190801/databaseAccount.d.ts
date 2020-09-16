import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * An Azure Cosmos DB database account.
 */
export declare class DatabaseAccount extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabaseAccount;
    /**
     * Returns true if the given object is an instance of DatabaseAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DatabaseAccount;
    /**
     * List of Cosmos DB capabilities for the account
     */
    readonly capabilities: pulumi.Output<outputs.documentdb.v20190801.CapabilityResponse[] | undefined>;
    /**
     * The cassandra connector offer type for the Cosmos DB database C* account.
     */
    readonly connectorOffer: pulumi.Output<string | undefined>;
    /**
     * The consistency policy for the Cosmos DB database account.
     */
    readonly consistencyPolicy: pulumi.Output<outputs.documentdb.v20190801.ConsistencyPolicyResponse | undefined>;
    /**
     * The offer type for the Cosmos DB database account. Default value: Standard.
     */
    readonly databaseAccountOfferType: pulumi.Output<string>;
    /**
     * Disable write operations on metadata resources (databases, containers, throughput) via account keys
     */
    readonly disableKeyBasedMetadataWriteAccess: pulumi.Output<boolean | undefined>;
    /**
     * The connection endpoint for the Cosmos DB database account.
     */
    readonly documentEndpoint: pulumi.Output<string>;
    /**
     * Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
     */
    readonly enableAutomaticFailover: pulumi.Output<boolean | undefined>;
    /**
     * Enables the cassandra connector on the Cosmos DB C* account
     */
    readonly enableCassandraConnector: pulumi.Output<boolean | undefined>;
    /**
     * Enables the account to write in multiple locations
     */
    readonly enableMultipleWriteLocations: pulumi.Output<boolean | undefined>;
    /**
     * An array that contains the regions ordered by their failover priorities.
     */
    readonly failoverPolicies: pulumi.Output<outputs.documentdb.v20190801.FailoverPolicyResponse[]>;
    /**
     * Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.
     */
    readonly ipRangeFilter: pulumi.Output<string | undefined>;
    /**
     * Flag to indicate whether to enable/disable Virtual Network ACL rules.
     */
    readonly isVirtualNetworkFilterEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Indicates the type of database account. This can only be set at database account creation.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * An array that contains all of the locations enabled for the Cosmos DB account.
     */
    readonly locations: pulumi.Output<outputs.documentdb.v20190801.LocationResponse[]>;
    /**
     * The name of the ARM resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The status of the Cosmos DB account at the time the operation was called. The status can be one of following. 'Creating' – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. 'Succeeded' – the Cosmos DB account is active for use. 'Updating' – the Cosmos DB account is being updated. 'Deleting' – the Cosmos DB account is being deleted. 'Failed' – the Cosmos DB account failed creation. 'Offline' - the Cosmos DB account is not active. 'DeletionFailed' – the Cosmos DB account deletion failed.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * An array that contains of the read locations enabled for the Cosmos DB account.
     */
    readonly readLocations: pulumi.Output<outputs.documentdb.v20190801.LocationResponse[]>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of Azure resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * List of Virtual Network ACL rules configured for the Cosmos DB account.
     */
    readonly virtualNetworkRules: pulumi.Output<outputs.documentdb.v20190801.VirtualNetworkRuleResponse[] | undefined>;
    /**
     * An array that contains the write location for the Cosmos DB account.
     */
    readonly writeLocations: pulumi.Output<outputs.documentdb.v20190801.LocationResponse[]>;
    /**
     * Create a DatabaseAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseAccountArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DatabaseAccount resource.
 */
export interface DatabaseAccountArgs {
    /**
     * Cosmos DB database account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * List of Cosmos DB capabilities for the account
     */
    readonly capabilities?: pulumi.Input<pulumi.Input<inputs.documentdb.v20190801.Capability>[]>;
    /**
     * The cassandra connector offer type for the Cosmos DB database C* account.
     */
    readonly connectorOffer?: pulumi.Input<string>;
    /**
     * The consistency policy for the Cosmos DB account.
     */
    readonly consistencyPolicy?: pulumi.Input<inputs.documentdb.v20190801.ConsistencyPolicy>;
    /**
     * The offer type for the database
     */
    readonly databaseAccountOfferType: pulumi.Input<string>;
    /**
     * Disable write operations on metadata resources (databases, containers, throughput) via account keys
     */
    readonly disableKeyBasedMetadataWriteAccess?: pulumi.Input<boolean>;
    /**
     * Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account.
     */
    readonly enableAutomaticFailover?: pulumi.Input<boolean>;
    /**
     * Enables the cassandra connector on the Cosmos DB C* account
     */
    readonly enableCassandraConnector?: pulumi.Input<boolean>;
    /**
     * Enables the account to write in multiple locations
     */
    readonly enableMultipleWriteLocations?: pulumi.Input<boolean>;
    /**
     * Cosmos DB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.
     */
    readonly ipRangeFilter?: pulumi.Input<string>;
    /**
     * Flag to indicate whether to enable/disable Virtual Network ACL rules.
     */
    readonly isVirtualNetworkFilterEnabled?: pulumi.Input<boolean>;
    /**
     * Indicates the type of database account. This can only be set at database account creation.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * An array that contains the georeplication locations enabled for the Cosmos DB account.
     */
    readonly locations: pulumi.Input<pulumi.Input<inputs.documentdb.v20190801.Location>[]>;
    /**
     * Name of an Azure resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of Virtual Network ACL rules configured for the Cosmos DB account.
     */
    readonly virtualNetworkRules?: pulumi.Input<pulumi.Input<inputs.documentdb.v20190801.VirtualNetworkRule>[]>;
}
