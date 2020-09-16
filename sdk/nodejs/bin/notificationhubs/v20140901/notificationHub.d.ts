import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Description of a NotificationHub Resource.
 */
export declare class NotificationHub extends pulumi.CustomResource {
    /**
     * Get an existing NotificationHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NotificationHub;
    /**
     * Returns true if the given object is an instance of NotificationHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NotificationHub;
    /**
     * Gets or sets datacenter location of the NotificationHub.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Gets or sets name of the NotificationHub.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Gets or sets properties of the NotificationHub.
     */
    readonly properties: pulumi.Output<outputs.notificationhubs.v20140901.NotificationHubPropertiesResponse>;
    /**
     * Gets or sets tags of the NotificationHub.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Gets or sets resource type of the NotificationHub.
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Create a NotificationHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationHubArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a NotificationHub resource.
 */
export interface NotificationHubArgs {
    /**
     * Gets or sets NotificationHub data center location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The namespace name.
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * The notification hub name.
     */
    readonly notificationHubName: pulumi.Input<string>;
    /**
     * Gets or sets properties of the NotificationHub.
     */
    readonly properties: pulumi.Input<inputs.notificationhubs.v20140901.NotificationHubProperties>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets NotificationHub tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
