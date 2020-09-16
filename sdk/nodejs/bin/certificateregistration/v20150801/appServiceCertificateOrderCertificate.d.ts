import * as pulumi from "@pulumi/pulumi";
/**
 * Key Vault container ARM resource for a certificate that is purchased through Azure.
 */
export declare class AppServiceCertificateOrderCertificate extends pulumi.CustomResource {
    /**
     * Get an existing AppServiceCertificateOrderCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AppServiceCertificateOrderCertificate;
    /**
     * Returns true if the given object is an instance of AppServiceCertificateOrderCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AppServiceCertificateOrderCertificate;
    /**
     * Key Vault resource Id.
     */
    readonly keyVaultId: pulumi.Output<string | undefined>;
    /**
     * Key Vault secret name.
     */
    readonly keyVaultSecretName: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Status of the Key Vault secret.
     */
    readonly provisioningState: pulumi.Output<string>;
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
     * Create a AppServiceCertificateOrderCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppServiceCertificateOrderCertificateArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a AppServiceCertificateOrderCertificate resource.
 */
export interface AppServiceCertificateOrderCertificateArgs {
    /**
     * Name of the certificate order.
     */
    readonly certificateOrderName: pulumi.Input<string>;
    /**
     * Key Vault resource Id.
     */
    readonly keyVaultId?: pulumi.Input<string>;
    /**
     * Key Vault secret name.
     */
    readonly keyVaultSecretName?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource Location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Name of the certificate.
     */
    readonly name: pulumi.Input<string>;
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
}
