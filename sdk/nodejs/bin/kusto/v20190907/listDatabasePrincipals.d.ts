import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listDatabasePrincipals(args: ListDatabasePrincipalsArgs, opts?: pulumi.InvokeOptions): Promise<ListDatabasePrincipalsResult>;
export interface ListDatabasePrincipalsArgs {
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
 * The list Kusto database principals operation response.
 */
export interface ListDatabasePrincipalsResult {
    /**
     * The list of Kusto database principals.
     */
    readonly value?: outputs.kusto.v20190907.DatabasePrincipalResponse[];
}
