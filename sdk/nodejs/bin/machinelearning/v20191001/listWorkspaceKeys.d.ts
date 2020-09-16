import * as pulumi from "@pulumi/pulumi";
export declare function listWorkspaceKeys(args: ListWorkspaceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceKeysResult>;
export interface ListWorkspaceKeysArgs {
    /**
     * The name of the resource group to which the machine learning workspace belongs.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the machine learning workspace.
     */
    readonly workspaceName: string;
}
/**
 * Workspace authorization keys for a workspace.
 */
export interface ListWorkspaceKeysResult {
    /**
     * Primary authorization key for this workspace.
     */
    readonly primaryToken?: string;
    /**
     * Secondary authorization key for this workspace.
     */
    readonly secondaryToken?: string;
}
