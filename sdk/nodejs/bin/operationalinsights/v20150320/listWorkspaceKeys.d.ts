import * as pulumi from "@pulumi/pulumi";
export declare function listWorkspaceKeys(args: ListWorkspaceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceKeysResult>;
export interface ListWorkspaceKeysArgs {
    /**
     * The Resource Group name.
     */
    readonly resourceGroupName: string;
    /**
     * The Log Analytics Workspace name.
     */
    readonly workspaceName: string;
}
/**
 * The shared keys for a workspace.
 */
export interface ListWorkspaceKeysResult {
    /**
     * The primary shared key of a workspace.
     */
    readonly primarySharedKey?: string;
    /**
     * The secondary shared key of a workspace.
     */
    readonly secondarySharedKey?: string;
}
