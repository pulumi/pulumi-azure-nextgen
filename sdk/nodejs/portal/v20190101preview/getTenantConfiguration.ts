// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getTenantConfiguration(args: GetTenantConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetTenantConfigurationResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:portal/v20190101preview:getTenantConfiguration", {
        "configurationName": args.configurationName,
    }, opts);
}

export interface GetTenantConfigurationArgs {
    /**
     * The configuration name. Value must be 'default'
     */
    readonly configurationName: string;
}

/**
 * Tenant configuration.
 */
export interface GetTenantConfigurationResult {
    /**
     * When flag is set to true Markdown tile will require external storage configuration (URI). The inline content configuration will be prohibited.
     */
    readonly enforcePrivateMarkdownStorage?: boolean;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
