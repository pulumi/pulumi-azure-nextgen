import * as pulumi from "@pulumi/pulumi";
export declare function getManagementLockAtResourceGroupLevel(args: GetManagementLockAtResourceGroupLevelArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementLockAtResourceGroupLevelResult>;
export interface GetManagementLockAtResourceGroupLevelArgs {
    /**
     * The lock name.
     */
    readonly lockName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * Management lock information.
 */
export interface GetManagementLockAtResourceGroupLevelResult {
    /**
     * The lock level of the management lock.
     */
    readonly level?: string;
    /**
     * The name of the lock.
     */
    readonly name?: string;
    /**
     * The notes of the management lock.
     */
    readonly notes?: string;
    /**
     * The type of the lock.
     */
    readonly type: string;
}
