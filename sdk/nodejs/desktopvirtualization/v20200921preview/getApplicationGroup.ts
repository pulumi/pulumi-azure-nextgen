// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getApplicationGroup(args: GetApplicationGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationGroupResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:desktopvirtualization/v20200921preview:getApplicationGroup", {
        "applicationGroupName": args.applicationGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationGroupArgs {
    /**
     * The name of the application group
     */
    readonly applicationGroupName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}

/**
 * Represents a ApplicationGroup definition.
 */
export interface GetApplicationGroupResult {
    /**
     * Resource Type of ApplicationGroup.
     */
    readonly applicationGroupType: string;
    /**
     * Description of ApplicationGroup.
     */
    readonly description?: string;
    /**
     * Friendly name of ApplicationGroup.
     */
    readonly friendlyName?: string;
    /**
     * HostPool arm path of ApplicationGroup.
     */
    readonly hostPoolArmPath: string;
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
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Workspace arm path of ApplicationGroup.
     */
    readonly workspaceArmPath: string;
}
