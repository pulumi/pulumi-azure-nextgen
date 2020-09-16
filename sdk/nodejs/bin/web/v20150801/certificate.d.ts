import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * App certificate
 */
export declare class Certificate extends pulumi.CustomResource {
    /**
     * Get an existing Certificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Certificate;
    /**
     * Returns true if the given object is an instance of Certificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Certificate;
    /**
     * Raw bytes of .cer file
     */
    readonly cerBlob: pulumi.Output<string | undefined>;
    /**
     * Certificate expiration date
     */
    readonly expirationDate: pulumi.Output<string | undefined>;
    /**
     * Friendly name of the certificate
     */
    readonly friendlyName: pulumi.Output<string | undefined>;
    /**
     * Host names the certificate applies to
     */
    readonly hostNames: pulumi.Output<string[] | undefined>;
    /**
     * Specification for the hosting environment (App Service Environment) to use for the certificate
     */
    readonly hostingEnvironmentProfile: pulumi.Output<outputs.web.v20150801.HostingEnvironmentProfileResponse | undefined>;
    /**
     * Certificate issue Date
     */
    readonly issueDate: pulumi.Output<string | undefined>;
    /**
     * Certificate issuer
     */
    readonly issuer: pulumi.Output<string | undefined>;
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
     * Certificate password
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * Pfx blob
     */
    readonly pfxBlob: pulumi.Output<string | undefined>;
    /**
     * Public key hash
     */
    readonly publicKeyHash: pulumi.Output<string | undefined>;
    /**
     * Self link
     */
    readonly selfLink: pulumi.Output<string | undefined>;
    /**
     * App name
     */
    readonly siteName: pulumi.Output<string | undefined>;
    /**
     * Subject name of the certificate
     */
    readonly subjectName: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Certificate thumbprint
     */
    readonly thumbprint: pulumi.Output<string | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Is the certificate valid?
     */
    readonly valid: pulumi.Output<boolean | undefined>;
    /**
     * Create a Certificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * Raw bytes of .cer file
     */
    readonly cerBlob?: pulumi.Input<string>;
    /**
     * Certificate expiration date
     */
    readonly expirationDate?: pulumi.Input<string>;
    /**
     * Friendly name of the certificate
     */
    readonly friendlyName?: pulumi.Input<string>;
    /**
     * Host names the certificate applies to
     */
    readonly hostNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specification for the hosting environment (App Service Environment) to use for the certificate
     */
    readonly hostingEnvironmentProfile?: pulumi.Input<inputs.web.v20150801.HostingEnvironmentProfile>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Certificate issue Date
     */
    readonly issueDate?: pulumi.Input<string>;
    /**
     * Certificate issuer
     */
    readonly issuer?: pulumi.Input<string>;
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
     * Certificate password
     */
    readonly password?: pulumi.Input<string>;
    /**
     * Pfx blob
     */
    readonly pfxBlob?: pulumi.Input<string>;
    /**
     * Public key hash
     */
    readonly publicKeyHash?: pulumi.Input<string>;
    /**
     * Name of the resource group
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Self link
     */
    readonly selfLink?: pulumi.Input<string>;
    /**
     * App name
     */
    readonly siteName?: pulumi.Input<string>;
    /**
     * Subject name of the certificate
     */
    readonly subjectName?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Certificate thumbprint
     */
    readonly thumbprint?: pulumi.Input<string>;
    /**
     * Resource type
     */
    readonly type?: pulumi.Input<string>;
    /**
     * Is the certificate valid?
     */
    readonly valid?: pulumi.Input<boolean>;
}
