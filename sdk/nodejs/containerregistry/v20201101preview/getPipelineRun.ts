// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getPipelineRun(args: GetPipelineRunArgs, opts?: pulumi.InvokeOptions): Promise<GetPipelineRunResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:containerregistry/v20201101preview:getPipelineRun", {
        "pipelineRunName": args.pipelineRunName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPipelineRunArgs {
    /**
     * The name of the pipeline run.
     */
    readonly pipelineRunName: string;
    /**
     * The name of the container registry.
     */
    readonly registryName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    readonly resourceGroupName: string;
}

/**
 * An object that represents a pipeline run for a container registry.
 */
export interface GetPipelineRunResult {
    /**
     * How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed.
     */
    readonly forceUpdateTag?: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning state of a pipeline run.
     */
    readonly provisioningState: string;
    /**
     * The request parameters for a pipeline run.
     */
    readonly request?: outputs.containerregistry.v20201101preview.PipelineRunRequestResponse;
    /**
     * The response of a pipeline run.
     */
    readonly response: outputs.containerregistry.v20201101preview.PipelineRunResponseResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: outputs.containerregistry.v20201101preview.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
