import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getVault(args: GetVaultArgs, opts?: pulumi.InvokeOptions): Promise<GetVaultResult>;
export interface GetVaultArgs {
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    readonly vaultName: string;
}
/**
 * Resource information, as returned by the resource provider.
 */
export interface GetVaultResult {
    /**
     * Optional ETag.
     */
    readonly eTag?: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: outputs.recoveryservices.v20160601.IdentityDataResponse;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name associated with the resource.
     */
    readonly name: string;
    /**
     * Properties of the vault.
     */
    readonly properties: outputs.recoveryservices.v20160601.VaultPropertiesResponse;
    /**
     * Identifies the unique system identifier for each Azure resource.
     */
    readonly sku?: outputs.recoveryservices.v20160601.SkuResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    readonly type: string;
}
