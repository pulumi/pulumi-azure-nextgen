import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getManagementLockByScope(args: GetManagementLockByScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementLockByScopeResult>;
export interface GetManagementLockByScopeArgs {
    /**
     * The name of lock.
     */
    readonly lockName: string;
    /**
     * The scope for the lock.
     */
    readonly scope: string;
}
/**
 * The lock information.
 */
export interface GetManagementLockByScopeResult {
    /**
     * The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it.
     */
    readonly level: string;
    /**
     * The name of the lock.
     */
    readonly name: string;
    /**
     * Notes about the lock. Maximum of 512 characters.
     */
    readonly notes?: string;
    /**
     * The owners of the lock.
     */
    readonly owners?: outputs.authorization.v20160901.ManagementLockOwnerResponse[];
    /**
     * The resource type of the lock - Microsoft.Authorization/locks.
     */
    readonly type: string;
}
