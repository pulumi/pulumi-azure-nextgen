// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getSecret(args: GetSecretArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:keyvault/v20200401preview:getSecret", {
        "resourceGroupName": args.resourceGroupName,
        "secretName": args.secretName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetSecretArgs {
    /**
     * The name of the Resource Group to which the vault belongs.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the secret.
     */
    readonly secretName: string;
    /**
     * The name of the vault.
     */
    readonly vaultName: string;
}

/**
 * Resource information with extended details.
 */
export interface GetSecretResult {
    /**
     * Fully qualified identifier of the key vault resource.
     */
    readonly id: string;
    /**
     * Azure location of the key vault resource.
     */
    readonly location: string;
    /**
     * Name of the key vault resource.
     */
    readonly name: string;
    /**
     * Properties of the secret
     */
    readonly properties: outputs.keyvault.v20200401preview.SecretPropertiesResponse;
    /**
     * Tags assigned to the key vault resource.
     */
    readonly tags: {[key: string]: string};
    /**
     * Resource type of the key vault resource.
     */
    readonly type: string;
}