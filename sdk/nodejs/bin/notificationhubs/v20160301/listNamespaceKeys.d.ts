import * as pulumi from "@pulumi/pulumi";
export declare function listNamespaceKeys(args: ListNamespaceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListNamespaceKeysResult>;
export interface ListNamespaceKeysArgs {
    /**
     * The connection string of the namespace for the specified authorizationRule.
     */
    readonly authorizationRuleName: string;
    /**
     * The namespace name.
     */
    readonly namespaceName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Namespace/NotificationHub Connection String
 */
export interface ListNamespaceKeysResult {
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
