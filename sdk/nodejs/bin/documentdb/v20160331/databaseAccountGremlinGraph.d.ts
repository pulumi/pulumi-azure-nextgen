import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * An Azure Cosmos DB Gremlin graph.
 */
export declare class DatabaseAccountGremlinGraph extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseAccountGremlinGraph resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabaseAccountGremlinGraph;
    /**
     * Returns true if the given object is an instance of DatabaseAccountGremlinGraph.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DatabaseAccountGremlinGraph;
    /**
     * The conflict resolution policy for the graph.
     */
    readonly conflictResolutionPolicy: pulumi.Output<outputs.documentdb.v20160331.ConflictResolutionPolicyResponse | undefined>;
    /**
     * Default time to live
     */
    readonly defaultTtl: pulumi.Output<number | undefined>;
    /**
     * A system generated property representing the resource etag required for optimistic concurrency control.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the graph
     */
    readonly indexingPolicy: pulumi.Output<outputs.documentdb.v20160331.IndexingPolicyResponse | undefined>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the database account.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The configuration of the partition key to be used for partitioning data into multiple partitions
     */
    readonly partitionKey: pulumi.Output<outputs.documentdb.v20160331.ContainerPartitionKeyResponse | undefined>;
    /**
     * A system generated property. A unique identifier.
     */
    readonly rid: pulumi.Output<string | undefined>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A system generated property that denotes the last updated timestamp of the resource.
     */
    readonly ts: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * The type of Azure resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.
     */
    readonly uniqueKeyPolicy: pulumi.Output<outputs.documentdb.v20160331.UniqueKeyPolicyResponse | undefined>;
    /**
     * Create a DatabaseAccountGremlinGraph resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseAccountGremlinGraphArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DatabaseAccountGremlinGraph resource.
 */
export interface DatabaseAccountGremlinGraphArgs {
    /**
     * Cosmos DB database account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * Cosmos DB database name.
     */
    readonly databaseName: pulumi.Input<string>;
    /**
     * Cosmos DB graph name.
     */
    readonly graphName: pulumi.Input<string>;
    /**
     * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
     */
    readonly options: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The standard JSON format of a Gremlin graph
     */
    readonly resource: pulumi.Input<inputs.documentdb.v20160331.GremlinGraphResource>;
    /**
     * Name of an Azure resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
