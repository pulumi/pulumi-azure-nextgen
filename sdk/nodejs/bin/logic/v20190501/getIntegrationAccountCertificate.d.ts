import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getIntegrationAccountCertificate(args: GetIntegrationAccountCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountCertificateResult>;
export interface GetIntegrationAccountCertificateArgs {
    /**
     * The integration account certificate name.
     */
    readonly certificateName: string;
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * The integration account certificate.
 */
export interface GetIntegrationAccountCertificateResult {
    /**
     * The changed time.
     */
    readonly changedTime: string;
    /**
     * The created time.
     */
    readonly createdTime: string;
    /**
     * The key details in the key vault.
     */
    readonly key?: outputs.logic.v20190501.KeyVaultKeyReferenceResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The metadata.
     */
    readonly metadata?: {
        [key: string]: any;
    };
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The public certificate.
     */
    readonly publicCertificate?: string;
    /**
     * The resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
