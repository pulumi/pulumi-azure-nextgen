import * as pulumi from "@pulumi/pulumi";
export declare function getDatabase(args: GetDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseResult>;
export interface GetDatabaseArgs {
    /**
     * The name of the database.
     */
    readonly databaseName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the server.
     */
    readonly serverName: string;
}
/**
 * Represents a Database.
 */
export interface GetDatabaseResult {
    /**
     * The charset of the database.
     */
    readonly charset?: string;
    /**
     * The collation of the database.
     */
    readonly collation?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
