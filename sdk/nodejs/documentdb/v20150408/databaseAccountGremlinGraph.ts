// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * An Azure Cosmos DB Gremlin graph.
 */
export class DatabaseAccountGremlinGraph extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseAccountGremlinGraph resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabaseAccountGremlinGraph {
        return new DatabaseAccountGremlinGraph(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:documentdb/v20150408:DatabaseAccountGremlinGraph';

    /**
     * Returns true if the given object is an instance of DatabaseAccountGremlinGraph.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseAccountGremlinGraph {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseAccountGremlinGraph.__pulumiType;
    }

    /**
     * The conflict resolution policy for the graph.
     */
    public /*out*/ readonly conflictResolutionPolicy!: pulumi.Output<outputs.documentdb.v20150408.ConflictResolutionPolicyResponse | undefined>;
    /**
     * Default time to live
     */
    public /*out*/ readonly defaultTtl!: pulumi.Output<number | undefined>;
    /**
     * A system generated property representing the resource etag required for optimistic concurrency control.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The configuration of the indexing policy. By default, the indexing is automatic for all document paths within the graph
     */
    public /*out*/ readonly indexingPolicy!: pulumi.Output<outputs.documentdb.v20150408.IndexingPolicyResponse | undefined>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    public /*out*/ readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the database account.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The configuration of the partition key to be used for partitioning data into multiple partitions
     */
    public /*out*/ readonly partitionKey!: pulumi.Output<outputs.documentdb.v20150408.ContainerPartitionKeyResponse | undefined>;
    /**
     * A system generated property. A unique identifier.
     */
    public /*out*/ readonly rid!: pulumi.Output<string | undefined>;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    public /*out*/ readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A system generated property that denotes the last updated timestamp of the resource.
     */
    public /*out*/ readonly ts!: pulumi.Output<any | undefined>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.
     */
    public /*out*/ readonly uniqueKeyPolicy!: pulumi.Output<outputs.documentdb.v20150408.UniqueKeyPolicyResponse | undefined>;

    /**
     * Create a DatabaseAccountGremlinGraph resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseAccountGremlinGraphArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.accountName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.databaseName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.graphName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'graphName'");
            }
            if ((!args || args.options === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'options'");
            }
            if ((!args || args.resource === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resource'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["accountName"] = args ? args.accountName : undefined;
            inputs["databaseName"] = args ? args.databaseName : undefined;
            inputs["graphName"] = args ? args.graphName : undefined;
            inputs["options"] = args ? args.options : undefined;
            inputs["resource"] = args ? args.resource : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["conflictResolutionPolicy"] = undefined /*out*/;
            inputs["defaultTtl"] = undefined /*out*/;
            inputs["etag"] = undefined /*out*/;
            inputs["indexingPolicy"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["partitionKey"] = undefined /*out*/;
            inputs["rid"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["ts"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["uniqueKeyPolicy"] = undefined /*out*/;
        } else {
            inputs["conflictResolutionPolicy"] = undefined /*out*/;
            inputs["defaultTtl"] = undefined /*out*/;
            inputs["etag"] = undefined /*out*/;
            inputs["indexingPolicy"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["partitionKey"] = undefined /*out*/;
            inputs["rid"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["ts"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["uniqueKeyPolicy"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:documentdb/latest:DatabaseAccountGremlinGraph" }, { type: "azure-nextgen:documentdb/v20150401:DatabaseAccountGremlinGraph" }, { type: "azure-nextgen:documentdb/v20151106:DatabaseAccountGremlinGraph" }, { type: "azure-nextgen:documentdb/v20160319:DatabaseAccountGremlinGraph" }, { type: "azure-nextgen:documentdb/v20160331:DatabaseAccountGremlinGraph" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(DatabaseAccountGremlinGraph.__pulumiType, name, inputs, opts);
    }
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
    readonly options: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The standard JSON format of a Gremlin graph
     */
    readonly resource: pulumi.Input<inputs.documentdb.v20150408.GremlinGraphResource>;
    /**
     * Name of an Azure resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
