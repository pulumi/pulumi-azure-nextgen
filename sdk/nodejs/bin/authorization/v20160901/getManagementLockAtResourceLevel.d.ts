import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getManagementLockAtResourceLevel(args: GetManagementLockAtResourceLevelArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementLockAtResourceLevelResult>;
export interface GetManagementLockAtResourceLevelArgs {
    /**
     * The name of lock.
     */
    readonly lockName: string;
    /**
     * An extra path parameter needed in some services, like SQL Databases.
     */
    readonly parentResourcePath: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the resource.
     */
    readonly resourceName: string;
    /**
     * The namespace of the resource provider.
     */
    readonly resourceProviderNamespace: string;
    /**
     * The type of the resource.
     */
    readonly resourceType: string;
}
/**
 * The lock information.
 */
export interface GetManagementLockAtResourceLevelResult {
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
