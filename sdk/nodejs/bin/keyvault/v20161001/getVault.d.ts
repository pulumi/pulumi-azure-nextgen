import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getVault(args: GetVaultArgs, opts?: pulumi.InvokeOptions): Promise<GetVaultResult>;
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
    readonly properties: outputs.keyvault.v20161001.VaultPropertiesResponse;
    /**
     * The tags that will be assigned to the key vault.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The resource type of the key vault.
     */
    readonly type: string;
}
