// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const CertificateProductType = {
    StandardDomainValidatedSsl: "StandardDomainValidatedSsl",
    StandardDomainValidatedWildCardSsl: "StandardDomainValidatedWildCardSsl",
} as const;

/**
 * Certificate product type.
 */
export type CertificateProductType = (typeof CertificateProductType)[keyof typeof CertificateProductType];