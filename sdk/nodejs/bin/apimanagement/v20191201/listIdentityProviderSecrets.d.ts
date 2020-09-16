import * as pulumi from "@pulumi/pulumi";
export declare function listIdentityProviderSecrets(args: ListIdentityProviderSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListIdentityProviderSecretsResult>;
export interface ListIdentityProviderSecretsArgs {
    /**
     * Identity Provider Type identifier.
     */
    readonly identityProviderName: string;
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
export interface ListIdentityProviderSecretsResult {
    /**
     * Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.
     */
    readonly clientSecret?: string;
}
