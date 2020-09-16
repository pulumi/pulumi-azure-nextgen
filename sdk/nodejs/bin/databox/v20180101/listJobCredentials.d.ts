import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listJobCredentials(args: ListJobCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListJobCredentialsResult>;
export interface ListJobCredentialsArgs {
    /**
     * The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    readonly jobName: string;
    /**
     * The Resource Group Name
     */
    readonly resourceGroupName: string;
}
/**
 * List of unencrypted credentials for accessing device.
 */
export interface ListJobCredentialsResult {
    /**
     * Link for the next set of unencrypted credentials.
     */
    readonly nextLink?: string;
    /**
     * List of unencrypted credentials.
     */
    readonly value?: outputs.databox.v20180101.UnencryptedCredentialsResponse[];
}
