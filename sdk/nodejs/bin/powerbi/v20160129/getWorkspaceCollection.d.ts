import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getWorkspaceCollection(args: GetWorkspaceCollectionArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceCollectionResult>;
export interface GetWorkspaceCollectionArgs {
    /**
     * Azure resource group
     */
    readonly resourceGroupName: string;
    /**
     * Power BI Embedded Workspace Collection name
     */
    readonly workspaceCollectionName: string;
}
export interface GetWorkspaceCollectionResult {
    /**
     * Azure location
     */
    readonly location?: string;
    /**
     * Workspace collection name
     */
    readonly name?: string;
    /**
     * Properties
     */
    readonly properties: {
        [key: string]: any;
    };
    readonly sku?: outputs.powerbi.v20160129.AzureSkuResponse;
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type?: string;
}
