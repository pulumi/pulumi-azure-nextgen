import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listRemediationDeploymentsAtResourceGroup(args: ListRemediationDeploymentsAtResourceGroupArgs, opts?: pulumi.InvokeOptions): Promise<ListRemediationDeploymentsAtResourceGroupResult>;
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
    readonly value: outputs.policyinsights.v20190701.RemediationDeploymentResponse[];
}
