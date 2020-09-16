import * as pulumi from "@pulumi/pulumi";
export declare function listNamespaceKeys(args: ListNamespaceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListNamespaceKeysResult>;
export interface ListNamespaceKeysArgs {
    /**
     * The authorizationRule name.
     */
    readonly authorizationRuleName: string;
    /**
     * The Namespace Name
     */
    readonly namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Namespace/Relay Connection String
 */
export interface ListNamespaceKeysResult {
    /**
     * A string that describes the authorization rule
     */
    readonly keyName?: string;
    /**
     * PrimaryConnectionString of the created Namespace AuthorizationRule.
     */
    readonly primaryConnectionString?: string;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token
     */
    readonly primaryKey?: string;
    /**
     * SecondaryConnectionString of the created Namespace AuthorizationRule
     */
    readonly secondaryConnectionString?: string;
    /**
     * A base64-encoded 256-bit secondary key for signing and validating the SAS token
     */
    readonly secondaryKey?: string;
}
