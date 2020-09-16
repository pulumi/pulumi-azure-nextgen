import * as pulumi from "@pulumi/pulumi";
/**
 * Public certificate object
 */
export declare class WebAppPublicCertificate extends pulumi.CustomResource {
    /**
     * Get an existing WebAppPublicCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppPublicCertificate;
    /**
     * Returns true if the given object is an instance of WebAppPublicCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebAppPublicCertificate;
    /**
     * Public Certificate byte array
     */
    readonly blob: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Public Certificate Location
     */
    readonly publicCertificateLocation: pulumi.Output<string | undefined>;
    /**
     * Certificate Thumbprint
     */
    readonly thumbprint: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a WebAppPublicCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppPublicCertificateArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WebAppPublicCertificate resource.
 */
export interface WebAppPublicCertificateArgs {
    /**
     * Public Certificate byte array
     */
    readonly blob?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Public Certificate Location
     */
    readonly publicCertificateLocation?: pulumi.Input<string>;
    /**
     * Public certificate name.
     */
    readonly publicCertificateName: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
