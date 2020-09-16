import * as pulumi from "@pulumi/pulumi";
export declare function getIotHubResourceEventHubConsumerGroup(args: GetIotHubResourceEventHubConsumerGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetIotHubResourceEventHubConsumerGroupResult>;
export interface GetIotHubResourceEventHubConsumerGroupArgs {
    /**
     * The name of the Event Hub-compatible endpoint in the IoT hub.
     */
    readonly eventHubEndpointName: string;
    /**
     * The name of the consumer group to retrieve.
     */
    readonly name: string;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the IoT hub.
     */
    readonly resourceName: string;
}
/**
 * The properties of the EventHubConsumerGroupInfo object.
 */
export interface GetIotHubResourceEventHubConsumerGroupResult {
    /**
     * The Event Hub-compatible consumer group name.
     */
    readonly name?: string;
    /**
     * The tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
