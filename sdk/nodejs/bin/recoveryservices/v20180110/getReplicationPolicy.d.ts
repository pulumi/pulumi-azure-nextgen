import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getReplicationPolicy(args: GetReplicationPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationPolicyResult>;
export interface GetReplicationPolicyArgs {
    /**
     * Replication policy name.
     */
    readonly policyName: string;
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
 * Protection profile details.
 */
export interface GetReplicationPolicyResult {
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
    readonly properties: outputs.recoveryservices.v20180110.PolicyPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}
