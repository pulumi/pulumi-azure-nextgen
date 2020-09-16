import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listDatabaseAccountConnectionStrings(args: ListDatabaseAccountConnectionStringsArgs, opts?: pulumi.InvokeOptions): Promise<ListDatabaseAccountConnectionStringsResult>;
export interface ListDatabaseAccountConnectionStringsArgs {
    /**
     * Cosmos DB database account name.
     */
    readonly accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
/**
 * The connection strings for the given database account.
 */
export interface ListDatabaseAccountConnectionStringsResult {
    /**
     * An array that contains the connection strings for the Cosmos DB account.
     */
    readonly connectionStrings?: outputs.documentdb.v20200401.DatabaseAccountConnectionStringResponse[];
}
