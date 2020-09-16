import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of the EventHubConsumerGroupInfo object.
 */
export declare class IotHubResourceEventHubConsumerGroup extends pulumi.CustomResource {
    /**
     * Get an existing IotHubResourceEventHubConsumerGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IotHubResourceEventHubConsumerGroup;
    /**
     * Returns true if the given object is an instance of IotHubResourceEventHubConsumerGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IotHubResourceEventHubConsumerGroup;
    /**
     * The Event Hub-compatible consumer group name.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a IotHubResourceEventHubConsumerGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotHubResourceEventHubConsumerGroupArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a IotHubResourceEventHubConsumerGroup resource.
 */
export interface IotHubResourceEventHubConsumerGroupArgs {
    /**
     * The name of the Event Hub-compatible endpoint in the IoT hub.
     */
    readonly eventHubEndpointName: pulumi.Input<string>;
    /**
     * The name of the consumer group to add.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the IoT hub.
     */
    readonly resourceName: pulumi.Input<string>;
}
