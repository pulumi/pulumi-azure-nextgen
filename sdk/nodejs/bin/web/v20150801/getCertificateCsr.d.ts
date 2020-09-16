import * as pulumi from "@pulumi/pulumi";
export declare function getCertificateCsr(args: GetCertificateCsrArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateCsrResult>;
export interface GetCertificateCsrArgs {
    /**
     * Name of the certificate.
     */
    readonly name: string;
    /**
     * Name of the resource group
     */
    readonly resourceGroupName: string;
}
/**
 * Certificate signing request object
 */
export interface GetCertificateCsrResult {
    /**
     * Actual CSR string created
     */
    readonly csrString?: string;
    /**
     * Distinguished name of certificate to be created
     */
    readonly distinguishedName?: string;
    /**
     * Hosting environment
     */
    readonly hostingEnvironment?: string;
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
     * PFX password
     */
    readonly password?: string;
    /**
     * PFX certificate of created certificate
     */
    readonly pfxBlob?: string;
    /**
     * Hash of the certificates public key
     */
    readonly publicKeyHash?: string;
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
