import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getJobCollection(args: GetJobCollectionArgs, opts?: pulumi.InvokeOptions): Promise<GetJobCollectionResult>;
export interface GetJobCollectionArgs {
    /**
     * The job collection name.
     */
    readonly jobCollectionName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
export interface GetJobCollectionResult {
    /**
     * Gets or sets the storage account location.
     */
    readonly location?: string;
    /**
     * Gets or sets the job collection resource name.
     */
    readonly name?: string;
    /**
     * Gets or sets the job collection properties.
     */
    readonly properties: outputs.scheduler.v20160101.JobCollectionPropertiesResponse;
    /**
     * Gets or sets the tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Gets the job collection resource type.
     */
    readonly type: string;
}
