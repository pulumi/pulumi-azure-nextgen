import * as pulumi from "@pulumi/pulumi";
export declare function listWorkspaceCollectionAccessKeys(args: ListWorkspaceCollectionAccessKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceCollectionAccessKeysResult>;
export interface ListWorkspaceCollectionAccessKeysArgs {
    /**
     * Azure resource group
     */
    readonly resourceGroupName: string;
    /**
     * Power BI Embedded Workspace Collection name
     */
    readonly workspaceCollectionName: string;
}
export interface ListWorkspaceCollectionAccessKeysResult {
    /**
     * Access key 1
     */
    readonly key1?: string;
    /**
     * Access key 2
     */
    readonly key2?: string;
}
