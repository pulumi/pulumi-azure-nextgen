import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Description of subscription resource.
 */
export declare class Subscription extends pulumi.CustomResource {
    /**
     * Get an existing Subscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Subscription;
    /**
     * Returns true if the given object is an instance of Subscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Subscription;
    /**
     * Last time there was a receive request to this subscription.
     */
    readonly accessedAt: pulumi.Output<string>;
    /**
     * TimeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
     */
    readonly autoDeleteOnIdle: pulumi.Output<string | undefined>;
    /**
     * Message Count Details.
     */
    readonly countDetails: pulumi.Output<outputs.servicebus.v20150801.MessageCountDetailsResponse>;
    /**
     * Exact time the message was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
     */
    readonly deadLetteringOnFilterEvaluationExceptions: pulumi.Output<boolean | undefined>;
    /**
     * Value that indicates whether a subscription has dead letter support when a message expires.
     */
    readonly deadLetteringOnMessageExpiration: pulumi.Output<boolean | undefined>;
    /**
     * Default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
     */
    readonly defaultMessageTimeToLive: pulumi.Output<string | undefined>;
    /**
     * Value that indicates whether server-side batched operations are enabled.
     */
    readonly enableBatchedOperations: pulumi.Output<boolean | undefined>;
    /**
     * Entity availability status for the topic.
     */
    readonly entityAvailabilityStatus: pulumi.Output<string | undefined>;
    /**
     * Value that indicates whether the entity description is read-only.
     */
    readonly isReadOnly: pulumi.Output<boolean | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The lock duration time span for the subscription.
     */
    readonly lockDuration: pulumi.Output<string | undefined>;
    /**
     * Number of maximum deliveries.
     */
    readonly maxDeliveryCount: pulumi.Output<number | undefined>;
    /**
     * Number of messages.
     */
    readonly messageCount: pulumi.Output<number>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Value indicating if a subscription supports the concept of sessions.
     */
    readonly requiresSession: pulumi.Output<boolean | undefined>;
    /**
     * Enumerates the possible values for the status of a messaging entity.
     */
    readonly status: pulumi.Output<string | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * The exact time the message was updated.
     */
    readonly updatedAt: pulumi.Output<string>;
    /**
     * Create a Subscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubscriptionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Subscription resource.
 */
export interface SubscriptionArgs {
    /**
     * TimeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
     */
    readonly autoDeleteOnIdle?: pulumi.Input<string>;
    /**
     * Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
     */
    readonly deadLetteringOnFilterEvaluationExceptions?: pulumi.Input<boolean>;
    /**
     * Value that indicates whether a subscription has dead letter support when a message expires.
     */
    readonly deadLetteringOnMessageExpiration?: pulumi.Input<boolean>;
    /**
     * Default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
     */
    readonly defaultMessageTimeToLive?: pulumi.Input<string>;
    /**
     * Value that indicates whether server-side batched operations are enabled.
     */
    readonly enableBatchedOperations?: pulumi.Input<boolean>;
    /**
     * Entity availability status for the topic.
     */
    readonly entityAvailabilityStatus?: pulumi.Input<string>;
    /**
     * Value that indicates whether the entity description is read-only.
     */
    readonly isReadOnly?: pulumi.Input<boolean>;
    /**
     * Subscription data center location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The lock duration time span for the subscription.
     */
    readonly lockDuration?: pulumi.Input<string>;
    /**
     * Number of maximum deliveries.
     */
    readonly maxDeliveryCount?: pulumi.Input<number>;
    /**
     * The namespace name
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * Value indicating if a subscription supports the concept of sessions.
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
     * The subscription name.
     */
    readonly subscriptionName: pulumi.Input<string>;
    /**
     * The topic name.
     */
    readonly topicName: pulumi.Input<string>;
    /**
     * Resource manager type of the resource.
     */
    readonly type?: pulumi.Input<string>;
}
