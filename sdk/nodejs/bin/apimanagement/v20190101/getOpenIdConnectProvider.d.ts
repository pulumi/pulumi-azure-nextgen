import * as pulumi from "@pulumi/pulumi";
export declare function getOpenIdConnectProvider(args: GetOpenIdConnectProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetOpenIdConnectProviderResult>;
export interface GetOpenIdConnectProviderArgs {
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
 * OpenId Connect Provider details.
 */
export interface GetOpenIdConnectProviderResult {
    /**
     * Client ID of developer console which is the client application.
     */
    readonly clientId: string;
    /**
     * Client Secret of developer console which is the client application.
     */
    readonly clientSecret?: string;
    /**
     * User-friendly description of OpenID Connect Provider.
     */
    readonly description?: string;
    /**
     * User-friendly OpenID Connect Provider name.
     */
    readonly displayName: string;
    /**
     * Metadata endpoint URI.
     */
    readonly metadataEndpoint: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
