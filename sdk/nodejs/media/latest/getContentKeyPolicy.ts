// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getContentKeyPolicy(args: GetContentKeyPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetContentKeyPolicyResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:media/latest:getContentKeyPolicy", {
        "accountName": args.accountName,
        "contentKeyPolicyName": args.contentKeyPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContentKeyPolicyArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: string;
    /**
     * The Content Key Policy name.
     */
    readonly contentKeyPolicyName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}

/**
 * A Content Key Policy resource.
 */
export interface GetContentKeyPolicyResult {
    /**
     * The creation date of the Policy
     */
    readonly created: string;
    /**
     * A description for the Policy.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The last modified date of the Policy
     */
    readonly lastModified: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The Key Policy options.
     */
    readonly options: outputs.media.latest.ContentKeyPolicyOptionResponse[];
    /**
     * The legacy Policy ID.
     */
    readonly policyId: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
