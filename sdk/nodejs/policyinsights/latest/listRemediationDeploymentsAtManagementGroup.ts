// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function listRemediationDeploymentsAtManagementGroup(args: ListRemediationDeploymentsAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<ListRemediationDeploymentsAtManagementGroupResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:policyinsights/latest:listRemediationDeploymentsAtManagementGroup", {
        "managementGroupId": args.managementGroupId,
        "managementGroupsNamespace": args.managementGroupsNamespace,
        "remediationName": args.remediationName,
        "top": args.top,
    }, opts);
}

export interface ListRemediationDeploymentsAtManagementGroupArgs {
    /**
     * Management group ID.
     */
    readonly managementGroupId: string;
    /**
     * The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
     */
    readonly managementGroupsNamespace: string;
    /**
     * The name of the remediation.
     */
    readonly remediationName: string;
    /**
     * Maximum number of records to return.
     */
    readonly top?: number;
}

/**
 * List of deployments for a remediation.
 */
export interface ListRemediationDeploymentsAtManagementGroupResult {
    /**
     * The URL to get the next set of results.
     */
    readonly nextLink: string;
    /**
     * Array of deployments for the remediation.
     */
    readonly value: outputs.policyinsights.latest.RemediationDeploymentResponse[];
}
