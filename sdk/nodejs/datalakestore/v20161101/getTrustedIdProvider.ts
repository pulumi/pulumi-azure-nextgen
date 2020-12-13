// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getTrustedIdProvider(args: GetTrustedIdProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetTrustedIdProviderResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:datalakestore/v20161101:getTrustedIdProvider", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "trustedIdProviderName": args.trustedIdProviderName,
    }, opts);
}

export interface GetTrustedIdProviderArgs {
    /**
     * The name of the Data Lake Store account.
     */
    readonly accountName: string;
    /**
     * The name of the Azure resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the trusted identity provider to retrieve.
     */
    readonly trustedIdProviderName: string;
}

/**
 * Data Lake Store trusted identity provider information.
 */
export interface GetTrustedIdProviderResult {
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The URL of this trusted identity provider.
     */
    readonly idProvider: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The resource type.
     */
    readonly type: string;
}
