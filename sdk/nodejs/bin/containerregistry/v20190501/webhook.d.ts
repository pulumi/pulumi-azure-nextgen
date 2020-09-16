import * as pulumi from "@pulumi/pulumi";
/**
 * An object that represents a webhook for a container registry.
 */
export declare class Webhook extends pulumi.CustomResource {
    /**
     * Get an existing Webhook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Webhook;
    /**
     * Returns true if the given object is an instance of Webhook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Webhook;
    /**
     * The list of actions that trigger the webhook to post notifications.
     */
    readonly actions: pulumi.Output<string[]>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the webhook at the time the operation was called.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
     */
    readonly scope: pulumi.Output<string | undefined>;
    /**
     * The status of the webhook at the time the operation was called.
     */
    readonly status: pulumi.Output<string | undefined>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Webhook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebhookArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Webhook resource.
 */
export interface WebhookArgs {
    /**
     * The list of actions that trigger the webhook to post notifications.
     */
    readonly actions: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Custom headers that will be added to the webhook notifications.
     */
    readonly customHeaders?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The location of the webhook. This cannot be changed after the resource is created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    readonly registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
     */
    readonly scope?: pulumi.Input<string>;
    /**
     * The service URI for the webhook to post notifications.
     */
    readonly serviceUri: pulumi.Input<string>;
    /**
     * The status of the webhook at the time the operation was called.
     */
    readonly status?: pulumi.Input<string>;
    /**
     * The tags for the webhook.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the webhook.
     */
    readonly webhookName: pulumi.Input<string>;
}
