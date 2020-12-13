// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function listShareSubscriptionSynchronizationDetails(args: ListShareSubscriptionSynchronizationDetailsArgs, opts?: pulumi.InvokeOptions): Promise<ListShareSubscriptionSynchronizationDetailsResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:datashare/v20191101:listShareSubscriptionSynchronizationDetails", {
        "accountName": args.accountName,
        "filter": args.filter,
        "orderby": args.orderby,
        "resourceGroupName": args.resourceGroupName,
        "shareSubscriptionName": args.shareSubscriptionName,
        "skipToken": args.skipToken,
        "synchronizationId": args.synchronizationId,
    }, opts);
}

export interface ListShareSubscriptionSynchronizationDetailsArgs {
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
    /**
     * Synchronization id
     */
    readonly synchronizationId: string;
}

/**
 * details of synchronization
 */
export interface ListShareSubscriptionSynchronizationDetailsResult {
    /**
     * The Url of next result page.
     */
    readonly nextLink?: string;
    /**
     * Collection of items of type DataTransferObjects.
     */
    readonly value: outputs.datashare.v20191101.SynchronizationDetailsResponse[];
}
