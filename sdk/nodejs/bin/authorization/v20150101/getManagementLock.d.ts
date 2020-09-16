import * as pulumi from "@pulumi/pulumi";
export declare function getManagementLock(args: GetManagementLockArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementLockResult>;
export interface GetManagementLockArgs {
    /**
     * Name of the management lock.
     */
    readonly lockName: string;
}
/**
 * Management lock information.
 */
export interface GetManagementLockResult {
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
