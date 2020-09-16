import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getRoleAssignment(args: GetRoleAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleAssignmentResult>;
export interface GetRoleAssignmentArgs {
    /**
     * The name of the role assignment to get.
     */
    readonly roleAssignmentName: string;
    /**
     * The scope of the role assignment.
     */
    readonly scope: string;
}
/**
 * Role Assignments
 */
export interface GetRoleAssignmentResult {
    /**
     * The role assignment name.
     */
    readonly name: string;
    /**
     * Role assignment properties.
     */
    readonly properties: outputs.authorization.v20150701.RoleAssignmentPropertiesWithScopeResponse;
    /**
     * The role assignment type.
     */
    readonly type: string;
}
