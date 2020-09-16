import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getRoleDefinition(args: GetRoleDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleDefinitionResult>;
export interface GetRoleDefinitionArgs {
    /**
     * The ID of the role definition.
     */
    readonly roleDefinitionId: string;
    /**
     * The scope of the role definition.
     */
    readonly scope: string;
}
/**
 * Role definition.
 */
export interface GetRoleDefinitionResult {
    /**
     * Role definition assignable scopes.
     */
    readonly assignableScopes?: string[];
    /**
     * The role definition description.
     */
    readonly description?: string;
    /**
     * The role definition name.
     */
    readonly name: string;
    /**
     * Role definition permissions.
     */
    readonly permissions?: outputs.authorization.v20150701.PermissionResponse[];
    /**
     * The role name.
     */
    readonly roleName?: string;
    /**
     * The role type.
     */
    readonly roleType?: string;
    /**
     * The role definition type.
     */
    readonly type: string;
}
