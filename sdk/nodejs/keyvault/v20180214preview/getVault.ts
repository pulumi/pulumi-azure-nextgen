// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getVault(args: GetVaultArgs, opts?: pulumi.InvokeOptions): Promise<GetVaultResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:keyvault/v20180214preview:getVault", {
        "resourceGroupName": args.resourceGroupName,
        "vaultName": args.vaultName,
    }, opts);
}

export interface GetVaultArgs {
    /**
     * The name of the Resource Group to which the vault belongs.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the vault.
     */
    readonly vaultName: string;
}

/**
 * Resource information with extended details.
 */
export interface GetVaultResult {
    /**
     * The Azure Resource Manager resource ID for the key vault.
     */
    readonly id: string;
    /**
     * The supported Azure location where the key vault should be created.
     */
    readonly location: string;
    /**
     * The name of the key vault.
     */
    readonly name: string;
    /**
     * Properties of the vault
     */
    readonly properties: outputs.keyvault.v20180214preview.VaultPropertiesResponse;
    /**
     * The tags that will be assigned to the key vault. 
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type of the key vault.
     */
    readonly type: string;
}
