// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getArtifactSourceResource(args: GetArtifactSourceResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetArtifactSourceResourceResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:devtestlab/v20150521preview:getArtifactSourceResource", {
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetArtifactSourceResourceArgs {
    /**
     * The name of the lab.
     */
    readonly labName: string;
    /**
     * The name of the artifact source.
     */
    readonly name: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Properties of an artifact source.
 */
export interface GetArtifactSourceResourceResult {
    /**
     * The branch reference of the artifact source.
     */
    readonly branchRef?: string;
    /**
     * The display name of the artifact source.
     */
    readonly displayName?: string;
    /**
     * The folder path of the artifact source.
     */
    readonly folderPath?: string;
    /**
     * The identifier of the resource.
     */
    readonly id?: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name?: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: string;
    /**
     * The security token of the artifact source.
     */
    readonly securityToken?: string;
    /**
     * The type of the artifact source.
     */
    readonly sourceType?: string;
    /**
     * The status of the artifact source.
     */
    readonly status?: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type?: string;
    /**
     * The URI of the artifact source.
     */
    readonly uri?: string;
}
