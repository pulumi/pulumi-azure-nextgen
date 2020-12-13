// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getJob(args: GetJobArgs, opts?: pulumi.InvokeOptions): Promise<GetJobResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:importexport/v20161101:getJob", {
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

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
     * Specifies the resource identifier of the job.
     */
    readonly id: string;
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
    readonly properties: outputs.importexport.v20161101.JobDetailsResponse;
    /**
     * Specifies the tags that are assigned to the job.
     */
    readonly tags?: any;
    /**
     * Specifies the type of the job resource.
     */
    readonly type: string;
}
