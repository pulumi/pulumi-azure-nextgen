import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getFileServer(args: GetFileServerArgs, opts?: pulumi.InvokeOptions): Promise<GetFileServerResult>;
export interface GetFileServerArgs {
    /**
     * The name of the file server within the specified resource group. File server names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
     */
    readonly fileServerName: string;
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
 * File Server information.
 */
export interface GetFileServerResult {
    /**
     * Time when the FileServer was created.
     */
    readonly creationTime: string;
    /**
     * Information about disks attached to File Server VM.
     */
    readonly dataDisks?: outputs.batchai.v20180501.DataDisksResponse;
    /**
     * File Server mount settings.
     */
    readonly mountSettings: outputs.batchai.v20180501.MountSettingsResponse;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the File Server. Possible values: creating - The File Server is getting created; updating - The File Server creation has been accepted and it is getting updated; deleting - The user has requested that the File Server be deleted, and it is in the process of being deleted; failed - The File Server creation has failed with the specified error code. Details about the error code are specified in the message field; succeeded - The File Server creation has succeeded.
     */
    readonly provisioningState: string;
    /**
     * Time when the provisioning state was changed.
     */
    readonly provisioningStateTransitionTime: string;
    /**
     * SSH configuration for accessing the File Server node.
     */
    readonly sshConfiguration?: outputs.batchai.v20180501.SshConfigurationResponse;
    /**
     * File Server virtual network subnet resource ID.
     */
    readonly subnet?: outputs.batchai.v20180501.ResourceIdResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * VM size of the File Server.
     */
    readonly vmSize?: string;
}
