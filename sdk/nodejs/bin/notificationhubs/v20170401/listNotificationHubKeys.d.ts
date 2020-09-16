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
     * KeyName of the created AuthorizationRule
     */
    readonly keyName?: string;
    /**
     * PrimaryConnectionString of the AuthorizationRule.
     */
    readonly primaryConnectionString?: string;
    /**
     * PrimaryKey of the created AuthorizationRule.
     */
    readonly primaryKey?: string;
    /**
     * SecondaryConnectionString of the created AuthorizationRule
     */
    readonly secondaryConnectionString?: string;
    /**
     * SecondaryKey of the created AuthorizationRule
     */
    readonly secondaryKey?: string;
}
