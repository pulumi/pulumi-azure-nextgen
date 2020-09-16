import * as pulumi from "@pulumi/pulumi";
export declare function listNotificationHubKeys(args: ListNotificationHubKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListNotificationHubKeysResult>;
export interface ListNotificationHubKeysArgs {
    /**
     * The connection string of the NotificationHub for the specified authorizationRule.
     */
    readonly authorizationRuleName: string;
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
 * Namespace/NotificationHub Connection String
 */
export interface ListNotificationHubKeysResult {
    /**
     * Gets or sets the primaryConnectionString of the created Namespace AuthorizationRule.
     */
    readonly primaryConnectionString?: string;
    /**
     * Gets or sets the secondaryConnectionString of the created Namespace AuthorizationRule
     */
    readonly secondaryConnectionString?: string;
}
