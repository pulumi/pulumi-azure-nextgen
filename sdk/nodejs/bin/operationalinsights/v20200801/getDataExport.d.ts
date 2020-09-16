import * as pulumi from "@pulumi/pulumi";
export declare function getDataExport(args: GetDataExportArgs, opts?: pulumi.InvokeOptions): Promise<GetDataExportResult>;
export interface GetDataExportArgs {
    /**
     * The data export rule name.
     */
    readonly dataExportName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    readonly workspaceName: string;
}
/**
 * The top level data export resource container.
 */
export interface GetDataExportResult {
    /**
     * When ‘true’, all workspace's tables are exported.
     */
    readonly allTables?: boolean;
    /**
     * The latest data export rule modification time.
     */
    readonly createdDate?: string;
    /**
     * The data export rule ID.
     */
    readonly dataExportId?: string;
    /**
     * Active when enabled.
     */
    readonly enable?: boolean;
    /**
     * Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account.
     */
    readonly eventHubName?: string;
    /**
     * Date and time when the export was last modified.
     */
    readonly lastModifiedDate?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure.
     */
    readonly resourceId: string;
    /**
     * An array of tables to export, for example: [“Heartbeat, SecurityEvent”].
     */
    readonly tableNames?: string[];
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
