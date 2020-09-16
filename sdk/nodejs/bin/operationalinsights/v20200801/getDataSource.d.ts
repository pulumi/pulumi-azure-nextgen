import * as pulumi from "@pulumi/pulumi";
export declare function getDataSource(args: GetDataSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetDataSourceResult>;
export interface GetDataSourceArgs {
    /**
     * Name of the datasource
     */
    readonly dataSourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    readonly workspaceName: string;
}
/**
 * Datasources under OMS Workspace.
 */
export interface GetDataSourceResult {
    /**
     * The ETag of the data source.
     */
    readonly etag?: string;
    /**
     * The kind of the DataSource.
     */
    readonly kind: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The data source properties in raw json format, each kind of data source have it's own schema.
     */
    readonly properties: {
        [key: string]: any;
    };
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
