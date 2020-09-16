import * as pulumi from "@pulumi/pulumi";
export declare function getAppServiceCertificateOrderCertificate(args: GetAppServiceCertificateOrderCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetAppServiceCertificateOrderCertificateResult>;
export interface GetAppServiceCertificateOrderCertificateArgs {
    /**
     * Name of the certificate order.
     */
    readonly certificateOrderName: string;
    /**
     * Name of the certificate.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * Key Vault container ARM resource for a certificate that is purchased through Azure.
 */
export interface GetAppServiceCertificateOrderCertificateResult {
    /**
     * Key Vault resource Id.
     */
    readonly keyVaultId?: string;
    /**
     * Key Vault secret name.
     */
    readonly keyVaultSecretName?: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Location.
     */
    readonly location: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Status of the Key Vault secret.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
}
