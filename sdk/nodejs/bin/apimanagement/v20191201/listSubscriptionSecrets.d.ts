import * as pulumi from "@pulumi/pulumi";
export declare function listSubscriptionSecrets(args: ListSubscriptionSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListSubscriptionSecretsResult>;
export interface ListSubscriptionSecretsArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
    /**
     * Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
     */
    readonly sid: string;
}
/**
 * Subscription keys.
 */
export interface ListSubscriptionSecretsResult {
    /**
     * Subscription primary key.
     */
    readonly primaryKey?: string;
    /**
     * Subscription secondary key.
     */
    readonly secondaryKey?: string;
}
