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
     * Azure location of the key vault resource.
     */
    readonly location?: string;
    /**
     * Name of the key vault resource.
     */
    readonly name: string;
    /**
     * Properties of the vault
     */
    readonly properties: outputs.keyvault.v20190901.VaultPropertiesResponse;
    /**
     * Tags assigned to the key vault resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type of the key vault resource.
     */
    readonly type: string;
}
