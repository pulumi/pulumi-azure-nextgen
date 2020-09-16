import * as pulumi from "@pulumi/pulumi";
export declare function getWebAppPublicCertificate(args: GetWebAppPublicCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppPublicCertificateResult>;
export interface GetWebAppPublicCertificateArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Public certificate name.
     */
    readonly publicCertificateName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * Public certificate object
 */
export interface GetWebAppPublicCertificateResult {
    /**
     * Public Certificate byte array
     */
    readonly blob?: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Public Certificate Location
     */
    readonly publicCertificateLocation?: string;
    /**
     * Certificate Thumbprint
     */
    readonly thumbprint: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
