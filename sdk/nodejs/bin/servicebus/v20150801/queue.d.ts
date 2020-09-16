import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Description of queue Resource.
 */
export declare class Queue extends pulumi.CustomResource {
    /**
     * Get an existing Queue resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Queue;
    /**
     * Returns true if the given object is an instance of Queue.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Queue;
    /**
     * Last time a message was sent, or the last time there was a receive request to this queue.
     */
    readonly accessedAt: pulumi.Output<string>;
    /**
     * the TimeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes.
     */
    readonly autoDeleteOnIdle: pulumi.Output<string | undefined>;
    /**
     * Message Count Details.
     */
    readonly countDetails: pulumi.Output<outputs.servicebus.v20150801.MessageCountDetailsResponse>;
    /**
     * The exact time the message was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * A value that indicates whether this queue has dead letter support when a message expires.
     */
    readonly deadLetteringOnMessageExpiration: pulumi.Output<boolean | undefined>;
    /**
     * The default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
     */
    readonly defaultMessageTimeToLive: pulumi.Output<string | undefined>;
    /**
     * TimeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
     */
    readonly duplicateDetectionHistoryTimeWindow: pulumi.Output<string | undefined>;
    /**
     * A value that indicates whether server-side batched operations are enabled.
     */
    readonly enableBatchedOperations: pulumi.Output<boolean | undefined>;
    /**
     * A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage.
     */
    readonly enableExpress: pulumi.Output<boolean | undefined>;
    /**
     * A value that indicates whether the queue is to be partitioned across multiple message brokers.
     */
    readonly enablePartitioning: pulumi.Output<boolean | undefined>;
    /**
     * Entity availability status for the queue.
     */
    readonly entityAvailabilityStatus: pulumi.Output<string | undefined>;
    /**
     * A value that indicates whether the message is accessible anonymously.
     */
    readonly isAnonymousAccessible: pulumi.Output<boolean | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute.
     */
    readonly lockDuration: pulumi.Output<string | undefined>;
    /**
     * The maximum delivery count. A message is automatically deadlettered after this number of deliveries.
     */
    readonly maxDeliveryCount: pulumi.Output<number | undefined>;
    /**
     * The maximum size of the queue in megabytes, which is the size of memory allocated for the queue.
     */
    readonly maxSizeInMegabytes: pulumi.Output<number | undefined>;
    /**
     * The number of messages in the queue.
     */
    readonly messageCount: pulumi.Output<number>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * A value indicating if this queue requires duplicate detection.
     */
    readonly requiresDuplicateDetection: pulumi.Output<boolean | undefined>;
    /**
     * A value that indicates whether the queue supports the concept of sessions.
     */
    readonly requiresSession: pulumi.Output<boolean | undefined>;
    /**
     * The size of the queue, in bytes.
     */
    readonly sizeInBytes: pulumi.Output<number>;
    /**
     * Enumerates the possible values for the status of a messaging entity.
     */
    readonly status: pulumi.Output<string | undefined>;
    /**
     * A value that indicates whether the queue supports ordering.
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
     * Create a Queue resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QueueArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Queue resource.
 */
export interface QueueArgs {
    /**
     * the TimeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes.
     */
    readonly autoDeleteOnIdle?: pulumi.Input<string>;
    /**
     * A value that indicates whether this queue has dead letter support when a message expires.
     */
    readonly deadLetteringOnMessageExpiration?: pulumi.Input<boolean>;
    /**
     * The default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
     */
    readonly defaultMessageTimeToLive?: pulumi.Input<string>;
    /**
     * TimeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
     */
    readonly duplicateDetectionHistoryTimeWindow?: pulumi.Input<string>;
    /**
     * A value that indicates whether server-side batched operations are enabled.
     */
    readonly enableBatchedOperations?: pulumi.Input<boolean>;
    /**
     * A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage.
     */
    readonly enableExpress?: pulumi.Input<boolean>;
    /**
     * A value that indicates whether the queue is to be partitioned across multiple message brokers.
     */
    readonly enablePartitioning?: pulumi.Input<boolean>;
    /**
     * Entity availability status for the queue.
     */
    readonly entityAvailabilityStatus?: pulumi.Input<string>;
    /**
     * A value that indicates whether the message is accessible anonymously.
     */
    readonly isAnonymousAccessible?: pulumi.Input<boolean>;
    /**
     * location of the resource.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute.
     */
    readonly lockDuration?: pulumi.Input<string>;
    /**
     * The maximum delivery count. A message is automatically deadlettered after this number of deliveries.
     */
    readonly maxDeliveryCount?: pulumi.Input<number>;
    /**
     * The maximum size of the queue in megabytes, which is the size of memory allocated for the queue.
     */
    readonly maxSizeInMegabytes?: pulumi.Input<number>;
    /**
     * Queue name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The namespace name
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * The queue name.
     */
    readonly queueName: pulumi.Input<string>;
    /**
     * A value indicating if this queue requires duplicate detection.
     */
    readonly requiresDuplicateDetection?: pulumi.Input<boolean>;
    /**
     * A value that indicates whether the queue supports the concept of sessions.
     */
    readonly requiresSession?: pulumi.Input<boolean>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Enumerates the possible values for the status of a messaging entity.
     */
    readonly status?: pulumi.Input<string>;
    /**
     * A value that indicates whether the queue supports ordering.
     */
    readonly supportOrdering?: pulumi.Input<boolean>;
}
