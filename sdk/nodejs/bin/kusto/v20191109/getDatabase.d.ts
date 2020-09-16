import * as pulumi from "@pulumi/pulumi";
export declare function getDatabase(args: GetDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseResult>;
export interface GetDatabaseArgs {
    /**
     * The name of the Kusto cluster.
     */
    readonly clusterName: string;
    /**
     * The name of the database in the Kusto cluster.
     */
    readonly databaseName: string;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    readonly resourceGroupName: string;
}
/**
 * Class representing a Kusto database.
 */
export interface GetDatabaseResult {
    /**
     * Kind of the database
     */
    readonly kind: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
