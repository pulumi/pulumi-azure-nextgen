import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getTopic(args: GetTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetTopicResult>;
export interface GetTopicArgs {
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
 * EventGrid Topic
 */
export interface GetTopicResult {
    /**
     * Endpoint for the topic.
     */
    readonly endpoint: string;
    /**
     * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
     */
    readonly inboundIpRules?: outputs.eventgrid.v20200601.InboundIpRuleResponse[];
    /**
     * This determines the format that Event Grid should expect for incoming events published to the topic.
     */
    readonly inputSchema?: string;
    /**
     * This enables publishing using custom event schemas. An InputSchemaMapping can be specified to map various properties of a source schema to various required properties of the EventGridEvent schema.
     */
    readonly inputSchemaMapping?: outputs.eventgrid.v20200601.InputSchemaMappingResponse;
    /**
     * Location of the resource.
     */
    readonly location: string;
    /**
     * Metric resource id for the topic.
     */
    readonly metricResourceId: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    readonly privateEndpointConnections?: outputs.eventgrid.v20200601.PrivateEndpointConnectionResponse[];
    /**
     * Provisioning state of the topic.
     */
    readonly provisioningState: string;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     * You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.TopicProperties.InboundIpRules" />
     */
    readonly publicNetworkAccess?: string;
    /**
     * Tags of the resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Type of the resource.
     */
    readonly type: string;
}
