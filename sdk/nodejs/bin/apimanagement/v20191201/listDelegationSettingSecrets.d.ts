import * as pulumi from "@pulumi/pulumi";
export declare function listDelegationSettingSecrets(args: ListDelegationSettingSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListDelegationSettingSecretsResult>;
export interface ListDelegationSettingSecretsArgs {
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
export interface ListDelegationSettingSecretsResult {
    /**
     * This is secret value of the validation key in portal settings.
     */
    readonly validationKey?: string;
}
