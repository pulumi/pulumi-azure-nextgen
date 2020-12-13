// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getEventHub(args: GetEventHubArgs, opts?: pulumi.InvokeOptions): Promise<GetEventHubResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:eventhub/v20170401:getEventHub", {
        "eventHubName": args.eventHubName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEventHubArgs {
    /**
     * The Event Hub name
     */
    readonly eventHubName: string;
    /**
     * The Namespace name
     */
    readonly namespaceName: string;
    /**
     * Name of the resource group within the azure subscription.
     */
    readonly resourceGroupName: string;
}

/**
 * Single item in List or Get Event Hub operation
 */
export interface GetEventHubResult {
    /**
     * Properties of capture description
     */
    readonly captureDescription?: outputs.eventhub.v20170401.CaptureDescriptionResponse;
    /**
     * Exact time the Event Hub was created.
     */
    readonly createdAt: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Number of days to retain the events for this Event Hub, value should be 1 to 7 days
     */
    readonly messageRetentionInDays?: number;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Number of partitions created for the Event Hub, allowed values are from 1 to 32 partitions.
     */
    readonly partitionCount?: number;
    /**
     * Current number of shards on the Event Hub.
     */
    readonly partitionIds: string[];
    /**
     * Enumerates the possible values for the status of the Event Hub.
     */
    readonly status?: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The exact time the message was updated.
     */
    readonly updatedAt: string;
}
