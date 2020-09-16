import * as pulumi from "@pulumi/pulumi";
export declare function getCertificateOrderCertificate(args: GetCertificateOrderCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateOrderCertificateResult>;
export interface GetCertificateOrderCertificateArgs {
    /**
     * Certificate name
     */
    readonly certificateOrderName: string;
    /**
     * Certificate name
     */
    readonly name: string;
    /**
     * Azure resource group name
     */
    readonly resourceGroupName: string;
}
/**
 * Class representing the Key Vault container for certificate purchased through Azure
 */
export interface GetCertificateOrderCertificateResult {
    /**
     * Key Vault Csm resource Id
     */
    readonly keyVaultId?: string;
    /**
     * Key Vault secret name
     */
    readonly keyVaultSecretName?: string;
    /**
     * Kind of resource
     */
    readonly kind?: string;
    /**
     * Resource Location
     */
    readonly location: string;
    /**
     * Resource Name
     */
    readonly name?: string;
    /**
     * Status of the Key Vault secret
     */
    readonly provisioningState?: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type?: string;
}
