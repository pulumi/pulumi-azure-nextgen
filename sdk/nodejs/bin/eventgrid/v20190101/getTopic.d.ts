import * as pulumi from "@pulumi/pulumi";
export declare function getTopic(args: GetTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetTopicResult>;
export interface GetTopicArgs {
    /**
     * The name of the resource group within the user's subscription.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the topic
     */
    readonly topicName: string;
}
/**
 * EventGrid Topic
 */
export interface GetTopicResult {
    /**
     * Endpoint for the topic.
     */
    readonly endpoint: string;
    /**
     * Location of the resource
     */
    readonly location: string;
    /**
     * Name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the topic.
     */
    readonly provisioningState: string;
    /**
     * Tags of the resource
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Type of the resource
     */
    readonly type: string;
}
