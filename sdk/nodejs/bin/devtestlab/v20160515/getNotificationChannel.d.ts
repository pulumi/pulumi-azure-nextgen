import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getNotificationChannel(args: GetNotificationChannelArgs, opts?: pulumi.InvokeOptions): Promise<GetNotificationChannelResult>;
export interface GetNotificationChannelArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=webHookUrl)'
     */
    readonly expand?: string;
    /**
     * The name of the lab.
     */
    readonly labName: string;
    /**
     * The name of the notificationChannel.
     */
    readonly name: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * A notification.
 */
export interface GetNotificationChannelResult {
    /**
     * The creation date of the notification channel.
     */
    readonly createdDate: string;
    /**
     * Description of notification.
     */
    readonly description?: string;
    /**
     * The list of event for which this notification is enabled.
     */
    readonly events?: outputs.devtestlab.v20160515.EventResponse[];
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier?: string;
    /**
     * The webhook URL to send notifications to.
     */
    readonly webHookUrl?: string;
}
