import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Description of topic resource.
 */
export declare class Topic extends pulumi.CustomResource {
    /**
     * Get an existing Topic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Topic;
    /**
     * Returns true if the given object is an instance of Topic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Topic;
    /**
     * Last time the message was sent, or a request was received, for this topic.
     */
    readonly accessedAt: pulumi.Output<string>;
    /**
     * ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
     */
    readonly autoDeleteOnIdle: pulumi.Output<string | undefined>;
    /**
     * Message count details
     */
    readonly countDetails: pulumi.Output<outputs.servicebus.v20170401.MessageCountDetailsResponse>;
    /**
     * Exact time the message was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
     */
    readonly defaultMessageTimeToLive: pulumi.Output<string | undefined>;
    /**
     * ISO8601 timespan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
     */
    readonly duplicateDetectionHistoryTimeWindow: pulumi.Output<string | undefined>;
    /**
     * Value that indicates whether server-side batched operations are enabled.
     */
    readonly enableBatchedOperations: pulumi.Output<boolean | undefined>;
    /**
     * Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage.
     */
    readonly enableExpress: pulumi.Output<boolean | undefined>;
    /**
     * Value that indicates whether the topic to be partitioned across multiple message brokers is enabled.
     */
    readonly enablePartitioning: pulumi.Output<boolean | undefined>;
    /**
     * Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024.
     */
    readonly maxSizeInMegabytes: pulumi.Output<number | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Value indicating if this topic requires duplicate detection.
     */
    readonly requiresDuplicateDetection: pulumi.Output<boolean | undefined>;
    /**
     * Size of the topic, in bytes.
     */
    readonly sizeInBytes: pulumi.Output<number>;
    /**
     * Enumerates the possible values for the status of a messaging entity.
     */
    readonly status: pulumi.Output<string | undefined>;
    /**
     * Number of subscriptions.
     */
    readonly subscriptionCount: pulumi.Output<number>;
    /**
     * Value that indicates whether the topic supports ordering.
     */
    readonly supportOrdering: pulumi.Output<boolean | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * The exact time the message was updated.
     */
    readonly updatedAt: pulumi.Output<string>;
    /**
     * Create a Topic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TopicArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Topic resource.
 */
export interface TopicArgs {
    /**
     * ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
     */
    readonly autoDeleteOnIdle?: pulumi.Input<string>;
    /**
     * ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
     */
    readonly defaultMessageTimeToLive?: pulumi.Input<string>;
    /**
     * ISO8601 timespan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
     */
    readonly duplicateDetectionHistoryTimeWindow?: pulumi.Input<string>;
    /**
     * Value that indicates whether server-side batched operations are enabled.
     */
    readonly enableBatchedOperations?: pulumi.Input<boolean>;
    /**
     * Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage.
     */
    readonly enableExpress?: pulumi.Input<boolean>;
    /**
     * Value that indicates whether the topic to be partitioned across multiple message brokers is enabled.
     */
    readonly enablePartitioning?: pulumi.Input<boolean>;
    /**
     * Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024.
     */
    readonly maxSizeInMegabytes?: pulumi.Input<number>;
    /**
     * The namespace name
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * Value indicating if this topic requires duplicate detection.
     */
    readonly requiresDuplicateDetection?: pulumi.Input<boolean>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Enumerates the possible values for the status of a messaging entity.
     */
    readonly status?: pulumi.Input<string>;
    /**
     * Value that indicates whether the topic supports ordering.
     */
    readonly supportOrdering?: pulumi.Input<boolean>;
    /**
     * The topic name.
     */
    readonly topicName: pulumi.Input<string>;
}
