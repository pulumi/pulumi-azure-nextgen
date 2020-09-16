import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDatabaseAccountMongoDBCollection(args: GetDatabaseAccountMongoDBCollectionArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseAccountMongoDBCollectionResult>;
export interface GetDatabaseAccountMongoDBCollectionArgs {
    /**
     * Cosmos DB database account name.
     */
    readonly accountName: string;
    /**
     * Cosmos DB collection name.
     */
    readonly collectionName: string;
    /**
     * Cosmos DB database name.
     */
    readonly databaseName: string;
    /**
     * Name of an Azure resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * An Azure Cosmos DB MongoDB collection.
 */
export interface GetDatabaseAccountMongoDBCollectionResult {
    /**
     * List of index keys
     */
    readonly indexes?: outputs.documentdb.v20160331.MongoIndexResponse[];
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: string;
    /**
     * The name of the database account.
     */
    readonly name: string;
    /**
     * A key-value pair of shard keys to be applied for the request.
     */
    readonly shardKey?: {
        [key: string]: string;
    };
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of Azure resource.
     */
    readonly type: string;
}
