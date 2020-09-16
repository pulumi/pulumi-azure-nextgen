import * as pulumi from "@pulumi/pulumi";
export declare function getWorkspace(args: GetWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceResult>;
export interface GetWorkspaceArgs {
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
     */
    readonly workspaceName: string;
}
/**
 * Batch AI Workspace information.
 */
export interface GetWorkspaceResult {
    /**
     * Time when the Workspace was created.
     */
    readonly creationTime: string;
    /**
     * The location of the resource
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioned state of the Workspace
     */
    readonly provisioningState: string;
    /**
     * The time at which the workspace entered its current provisioning state.
     */
    readonly provisioningStateTransitionTime: string;
    /**
     * The tags of the resource
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The type of the resource
     */
    readonly type: string;
}
