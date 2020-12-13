// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getProviderInstance(args: GetProviderInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetProviderInstanceResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:hanaonazure/v20200207preview:getProviderInstance", {
        "providerInstanceName": args.providerInstanceName,
        "resourceGroupName": args.resourceGroupName,
        "sapMonitorName": args.sapMonitorName,
    }, opts);
}

export interface GetProviderInstanceArgs {
    /**
     * Name of the provider instance.
     */
    readonly providerInstanceName: string;
    /**
     * Name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the SAP monitor resource.
     */
    readonly sapMonitorName: string;
}

/**
 * A provider instance associated with a SAP monitor.
 */
export interface GetProviderInstanceResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * A JSON string containing metadata of the provider instance.
     */
    readonly metadata?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * A JSON string containing the properties of the provider instance.
     */
    readonly properties: string;
    /**
     * State of provisioning of the provider instance
     */
    readonly provisioningState: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
