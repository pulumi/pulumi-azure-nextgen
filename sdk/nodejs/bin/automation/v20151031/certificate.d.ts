import * as pulumi from "@pulumi/pulumi";
/**
 * Definition of the certificate.
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
     * Gets the creation time.
     */
    readonly creationTime: pulumi.Output<string>;
    /**
     * Gets or sets the description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Gets the expiry time of the certificate.
     */
    readonly expiryTime: pulumi.Output<string>;
    /**
     * Gets the is exportable flag of the certificate.
     */
    readonly isExportable: pulumi.Output<boolean>;
    /**
     * Gets the last modified time.
     */
    readonly lastModifiedTime: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets the thumbprint of the certificate.
     */
    readonly thumbprint: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
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
     * The name of the automation account.
     */
    readonly automationAccountName: pulumi.Input<string>;
    /**
     * Gets or sets the base64 encoded value of the certificate.
     */
    readonly base64Value: pulumi.Input<string>;
    /**
     * The parameters supplied to the create or update certificate operation.
     */
    readonly certificateName: pulumi.Input<string>;
    /**
     * Gets or sets the description of the certificate.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Gets or sets the is exportable flag of the certificate.
     */
    readonly isExportable?: pulumi.Input<boolean>;
    /**
     * Gets or sets the name of the certificate.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the thumbprint of the certificate.
     */
    readonly thumbprint?: pulumi.Input<string>;
}
