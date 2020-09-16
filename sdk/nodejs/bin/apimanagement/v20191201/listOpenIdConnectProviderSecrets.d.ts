import * as pulumi from "@pulumi/pulumi";
export declare function listOpenIdConnectProviderSecrets(args: ListOpenIdConnectProviderSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListOpenIdConnectProviderSecretsResult>;
export interface ListOpenIdConnectProviderSecretsArgs {
    /**
     * Identifier of the OpenID Connect Provider.
     */
    readonly opid: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
}
/**
 * Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.
 */
export interface ListOpenIdConnectProviderSecretsResult {
    /**
     * Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.
     */
    readonly clientSecret?: string;
}
