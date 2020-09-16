import * as pulumi from "@pulumi/pulumi";
export declare function getEventHub(args: GetEventHubArgs, opts?: pulumi.InvokeOptions): Promise<GetEventHubResult>;
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
     * Exact time the Event Hub was created.
     */
    readonly createdAt: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Number of days to retain the events for this Event Hub.
     */
    readonly messageRetentionInDays?: number;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Number of partitions created for the Event Hub.
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
     * Resource type
     */
    readonly type: string;
    /**
     * The exact time the message was updated.
     */
    readonly updatedAt: string;
}
