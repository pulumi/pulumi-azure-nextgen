import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getObjectReplicationPolicy(args: GetObjectReplicationPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetObjectReplicationPolicyResult>;
export interface GetObjectReplicationPolicyArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    readonly accountName: string;
    /**
     * The ID of object replication policy or 'default' if the policy ID is unknown.
     */
    readonly objectReplicationPolicyId: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
/**
 * The replication policy between two storage accounts. Multiple rules can be defined in one policy.
 */
export interface GetObjectReplicationPolicyResult {
    /**
     * Required. Destination account name.
     */
    readonly destinationAccount: string;
    /**
     * Indicates when the policy is enabled on the source account.
     */
    readonly enabledTime: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * A unique id for object replication policy.
     */
    readonly policyId: string;
    /**
     * The storage account object replication rules.
     */
    readonly rules?: outputs.storage.v20190601.ObjectReplicationPolicyRuleResponse[];
    /**
     * Required. Source account name.
     */
    readonly sourceAccount: string;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
