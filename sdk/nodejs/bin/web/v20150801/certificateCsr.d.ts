import * as pulumi from "@pulumi/pulumi";
/**
 * Certificate signing request object
 */
export declare class CertificateCsr extends pulumi.CustomResource {
    /**
     * Get an existing CertificateCsr resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CertificateCsr;
    /**
     * Returns true if the given object is an instance of CertificateCsr.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CertificateCsr;
    /**
     * Actual CSR string created
     */
    readonly csrString: pulumi.Output<string | undefined>;
    /**
     * Distinguished name of certificate to be created
     */
    readonly distinguishedName: pulumi.Output<string | undefined>;
    /**
     * Hosting environment
     */
    readonly hostingEnvironment: pulumi.Output<string | undefined>;
    /**
     * Kind of resource
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * PFX password
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * PFX certificate of created certificate
     */
    readonly pfxBlob: pulumi.Output<string | undefined>;
    /**
     * Hash of the certificates public key
     */
    readonly publicKeyHash: pulumi.Output<string | undefined>;
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
     * Create a CertificateCsr resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateCsrArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a CertificateCsr resource.
 */
export interface CertificateCsrArgs {
    /**
     * Actual CSR string created
     */
    readonly csrString?: pulumi.Input<string>;
    /**
     * Distinguished name of certificate to be created
     */
    readonly distinguishedName?: pulumi.Input<string>;
    /**
     * Hosting environment
     */
    readonly hostingEnvironment?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Kind of resource
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Resource Location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Resource Name
     */
    readonly name: pulumi.Input<string>;
    /**
     * PFX password
     */
    readonly password?: pulumi.Input<string>;
    /**
     * PFX certificate of created certificate
     */
    readonly pfxBlob?: pulumi.Input<string>;
    /**
     * Hash of the certificates public key
     */
    readonly publicKeyHash?: pulumi.Input<string>;
    /**
     * Name of the resource group
     */
    readonly resourceGroupName: pulumi.Input<string>;
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
}
