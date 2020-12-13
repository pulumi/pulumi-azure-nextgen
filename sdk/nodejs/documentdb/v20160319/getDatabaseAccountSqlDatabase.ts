// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getDatabaseAccountSqlDatabase(args: GetDatabaseAccountSqlDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseAccountSqlDatabaseResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:documentdb/v20160319:getDatabaseAccountSqlDatabase", {
        "accountName": args.accountName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDatabaseAccountSqlDatabaseArgs {
    /**
     * Cosmos DB database account name.
     */
    readonly accountName: string;
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
 * An Azure Cosmos DB SQL database.
 */
export interface GetDatabaseAccountSqlDatabaseResult {
    /**
     * A system generated property that specified the addressable path of the collections resource.
     */
    readonly colls?: string;
    /**
     * A system generated property representing the resource etag required for optimistic concurrency control.
     */
    readonly etag?: string;
    /**
     * The unique resource identifier of the database account.
     */
    readonly id: string;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: string;
    /**
     * The name of the database account.
     */
    readonly name: string;
    /**
     * A system generated property. A unique identifier.
     */
    readonly rid?: string;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags?: {[key: string]: string};
    /**
     * A system generated property that denotes the last updated timestamp of the resource.
     */
    readonly ts?: any;
    /**
     * The type of Azure resource.
     */
    readonly type: string;
    /**
     * A system generated property that specifies the addressable path of the users resource.
     */
    readonly users?: string;
}
