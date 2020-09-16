import * as pulumi from "@pulumi/pulumi";
export declare function getIscsiServer(args: GetIscsiServerArgs, opts?: pulumi.InvokeOptions): Promise<GetIscsiServerResult>;
export interface GetIscsiServerArgs {
    /**
     * The device name.
     */
    readonly deviceName: string;
    /**
     * The iSCSI server name.
     */
    readonly iscsiServerName: string;
    /**
     * The manager name
     */
    readonly managerName: string;
    /**
     * The resource group name
     */
    readonly resourceGroupName: string;
}
/**
 * The iSCSI server.
 */
export interface GetIscsiServerResult {
    /**
     * The backup policy id.
     */
    readonly backupScheduleGroupId: string;
    /**
     * The chap id.
     */
    readonly chapId?: string;
    /**
     * The description.
     */
    readonly description?: string;
    /**
     * The name.
     */
    readonly name: string;
    /**
     * The reverse chap id.
     */
    readonly reverseChapId?: string;
    /**
     * The storage domain id.
     */
    readonly storageDomainId: string;
    /**
     * The type.
     */
    readonly type: string;
}
