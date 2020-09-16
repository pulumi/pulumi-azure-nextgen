import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listClusterRemoteLoginInformation(args: ListClusterRemoteLoginInformationArgs, opts?: pulumi.InvokeOptions): Promise<ListClusterRemoteLoginInformationResult>;
export interface ListClusterRemoteLoginInformationArgs {
    /**
     * The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
     */
    readonly clusterName: string;
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
 * Values returned by the List operation.
 */
export interface ListClusterRemoteLoginInformationResult {
    /**
     * The continuation token.
     */
    readonly nextLink: string;
    /**
     * The collection of returned remote login details.
     */
    readonly value: outputs.batchai.v20180501.RemoteLoginInformationResponse[];
}
