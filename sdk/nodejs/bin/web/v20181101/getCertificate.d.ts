import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getCertificate(args: GetCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateResult>;
export interface GetCertificateArgs {
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
 * SSL certificate for an app.
 */
export interface GetCertificateResult {
    /**
     * Raw bytes of .cer file
     */
    readonly cerBlob: string;
    /**
     * Certificate expiration date.
     */
    readonly expirationDate: string;
    /**
     * Friendly name of the certificate.
     */
    readonly friendlyName: string;
    /**
     * Host names the certificate applies to.
     */
    readonly hostNames?: string[];
    /**
     * Specification for the App Service Environment to use for the certificate.
     */
    readonly hostingEnvironmentProfile: outputs.web.v20181101.HostingEnvironmentProfileResponse;
    /**
     * Certificate issue Date.
     */
    readonly issueDate: string;
    /**
     * Certificate issuer.
     */
    readonly issuer: string;
    /**
     * Key Vault Csm resource Id.
     */
    readonly keyVaultId?: string;
    /**
     * Key Vault secret name.
     */
    readonly keyVaultSecretName?: string;
    /**
     * Status of the Key Vault secret.
     */
    readonly keyVaultSecretStatus: string;
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
     * Certificate password.
     */
    readonly password: string;
    /**
     * Pfx blob.
     */
    readonly pfxBlob?: string;
    /**
     * Public key hash.
     */
    readonly publicKeyHash: string;
    /**
     * Self link.
     */
    readonly selfLink: string;
    /**
     * Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}".
     */
    readonly serverFarmId?: string;
    /**
     * App name.
     */
    readonly siteName: string;
    /**
     * Subject name of the certificate.
     */
    readonly subjectName: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Certificate thumbprint.
     */
    readonly thumbprint: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Is the certificate valid?.
     */
    readonly valid: boolean;
}
