import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getStorageInsight(args: GetStorageInsightArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageInsightResult>;
export interface GetStorageInsightArgs {
    /**
     * The Resource Group name.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the storageInsightsConfigs resource
     */
    readonly storageInsightName: string;
    /**
     * The Log Analytics Workspace name.
     */
    readonly workspaceName: string;
}
/**
 * The top level storage insight resource container.
 */
export interface GetStorageInsightResult {
    /**
     * The names of the blob containers that the workspace should read
     */
    readonly containers?: string[];
    /**
     * The ETag of the storage insight.
     */
    readonly eTag?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The status of the storage insight
     */
    readonly status: outputs.operationalinsights.v20150320.StorageInsightStatusResponse;
    /**
     * The storage account connection details
     */
    readonly storageAccount: outputs.operationalinsights.v20150320.StorageAccountResponse;
    /**
     * The names of the Azure tables that the workspace should read
     */
    readonly tables?: string[];
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
}
