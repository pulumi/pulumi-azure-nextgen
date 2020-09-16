import * as pulumi from "@pulumi/pulumi";
export declare function listHybridConnectionKeys(args: ListHybridConnectionKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListHybridConnectionKeysResult>;
export interface ListHybridConnectionKeysArgs {
    /**
     * The authorization rule name.
     */
    readonly authorizationRuleName: string;
    /**
     * The hybrid connection name.
     */
    readonly hybridConnectionName: string;
    /**
     * The namespace name
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
export interface ListHybridConnectionKeysResult {
    /**
     * A string that describes the authorization rule.
     */
    readonly keyName?: string;
    /**
     * Primary connection string of the created namespace authorization rule.
     */
    readonly primaryConnectionString?: string;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    readonly primaryKey?: string;
    /**
     * Secondary connection string of the created namespace authorization rule.
     */
    readonly secondaryConnectionString?: string;
    /**
     * A base64-encoded 256-bit secondary key for signing and validating the SAS token.
     */
    readonly secondaryKey?: string;
}
