import * as pulumi from "@pulumi/pulumi";
/**
 * Single item in List or Get Consumer group operation
 */
export declare class ConsumerGroup extends pulumi.CustomResource {
    /**
     * Get an existing ConsumerGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConsumerGroup;
    /**
     * Returns true if the given object is an instance of ConsumerGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConsumerGroup;
    /**
     * Exact time the message was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The exact time the message was updated.
     */
    readonly updatedAt: pulumi.Output<string>;
    /**
     * User Metadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.
     */
    readonly userMetadata: pulumi.Output<string | undefined>;
    /**
     * Create a ConsumerGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConsumerGroupArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ConsumerGroup resource.
 */
export interface ConsumerGroupArgs {
    /**
     * The consumer group name
     */
    readonly consumerGroupName: pulumi.Input<string>;
    /**
     * The Event Hub name
     */
    readonly eventHubName: pulumi.Input<string>;
    /**
     * The Namespace name
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * Name of the resource group within the azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * User Metadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored.
     */
    readonly userMetadata?: pulumi.Input<string>;
}
