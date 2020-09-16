import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listShareSynchronizationDetails(args: ListShareSynchronizationDetailsArgs, opts?: pulumi.InvokeOptions): Promise<ListShareSynchronizationDetailsResult>;
export interface ListShareSynchronizationDetailsArgs {
    /**
     * The name of the share account.
     */
    readonly accountName: string;
    /**
     * Email of the user who created the synchronization
     */
    readonly consumerEmail?: string;
    /**
     * Name of the user who created the synchronization
     */
    readonly consumerName?: string;
    /**
     * Tenant name of the consumer who created the synchronization
     */
    readonly consumerTenantName?: string;
    /**
     * synchronization duration
     */
    readonly durationMs?: number;
    /**
     * End time of synchronization
     */
    readonly endTime?: string;
    /**
     * Filters the results using OData syntax.
     */
    readonly filter?: string;
    /**
     * message of synchronization
     */
    readonly message?: string;
    /**
     * Sorts the results using OData syntax.
     */
    readonly orderby?: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the share.
     */
    readonly shareName: string;
    /**
     * Continuation token
     */
    readonly skipToken?: string;
    /**
     * start time of synchronization
     */
    readonly startTime?: string;
    /**
     * Raw Status
     */
    readonly status?: string;
    /**
     * Synchronization id
     */
    readonly synchronizationId?: string;
}
/**
 * details of synchronization
 */
export interface ListShareSynchronizationDetailsResult {
    /**
     * The Url of next result page.
     */
    readonly nextLink?: string;
    /**
     * Collection of items of type DataTransferObjects.
     */
    readonly value: outputs.datashare.v20191101.SynchronizationDetailsResponse[];
}
