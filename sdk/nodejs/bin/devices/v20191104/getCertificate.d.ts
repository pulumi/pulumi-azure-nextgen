import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getCertificate(args: GetCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetCertificateResult>;
export interface GetCertificateArgs {
    /**
     * The name of the certificate
     */
    readonly certificateName: string;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the IoT hub.
     */
    readonly resourceName: string;
}
/**
 * The X509 Certificate.
 */
export interface GetCertificateResult {
    /**
     * The entity tag.
     */
    readonly etag: string;
    /**
     * The name of the certificate.
     */
    readonly name: string;
    /**
     * The description of an X509 CA Certificate.
     */
    readonly properties: outputs.devices.v20191104.CertificatePropertiesResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
