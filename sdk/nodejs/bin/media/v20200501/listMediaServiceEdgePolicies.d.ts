import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listMediaServiceEdgePolicies(args: ListMediaServiceEdgePoliciesArgs, opts?: pulumi.InvokeOptions): Promise<ListMediaServiceEdgePoliciesResult>;
export interface ListMediaServiceEdgePoliciesArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: string;
    /**
     * Unique identifier of the edge device.
     */
    readonly deviceId?: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
export interface ListMediaServiceEdgePoliciesResult {
    readonly usageDataCollectionPolicy?: outputs.media.v20200501.EdgeUsageDataCollectionPolicyResponse;
}
