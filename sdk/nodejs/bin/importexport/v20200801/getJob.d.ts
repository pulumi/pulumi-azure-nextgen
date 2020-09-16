import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getJob(args: GetJobArgs, opts?: pulumi.InvokeOptions): Promise<GetJobResult>;
export interface GetJobArgs {
    /**
     * The name of the import/export job.
     */
    readonly jobName: string;
    /**
     * The resource group name uniquely identifies the resource group within the user subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Contains the job information.
 */
export interface GetJobResult {
    /**
     * Specifies the job identity details
     */
    readonly identity?: outputs.importexport.v20200801.IdentityDetailsResponse;
    /**
     * Specifies the Azure location where the job is created.
     */
    readonly location?: string;
    /**
     * Specifies the name of the job.
     */
    readonly name: string;
    /**
     * Specifies the job properties
     */
    readonly properties: outputs.importexport.v20200801.JobDetailsResponse;
    /**
     * Specifies the tags that are assigned to the job.
     */
    readonly tags?: {
        [key: string]: any;
    };
    /**
     * Specifies the type of the job resource.
     */
    readonly type: string;
}
