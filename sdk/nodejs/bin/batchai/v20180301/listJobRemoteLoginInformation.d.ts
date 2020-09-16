import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listJobRemoteLoginInformation(args: ListJobRemoteLoginInformationArgs, opts?: pulumi.InvokeOptions): Promise<ListJobRemoteLoginInformationResult>;
export interface ListJobRemoteLoginInformationArgs {
    /**
     * The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
     */
    readonly jobName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * Values returned by the List operation.
 */
export interface ListJobRemoteLoginInformationResult {
    /**
     * The continuation token.
     */
    readonly nextLink?: string;
    /**
     * The collection of returned remote login details.
     */
    readonly value?: outputs.batchai.v20180301.RemoteLoginInformationResponse[];
}
