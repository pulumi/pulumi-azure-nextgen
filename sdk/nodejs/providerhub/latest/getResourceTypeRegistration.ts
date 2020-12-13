// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getResourceTypeRegistration(args: GetResourceTypeRegistrationArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceTypeRegistrationResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:providerhub/latest:getResourceTypeRegistration", {
        "providerNamespace": args.providerNamespace,
        "resourceType": args.resourceType,
    }, opts);
}

export interface GetResourceTypeRegistrationArgs {
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    readonly providerNamespace: string;
    /**
     * The resource type.
     */
    readonly resourceType: string;
}

export interface GetResourceTypeRegistrationResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly properties: outputs.providerhub.latest.ResourceTypeRegistrationResponseProperties;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
