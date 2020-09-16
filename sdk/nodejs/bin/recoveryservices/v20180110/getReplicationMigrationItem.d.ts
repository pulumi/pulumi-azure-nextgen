import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getReplicationMigrationItem(args: GetReplicationMigrationItemArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationMigrationItemResult>;
export interface GetReplicationMigrationItemArgs {
    /**
     * Fabric unique name.
     */
    readonly fabricName: string;
    /**
     * Migration item name.
     */
    readonly migrationItemName: string;
    /**
     * Protection container name.
     */
    readonly protectionContainerName: string;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    readonly resourceName: string;
}
/**
 * Migration item.
 */
export interface GetReplicationMigrationItemResult {
    /**
     * Resource Location
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * The migration item properties.
     */
    readonly properties: outputs.recoveryservices.v20180110.MigrationItemPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
