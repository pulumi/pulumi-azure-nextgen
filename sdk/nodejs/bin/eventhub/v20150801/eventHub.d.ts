import * as pulumi from "@pulumi/pulumi";
/**
 * Single item in List or Get Event Hub operation
 */
export declare class EventHub extends pulumi.CustomResource {
    /**
     * Get an existing EventHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EventHub;
    /**
     * Returns true if the given object is an instance of EventHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EventHub;
    /**
     * Exact time the Event Hub was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Number of days to retain the events for this Event Hub.
     */
    readonly messageRetentionInDays: pulumi.Output<number | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Number of partitions created for the Event Hub.
     */
    readonly partitionCount: pulumi.Output<number | undefined>;
    /**
     * Current number of shards on the Event Hub.
     */
    readonly partitionIds: pulumi.Output<string[]>;
    /**
     * Enumerates the possible values for the status of the Event Hub.
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
     * Create a EventHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventHubArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a EventHub resource.
 */
export interface EventHubArgs {
    /**
     * The Event Hub name
     */
    readonly eventHubName: pulumi.Input<string>;
    /**
     * Location of the resource.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Number of days to retain the events for this Event Hub.
     */
    readonly messageRetentionInDays?: pulumi.Input<number>;
    /**
     * Name of the Event Hub.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The Namespace name
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * Number of partitions created for the Event Hub.
     */
    readonly partitionCount?: pulumi.Input<number>;
    /**
     * Name of the resource group within the azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Enumerates the possible values for the status of the Event Hub.
     */
    readonly status?: pulumi.Input<string>;
    /**
     * ARM type of the Namespace.
     */
    readonly type?: pulumi.Input<string>;
}
