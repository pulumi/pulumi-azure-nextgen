import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getReplicationvCenter(args: GetReplicationvCenterArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationvCenterResult>;
export interface GetReplicationvCenterArgs {
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
    /**
     * vCenter name.
     */
    readonly vCenterName: string;
}
/**
 * vCenter definition.
 */
export interface GetReplicationvCenterResult {
    /**
     * Resource Location
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * VCenter related data.
     */
    readonly properties: outputs.recoveryservices.v20180710.VCenterPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
