import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * SSL certificate purchase order.
 */
export declare class AppServiceCertificateOrder extends pulumi.CustomResource {
    /**
     * Get an existing AppServiceCertificateOrder resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AppServiceCertificateOrder;
    /**
     * Returns true if the given object is an instance of AppServiceCertificateOrder.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AppServiceCertificateOrder;
    /**
     * Reasons why App Service Certificate is not renewable at the current moment.
     */
    readonly appServiceCertificateNotRenewableReasons: pulumi.Output<string[]>;
    /**
     * <code>true</code> if the certificate should be automatically renewed when it expires; otherwise, <code>false</code>.
     */
    readonly autoRenew: pulumi.Output<boolean | undefined>;
    /**
     * State of the Key Vault secret.
     */
    readonly certificates: pulumi.Output<{
        [key: string]: outputs.certificateregistration.v20150801.AppServiceCertificateResponse;
    } | undefined>;
    /**
     * Last CSR that was created for this order.
     */
    readonly csr: pulumi.Output<string | undefined>;
    /**
     * Certificate distinguished name.
     */
    readonly distinguishedName: pulumi.Output<string | undefined>;
    /**
     * Domain verification token.
     */
    readonly domainVerificationToken: pulumi.Output<string>;
    /**
     * Certificate expiration time.
     */
    readonly expirationTime: pulumi.Output<string>;
    /**
     * Intermediate certificate.
     */
    readonly intermediate: pulumi.Output<outputs.certificateregistration.v20150801.CertificateDetailsResponse>;
    /**
     * <code>true</code> if private key is external; otherwise, <code>false</code>.
     */
    readonly isPrivateKeyExternal: pulumi.Output<boolean>;
    /**
     * Certificate key size.
     */
    readonly keySize: pulumi.Output<number | undefined>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Certificate last issuance time.
     */
    readonly lastCertificateIssuanceTime: pulumi.Output<string>;
    /**
     * Resource Location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Time stamp when the certificate would be auto renewed next
     */
    readonly nextAutoRenewalTimeStamp: pulumi.Output<string>;
    /**
     * Certificate product type.
     */
    readonly productType: pulumi.Output<string>;
    /**
     * Status of certificate order.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Root certificate.
     */
    readonly root: pulumi.Output<outputs.certificateregistration.v20150801.CertificateDetailsResponse>;
    /**
     * Current serial number of the certificate.
     */
    readonly serialNumber: pulumi.Output<string>;
    /**
     * Signed certificate.
     */
    readonly signedCertificate: pulumi.Output<outputs.certificateregistration.v20150801.CertificateDetailsResponse>;
    /**
     * Current order status.
     */
    readonly status: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Duration in years (must be between 1 and 3).
     */
    readonly validityInYears: pulumi.Output<number | undefined>;
    /**
     * Create a AppServiceCertificateOrder resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppServiceCertificateOrderArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a AppServiceCertificateOrder resource.
 */
export interface AppServiceCertificateOrderArgs {
    /**
     * <code>true</code> if the certificate should be automatically renewed when it expires; otherwise, <code>false</code>.
     */
    readonly autoRenew?: pulumi.Input<boolean>;
    /**
     * Name of the certificate order.
     */
    readonly certificateOrderName: pulumi.Input<string>;
    /**
     * State of the Key Vault secret.
     */
    readonly certificates?: pulumi.Input<{
        [key: string]: pulumi.Input<inputs.certificateregistration.v20150801.AppServiceCertificate>;
    }>;
    /**
     * Last CSR that was created for this order.
     */
    readonly csr?: pulumi.Input<string>;
    /**
     * Certificate distinguished name.
     */
    readonly distinguishedName?: pulumi.Input<string>;
    /**
     * Certificate key size.
     */
    readonly keySize?: pulumi.Input<number>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource Location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Certificate product type.
     */
    readonly productType: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Duration in years (must be between 1 and 3).
     */
    readonly validityInYears?: pulumi.Input<number>;
}
