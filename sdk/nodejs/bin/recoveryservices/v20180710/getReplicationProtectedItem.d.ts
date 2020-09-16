import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getReplicationProtectedItem(args: GetReplicationProtectedItemArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationProtectedItemResult>;
export interface GetReplicationProtectedItemArgs {
    /**
     * Fabric unique name.
     */
    readonly fabricName: string;
    /**
     * Protection container name.
     */
    readonly protectionContainerName: string;
    /**
     * Replication protected item name.
     */
    readonly replicatedProtectedItemName: string;
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
 * Replication protected item.
 */
export interface GetReplicationProtectedItemResult {
    /**
     * Resource Location
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * The custom data.
     */
    readonly properties: outputs.recoveryservices.v20180710.ReplicationProtectedItemPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
