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
     * This message will be part of response in case of policy violation.
     */
    readonly description?: string;
    /**
     * The display name of the policy assignment.
     */
    readonly displayName?: string;
    /**
     * The name of the policy assignment.
     */
    readonly name?: string;
    /**
     * Required if a parameter is used in policy rule.
     */
    readonly parameters?: {
        [key: string]: any;
    };
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
