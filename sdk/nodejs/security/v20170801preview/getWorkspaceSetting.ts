// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getWorkspaceSetting(args: GetWorkspaceSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceSettingResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:security/v20170801preview:getWorkspaceSetting", {
        "workspaceSettingName": args.workspaceSettingName,
    }, opts);
}

export interface GetWorkspaceSettingArgs {
    /**
     * Name of the security setting
     */
    readonly workspaceSettingName: string;
}

/**
 * Configures where to store the OMS agent data for workspaces under a scope
 */
export interface GetWorkspaceSettingResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope
     */
    readonly scope: string;
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * The full Azure ID of the workspace to save the data in
     */
    readonly workspaceId: string;
}
