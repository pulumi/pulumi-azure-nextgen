// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getIntegrationRuntimeObjectMetadatum(args: GetIntegrationRuntimeObjectMetadatumArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationRuntimeObjectMetadatumResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:synapse/v20190601preview:getIntegrationRuntimeObjectMetadatum", {
        "integrationRuntimeName": args.integrationRuntimeName,
        "metadataPath": args.metadataPath,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIntegrationRuntimeObjectMetadatumArgs {
    /**
     * Integration runtime name
     */
    readonly integrationRuntimeName: string;
    /**
     * Metadata path.
     */
    readonly metadataPath?: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the workspace
     */
    readonly workspaceName: string;
}

/**
 * A list of SSIS object metadata.
 */
export interface GetIntegrationRuntimeObjectMetadatumResult {
    /**
     * The link to the next page of results, if any remaining results exist.
     */
    readonly nextLink?: string;
    /**
     * List of SSIS object metadata.
     */
    readonly value?: outputs.synapse.v20190601preview.SsisEnvironmentResponse | outputs.synapse.v20190601preview.SsisFolderResponse | outputs.synapse.v20190601preview.SsisPackageResponse | outputs.synapse.v20190601preview.SsisProjectResponse[];
}