// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function listIdentityProviderSecrets(args: ListIdentityProviderSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListIdentityProviderSecretsResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:apimanagement/v20191201preview:listIdentityProviderSecrets", {
        "identityProviderName": args.identityProviderName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

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
