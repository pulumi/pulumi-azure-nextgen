import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listShareSubscriptionSynchronizations(args: ListShareSubscriptionSynchronizationsArgs, opts?: pulumi.InvokeOptions): Promise<ListShareSubscriptionSynchronizationsResult>;
export interface ListShareSubscriptionSynchronizationsArgs {
    /**
     * The name of the share account.
     */
    readonly accountName: string;
    /**
     * Filters the results using OData syntax.
     */
    readonly filter?: string;
    /**
     * Sorts the results using OData syntax.
     */
    readonly orderby?: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the share subscription.
     */
    readonly shareSubscriptionName: string;
    /**
     * Continuation token
     */
    readonly skipToken?: string;
}
/**
 * A consumer side list of share subscription synchronizations
 */
export interface ListShareSubscriptionSynchronizationsResult {
    /**
     * The Url of next result page.
     */
    readonly nextLink?: string;
    /**
     * Collection of items of type DataTransferObjects.
     */
    readonly value: outputs.datashare.v20191101.ShareSubscriptionSynchronizationResponse[];
}
