import * as pulumi from "@pulumi/pulumi";
export declare function getFileServer(args: GetFileServerArgs, opts?: pulumi.InvokeOptions): Promise<GetFileServerResult>;
export interface GetFileServerArgs {
    /**
     * The device name.
     */
    readonly deviceName: string;
    /**
     * The file server name.
     */
    readonly fileServerName: string;
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
 * The file server.
 */
export interface GetFileServerResult {
    /**
     * The backup policy id.
     */
    readonly backupScheduleGroupId: string;
    /**
     * The description of the file server
     */
    readonly description?: string;
    /**
     * Domain of the file server
     */
    readonly domainName: string;
    /**
     * The name.
     */
    readonly name: string;
    /**
     * The storage domain id.
     */
    readonly storageDomainId: string;
    /**
     * The type.
     */
    readonly type: string;
}
