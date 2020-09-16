import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A notification.
 */
export declare class NotificationChannel extends pulumi.CustomResource {
    /**
     * Get an existing NotificationChannel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NotificationChannel;
    /**
     * Returns true if the given object is an instance of NotificationChannel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NotificationChannel;
    /**
     * The creation date of the notification channel.
     */
    readonly createdDate: pulumi.Output<string>;
    /**
     * Description of notification.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The email recipient to send notifications to (can be a list of semi-colon separated email addresses).
     */
    readonly emailRecipient: pulumi.Output<string | undefined>;
    /**
     * The list of event for which this notification is enabled.
     */
    readonly events: pulumi.Output<outputs.devtestlab.v20180915.EventResponse[] | undefined>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The locale to use when sending a notification (fallback for unsupported languages is EN).
     */
    readonly notificationLocale: pulumi.Output<string | undefined>;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: pulumi.Output<string>;
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
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: pulumi.Output<string>;
    /**
     * The webhook URL to send notifications to.
     */
    readonly webHookUrl: pulumi.Output<string | undefined>;
    /**
     * Create a NotificationChannel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationChannelArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a NotificationChannel resource.
 */
export interface NotificationChannelArgs {
    /**
     * Description of notification.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The email recipient to send notifications to (can be a list of semi-colon separated email addresses).
     */
    readonly emailRecipient?: pulumi.Input<string>;
    /**
     * The list of event for which this notification is enabled.
     */
    readonly events?: pulumi.Input<pulumi.Input<inputs.devtestlab.v20180915.Event>[]>;
    /**
     * The name of the lab.
     */
    readonly labName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the notification channel.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The locale to use when sending a notification (fallback for unsupported languages is EN).
     */
    readonly notificationLocale?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The webhook URL to send notifications to.
     */
    readonly webHookUrl?: pulumi.Input<string>;
}
