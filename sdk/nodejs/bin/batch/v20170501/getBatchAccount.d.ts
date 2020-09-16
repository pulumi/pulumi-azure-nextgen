import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getBatchAccount(args: GetBatchAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetBatchAccountResult>;
export interface GetBatchAccountArgs {
    /**
     * The name of the Batch account.
     */
    readonly accountName: string;
    /**
     * The name of the resource group that contains the Batch account.
     */
    readonly resourceGroupName: string;
}
/**
 * Contains information about an Azure Batch account.
 */
export interface GetBatchAccountResult {
    /**
     * The account endpoint used to interact with the Batch service.
     */
    readonly accountEndpoint: string;
    readonly activeJobAndJobScheduleQuota: number;
    /**
     * Contains information about the auto-storage account associated with a Batch account.
     */
    readonly autoStorage: outputs.batch.v20170501.AutoStoragePropertiesResponse;
    readonly dedicatedCoreQuota: number;
    /**
     * Identifies the Azure key vault associated with a Batch account.
     */
    readonly keyVaultReference: outputs.batch.v20170501.KeyVaultReferenceResponse;
    /**
     * The location of the resource.
     */
    readonly location: string;
    readonly lowPriorityCoreQuota: number;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The allocation mode for creating pools in the Batch account.
     */
    readonly poolAllocationMode: string;
    readonly poolQuota: number;
    /**
     * The provisioned state of the resource
     */
    readonly provisioningState: string;
    /**
     * The tags of the resource.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The type of the resource.
     */
    readonly type: string;
}
