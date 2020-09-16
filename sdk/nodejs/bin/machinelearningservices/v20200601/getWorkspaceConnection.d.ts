import * as pulumi from "@pulumi/pulumi";
export declare function getWorkspaceConnection(args: GetWorkspaceConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceConnectionResult>;
export interface GetWorkspaceConnectionArgs {
    /**
     * Friendly name of the workspace connection
     */
    readonly connectionName: string;
    /**
     * Name of the resource group in which workspace is located.
     */
    readonly resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    readonly workspaceName: string;
}
/**
 * Workspace connection.
 */
export interface GetWorkspaceConnectionResult {
    /**
     * Authorization type of the workspace connection.
     */
    readonly authType?: string;
    /**
     * Category of the workspace connection.
     */
    readonly category?: string;
    /**
     * Friendly name of the workspace connection.
     */
    readonly name: string;
    /**
     * Target of the workspace connection.
     */
    readonly target?: string;
    /**
     * Resource type of workspace connection.
     */
    readonly type: string;
    /**
     * Value details of the workspace connection.
     */
    readonly value?: string;
}
