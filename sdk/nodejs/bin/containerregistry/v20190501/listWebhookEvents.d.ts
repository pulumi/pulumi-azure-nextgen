import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listWebhookEvents(args: ListWebhookEventsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebhookEventsResult>;
export interface ListWebhookEventsArgs {
    /**
     * The name of the container registry.
     */
    readonly registryName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the webhook.
     */
    readonly webhookName: string;
}
/**
 * The result of a request to list events for a webhook.
 */
export interface ListWebhookEventsResult {
    /**
     * The URI that can be used to request the next list of events.
     */
    readonly nextLink?: string;
    /**
     * The list of events. Since this list may be incomplete, the nextLink field should be used to request the next list of events.
     */
    readonly value?: outputs.containerregistry.v20190501.EventResponse[];
}
