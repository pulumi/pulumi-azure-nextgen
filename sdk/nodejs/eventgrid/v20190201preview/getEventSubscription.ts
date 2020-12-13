// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getEventSubscription(args: GetEventSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetEventSubscriptionResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:eventgrid/v20190201preview:getEventSubscription", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "scope": args.scope,
    }, opts);
}

export interface GetEventSubscriptionArgs {
    /**
     * Name of the event subscription
     */
    readonly eventSubscriptionName: string;
    /**
     * The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
     */
    readonly scope: string;
}

/**
 * Event Subscription
 */
export interface GetEventSubscriptionResult {
    /**
     * The DeadLetter destination of the event subscription.
     */
    readonly deadLetterDestination?: outputs.eventgrid.v20190201preview.StorageBlobDeadLetterDestinationResponse;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     */
    readonly destination?: outputs.eventgrid.v20190201preview.EventHubEventSubscriptionDestinationResponse | outputs.eventgrid.v20190201preview.HybridConnectionEventSubscriptionDestinationResponse | outputs.eventgrid.v20190201preview.ServiceBusQueueEventSubscriptionDestinationResponse | outputs.eventgrid.v20190201preview.StorageQueueEventSubscriptionDestinationResponse | outputs.eventgrid.v20190201preview.WebHookEventSubscriptionDestinationResponse;
    /**
     * The event delivery schema for the event subscription.
     */
    readonly eventDeliverySchema?: string;
    /**
     * Expiration time of the event subscription.
     */
    readonly expirationTimeUtc?: string;
    /**
     * Information about the filter for the event subscription.
     */
    readonly filter?: outputs.eventgrid.v20190201preview.EventSubscriptionFilterResponse;
    /**
     * Fully qualified identifier of the resource
     */
    readonly id: string;
    /**
     * List of user defined labels.
     */
    readonly labels?: string[];
    /**
     * Name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the event subscription.
     */
    readonly provisioningState: string;
    /**
     * The retry policy for events. This can be used to configure maximum number of delivery attempts and time to live for events.
     */
    readonly retryPolicy?: outputs.eventgrid.v20190201preview.RetryPolicyResponse;
    /**
     * Name of the topic of the event subscription.
     */
    readonly topic: string;
    /**
     * Type of the resource
     */
    readonly type: string;
}
