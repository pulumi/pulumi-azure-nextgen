import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listRemediationDeploymentsAtManagementGroup(args: ListRemediationDeploymentsAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<ListRemediationDeploymentsAtManagementGroupResult>;
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
    readonly value: outputs.policyinsights.v20190701.RemediationDeploymentResponse[];
}
