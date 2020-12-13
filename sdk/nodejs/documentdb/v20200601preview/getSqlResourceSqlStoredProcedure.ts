// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getSqlResourceSqlStoredProcedure(args: GetSqlResourceSqlStoredProcedureArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlResourceSqlStoredProcedureResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:documentdb/v20200601preview:getSqlResourceSqlStoredProcedure", {
        "accountName": args.accountName,
        "containerName": args.containerName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "storedProcedureName": args.storedProcedureName,
    }, opts);
}

export interface GetSqlResourceSqlStoredProcedureArgs {
    /**
     * Cosmos DB database account name.
     */
    readonly accountName: string;
    /**
     * Cosmos DB container name.
     */
    readonly containerName: string;
    /**
     * Cosmos DB database name.
     */
    readonly databaseName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * Cosmos DB storedProcedure name.
     */
    readonly storedProcedureName: string;
}

/**
 * An Azure Cosmos DB storedProcedure.
 */
export interface GetSqlResourceSqlStoredProcedureResult {
    /**
     * The unique resource identifier of the ARM resource.
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: outputs.documentdb.v20200601preview.ManagedServiceIdentityResponse;
    /**
     * The location of the resource group to which the resource belongs.
     */
    readonly location?: string;
    /**
     * The name of the ARM resource.
     */
    readonly name: string;
    readonly resource?: outputs.documentdb.v20200601preview.SqlStoredProcedureGetPropertiesResponseResource;
    /**
     * Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of Azure resource.
     */
    readonly type: string;
}
