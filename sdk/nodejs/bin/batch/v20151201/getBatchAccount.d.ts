import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getBatchAccount(args: GetBatchAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetBatchAccountResult>;
export interface GetBatchAccountArgs {
    /**
     * The name of the account.
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
     * The endpoint used by this account to interact with the Batch services.
     */
    readonly accountEndpoint: string;
    /**
     * The active job and job schedule quota for this Batch account.
     */
    readonly activeJobAndJobScheduleQuota: number;
    /**
     * The properties and status of any auto storage account associated with the account.
     */
    readonly autoStorage?: outputs.batch.v20151201.AutoStoragePropertiesResponse;
    /**
     * The core quota for this Batch account.
     */
    readonly coreQuota: number;
    /**
     * The location of the resource
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The pool quota for this Batch account.
     */
    readonly poolQuota: number;
    /**
     * The provisioned state of the resource
     */
    readonly provisioningState?: string;
    /**
     * The tags of the resource
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource
     */
    readonly type: string;
}
