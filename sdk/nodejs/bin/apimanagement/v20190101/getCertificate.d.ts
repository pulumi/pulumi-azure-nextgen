import * as pulumi from "@pulumi/pulumi";
export declare function getCertificate(args: GetCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateResult>;
export interface GetCertificateArgs {
    /**
     * Identifier of the certificate entity. Must be unique in the current API Management service instance.
     */
    readonly certificateId: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
}
/**
 * Certificate details.
 */
export interface GetCertificateResult {
    /**
     * Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly expirationDate: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Subject attribute of the certificate.
     */
    readonly subject: string;
    /**
     * Thumbprint of the certificate.
     */
    readonly thumbprint: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
