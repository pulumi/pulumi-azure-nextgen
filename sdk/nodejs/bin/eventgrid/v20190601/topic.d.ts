import * as pulumi from "@pulumi/pulumi";
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
     * Location of the resource.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Provisioning state of the topic.
     */
    readonly provisioningState: pulumi.Output<string>;
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
     * Location of the resource.
     */
    readonly location: pulumi.Input<string>;
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
