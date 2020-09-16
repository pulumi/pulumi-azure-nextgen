import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listShareSubscriptionSourceShareSynchronizationSettings(args: ListShareSubscriptionSourceShareSynchronizationSettingsArgs, opts?: pulumi.InvokeOptions): Promise<ListShareSubscriptionSourceShareSynchronizationSettingsResult>;
export interface ListShareSubscriptionSourceShareSynchronizationSettingsArgs {
    /**
     * The name of the share account.
     */
    readonly accountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the shareSubscription.
     */
    readonly shareSubscriptionName: string;
    /**
     * Continuation token
     */
    readonly skipToken?: string;
}
/**
 * List response for get source share Synchronization settings
 */
export interface ListShareSubscriptionSourceShareSynchronizationSettingsResult {
    /**
     * The Url of next result page.
     */
    readonly nextLink?: string;
    /**
     * Collection of items of type DataTransferObjects.
     */
    readonly value: outputs.datashare.v20191101.SourceShareSynchronizationSettingResponse[];
}
