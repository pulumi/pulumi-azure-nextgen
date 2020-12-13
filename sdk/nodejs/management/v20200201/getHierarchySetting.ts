// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getHierarchySetting(args: GetHierarchySettingArgs, opts?: pulumi.InvokeOptions): Promise<GetHierarchySettingResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:management/v20200201:getHierarchySetting", {
        "groupId": args.groupId,
    }, opts);
}

export interface GetHierarchySettingArgs {
    /**
     * Management Group ID.
     */
    readonly groupId: string;
}

/**
 * Settings defined at the Management Group scope.
 */
export interface GetHierarchySettingResult {
    /**
     * Settings that sets the default Management Group under which new subscriptions get added in this tenant. For example, /providers/Microsoft.Management/managementGroups/defaultGroup
     */
    readonly defaultManagementGroup?: string;
    /**
     * The fully qualified ID for the settings object.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000/settings/default.
     */
    readonly id: string;
    /**
     * The name of the object. In this case, default.
     */
    readonly name: string;
    /**
     * Indicates whether RBAC access is required upon group creation under the root Management Group. If set to true, user will require Microsoft.Management/managementGroups/write action on the root Management Group scope in order to create new Groups directly under the root. This will prevent new users from creating new Management Groups, unless they are given access.
     */
    readonly requireAuthorizationForGroupCreation?: boolean;
    /**
     * The AAD Tenant ID associated with the hierarchy settings. For example, 00000000-0000-0000-0000-000000000000
     */
    readonly tenantId?: string;
    /**
     * The type of the resource.  For example, Microsoft.Management/managementGroups/settings.
     */
    readonly type: string;
}
