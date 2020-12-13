// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getArtifactSource(args: GetArtifactSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetArtifactSourceResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:deploymentmanager/v20191101preview:getArtifactSource", {
        "artifactSourceName": args.artifactSourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetArtifactSourceArgs {
    /**
     * The name of the artifact source.
     */
    readonly artifactSourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}

/**
 * The resource that defines the source location where the artifacts are located.
 */
export interface GetArtifactSourceResult {
    /**
     * The path from the location that the 'authentication' property [say, a SAS URI to the blob container] refers to, to the location of the artifacts. This can be used to differentiate different versions of the artifacts. Or, different types of artifacts like binaries or templates. The location referenced by the authentication property concatenated with this optional artifactRoot path forms the artifact source location where the artifacts are expected to be found.
     */
    readonly artifactRoot?: string;
    /**
     * The authentication method to use to access the artifact source.
     */
    readonly authentication: outputs.deploymentmanager.v20191101preview.SasAuthenticationResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of artifact source used.
     */
    readonly sourceType: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
