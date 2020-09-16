import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getJob(args: GetJobArgs, opts?: pulumi.InvokeOptions): Promise<GetJobResult>;
export interface GetJobArgs {
    /**
     * The job collection name.
     */
    readonly jobCollectionName: string;
    /**
     * The job name.
     */
    readonly jobName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
export interface GetJobResult {
    /**
     * Gets the job resource name.
     */
    readonly name: string;
    /**
     * Gets or sets the job properties.
     */
    readonly properties: outputs.scheduler.v20160101.JobPropertiesResponse;
    /**
     * Gets the job resource type.
     */
    readonly type: string;
}
