import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getReplicationFabric(args: GetReplicationFabricArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationFabricResult>;
export interface GetReplicationFabricArgs {
    /**
     * Fabric name.
     */
    readonly fabricName: string;
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
 * Fabric definition.
 */
export interface GetReplicationFabricResult {
    /**
     * Resource Location
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * Fabric related data.
     */
    readonly properties: outputs.recoveryservices.v20180710.FabricPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
