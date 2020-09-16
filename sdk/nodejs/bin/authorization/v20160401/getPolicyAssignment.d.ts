import * as pulumi from "@pulumi/pulumi";
export declare function getPolicyAssignment(args: GetPolicyAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyAssignmentResult>;
export interface GetPolicyAssignmentArgs {
    /**
     * The name of the policy assignment to get.
     */
    readonly policyAssignmentName: string;
    /**
     * The scope of the policy assignment.
     */
    readonly scope: string;
}
/**
 * The policy assignment.
 */
export interface GetPolicyAssignmentResult {
    /**
     * The display name of the policy assignment.
     */
    readonly displayName?: string;
    /**
     * The name of the policy assignment.
     */
    readonly name?: string;
    /**
     * The ID of the policy definition.
     */
    readonly policyDefinitionId?: string;
    /**
     * The scope for the policy assignment.
     */
    readonly scope?: string;
    /**
     * The type of the policy assignment.
     */
    readonly type?: string;
}
