import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPolicyAssignment(args: GetPolicyAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyAssignmentResult>;
export interface GetPolicyAssignmentArgs {
    /**
     * Policy assignment name.
     */
    readonly policyAssignmentName: string;
    /**
     * Scope.
     */
    readonly scope: string;
}
/**
 * Policy assignment.
 */
export interface GetPolicyAssignmentResult {
    /**
     * Gets or sets the policy assignment name.
     */
    readonly name: string;
    /**
     * Gets or sets the policy assignment properties.
     */
    readonly properties: outputs.authorization.v20151101.PolicyAssignmentPropertiesResponse;
}
