import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Certificate purchase order
 */
export declare class CertificateOrder extends pulumi.CustomResource {
    /**
     * Get an existing CertificateOrder resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CertificateOrder;
    /**
     * Returns true if the given object is an instance of CertificateOrder.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CertificateOrder;
    /**
     * Auto renew
     */
    readonly autoRenew: pulumi.Output<boolean | undefined>;
    /**
     * State of the Key Vault secret
     */
    readonly certificates: pulumi.Output<{
        [key: string]: outputs.certificateregistration.v20150801.CertificateOrderCertificateResponse;
    } | undefined>;
    /**
     * Last CSR that was created for this order
     */
    readonly csr: pulumi.Output<string | undefined>;
    /**
     * Certificate distinguished name
     */
    readonly distinguishedName: pulumi.Output<string | undefined>;
    /**
     * Domain Verification Token
     */
    readonly domainVerificationToken: pulumi.Output<string | undefined>;
    /**
     * Certificate expiration time
     */
    readonly expirationTime: pulumi.Output<string | undefined>;
    /**
     * Intermediate certificate
     */
    readonly intermediate: pulumi.Output<outputs.certificateregistration.v20150801.CertificateDetailsResponse | undefined>;
    /**
     * Certificate Key Size
     */
    readonly keySize: pulumi.Output<number | undefined>;
    /**
     * Kind of resource
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Certificate last issuance time
     */
    readonly lastCertificateIssuanceTime: pulumi.Output<string | undefined>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Certificate product type
     */
    readonly productType: pulumi.Output<string | undefined>;
    /**
     * Status of certificate order
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Root certificate
     */
    readonly root: pulumi.Output<outputs.certificateregistration.v20150801.CertificateDetailsResponse | undefined>;
    /**
     * Current serial number of the certificate
     */
    readonly serialNumber: pulumi.Output<string | undefined>;
    /**
     * Signed certificate
     */
    readonly signedCertificate: pulumi.Output<outputs.certificateregistration.v20150801.CertificateDetailsResponse | undefined>;
    /**
     * Current order status
     */
    readonly status: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Duration in years (must be between 1 and 3)
     */
    readonly validityInYears: pulumi.Output<number | undefined>;
    /**
     * Create a CertificateOrder resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateOrderArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a CertificateOrder resource.
 */
export interface CertificateOrderArgs {
    /**
     * Auto renew
     */
    readonly autoRenew?: pulumi.Input<boolean>;
    /**
     * State of the Key Vault secret
     */
    readonly certificates?: pulumi.Input<{
        [key: string]: pulumi.Input<inputs.certificateregistration.v20150801.CertificateOrderCertificate>;
    }>;
    /**
     * Last CSR that was created for this order
     */
    readonly csr?: pulumi.Input<string>;
    /**
     * Certificate distinguished name
     */
    readonly distinguishedName?: pulumi.Input<string>;
    /**
     * Domain Verification Token
     */
    readonly domainVerificationToken?: pulumi.Input<string>;
    /**
     * Certificate expiration time
     */
    readonly expirationTime?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Intermediate certificate
     */
    readonly intermediate?: pulumi.Input<inputs.certificateregistration.v20150801.CertificateDetails>;
    /**
     * Certificate Key Size
     */
    readonly keySize?: pulumi.Input<number>;
    /**
     * Kind of resource
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Certificate last issuance time
     */
    readonly lastCertificateIssuanceTime?: pulumi.Input<string>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Input<string>;
    /**
     * Certificate product type
     */
    readonly productType?: pulumi.Input<string>;
    /**
     * Status of certificate order
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * Azure resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Root certificate
     */
    readonly root?: pulumi.Input<inputs.certificateregistration.v20150801.CertificateDetails>;
    /**
     * Current serial number of the certificate
     */
    readonly serialNumber?: pulumi.Input<string>;
    /**
     * Signed certificate
     */
    readonly signedCertificate?: pulumi.Input<inputs.certificateregistration.v20150801.CertificateDetails>;
    /**
     * Current order status
     */
    readonly status?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Resource type
     */
    readonly type?: pulumi.Input<string>;
    /**
     * Duration in years (must be between 1 and 3)
     */
    readonly validityInYears?: pulumi.Input<number>;
}
