// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getServerAzureADOnlyAuthentication(args: GetServerAzureADOnlyAuthenticationArgs, opts?: pulumi.InvokeOptions): Promise<GetServerAzureADOnlyAuthenticationResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:sql/v20200801preview:getServerAzureADOnlyAuthentication", {
        "authenticationName": args.authenticationName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetServerAzureADOnlyAuthenticationArgs {
    /**
     * The name of server azure active directory only authentication.
     */
    readonly authenticationName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the server.
     */
    readonly serverName: string;
}

/**
 * Azure Active Directory only authentication.
 */
export interface GetServerAzureADOnlyAuthenticationResult {
    /**
     * Azure Active Directory only Authentication enabled.
     */
    readonly azureADOnlyAuthentication: boolean;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
