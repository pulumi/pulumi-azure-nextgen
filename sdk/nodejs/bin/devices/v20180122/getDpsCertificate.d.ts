import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDpsCertificate(args: GetDpsCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetDpsCertificateResult>;
export interface GetDpsCertificateArgs {
    /**
     * Name of the certificate to retrieve.
     */
    readonly certificateName: string;
    /**
     * Name of the provisioning service the certificate is associated with.
     */
    readonly provisioningServiceName: string;
    /**
     * Resource group identifier.
     */
    readonly resourceGroupName: string;
}
/**
 * The X509 Certificate.
 */
export interface GetDpsCertificateResult {
    /**
     * The entity tag.
     */
    readonly etag: string;
    /**
     * The name of the certificate.
     */
    readonly name: string;
    /**
     * properties of a certificate
     */
    readonly properties: outputs.devices.v20180122.CertificatePropertiesResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
