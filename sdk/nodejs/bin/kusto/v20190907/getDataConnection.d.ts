import * as pulumi from "@pulumi/pulumi";
export declare function getDataConnection(args: GetDataConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetDataConnectionResult>;
export interface GetDataConnectionArgs {
    /**
     * The name of the Kusto cluster.
     */
    readonly clusterName: string;
    /**
     * The name of the data connection.
     */
    readonly dataConnectionName: string;
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
 * Class representing an data connection.
 */
export interface GetDataConnectionResult {
    /**
     * Kind of the endpoint for the data connection
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
