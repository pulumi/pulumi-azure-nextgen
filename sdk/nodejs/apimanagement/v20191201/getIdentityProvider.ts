// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getIdentityProvider(args: GetIdentityProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityProviderResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:apimanagement/v20191201:getIdentityProvider", {
        "identityProviderName": args.identityProviderName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetIdentityProviderArgs {
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
 * Identity Provider details.
 */
export interface GetIdentityProviderResult {
    /**
     * List of Allowed Tenants when configuring Azure Active Directory login.
     */
    readonly allowedTenants?: string[];
    /**
     * OpenID Connect discovery endpoint hostname for AAD or AAD B2C.
     */
    readonly authority?: string;
    /**
     * Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft.
     */
    readonly clientId: string;
    /**
     * Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
     */
    readonly clientSecret?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Password Reset Policy Name. Only applies to AAD B2C Identity Provider.
     */
    readonly passwordResetPolicyName?: string;
    /**
     * Profile Editing Policy Name. Only applies to AAD B2C Identity Provider.
     */
    readonly profileEditingPolicyName?: string;
    /**
     * Signin Policy Name. Only applies to AAD B2C Identity Provider.
     */
    readonly signinPolicyName?: string;
    /**
     * The TenantId to use instead of Common when logging into Active Directory
     */
    readonly signinTenant?: string;
    /**
     * Signup Policy Name. Only applies to AAD B2C Identity Provider.
     */
    readonly signupPolicyName?: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
