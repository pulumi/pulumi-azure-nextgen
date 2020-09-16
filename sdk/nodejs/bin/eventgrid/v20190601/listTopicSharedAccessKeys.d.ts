import * as pulumi from "@pulumi/pulumi";
export declare function listTopicSharedAccessKeys(args: ListTopicSharedAccessKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListTopicSharedAccessKeysResult>;
export interface ListTopicSharedAccessKeysArgs {
    /**
     * The name of the resource group within the user's subscription.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the topic.
     */
    readonly topicName: string;
}
/**
 * Shared access keys of the Topic
 */
export interface ListTopicSharedAccessKeysResult {
    /**
     * Shared access key1 for the topic.
     */
    readonly key1?: string;
    /**
     * Shared access key2 for the topic.
     */
    readonly key2?: string;
}
