import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getProtectionPolicy(args: GetProtectionPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetProtectionPolicyResult>;
export interface GetProtectionPolicyArgs {
    /**
     * The backup policy name used in this GET operation.
     */
    readonly policyName: string;
    /**
     * The name of the resource group associated with the Recovery Services vault.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Recovery Services vault.
     */
    readonly vaultName: string;
}
/**
 * The base class for backup policy. Workload-specific backup policies are derived from this class.
 */
export interface GetProtectionPolicyResult {
    /**
     * Optional ETag.
     */
    readonly eTag?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name associated with the resource.
     */
    readonly name?: string;
    /**
     * The base class for a backup policy. Workload-specific backup policies are derived from this class.
     */
    readonly properties: outputs.recoveryservices.v20160601.ProtectionPolicyResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type?: string;
}
