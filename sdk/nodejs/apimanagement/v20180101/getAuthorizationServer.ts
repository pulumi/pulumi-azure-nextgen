// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getAuthorizationServer(args: GetAuthorizationServerArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthorizationServerResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:apimanagement/v20180101:getAuthorizationServer", {
        "authsid": args.authsid,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetAuthorizationServerArgs {
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
 * External OAuth authorization server settings.
 */
export interface GetAuthorizationServerResult {
    /**
     * OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
     */
    readonly authorizationEndpoint: string;
    /**
     * HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
     */
    readonly authorizationMethods?: string[];
    /**
     * Specifies the mechanism by which access token is passed to the API. 
     */
    readonly bearerTokenSendingMethods?: string[];
    /**
     * Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
     */
    readonly clientAuthenticationMethod?: string[];
    /**
     * Client or app id registered with this authorization server.
     */
    readonly clientId: string;
    /**
     * Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
     */
    readonly clientRegistrationEndpoint: string;
    /**
     * Client or app secret registered with this authorization server.
     */
    readonly clientSecret?: string;
    /**
     * Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
     */
    readonly defaultScope?: string;
    /**
     * Description of the authorization server. Can contain HTML formatting tags.
     */
    readonly description?: string;
    /**
     * User-friendly authorization server name.
     */
    readonly displayName: string;
    /**
     * Form of an authorization grant, which the client uses to request the access token.
     */
    readonly grantTypes: string[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
     */
    readonly resourceOwnerPassword?: string;
    /**
     * Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
     */
    readonly resourceOwnerUsername?: string;
    /**
     * If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
     */
    readonly supportState?: boolean;
    /**
     * Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
     */
    readonly tokenBodyParameters?: outputs.apimanagement.v20180101.TokenBodyParameterContractResponse[];
    /**
     * OAuth token endpoint. Contains absolute URI to entity being referenced.
     */
    readonly tokenEndpoint?: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
