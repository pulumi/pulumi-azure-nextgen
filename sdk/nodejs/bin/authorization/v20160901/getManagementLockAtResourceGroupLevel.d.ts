import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getManagementLockAtResourceGroupLevel(args: GetManagementLockAtResourceGroupLevelArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementLockAtResourceGroupLevelResult>;
export interface GetManagementLockAtResourceGroupLevelArgs {
    /**
     * The name of the lock to get.
     */
    readonly lockName: string;
    /**
     * The name of the locked resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * The lock information.
 */
export interface GetManagementLockAtResourceGroupLevelResult {
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
