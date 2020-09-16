import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Event Subscription
 */
export declare class EventSubscription extends pulumi.CustomResource {
    /**
     * Get an existing EventSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EventSubscription;
    /**
     * Returns true if the given object is an instance of EventSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EventSubscription;
    /**
     * The DeadLetter destination of the event subscription.
     */
    readonly deadLetterDestination: pulumi.Output<outputs.eventgrid.v20190101.DeadLetterDestinationResponse | undefined>;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     */
    readonly destination: pulumi.Output<outputs.eventgrid.v20190101.EventSubscriptionDestinationResponse | undefined>;
    /**
     * Information about the filter for the event subscription.
     */
    readonly filter: pulumi.Output<outputs.eventgrid.v20190101.EventSubscriptionFilterResponse | undefined>;
    /**
     * List of user defined labels.
     */
    readonly labels: pulumi.Output<string[] | undefined>;
    /**
     * Name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Provisioning state of the event subscription.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The retry policy for events. This can be used to configure maximum number of delivery attempts and time to live for events.
     */
    readonly retryPolicy: pulumi.Output<outputs.eventgrid.v20190101.RetryPolicyResponse | undefined>;
    /**
     * Name of the topic of the event subscription.
     */
    readonly topic: pulumi.Output<string>;
    /**
     * Type of the resource
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a EventSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventSubscriptionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a EventSubscription resource.
 */
export interface EventSubscriptionArgs {
    /**
     * The DeadLetter destination of the event subscription.
     */
    readonly deadLetterDestination?: pulumi.Input<inputs.eventgrid.v20190101.DeadLetterDestination>;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     */
    readonly destination?: pulumi.Input<inputs.eventgrid.v20190101.EventSubscriptionDestination>;
    /**
     * Name of the event subscription. Event subscription names must be between 3 and 64 characters in length and should use alphanumeric letters only.
     */
    readonly eventSubscriptionName: pulumi.Input<string>;
    /**
     * Information about the filter for the event subscription.
     */
    readonly filter?: pulumi.Input<inputs.eventgrid.v20190101.EventSubscriptionFilter>;
    /**
     * List of user defined labels.
     */
    readonly labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The retry policy for events. This can be used to configure maximum number of delivery attempts and time to live for events.
     */
    readonly retryPolicy?: pulumi.Input<inputs.eventgrid.v20190101.RetryPolicy>;
    /**
     * The identifier of the resource to which the event subscription needs to be created or updated. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
     */
    readonly scope: pulumi.Input<string>;
}
