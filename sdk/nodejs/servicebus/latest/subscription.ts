// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Description of subscription resource.
 */
export class Subscription extends pulumi.CustomResource {
    /**
     * Get an existing Subscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Subscription {
        return new Subscription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:servicebus/latest:Subscription';

    /**
     * Returns true if the given object is an instance of Subscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Subscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Subscription.__pulumiType;
    }

    /**
     * Last time there was a receive request to this subscription.
     */
    public /*out*/ readonly accessedAt!: pulumi.Output<string>;
    /**
     * ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
     */
    public readonly autoDeleteOnIdle!: pulumi.Output<string | undefined>;
    /**
     * Message count details
     */
    public /*out*/ readonly countDetails!: pulumi.Output<outputs.servicebus.latest.MessageCountDetailsResponse>;
    /**
     * Exact time the message was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
     */
    public readonly deadLetteringOnFilterEvaluationExceptions!: pulumi.Output<boolean | undefined>;
    /**
     * Value that indicates whether a subscription has dead letter support when a message expires.
     */
    public readonly deadLetteringOnMessageExpiration!: pulumi.Output<boolean | undefined>;
    /**
     * ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
     */
    public readonly defaultMessageTimeToLive!: pulumi.Output<string | undefined>;
    /**
     * ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
     */
    public readonly duplicateDetectionHistoryTimeWindow!: pulumi.Output<string | undefined>;
    /**
     * Value that indicates whether server-side batched operations are enabled.
     */
    public readonly enableBatchedOperations!: pulumi.Output<boolean | undefined>;
    /**
     * Queue/Topic name to forward the Dead Letter message
     */
    public readonly forwardDeadLetteredMessagesTo!: pulumi.Output<string | undefined>;
    /**
     * Queue/Topic name to forward the messages
     */
    public readonly forwardTo!: pulumi.Output<string | undefined>;
    /**
     * ISO 8061 lock duration timespan for the subscription. The default value is 1 minute.
     */
    public readonly lockDuration!: pulumi.Output<string | undefined>;
    /**
     * Number of maximum deliveries.
     */
    public readonly maxDeliveryCount!: pulumi.Output<number | undefined>;
    /**
     * Number of messages.
     */
    public /*out*/ readonly messageCount!: pulumi.Output<number>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Value indicating if a subscription supports the concept of sessions.
     */
    public readonly requiresSession!: pulumi.Output<boolean | undefined>;
    /**
     * Enumerates the possible values for the status of a messaging entity.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The exact time the message was updated.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;

    /**
     * Create a Subscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubscriptionArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.namespaceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.subscriptionName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'subscriptionName'");
            }
            if ((!args || args.topicName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'topicName'");
            }
            inputs["autoDeleteOnIdle"] = args ? args.autoDeleteOnIdle : undefined;
            inputs["deadLetteringOnFilterEvaluationExceptions"] = args ? args.deadLetteringOnFilterEvaluationExceptions : undefined;
            inputs["deadLetteringOnMessageExpiration"] = args ? args.deadLetteringOnMessageExpiration : undefined;
            inputs["defaultMessageTimeToLive"] = args ? args.defaultMessageTimeToLive : undefined;
            inputs["duplicateDetectionHistoryTimeWindow"] = args ? args.duplicateDetectionHistoryTimeWindow : undefined;
            inputs["enableBatchedOperations"] = args ? args.enableBatchedOperations : undefined;
            inputs["forwardDeadLetteredMessagesTo"] = args ? args.forwardDeadLetteredMessagesTo : undefined;
            inputs["forwardTo"] = args ? args.forwardTo : undefined;
            inputs["lockDuration"] = args ? args.lockDuration : undefined;
            inputs["maxDeliveryCount"] = args ? args.maxDeliveryCount : undefined;
            inputs["namespaceName"] = args ? args.namespaceName : undefined;
            inputs["requiresSession"] = args ? args.requiresSession : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["status"] = args ? args.status : undefined;
            inputs["subscriptionName"] = args ? args.subscriptionName : undefined;
            inputs["topicName"] = args ? args.topicName : undefined;
            inputs["accessedAt"] = undefined /*out*/;
            inputs["countDetails"] = undefined /*out*/;
            inputs["createdAt"] = undefined /*out*/;
            inputs["messageCount"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["updatedAt"] = undefined /*out*/;
        } else {
            inputs["accessedAt"] = undefined /*out*/;
            inputs["autoDeleteOnIdle"] = undefined /*out*/;
            inputs["countDetails"] = undefined /*out*/;
            inputs["createdAt"] = undefined /*out*/;
            inputs["deadLetteringOnFilterEvaluationExceptions"] = undefined /*out*/;
            inputs["deadLetteringOnMessageExpiration"] = undefined /*out*/;
            inputs["defaultMessageTimeToLive"] = undefined /*out*/;
            inputs["duplicateDetectionHistoryTimeWindow"] = undefined /*out*/;
            inputs["enableBatchedOperations"] = undefined /*out*/;
            inputs["forwardDeadLetteredMessagesTo"] = undefined /*out*/;
            inputs["forwardTo"] = undefined /*out*/;
            inputs["lockDuration"] = undefined /*out*/;
            inputs["maxDeliveryCount"] = undefined /*out*/;
            inputs["messageCount"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["requiresSession"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["updatedAt"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:servicebus/v20140901:Subscription" }, { type: "azure-nextgen:servicebus/v20150801:Subscription" }, { type: "azure-nextgen:servicebus/v20170401:Subscription" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(Subscription.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Subscription resource.
 */
export interface SubscriptionArgs {
    /**
     * ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
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
     * ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
     */
    readonly defaultMessageTimeToLive?: pulumi.Input<string>;
    /**
     * ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
     */
    readonly duplicateDetectionHistoryTimeWindow?: pulumi.Input<string>;
    /**
     * Value that indicates whether server-side batched operations are enabled.
     */
    readonly enableBatchedOperations?: pulumi.Input<boolean>;
    /**
     * Queue/Topic name to forward the Dead Letter message
     */
    readonly forwardDeadLetteredMessagesTo?: pulumi.Input<string>;
    /**
     * Queue/Topic name to forward the messages
     */
    readonly forwardTo?: pulumi.Input<string>;
    /**
     * ISO 8061 lock duration timespan for the subscription. The default value is 1 minute.
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
    readonly status?: pulumi.Input<enums.servicebus.latest.EntityStatus>;
    /**
     * The subscription name.
     */
    readonly subscriptionName: pulumi.Input<string>;
    /**
     * The topic name.
     */
    readonly topicName: pulumi.Input<string>;
}
