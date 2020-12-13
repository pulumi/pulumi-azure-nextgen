// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function listRemediationDeploymentsAtResourceGroup(args: ListRemediationDeploymentsAtResourceGroupArgs, opts?: pulumi.InvokeOptions): Promise<ListRemediationDeploymentsAtResourceGroupResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:policyinsights/v20180701preview:listRemediationDeploymentsAtResourceGroup", {
        "remediationName": args.remediationName,
        "resourceGroupName": args.resourceGroupName,
        "top": args.top,
    }, opts);
}

export interface ListRemediationDeploymentsAtResourceGroupArgs {
    /**
     * The name of the remediation.
     */
    readonly remediationName: string;
    /**
     * Resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * Maximum number of records to return.
     */
    readonly top?: number;
}

/**
 * List of deployments for a remediation.
 */
export interface ListRemediationDeploymentsAtResourceGroupResult {
    /**
     * The URL to get the next set of results.
     */
    readonly nextLink: string;
    /**
     * Array of deployments for the remediation.
     */
    readonly value: outputs.policyinsights.v20180701preview.RemediationDeploymentResponse[];
}
