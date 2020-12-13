// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getDefaultRollout(args: GetDefaultRolloutArgs, opts?: pulumi.InvokeOptions): Promise<GetDefaultRolloutResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:providerhub/v20201120:getDefaultRollout", {
        "providerNamespace": args.providerNamespace,
        "rolloutName": args.rolloutName,
    }, opts);
}

export interface GetDefaultRolloutArgs {
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    readonly providerNamespace: string;
    /**
     * The rollout name.
     */
    readonly rolloutName: string;
}

/**
 * Default rollout definition.
 */
export interface GetDefaultRolloutResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly provisioningState?: string;
    readonly specification?: outputs.providerhub.v20201120.DefaultRolloutPropertiesResponseSpecification;
    readonly status?: outputs.providerhub.v20201120.DefaultRolloutPropertiesResponseStatus;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
