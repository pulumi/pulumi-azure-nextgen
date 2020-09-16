import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listRemediationDeploymentsAtResource(args: ListRemediationDeploymentsAtResourceArgs, opts?: pulumi.InvokeOptions): Promise<ListRemediationDeploymentsAtResourceResult>;
export interface ListRemediationDeploymentsAtResourceArgs {
    /**
     * The name of the remediation.
     */
    readonly remediationName: string;
    /**
     * Resource ID.
     */
    readonly resourceId: string;
    /**
     * Maximum number of records to return.
     */
    readonly top?: number;
}
/**
 * List of deployments for a remediation.
 */
export interface ListRemediationDeploymentsAtResourceResult {
    /**
     * The URL to get the next set of results.
     */
    readonly nextLink: string;
    /**
     * Array of deployments for the remediation.
     */
    readonly value: outputs.policyinsights.v20190701.RemediationDeploymentResponse[];
}
