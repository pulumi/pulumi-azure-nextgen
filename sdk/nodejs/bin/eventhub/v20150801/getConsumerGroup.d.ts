import * as pulumi from "@pulumi/pulumi";
export declare function getConsumerGroup(args: GetConsumerGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetConsumerGroupResult>;
export interface GetConsumerGroupArgs {
    /**
     * The consumer group name
     */
    readonly consumerGroupName: string;
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
 * Single item in List or Get Consumer group operation
 */
export interface GetConsumerGroupResult {
    /**
     * Exact time the message was created.
     */
    readonly createdAt: string;
    /**
     * The path of the Event Hub.
     */
    readonly eventHubPath: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * The exact time the message was updated.
     */
    readonly updatedAt: string;
    /**
     * The user metadata.
     */
    readonly userMetadata?: string;
}
