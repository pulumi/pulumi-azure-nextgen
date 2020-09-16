import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getNotificationHub(args: GetNotificationHubArgs, opts?: pulumi.InvokeOptions): Promise<GetNotificationHubResult>;
export interface GetNotificationHubArgs {
    /**
     * The namespace name.
     */
    readonly namespaceName: string;
    /**
     * The notification hub name.
     */
    readonly notificationHubName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Description of a NotificationHub Resource.
 */
export interface GetNotificationHubResult {
    /**
     * Gets or sets datacenter location of the NotificationHub.
     */
    readonly location?: string;
    /**
     * Gets or sets name of the NotificationHub.
     */
    readonly name?: string;
    /**
     * Gets or sets properties of the NotificationHub.
     */
    readonly properties: outputs.notificationhubs.v20140901.NotificationHubPropertiesResponse;
    /**
     * Gets or sets tags of the NotificationHub.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Gets or sets resource type of the NotificationHub.
     */
    readonly type?: string;
}
