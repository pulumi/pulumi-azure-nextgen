import * as pulumi from "@pulumi/pulumi";
export declare function listAuthorizationServerSecrets(args: ListAuthorizationServerSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListAuthorizationServerSecretsResult>;
export interface ListAuthorizationServerSecretsArgs {
    /**
     * Identifier of the authorization server.
     */
    readonly authsid: string;
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
export interface ListAuthorizationServerSecretsResult {
    /**
     * Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.
     */
    readonly clientSecret?: string;
}
