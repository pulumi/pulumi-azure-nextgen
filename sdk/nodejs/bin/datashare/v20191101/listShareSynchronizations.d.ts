import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listShareSynchronizations(args: ListShareSynchronizationsArgs, opts?: pulumi.InvokeOptions): Promise<ListShareSynchronizationsResult>;
export interface ListShareSynchronizationsArgs {
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
     * The name of the share.
     */
    readonly shareName: string;
    /**
     * Continuation token
     */
    readonly skipToken?: string;
}
/**
 * List response for get ShareSynchronization.
 */
export interface ListShareSynchronizationsResult {
    /**
     * The Url of next result page.
     */
    readonly nextLink?: string;
    /**
     * Collection of items of type DataTransferObjects.
     */
    readonly value: outputs.datashare.v20191101.ShareSynchronizationResponse[];
}
