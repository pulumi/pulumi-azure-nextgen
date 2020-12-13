// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getRemediationAtSubscription(args: GetRemediationAtSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetRemediationAtSubscriptionResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:policyinsights/latest:getRemediationAtSubscription", {
        "remediationName": args.remediationName,
    }, opts);
}

export interface GetRemediationAtSubscriptionArgs {
    /**
     * The name of the remediation.
     */
    readonly remediationName: string;
}

/**
 * The remediation definition.
 */
export interface GetRemediationAtSubscriptionResult {
    /**
     * The time at which the remediation was created.
     */
    readonly createdOn: string;
    /**
     * The deployment status summary for all deployments created by the remediation.
     */
    readonly deploymentStatus: outputs.policyinsights.latest.RemediationDeploymentSummaryResponse;
    /**
     * The filters that will be applied to determine which resources to remediate.
     */
    readonly filters?: outputs.policyinsights.latest.RemediationFiltersResponse;
    /**
     * The ID of the remediation.
     */
    readonly id: string;
    /**
     * The time at which the remediation was last updated.
     */
    readonly lastUpdatedOn: string;
    /**
     * The name of the remediation.
     */
    readonly name: string;
    /**
     * The resource ID of the policy assignment that should be remediated.
     */
    readonly policyAssignmentId?: string;
    /**
     * The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
     */
    readonly policyDefinitionReferenceId?: string;
    /**
     * The status of the remediation.
     */
    readonly provisioningState: string;
    /**
     * The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified.
     */
    readonly resourceDiscoveryMode?: string;
    /**
     * The type of the remediation.
     */
    readonly type: string;
}
