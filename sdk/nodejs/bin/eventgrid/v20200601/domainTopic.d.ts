import * as pulumi from "@pulumi/pulumi";
/**
 * Domain Topic.
 */
export declare class DomainTopic extends pulumi.CustomResource {
    /**
     * Get an existing DomainTopic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DomainTopic;
    /**
     * Returns true if the given object is an instance of DomainTopic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DomainTopic;
    /**
     * Name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Provisioning state of the domain topic.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a DomainTopic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainTopicArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DomainTopic resource.
 */
export interface DomainTopicArgs {
    /**
     * Name of the domain.
     */
    readonly domainName: pulumi.Input<string>;
    /**
     * Name of the domain topic.
     */
    readonly domainTopicName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
