// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getTopic(args: GetTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetTopicResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:eventgrid/v20180501preview:getTopic", {
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

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
     * Fully qualified identifier of the resource
     */
    readonly id: string;
    /**
     * This determines the format that Event Grid should expect for incoming events published to the topic.
     */
    readonly inputSchema?: string;
    /**
     * This enables publishing using custom event schemas. An InputSchemaMapping can be specified to map various properties of a source schema to various required properties of the EventGridEvent schema.
     */
    readonly inputSchemaMapping?: outputs.eventgrid.v20180501preview.JsonInputSchemaMappingResponse;
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
    readonly tags?: {[key: string]: string};
    /**
     * Type of the resource
     */
    readonly type: string;
}
