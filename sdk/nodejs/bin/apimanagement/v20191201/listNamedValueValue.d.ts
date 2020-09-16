import * as pulumi from "@pulumi/pulumi";
export declare function listNamedValueValue(args: ListNamedValueValueArgs, opts?: pulumi.InvokeOptions): Promise<ListNamedValueValueResult>;
export interface ListNamedValueValueArgs {
    /**
     * Identifier of the NamedValue.
     */
    readonly namedValueId: string;
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
export interface ListNamedValueValueResult {
    /**
     * This is secret value of the NamedValue entity.
     */
    readonly value?: string;
}
