import * as pulumi from "@pulumi/pulumi";
export declare function getNotebookWorkspace(args: GetNotebookWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNotebookWorkspaceResult>;
export interface GetNotebookWorkspaceArgs {
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
 * A notebook workspace resource
 */
export interface GetNotebookWorkspaceResult {
    /**
     * The name of the database account.
     */
    readonly name: string;
    /**
     * Specifies the endpoint of Notebook server.
     */
    readonly notebookServerEndpoint: string;
    /**
     * Status of the notebook workspace. Possible values are: Creating, Online, Deleting, Failed, Updating.
     */
    readonly status: string;
    /**
     * The type of Azure resource.
     */
    readonly type: string;
}
