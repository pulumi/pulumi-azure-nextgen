import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getCertificate(args: GetCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateResult>;
export interface GetCertificateArgs {
    /**
     * The name of the certificate resource.
     */
    readonly certificateName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    readonly serviceName: string;
}
/**
 * Certificate resource payload.
 */
export interface GetCertificateResult {
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Properties of the certificate resource payload.
     */
    readonly properties: outputs.appplatform.v20200701.CertificatePropertiesResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
