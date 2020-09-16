import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getReplicationRecoveryPlan(args: GetReplicationRecoveryPlanArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationRecoveryPlanResult>;
export interface GetReplicationRecoveryPlanArgs {
    /**
     * Name of the recovery plan.
     */
    readonly recoveryPlanName: string;
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
 * Recovery plan details.
 */
export interface GetReplicationRecoveryPlanResult {
    /**
     * Resource Location
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * The custom details.
     */
    readonly properties: outputs.recoveryservices.v20180110.RecoveryPlanPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
