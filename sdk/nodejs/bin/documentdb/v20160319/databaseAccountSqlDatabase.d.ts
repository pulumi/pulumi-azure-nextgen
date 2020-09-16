import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
/**
 * An Azure Cosmos DB SQL database.
 */
export declare class DatabaseAccountSqlDatabase extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseAccountSqlDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabaseAccountSqlDatabase;
    /**
     * Returns true if the given object is an instance of DatabaseAccountSqlDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DatabaseAccountSqlDatabase;
    /**
     * A system generated property that specified the addressable path of the collections resource.
     */
    readonly colls: pulumi.Output<string | undefined>;
    /**
     * A system generated property representing the resource etag required for optimistic concurrency control.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the database account.
     */
    readonly name: pulumi.Output<string>;
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
     * A system generated property that specifies the addressable path of the users resource.
     */
    readonly users: pulumi.Output<string | undefined>;
    /**
     * Create a DatabaseAccountSqlDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseAccountSqlDatabaseArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DatabaseAccountSqlDatabase resource.
 */
export interface DatabaseAccountSqlDatabaseArgs {
    /**
     * Cosmos DB database account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * Cosmos DB database name.
     */
    readonly databaseName: pulumi.Input<string>;
    /**
     * A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
     */
    readonly options: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The standard JSON format of a SQL database
     */
    readonly resource: pulumi.Input<inputs.documentdb.v20160319.SqlDatabaseResource>;
    /**
     * Name of an Azure resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
