// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getroleManagementPolicy(args: GetroleManagementPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetroleManagementPolicyResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:authorization/v20201001preview:getroleManagementPolicy", {
        "roleManagementPolicyName": args.roleManagementPolicyName,
        "scope": args.scope,
    }, opts);
}

export interface GetroleManagementPolicyArgs {
    /**
     * The name (guid) of the role management policy to get.
     */
    readonly roleManagementPolicyName: string;
    /**
     * The scope of the role management policy.
     */
    readonly scope: string;
}

/**
 * Role management policy
 */
export interface GetroleManagementPolicyResult {
    /**
     * The role management policy description.
     */
    readonly description?: string;
    /**
     * The role management policy display name.
     */
    readonly displayName?: string;
    /**
     * The readonly computed rule applied to the policy.
     */
    readonly effectiveRules: outputs.authorization.v20201001preview.RoleManagementPolicyApprovalRuleResponse | outputs.authorization.v20201001preview.RoleManagementPolicyAuthenticationContextRuleResponse | outputs.authorization.v20201001preview.RoleManagementPolicyEnablementRuleResponse | outputs.authorization.v20201001preview.RoleManagementPolicyExpirationRuleResponse | outputs.authorization.v20201001preview.RoleManagementPolicyNotificationRuleResponse[];
    /**
     * The role management policy Id.
     */
    readonly id: string;
    /**
     * The role management policy is default policy.
     */
    readonly isOrganizationDefault?: boolean;
    /**
     * The last updated date time.
     */
    readonly lastUpdatedDateTime: string;
    /**
     * The role management policy name.
     */
    readonly name: string;
    /**
     * The rule applied to the policy.
     */
    readonly rules?: outputs.authorization.v20201001preview.RoleManagementPolicyApprovalRuleResponse | outputs.authorization.v20201001preview.RoleManagementPolicyAuthenticationContextRuleResponse | outputs.authorization.v20201001preview.RoleManagementPolicyEnablementRuleResponse | outputs.authorization.v20201001preview.RoleManagementPolicyExpirationRuleResponse | outputs.authorization.v20201001preview.RoleManagementPolicyNotificationRuleResponse[];
    /**
     * The role management policy scope.
     */
    readonly scope?: string;
    /**
     * The role management policy type.
     */
    readonly type: string;
}
