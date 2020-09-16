import * as pulumi from "@pulumi/pulumi";
export declare function getCertificate(args: GetCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateResult>;
export interface GetCertificateArgs {
    /**
     * The name of the automation account.
     */
    readonly automationAccountName: string;
    /**
     * The name of certificate.
     */
    readonly certificateName: string;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Definition of the certificate.
 */
export interface GetCertificateResult {
    /**
     * Gets the creation time.
     */
    readonly creationTime: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets the expiry time of the certificate.
     */
    readonly expiryTime: string;
    /**
     * Gets the is exportable flag of the certificate.
     */
    readonly isExportable: boolean;
    /**
     * Gets the last modified time.
     */
    readonly lastModifiedTime: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets the thumbprint of the certificate.
     */
    readonly thumbprint: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
