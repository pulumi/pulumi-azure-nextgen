import * as pulumi from "@pulumi/pulumi";
export declare function listNotebookWorkspaceConnectionInfo(args: ListNotebookWorkspaceConnectionInfoArgs, opts?: pulumi.InvokeOptions): Promise<ListNotebookWorkspaceConnectionInfoResult>;
export interface ListNotebookWorkspaceConnectionInfoArgs {
    /**
     * Cosmos DB database account name.
     */
    readonly accountName: string;
    /**
     * The name of the notebook workspace resource.
     */
    readonly notebookWorkspaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
/**
 * The connection info for the given notebook workspace
 */
export interface ListNotebookWorkspaceConnectionInfoResult {
    /**
     * Specifies auth token used for connecting to Notebook server (uses token-based auth).
     */
    readonly authToken: string;
    /**
     * Specifies the endpoint of Notebook server.
     */
    readonly notebookServerEndpoint: string;
}
