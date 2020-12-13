// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getIntegrationAccountAssembly(args: GetIntegrationAccountAssemblyArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountAssemblyResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:logic/v20180701preview:getIntegrationAccountAssembly", {
        "assemblyArtifactName": args.assemblyArtifactName,
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationAccountAssemblyArgs {
    /**
     * The assembly artifact name.
     */
    readonly assemblyArtifactName: string;
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}

/**
 * The assembly definition.
 */
export interface GetIntegrationAccountAssemblyResult {
    /**
     * The resource id.
     */
    readonly id: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The assembly properties.
     */
    readonly properties: outputs.logic.v20180701preview.AssemblyPropertiesResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
