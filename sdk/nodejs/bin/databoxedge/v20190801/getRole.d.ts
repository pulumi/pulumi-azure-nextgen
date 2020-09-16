import * as pulumi from "@pulumi/pulumi";
export declare function getRole(args: GetRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleResult>;
export interface GetRoleArgs {
    /**
     * The device name.
     */
    readonly deviceName: string;
    /**
     * The role name.
     */
    readonly name: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * Compute role.
 */
export interface GetRoleResult {
    /**
     * Role type.
     */
    readonly kind: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
