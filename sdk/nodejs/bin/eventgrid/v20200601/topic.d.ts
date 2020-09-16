import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * EventGrid Topic
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
     * Endpoint for the topic.
     */
    readonly endpoint: pulumi.Output<string>;
    /**
     * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
     */
    readonly inboundIpRules: pulumi.Output<outputs.eventgrid.v20200601.InboundIpRuleResponse[] | undefined>;
    /**
     * This determines the format that Event Grid should expect for incoming events published to the topic.
     */
    readonly inputSchema: pulumi.Output<string | undefined>;
    /**
     * This enables publishing using custom event schemas. An InputSchemaMapping can be specified to map various properties of a source schema to various required properties of the EventGridEvent schema.
     */
    readonly inputSchemaMapping: pulumi.Output<outputs.eventgrid.v20200601.InputSchemaMappingResponse | undefined>;
    /**
     * Location of the resource.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Metric resource id for the topic.
     */
    readonly metricResourceId: pulumi.Output<string>;
    /**
     * Name of the resource.
     */
    readonly name: pulumi.Output<string>;
    readonly privateEndpointConnections: pulumi.Output<outputs.eventgrid.v20200601.PrivateEndpointConnectionResponse[] | undefined>;
    /**
     * Provisioning state of the topic.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     * You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.TopicProperties.InboundIpRules" />
     */
    readonly publicNetworkAccess: pulumi.Output<string | undefined>;
    /**
     * Tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Type of the resource.
     */
    readonly type: pulumi.Output<string>;
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
     * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
     */
    readonly inboundIpRules?: pulumi.Input<pulumi.Input<inputs.eventgrid.v20200601.InboundIpRule>[]>;
    /**
     * This determines the format that Event Grid should expect for incoming events published to the topic.
     */
    readonly inputSchema?: pulumi.Input<string>;
    /**
     * This enables publishing using custom event schemas. An InputSchemaMapping can be specified to map various properties of a source schema to various required properties of the EventGridEvent schema.
     */
    readonly inputSchemaMapping?: pulumi.Input<inputs.eventgrid.v20200601.InputSchemaMapping>;
    /**
     * Location of the resource.
     */
    readonly location: pulumi.Input<string>;
    readonly privateEndpointConnections?: pulumi.Input<pulumi.Input<inputs.eventgrid.v20200601.PrivateEndpointConnection>[]>;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     * You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.TopicProperties.InboundIpRules" />
     */
    readonly publicNetworkAccess?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Tags of the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Name of the topic.
     */
    readonly topicName: pulumi.Input<string>;
}
